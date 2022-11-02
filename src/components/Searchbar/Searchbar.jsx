import React from 'react';
// import css from "";


export class Searchbar extends React.Component{
  state = { 
    inputValue: "",
  }

  handleInputChange = evt => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  reset = () => {
    this.setState({inputValue: ""})
  }

  
  // handleInputChange = event => {
  //   console.log(this.state.inputValue)
  //   this.setState({
  //     [event.target]: event.target
  //   })
  // }

  onSubmit = evt => {
    evt.preventDefault();
    this.handleInputChange(this.state);
    this.reset();
  }

  render(){

    return(
      <header className = {Searchbar}>
        <form onSubmit = {this.onSubmit} >
          <button type="submit">
            <span>Search</span>
          </button>
      
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}




