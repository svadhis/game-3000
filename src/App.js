import React, { useEffect } from 'react'
import './App.scss'
import { useCurrentWidth } from 'react-socks'
import { useSelector, useDispatch } from 'react-redux'
import { useView } from './methods/hooks'
import * as Actions from './store/actions'
import Ribbon from './components/ribbon/Ribbon'
import Connecting from './components/layer/Connecting'
import Loading from './components/layer/Loading'
import Played from './components/layer/Played'
import { withSnackbar } from 'notistack'
import Sound from 'react-sound'

// MAIN APP COMPONENT
const App = props => {
  const [
    state,
    roomNumber,
    roomView,
    roomProps,
    socket,
    playerName,
    player,
    owner,
    played,
    connected,
    noSleep,
    exit

  ] = useSelector(state => [
    state, 
    state.room.number,
    state.room.view,
    state.room.props,
    state.socket,
    state.playerName,
    state.player,
    state.owner,
    state.played,
    state.connected,
    state.noSleep,
    state.exit
  ])

  const dispatch = useDispatch()

  const width = useCurrentWidth()
  // Set view to Owner or Player depending on 1: state, 2: viewport width. Value 1 = player, 0 = owner
  const viewClient = player === 1 ? 'player' : owner === 1 ? 'owner' : width <= 576 ? 'player' : 'owner'

  // Handle back button
  const popState = () => {
    if (player === 1) {
      if (roomView === 'Home') {
        props.enqueueSnackbar("encore une fois pour quitter l'application", {variant: 'info', autoHideDuration: 2000})
        setTimeout(() => {
            window.history.pushState({}, '')
        }, 2000)
      }
      else {
        if (exit === false) {
          dispatch(Actions.toggleState('exit'))
          props.enqueueSnackbar("encore une fois pour quitter la partie", {variant: 'info', autoHideDuration: 2000})
          setTimeout(() => {
              window.history.pushState({}, '')
              dispatch(Actions.toggleState('exit'))
          }, 2000)
          
        }
        else {
          noSleep.disable()
          socket.emit('leave-room')
          dispatch(Actions.reinitState())
        }
      }
    }
  }

  const playMusic = () => {
    if (viewClient === 'owner') {
      switch (roomView) {
        case 'Home':
        case 'Lobby':
        case 'Results':
          return (
            <Sound
              url="music/bensound-hey.mp3"
              playStatus={Sound.status.PLAYING}
              loop={true}
            />
          )
          break
  
        case 'CreatingStep':
        case 'StartDrawing':
        case 'GetProblem':
        case 'StartData':
        case 'PresentingStep':
        case 'StartPresentation':
        case 'EndPresentation':
        case 'VotingStep':
        case 'StartPresentation':
          return (
            <Sound
              url="music/bensound-psychedelic.mp3"
              playStatus={Sound.status.PLAYING}
              loop={true}
              autoLoad={true}
            />
          )
          break
  
        case 'MakeProblem':
        case 'MakeDrawing':
        case 'MakeData':
        case 'MakeVote':
          return (
            <Sound
              url="music/bensound-theelevatorbossanova.mp3"
              playStatus={Sound.status.PLAYING}
              loop={true}
              autoLoad={true}
            />
          )
          break
  
        case 'MakePresentation':
          return (
            <Sound
              url="music/bensound-countryboy.mp3"
              playStatus={Sound.status.PLAYING}
              loop={true}
              autoLoad={true}
            />
          )
          break
      
        default:
          break
      }
    }
  }

  useEffect(() => {
    window.history.pushState({}, '')

    socket.on('connect_error', (error) => {
      dispatch(Actions.setState('connected', 0))
    })

    socket.on('connect', () => {
      dispatch(Actions.setState('connected', 1))
    })

    // Listen to action and dispatch it
    socket.on('action', data => {
      const action = Actions[data.action]
      const payload = data.payload
      dispatch(action(payload))
    })

    // Listen to errors and show it
    socket.on('flash', data => {
      (data.target === viewClient || data.target === 'all') && props.enqueueSnackbar(data.message, {variant: data.type, autoHideDuration: 3000})
    })
  }, [])

  useEffect(() => {
    socket.on('connect', () => {
      if (player === 1) {
        socket.emit('heartbeat', {
          status: 'player',
          room: roomNumber,
          player: playerName
        })
      } 
      else if (owner === 1) {
        socket.emit('heartbeat', {
          status: 'player',
          room: roomNumber,
        })
      } 
    })
  }, [roomNumber])

  useEffect(() => {
      window.addEventListener('popstate', popState)
      return () => {
        window.removeEventListener('popstate', popState)
      }
  }, [roomView])

  useEffect(() => {
    if (connected === 0) {
      props.enqueueSnackbar('Pas de connexion au serveur...', { 
        variant: 'error',
        persist: true,
        preventDuplicate: true,
      })
    }
    else {
      props.closeSnackbar()
    }
  }, [connected])

  return (
    React.createElement("div", {className: 'App'}, 
      React.createElement("div", {className: 'container'}, 
        React.createElement(
          useView(roomView, viewClient),
          { ...roomProps} || null
        )
      ),
      console.log(state),
      roomNumber && owner === 1 && React.createElement(Ribbon),
      played === true && roomView && React.createElement(Played),
      connected === 0 && React.createElement(Connecting),
      playMusic()
    )
  )
}

export default withSnackbar(App)

// TODO

// Compresser les dessins

// Gerer les votes : pas deux fois sur le meme
// Faire la page de resultats