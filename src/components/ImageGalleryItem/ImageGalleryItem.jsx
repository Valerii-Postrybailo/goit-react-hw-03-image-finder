
export const ImageGalleryItem = ({pictures}) => {
  // console.log(pictures)
  // console.log(pictures.tags)
  
  return(
    pictures.map(({id, webformatURL, largeImageURL, tags}) =>(
      <li key ={id} >
          <img src={webformatURL} alt={tags} />
      </li>
    ))
  )
}