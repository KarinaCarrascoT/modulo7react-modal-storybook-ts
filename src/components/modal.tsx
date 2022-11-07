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
   * Imagen
   */
  imagen?: string,
  
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
  imagen,
  ...props
}: ModalProps) => {
  return (
    <div>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal"  id="modal-1" {...props}>
        <label className="modal_bg" ></label>
        <div className={['modal__inner', `modal_size_${size}`].join(' ')}>
          <label className="modal__close" htmlFor="modal-1"></label>
          <h2>{title}</h2>
          <p>{text}</p>
          <img src={imagen}></img>
        </div>
      </div>
      <label className={['btn', `btn--${buttonColor}`].join(' ')} htmlFor="modal-1">{buttonText}</label>      
    </div>
   
  );
};

