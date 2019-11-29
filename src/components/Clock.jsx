import React from 'react'
import { format } from 'date-fns'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>hello,world</h1>
                <h2>It is {format(new Date(), 'yyyy-MM-dd hh:mm:ss')}</h2>
            </div>
        )
    }
}
