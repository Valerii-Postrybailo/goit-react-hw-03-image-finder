import { Component } from "react"
import PropTypes from "prop-types";
import { createPortal } from "react-dom"
import { ModalOvarlay, ModalWindow} from "./Modal.styled";

const modalReact = document.querySelector("#modal-root")

export default class Modal extends Component{

  componentDidMount(){
    window.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = evt =>{
    if(evt.code === "Escape"){
      this.props.onClose()
    }
  }

  handleBackdropClick = evt => {
    if(evt.currentTarget === evt.target){
      this.props.onClose()
    }
  }
  

  render(){
    return createPortal(
      <ModalOvarlay onClick = {this.handleBackdropClick}>
        <ModalWindow >
          <img src={this.props.url} alt=""
            style={{width:"900px"}}
          />
        </ModalWindow>
      </ModalOvarlay>,
      modalReact
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
}
