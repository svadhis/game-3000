import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setState } from '../../store/actions'
import { TextField, Button } from '@material-ui/core'
import './Play.css'

export default () => {

    const [socket, view, playerName, players, problemDefault, step, played] = useSelector(state => [state.socket, state.room.view, state.playerName, state.room.players, state.problemDefault, state.room.step, state.played])
    const dispatch = useDispatch()

    let self = {}
    players.forEach(player => {
        if (player.name === playerName ) {
            self = player
        }
    })

    switch (view) {
        case 'MakeProblem':
            return <MakeProblem />
            break

        case 'MakeDrawing':
            return <MakeDrawing />
            break

        case 'MakeData':
            return <MakeData />
            break
    
        default:
            break
    }

    

 /*    const setGameData = () => {
        let data = [
            document.querySelector('input#problem-1').value,
            document.querySelector('input#problem-2').value
        ]
        dispatch(updateGameData(data))
    } */

    const sendData = bool => {
        let input = document.querySelector('input#problem')
        let sendButton = document.querySelector('#send')
        let autoButton = document.querySelector('#auto')

        let data = {
            step: 'problem',
            value: bool ? input.value : problem.default[Math.floor(Math.random() * Math.floor(problem.default.length))]
        }

        input.value = data.value
        // sendButton.innerHTML = '-'
        // autoButton.innerHTML = '-'

        dispatch(setState('played', true))
        socket.emit('send-data', data)
    }

    useEffect(() => {
        navigator.vibrate(Array(9).fill(50))
    }, [])

    useEffect(() => {
        let input = document.querySelector('input')
        let messageRendu = ''
        let message = problem.default[problemDefault]
        let i = 0
        const int = setInterval(() => {
            messageRendu += message[i]
            input.placeholder = messageRendu
            i++
            if (i == message.length) {
                clearInterval(int)
            }
        }, 60);
        const newDefault = problem.default[problemDefault + 1] ? problemDefault + 1 : 0
        setTimeout(() => {
            dispatch(setState('problemDefault', newDefault))
        }, 3000)
    }, [problemDefault])

    useEffect(() => {
        step === 'end' && sendData()
    }, [step])

    return (
        <div className="play">
            {renderProblem()}
            <Button 
                id="send"
                size="large"
                variant="outlined" 
                color="primary" 
                disabled={played}
                onClick={() => {sendData(1)}}
            >
                VALIDER
            </Button>
            <Button 
                id="auto"
                size="large"
                variant="outlined" 
                color="primary" 
                disabled={played}
                onClick={() => {sendData(0)}}
            >
                RANDOM
            </Button>
        </div>
    )
}