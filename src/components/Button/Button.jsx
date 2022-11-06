import PropTypes from "prop-types";
import {LoadMoreBtn} from "./Button.styled"

export  const Button = ({onLoadMore, isLoading}) => {
  return(
    <div>
      <LoadMoreBtn type="button" onClick={onLoadMore} disabled={isLoading}>
        Load more
      </LoadMoreBtn>
    </div>
  )
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}