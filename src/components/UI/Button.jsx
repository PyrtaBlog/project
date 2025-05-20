import { useState } from 'react';
import './Button.css';

console.log('Ререндер');

export function Button({text}) {

  return (
    <button className='btn'>
      {text}
    </button>
  );
}
