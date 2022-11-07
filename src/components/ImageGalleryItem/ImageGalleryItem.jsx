import PropTypes from "prop-types";
import {GalleryItem, ItemImg} from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({item, onClick}) => {
  const {webformatURL, tags, largeImageURL} = item;
  return (
    <GalleryItem>
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
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
    onClick: PropTypes.func.isRequired,
};