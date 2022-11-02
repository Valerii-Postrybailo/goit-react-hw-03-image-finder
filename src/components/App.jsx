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
  }

  async componentDidMount(){
    const url = `${BACK_END_URL}/?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({ pictures: [...data.hits] });
  }

  render(){
    console.log(this.state)

    return(
    <div>
      <Searchbar>

      </Searchbar>

      <ImageGallery>
        <ImageGalleryItem
          pictures = {this.state.pictures}
        />
      </ImageGallery> 

      <Button></Button>

      <Loader></Loader>
      <Modal></Modal>
    </div>
    )
  }
};


