import React from 'react';

export default class HelloWorld extends React.Component{
    constructor(props) {
        super(props);
        this.user = {
            firstName: 'zhang',
            lastName: 'ruixue'
        };
        this.element = (
            <h1>
                Hello, {this.formatName(this.user)}!
            </h1>
        );
    }

    getGreeting(user) {
        if(user) {
            return <h1>hello, {this.formatName(user)}</h1>
        }
        return <h1>hello, Stranger</h1>
    }

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        return this.element
    }
}
