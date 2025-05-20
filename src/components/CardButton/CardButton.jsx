import './CardButton.css';

export function CardButton({ children, nameClass }) {
  const formattedClass = 'cardButton' + (nameClass ? ' ' + nameClass : '');
  return <div className={formattedClass}>{children}</div>;
}
