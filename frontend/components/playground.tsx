import React from 'react'
import {w3cwebsocket as W3CWebSocket} from 'websocket'

const PlayGround: React.FC = () => {
  const wsClient = new W3CWebSocket("ws://localhost:8080/ws/")

  wsClient.onopen = () => {
    wsClient.send("Пидр")
  }

	return <></>
}

export default PlayGround
