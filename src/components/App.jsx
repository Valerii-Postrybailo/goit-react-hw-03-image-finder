import React from "react";
// import css from "../styles.module.css";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

const BACK_END_URL =  'https://pixabay.com/api/'
const API_KEY = '29743912-8e7685db13f3781653d214456'

export class App extends React.Component {

  state = {
    pictures : [],
    loading: false,
  }

  async foundPicture(inputValue){
    this.setState({loading: true})
    const url = `${BACK_END_URL}/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    this.setState({ pictures: [...data.hits] });
    this.setState({loading: false})
  }

  onSubmit = (evt) =>{
    evt.preventDefault();
    const data = evt.target.elements.pictureSearch.value

    // console.log(evt.target.elements.pictureSearch.value)
    this.foundPicture(data)
    this.setState({[evt.target]: evt.target})
    // console.log(this.state)
  }

  render(){
    // console.log(this.state)

    return(
    <div>
      <Searchbar
        onSubmit={this.onSubmit}
      />


      <ImageGallery>
       
          <ImageGalleryItem
            pictures = {this.state.pictures}
          />
       
      </ImageGallery> 

      <Button></Button>

      {this.state.loading && <Loader/>}

    </div>
    )
  }
};


