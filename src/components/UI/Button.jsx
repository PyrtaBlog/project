import { useState } from 'react';
import './Button.css';

console.log('Ререндер');

export function Button() {
  const [text, setText] = useState('Сохранить');
  const clicked = () => {
    setText('Закрыть');
  };

  return (
    <button className='btn' onClick={clicked}>
      {text}
    </button>
  );
}
