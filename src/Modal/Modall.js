import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Back-drop';
import './Modall.css';

const ModalOverlay = props => {
  const content = (
    <div className='modall'  >
    <header className={`modall__header ${props.headerClass}`}>
      <h2>{props.header}</h2>
    </header>
    <form
      onSubmit={
        props.onSubmit ? props.onSubmit : event => event.preventDefault()
      }
    >
      <div className={`modall__content ${props.contentClass}`}>
        {props.children}
      </div>
      <footer className='modall__footer '>
        {props.footer}
      </footer>
    </form>
  </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hookk'));
};

const Modall = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modall"
      >
        <  ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modall;
