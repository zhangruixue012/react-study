import React from 'react';
export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    formatDate(date) {
        return date.toLocaleDateString();
    }

    avatar(avatarUrl) {
        return (
            <img className="Avatar" src={avatarUrl}/>
        );
    }

    userInfo(author) {
        return (
            <div className="UserInfo">
                {this.avatar(author.avatarUrl)}
                <div className="UserInfo-name">
                    {author.name}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Comment">
                {this.userInfo(this.props.author)}

                <div className="Comment-text">
                    {this.props.text}
                </div>

                <div className="Comment-date">
                    {this.formatDate(this.props.date)}
                </div>
            </div>
        );
    }
}
