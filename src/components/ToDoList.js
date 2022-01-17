import React, { Component } from 'react'
import CheckList from './CheckList'

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.onItemChanged = this.onItemChanged.bind(this)
        this.addItemsChanged = this.addItemsChanged.bind(this)
        this.onDeleteItemChanged = this.onDeleteItemChanged.bind(this)
        this.onCompleteAllItemChanged = this.onCompleteAllItemChanged.bind(this)
        this.onClearAllItemsChanged = this.onClearAllItemsChanged.bind(this)
        this.onEditItem = this.onEditItem.bind(this)
    }

    onItemChanged(item) {
        this.props.onItemChanged(item)
    }

    addItemsChanged(label) {
        this.props.addItemsChanged(label)
    }
    onDeleteItemChanged(item) {
        this.props.onDeleteItemChanged(item)
    }

    onCompleteAllItemChanged(itemState) {
        this.props.onCompleteAllItemChanged(itemState)
        console.log('hello')
    }
    onClearAllItemsChanged(clearAllItems) {
        this.props.onClearAllItemsChanged(clearAllItems)
    }

    onEditItem(newLabel, item) {
        this.props.onEditItem(newLabel, item)
    }
    render() {

        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <CheckList items={this.props.data.items} onItemChanged={this.onItemChanged} addItemsChanged={this.addItemsChanged}
                    onDeleteItemChanged={this.onDeleteItemChanged} onCompleteAllItemChanged={this.onCompleteAllItemChanged}
                    onClearAllItemsChanged={this.onClearAllItemsChanged} onEditItem={this.onEditItem} />
            </div>
        )
    }
}
