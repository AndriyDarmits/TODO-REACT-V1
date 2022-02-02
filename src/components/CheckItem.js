import React, { Component } from 'react'

export default class CheckItem extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.deleteItems = this.deleteItems.bind(this)
        this.editItem = this.editItem.bind(this)
       /*  this.state = {
            isChecked: false,
        } */

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

    // editing
    editItem() {
        let newLabel = prompt("Type new label!");
        if (newLabel === undefined || newLabel === '' || newLabel === null) {
            return;
        }
        if (newLabel.length >= 25) {
            alert("Item lenght should be less than 25");
            return;
        }
        this.props.onEditItem(newLabel, this.props.item)
    }
    render() {

        return (
            <div className="todo-item">
                <div >
                    <input className="custom-checkbox" type="checkbox" name="" id="" checked={this.props.item.checked} onChange={this.onChange} />
                    <label style={{ textDecoration: this.props.item.checked? "line-through":"none"}}>{this.props.item.label}</label>
                </div>

                <div className="actions-btn">
                    <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={this.deleteItems}>&#128473;</span>
                    <button onClick={this.editItem}>Edit</button>
                </div>

            </div>
        )
    }
}
