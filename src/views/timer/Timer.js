import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress';
import { setState } from '../../store/actions';

export default () => {
    const [socket, timer, view, step] = useSelector(state => [state.socket, state.timer, state.room.view, state.room.step])
    const dispatch = useDispatch()

    let speed = 1

    switch (view) {
        case 'MakeProblem':
            speed = 6
            break

        case 'MakeDrawing':
            speed = 5
            break
    }

    useEffect(() => {
        dispatch(setState('timer', 0))   
    }, [])
            
    useEffect(() => {
        if (timer >= 100) {
            socket.emit('end-step')   
        } 

        let timeout = setTimeout(() => {  
            dispatch(setState('timer', timer + (speed / 10)))
        }, 100)
        return () => {
            clearTimeout(timeout)
        }
    }, [timer, step])

    return (
        <div>
            <LinearProgress variant="determinate" value={timer} />
        </div>
    )
}