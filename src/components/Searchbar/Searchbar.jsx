import React from 'react';
// import css from "";


export class Searchbar extends React.Component{
  state = { 
    inputValue: "",
  }

  handleInputChange = evt => {
    evt.preventDefault();
    console.log(evt.target.elements.pictureSearch.value)
    this.setState({[evt.target]: evt.target})
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
        <form onSubmit = {this.props.onSubmit} >
          <button type="submit">
            <span>Search</span>
          </button>
      
          <input
            name ="pictureSearch"
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




