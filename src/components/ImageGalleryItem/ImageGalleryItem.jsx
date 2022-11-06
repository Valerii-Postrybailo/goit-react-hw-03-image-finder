import PropTypes from "prop-types";
import {GalleryItem, ItemImg} from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({id, item, onClick}) => {
  console.log(id)
  const {webformatURL, tags, largeImageURL} = item;
  return (
    <GalleryItem key={id}>
      <ItemImg
        onClick={() => onClick(largeImageURL)}
        src={webformatURL}
        alt={tags}
      />
    </GalleryItem>);
};

ImageGalleryItem.propTypes = {
    item: PropTypes.exact({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tag: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
    onClick: PropTypes.func.isRequired,
};