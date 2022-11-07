import React,{useState} from 'react';
import './label.css';

interface LabelProps {
  /**
   * Etiqueta o nombre que se visualiza
   */
  label: string;
  /**
   * Url para petición
   */
  url: string;
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  label,
  url,
  ...props
}: LabelProps) => {
  const [count, setCount] = useState(0);
  return (
    <label
      {...props}
    >
      {label} - {count}- {url}
    <button onClick={() => setCount(count+1)}>Incrementar</button>
    </label>
  );
};
