import PropTypes from 'prop-types';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({items, onClick}) => {
  return(
    <Gallery>
      {items.map(item => {
        return <ImageGalleryItem 
                  id={item.id} 
                  item={item} 
                  onClick={onClick}
                />})}
    </Gallery>
  )
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};