export const ImageGalleryItem = ({pictures}) => {
  console.log(pictures)
  return(
    pictures.map(({id, webformatURL, largeImageURL}) =>(
      <li key ={id} >
        <img src={webformatURL} alt="" />
      </li>
    ))
  )
}