import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setState, pushToObject } from '../../store/actions'
import { Box } from '@material-ui/core'
import './Play.css'
import { Input, Button } from '../../mapper/components';

export default () => {

    const [
        socket, 
        instructions,
        showIns,
        playerName, 
        players, 
        step, 
        dataPart, 
        gameData, 
        played
    ] = useSelector(state => [
        state.socket, 
        state.room.instructions,
        state.showIns,
        state.playerName, 
        state.room.players, 
        state.room.step, 
        state.dataPart, 
        state.gameData, 
        state.played
    ])
    
    const dispatch = useDispatch()

    let self = {}
    players.forEach(player => {
        if (player.name === playerName ) {
            self = player
        }
    })

    const renderData = () => {

        if (instructions === showIns === true) {
            return (
                <div className="player-screen">
                    <Box height="100vh" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
                        <h2>Ergo ego senator inimicus, si ita vultis, homini, amicus esse, sicut semper fui, rei publicae debeo</h2>
                        <h2>Quid? si ipsas inimicitias, depono rei publicae causa, quis me tandem iure reprehendet, praesertim cum ego omnium meorum consiliorum atque factorum exempla</h2>
                        <h2>semper ex summorum hominum</h2>
                    </Box>
                </div>
            )
        }
        else {
            let title = dataPart === 'start' ? 'Nom de votre solution' : 'Slogan'

            return (
                <div className="player-screen">
                    <Box height="100vh" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
                        <div>
                            <h3>{title}</h3>
                            <Input type="playing2" disabled={played} />
                        </div>
                        <Button
                            id="send"
                            type="default"
                            value="valider"
                            onClick={sendData}
                            disabled={played}
                        />
                    </Box>
                </div>
            )
        }
    }

    const sendData = bool => {   
        if (bool === 1) {
            dispatch(setState('dataPart', 'catch'))
            if (dataPart === 'start') {
                dispatch(setState('gameData', {name: document.querySelector('input').value, catch: ''}))
            }
            else if (dataPart === 'name') {
                dispatch(pushToObject('gameData', 'catch', document.querySelector('input').value))
            }
            
        }
        else if (dataPart === 'start') {
            dispatch(setState('dataPart', 'name'))
        }
        else if (dataPart === 'name') {
            dispatch(setState('dataPart', 'catch'))
        }
       
    }

    useEffect(() => {
        navigator.vibrate(Array(9).fill(50))
        dispatch(setState('played', false))

        instructions === showIns === true && setTimeout(() => {
            dispatch(setState('showIns', false))
        }, 3000)
        
        return () => dispatch(setState('showIns', true))
    }, [])

    useEffect(() => {
        if (instructions === false || showIns === false) {
            let input = document.querySelector('input')

            dataPart !== 'start' && dispatch(pushToObject('gameData', dataPart, input.value))
    
            input.value = ''
            input.focus()
        }
    }, [dataPart, showIns])

    useEffect(() => {
        if (dataPart === 'catch') {
            const data = {
                step: 'data',
                value: gameData
            }

            dispatch(setState('played', true))
            socket.emit('send-data', data)
        }
    }, [gameData])

    useEffect(() => {
        if (step === 'end') {
            sendData(1)
        }
    }, [step])

    return (
        <div className="play">
            {renderData()}
        </div>
    )
}