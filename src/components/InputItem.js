import React, { Component } from 'react'

export default class InputItem extends Component {

    constructor(props) {
        super(props);
        this.addItems = this.addItems.bind(this)
        this.trackChangeInputField = this.trackChangeInputField.bind(this);
        this.completeAllItems = this.completeAllItems.bind(this)
        this.removeAllItems = this.removeAllItems.bind(this)
        this.state = {
            label: '',
            completeAllItems: true,
            clearAllItems: true
        }

    }
    trackChangeInputField(e) {
        this.setState({
            label: e.target.value
        });
    }

    addItems(e) {
        if (this.state.label === '') {
            alert('Input field is empty')
            return;
        }

        this.props.addItemsChanged(this.state.label)

        this.setState({
            label: ""
        })
    }


    completeAllItems() {
        if (this.state.completeAllItems) {
            this.setState({
                ...this.state,
                completeAllItems: false
            })
        } else {
            this.setState({
                ...this.state,
                completeAllItems: true
            })
        }

        this.props.onCompleteAllItemChanged(this.state.completeAllItems)
    }

    removeAllItems() {

        this.props.onClearAllItemsChanged(this.state.clearAllItems)
    }

    render() {
        return (
            <div className="todo-naviagtion">
                <div className="input-field">
                    <input type="text" name="" maxLength='25' id="" placeholder="Enter new item..." value={this.state.label}
                        onChange={this.trackChangeInputField} />
                    <button onClick={this.addItems} >Add item</button>
                </div>

                <div className="btn-container">
                    <button onClick={this.completeAllItems}>Complete all</button>
                    <button onClick={this.removeAllItems}>Clear all</button>
                    <button onClick={this.submitEdit}>Submit edit</button> {/* //TODO */}
                </div>
            </div>
        )
    }
}
