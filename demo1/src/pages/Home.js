import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        console.log('111111', props)
        this.state = {
            date: new Date() || ''
        }
    }

    componentDidMount () {
        console.log('看这里', this)
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount () {
        // 销毁期 清除定时器
        clearInterval(this.timerId)
    }

    render () {
        const str = 'home页面'
        const { date } = this.state
        return <div>
            <p>{str}</p>
            <p>{date.toLocaleString().replace(/[年月]/g, '/')}</p>
        </div>
    }
}