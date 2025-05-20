import { useState } from 'react';
import './Button.css';

console.log('Ререндер');

export function Button({ text, onClick }) {
  return (
    <button className='btn' onClick={onClick}>
      {text}
    </button>
  );
}
