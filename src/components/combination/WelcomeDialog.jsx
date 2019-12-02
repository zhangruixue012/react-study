import React from 'react'
import Dialog from './Dialog'

export default class WelcomeDialog extends React.Component {
    render() {
        return (<Dialog title="Welcome"
                        message="Thank you for visiting our spacecraft!" />)
    }
}
