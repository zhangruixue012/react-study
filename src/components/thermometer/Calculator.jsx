import React from 'react';
import TemperatureInput from './TemperatureInput'

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return(
            <div>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
            </div>
        )
    }


}