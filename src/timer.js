'use strict'

import React, { Component } from 'react'

class Timer extends Component {

    constructor () {
        super()
        this.state = {
            time: 0
        }

        this.timer
    }

    componentDidMount () {
        this.timer = setInterval( () => this.setState({time: ++this.state.time}), 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }
    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps', this.props, nextProps)
    }
    shouldComponentUpdate (nextProps, nextState) {
        
    }

    render () {
        return <div>Timer: {this.state.time}</div>
    }

}

export default Timer