import React, { Component } from 'react'
import CheckItem from './CheckItem'
import InputItem from './InputItem'

export default class CheckList extends Component {

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
                <InputItem addItemsChanged={this.addItemsChanged} onCompleteAllItemChanged={this.onCompleteAllItemChanged}
                    onClearAllItemsChanged={this.onClearAllItemsChanged} />
                {this.props.items.length ?

                    this.props.items.map(item => <CheckItem item={item} onItemChanged={this.onItemChanged}
                        onDeleteItemChanged={this.onDeleteItemChanged} onEditItem={this.onEditItem} />) :
                    <div style={{ color: 'red' }}>There are no todos...</div>}
            </div>
        )
    }
}
