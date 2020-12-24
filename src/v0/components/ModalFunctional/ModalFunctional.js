import React from 'react';


const ModalFunctional = (props) => {

  const showHideClassName = props.detailsModalShow ? "modal display-block" : "modal display-none";

  return (
    <div className= {showHideClassName}>
        <div className="modal__main">
          {props.children} 
          <div className="modal__button--container modal__close">
            <button className="modal__button" onClick={props.closeModal}>X</button>
            </div>
        </div>
    </div>
  );
}
export default ModalFunctional;