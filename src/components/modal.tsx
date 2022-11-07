import React from 'react';
import './modal.css';

interface ModalProps {

  size?: 'small' | 'medium'| 'large';
  /**
   * Título ventana modal
   */
  title: string;
  /**
   * Texto ventana modal
   */
  text: string;
  /**
   * Texto boton abre ventana modal
   */
  buttonText: string;
 /**
   * Color boton que abre ventana modal
   */
  buttonColor?: 'green' | 'blue'| 'red';
  /**
   * Está abierta la Ventana
   */
  isOpen?: boolean,
  /**
   * Está cerrada la Ventana
   */
  isClose?: boolean
}

/**
 * Simple Dialog UI component 
 */
export const Modal = ({
  title ,
  text ,
  buttonText,
  size,
  buttonColor,
  isOpen,
  isClose,
  ...props
}: ModalProps) => {
  return (
    <div>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal"  id="modal-1" {...props}>
        <label className="modal__bg" ></label>
        <div className={['modal__inner', `modal_size_${size}`].join(' ')}>
          <label className="modal__close" htmlFor="modal-1"></label>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <label className={['btn', `btn--${buttonColor}`].join(' ')} htmlFor="modal-1">{buttonText}</label>
    </div>
   
  );
};

