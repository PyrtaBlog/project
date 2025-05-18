import './SaidBarItem.css';

export function SaidBarItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
  return (
    <div className='saidBarItem'>
      <h3 className='saidBarItem__header'>{title}</h3>
      <div className='saidBarItem__body'>
        <div className='saidBarItem__date'>{formatedDate}</div>
        <div className='saidBarItem__text'>{text}</div>
      </div>
    </div>
  );
}
