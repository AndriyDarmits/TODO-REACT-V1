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
        /* this.onEditItem = this.onEditItem.bind(this) */
    }

    onItemChanged(item) {
        this.props.onItemChanged(item)
        console.log('checkkist')
    }
    addItemsChanged(label) {
        this.props.addItemsChanged(label)
        console.log("куку")
    }

    onDeleteItemChanged(item) {
        this.props.onDeleteItemChanged(item)
    }

    onCompleteAllItemChanged(itemState) {
        console.log(itemState)
        this.props.onCompleteAllItemChanged(itemState)

    }

    onClearAllItemsChanged(clearAllItems) {
        this.props.onClearAllItemsChanged(clearAllItems)
    }

    /*  onEditItem(item) {
         console.log(item)
     } */
    render() {
        return (
            <div>
                <InputItem addItemsChanged={this.addItemsChanged} onCompleteAllItemChanged={this.onCompleteAllItemChanged}
                    onClearAllItemsChanged={this.onClearAllItemsChanged} /* onEditItem={this.onEditItem} */ />
                {this.props.items.map(item => <CheckItem item={item} onItemChanged={this.onItemChanged}
                    onDeleteItemChanged={this.onDeleteItemChanged} /* onEditItem={this.onEditItem} */ />)}
            </div>
        )
    }
}
