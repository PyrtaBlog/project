import './SaidBarItem.css';

export function SaidBarItem() {
  const title = 'Поход в горы';
  const date = new Date();
  const text = 'Вчера подумал, что было бы неплохо сходить в горы...';
  return (
    <div className='saidBarItem'>
      <h3 className='saidBarItem__header'>{title}</h3>
      <div className='saidBarItem__body'>
        <div className='saidBarItem__date'>{date.toLocaleString('ru-RU')}</div>
        <div className='saidBarItem__text'>{text}</div>
      </div>
    </div>
  );
}
