import React from 'react'
import HelloWorld from './HelloWorld'


export default class MailBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return(
            <div>
                {isLoggedIn ? (
                    <HelloWorld />
                ) : (
                    <HelloWorld />
                )}
            </div>
        );
    }
}
