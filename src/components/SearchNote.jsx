import React, { Component } from 'react'

export default class SearchNote extends Component {
    constructor(props){
        super(props)

        this.state = {
            inputValue : ''
        }
        
        this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this)
    }
    onChangeSearchHandler(e){
        this.setState({inputValue : e.target.value})
        this.props.onSearchHandler(e.target.value)
    }
  render() {
    return (
        <form onSubmit={this.submitSearchHandler}>
            <input type="search" placeholder='Find Notes ...' value={this.state.inputValue} onChange={this.onChangeSearchHandler}/>
        </form>
    )
  }
}