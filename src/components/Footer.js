import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (

            <div className="footer">
                Completed: {this.props.data.items.filter(item => item.checked).length} / {this.props.data.items.length}
            </div>
        )
    }
}
