import './App.css';
import { useState } from 'react';

import { SideBar } from './layouts/SideBar/SideBar';
import { Body } from './layouts/Body/Body';
import { Header } from './layouts/Header/Header';

import { CardButton } from './components/CardButton/CardButton';
import { SaidBarItem } from './components/SaidBarItem/SaidBarItem';
import { FormItem } from './components/FormItem/FormItem';

const INITIAL_DATA = [
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

export function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const addFormData = (items) => {
    setData([
      ...data,
      {
        title: items.title,
        text: items.text,
        date: new Date(items.date),
      },
    ]);
  };

  return (
    <>
      <SideBar>
        <Header>
          <p className='sideBarLogo'>Personal Journal</p>
        </Header>
        <CardButton nameClass='journalAdd'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 67 67'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M62.5 29.1667H37.5V4.16667C37.5 3.0616 37.061 2.00179 36.2796 1.22039C35.4982 0.438988 34.4384 0 33.3333 0C32.2283 0 31.1685 0.438988 30.3871 1.22039C29.6057 2.00179 29.1667 3.0616 29.1667 4.16667V29.1667H4.16667C3.0616 29.1667 2.00179 29.6057 1.22039 30.3871C0.438988 31.1685 0 32.2283 0 33.3333C0 34.4384 0.438988 35.4982 1.22039 36.2796C2.00179 37.061 3.0616 37.5 4.16667 37.5H29.1667V62.5C29.1667 63.6051 29.6057 64.6649 30.3871 65.4463C31.1685 66.2277 32.2283 66.6667 33.3333 66.6667C34.4384 66.6667 35.4982 66.2277 36.2796 65.4463C37.061 64.6649 37.5 63.6051 37.5 62.5V37.5H62.5C63.6051 37.5 64.6649 37.061 65.4463 36.2796C66.2277 35.4982 66.6667 34.4384 66.6667 33.3333C66.6667 32.2283 66.2277 31.1685 65.4463 30.3871C64.6649 29.6057 63.6051 29.1667 62.5 29.1667Z'
              fill='white'
            />
          </svg>
          <p>Новое воспоминание</p>
        </CardButton>
        {/* TODO: Wrap CardButton in ListCard, less padding between CardButton */}
        {data.map((el) => (
          <CardButton>
            <SaidBarItem title={el.title} text={el.text} date={el.date} />
          </CardButton>
        ))}
      </SideBar>
      <Body>
        <FormItem onClick={addFormData} />
      </Body>
    </>
  );
}
