import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
const defaultData = {
  title: 'React TODO v1',
  items: [{
    label: 'Start',
    checked: false,
    index: 0,
  },
  {
    label: 'Components',
    checked: false,
    index: 1,
  },
  {
    label: 'LifeCycle',
    checked: false,
    index: 2,
  }]
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onItemChanged = this.onItemChanged.bind(this)
    this.addItemsChanged = this.addItemsChanged.bind(this)
    this.onDeleteItemChanged = this.onDeleteItemChanged.bind(this)
    this.onCompleteAllItemChanged = this.onCompleteAllItemChanged.bind(this)
    this.onClearAllItemsChanged = this.onClearAllItemsChanged.bind(this)
    this.state = {
      data: defaultData
    }
  }

  // add items

  addItemsChanged(text) {

    console.log(this.state.data)
    this.setState({
      data: {
        ...this.state.data,
        items: [...this.state.data.items, {
          label: text,
          checked: false,
          index: this.state.data.items.length
        }]
      }
    })
  }

  //delete items
  onDeleteItemChanged(deleteItem) {

    const deleteItems = this.state.data.items.filter(item => item.index !== deleteItem.index)
    this.setState({
      data: {
        ...this.state.data,
        items: deleteItems
      }
    })
  }
  //chebge checked state
  onItemChanged(changedItem) {
    const changeItems = this.state.data.items.map(item => {
      if (item.index === changedItem.index) {
        item.checked = !item.checked
      }
      return item;
    })

    // sorting 
    for (let i = 0; i < changeItems.length; i++) {
      if (changeItems[i].checked) {
        changeItems.push(changeItems[i]);
        console.log(changeItems.findIndex(item => item === changeItems[i]))
        changeItems.splice(changeItems.findIndex(item => item === changeItems[i]), 1);
        break;
      }
    }

    this.setState({
      data: {
        ...this.state.data,
        items: changeItems
      }
    })
  }
  // complete all items
  onCompleteAllItemChanged(itemState) {
    const changeItems = this.state.data.items.map(item => {
      if (itemState) {
        item.checked = true;
      } else { item.checked = false; }
      return item;
    });

    this.setState({
      data: {
        ...this.state.data,
        items: changeItems
      }
    })
  }
  // clear all items
  onClearAllItemsChanged(clearAllItems) {
    if (clearAllItems) {
      this.setState({
        data: {
          ...this.state.data,
          items: []
        }
      })
    }
  }

  render() {
    return (
      <div className="todo-wrapper">
        <div className="todo-container">
          <div className="todo-content">
            <div className="todo-content-inner">
              <ToDoList data={this.state.data} onItemChanged={this.onItemChanged} addItemsChanged={this.addItemsChanged}
                onDeleteItemChanged={this.onDeleteItemChanged} onCompleteAllItemChanged={this.onCompleteAllItemChanged}
                onClearAllItemsChanged={this.onClearAllItemsChanged} />
              <Footer data={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
