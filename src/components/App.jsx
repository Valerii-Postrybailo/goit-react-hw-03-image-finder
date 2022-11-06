import React from "react";
// import css from "../styles.module.css";

import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import Modal from "./Modal/Modal";
import * as API from "../services/pixabay_api";

import {AppWrapper} from "./App.styled"

// const BACK_END_URL = 'https://pixabay.com/api/'
// const API_KEY = '29743912-8e7685db13f3781653d214456'

export class App extends React.Component {

  state = {
    query : "",
    items: [],
    page: 1,
    isLoading: false,
    showModal: false,
    currentLargeImageURL: '',
    error: null,
  }

  // async foundPicture(inputValue){
  //   this.setState({loading: true})
  //   const url = `${BACK_END_URL}/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   // console.log(data)
  //   this.setState({ pictures: [...data.hits] });
  //   this.setState({loading: false})
  // }

  onOpenLargeImg = (url) => {
    this.setState({
      currentLargeImageURL: url,
    })
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  onSubmit = (query) =>{
    console.log(query)
    if (query.trim().length === 0) {
      alert("Please, enter your request")
      return
    }

    this.setState({
      query,
      page: 1,
      items: [],
    })
  }

  onLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }


  addPictures  = async (query, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const images = await API.loadImage(query, page);
      console.log(query)
      console.log(images)
      this.setState(prevState => ({
        items: [...prevState.items, ...images],
        isLoading: false,
      }));
      if(images.length === 0) {
        alert("Wrong request. Please, enter another one");
      }
    } catch (error) {
      this.setState({
        error: error.message,
      })
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate (_, prevState) {
    if(prevState.page !== this.state.page || prevState.query !== this.state.query) {
      this.addPictures(this.state.query, this.state.page);
    }
  }

  render(){
    const {items, currentLargeImageURL, isLoading, error } = this.state;
    console.log(items)
    return(
      
      <AppWrapper>
        <Searchbar
          onSubmit={this.onSubmit}
          isLoading={isLoading}
        />
        
        {error && <p>{error}</p>}

        {items.length > 0 && <ImageGallery items={items} onClick={this.onOpenLargeImg}/>}

        {isLoading && <Loader/>}

        {items.length > 0 && <Button onLoadMore={this.onLoadMoreBtn} isLoading={isLoading}/>}
        {currentLargeImageURL && <Modal closeModal={this.toggleModal} url={currentLargeImageURL}/>}

        {this.state.isLoading && <Loader/>}

      </AppWrapper>
    )
  }
};


