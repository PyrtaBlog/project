import './FormItem.css';

import { Button } from '../UI/Button';

export function FormItem() {
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formItems = Object.fromEntries(formData);
    console.log(formItems);
  };

  return (
    <form className='form-input' onSubmit={submitForm}>
      <input type='text' name='title' className='title-input' />
      <input type='date' name='date' className='date-input' />
      <input type='text' name='tags' className='tags-input' />
      <textarea name='text' className='text-input' rows={30}/>
      <Button text='Сохранить' />
    </form>
  );
}
