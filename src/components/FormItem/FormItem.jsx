import './FormItem.css';

import { Button } from '../UI/Button';

export function FormItem({ onClick }) {
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formItems = Object.fromEntries(formData);
    onClick(formItems);
  };

  return (
    <form className='form-input' onSubmit={submitForm}>
      <input type='text' name='title' className='title-input' />
      <input type='date' name='date' className='date-input' />
      <input type='text' name='tags' className='tags-input' />
      <textarea name='text' className='text-input' rows={10} />
      <Button
        text='Сохранить'
        onClick={() => {
          console.log('Push');
        }}
      />
    </form>
  );
}
