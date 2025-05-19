import './App.css';

import { SideBar } from './layouts/SideBar/SideBar';
import { Body } from './layouts/Body/Body';

import { CardButton } from './components/CardButton/CardButton';
import { SaidBarItem } from './components/SaidBarItem/SaidBarItem';
import { Button } from './components/UI/Button';

export function App() {
  const data = [
    {
      title: 'Поход в горы',
      text: 'Вчера подумал, что было ...',
      date: new Date(),
    },
    {
      title: 'Покупка автомобиля',
      text: 'Для чего человеку автом ...',
      date: new Date(),
    },
  ];
  return (
    <>
      <SideBar>
        <img src='#' alt='Logo' />
        <CardButton>Новое воспоминание</CardButton>
        <Button />
        <CardButton>
          <SaidBarItem title={data[0].title} text={data[0].text} date={data[0].date} />
        </CardButton>
        <CardButton>
          <SaidBarItem title={data[1].title} text={data[1].text} date={data[1].date} />
        </CardButton>
      </SideBar>
      <Body>
        <p>Body</p>
      </Body>
    </>
  );
}
