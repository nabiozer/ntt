import React from 'react';
import ReactDOM from 'react-dom';

import './PopupModal.scss'


const Backdrop = (props) => {
  return <div className='backdrop2' onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <div className='content'>
        <p>{props.popoverContent[0].Description}</p>
        <p>{props.popoverContent[0].Title}</p>
      </div>
     <button onClick={props.onConfirm}>Kapat</button>
    </div>
  );
};

const PopupModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdroppop-hook')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          popoverContent={props.popoverContent}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-hook')
      )}
    </React.Fragment>
  );
};

export default PopupModal;