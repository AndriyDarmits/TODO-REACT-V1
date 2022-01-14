import React, { Component } from 'react'

export default class CheckItem extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.deleteItems = this.deleteItems.bind(this)
        /*  this.editItem = this.editItem.bind(this) */
        this.state = {
            textDecoration: 'none'
        }

    }

    deleteItems(e) {
        this.props.onDeleteItemChanged(this.props.item)
    }


    onChange(e) {
        /* //TODO треба пофіксити, щось не так,чомусь перекреслені айтеми зміщуються при сортуванні
        console.log(this.props.item.checked)
        if (e.target.checked) {
            this.setState({ textDecoration: 'line-through' })
        } else {
            this.setState({ textDecoration: 'none' })
        } */

        this.props.onItemChanged(this.props.item)
    }

    /* editItem() {
        this.props.onEditItem(this.props.item.label)
    } */
    render() {

        return (
            <div className="todo-item">
                <div>
                    <input className="custom-checkbox" type="checkbox" name="" id="" checked={this.props.item.checked} onChange={this.onChange} />
                    <label style={{ textDecoration: this.state.textDecoration }}>{this.props.item.label}</label>
                </div>
                <div className="actions-btn">
                    <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={this.deleteItems}>&#128473;</span>
                    <button onClick={this.editItem}>Edit</button>{/*//TODO */}
                </div>

            </div>
        )
    }
}
