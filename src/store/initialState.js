import io from "socket.io-client"
import NoSleep from 'nosleep.js'

export default {
	socket: io('192.168.1.20:4001'),
	noSleep: new NoSleep(),
	timer: -1,
	problemDefault: 0,
	placeholder: '',
	played: false,
	gameData: {},
	dataPart: 'start',
	connected: 1,
	owner: 0,
	player: 0,
	playerName: '',
	room: { view: 'Home' }
}