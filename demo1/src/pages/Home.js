import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        //使用React.StrictMode的话 方法在开发环境中constructor会执行两次
        // console.log('111111', props)
        //使用state维护状态，在构造函数中初始化属性
        this.state = {
            date: new Date() || '',
            count: 0
        }
        console.log('22222', this)
    }

    componentDidMount () {
        console.log('看这里', this)
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000)
    }

    counter = () => {
        // 同步
        //或者使用传个参数，使用回调函数实现
        // setTimeout(() => {
        //使用settimeout使setstate变成同步
        //     this.setState({
        //         count: this.state.count + 2
        //     })
        //     console.log('state', this.state.count)
        // }, 0)


        this.setState({
            count: this.state.count + 1
        })
        console.log('count计数', this.state.count)
    }

    componentWillUnmount () {
        // 销毁期 清除定时器
        clearInterval(this.timerId)
    }

    render () {
        const str = 'home页面'
        const { date, count } = this.state
        return <div>
            <p>{str}</p>
            <p>{count}</p>
            <button onClick={this.counter}>点击增加次数</button>
            <p>{date.toLocaleString().replace(/[年月]/g, '/')}</p>
        </div>
    }
}