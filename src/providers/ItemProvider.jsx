import React, { Component } from 'react';
import axios from 'axios';

const ItemContext = React.createContext();

export const ItemConsumer = ItemContext.Consumer;

class ItemProvider extends Component {
  state = { todos: [],
    addItem: (incommingTodo) => this.addItem(incommingTodo),
    updateTodo: (id, item) => this.updateTodo(id, item),
    // deletefuction here
  }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => {
        this.setState({ todos: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  addItem = (incommingTodo) => {
    const item = incommingTodo
    axios.post('/api/items', { item })
      .then( res => {
        const { todos } = this.state
        this.setState({ todos: [ ...todos, res.data ] })
      })
      .catch( err => {
        console.log(err)
     })
  }

  updateTodo = (id, item) => {
    axios.put(`/api/items/${id}`, { item })
      .then( res => {
        const todos = this.state.todos.map( t => {
          if (t.id === id)
            return res.data
          return t
        })
        this.setState({ todos })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteTodo = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( res => {
        const { todos } = this.state
        this.setState({ todos: todos.filter( t => t.id !== id ) })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <ItemContext.Provider value={this.state}>
        { this.props.children }
      </ItemContext.Provider>
    )
  }
}

export default ItemProvider;