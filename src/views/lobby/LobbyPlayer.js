import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setState } from '../../store/actions'
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';

export default () => {
    const [player, room, socket, noSleep] = useSelector(state => [state.playerName, state.room, state.socket, state.noSleep])
    const dispatch = useDispatch()

    const leave = () => {
        noSleep.disable()
        socket.emit('leave-room')
        dispatch(setState('room', {view: 'Home'}))
    }

    const start = () => {
        socket.emit('start-game')
    }

    return (
        <div>
            {room.players[0].name === player &&
            <div>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={room.instructions}
                        onClick={() => {socket.emit('toggle-instructions', !room.instructions)}}
                        color="primary"
                    />
                    }
                    label="Instructions"
                />
                {room.players.length >= 0 && 
                    <Button onClick={() => {start()}}>
                        Lancer la partie
                    </Button>}
            </div>
            }
            <Button 
                variant="text"
                onClick={() => {leave()}}
            >
                Quitter
            </Button>
        </div>
    )
}