import './App.css';
import {useState} from 'react';

import {SideBar} from './layouts/SideBar/SideBar';
import {Body} from './layouts/Body/Body';
import {Header} from './layouts/Header/Header';

import {CardButton} from './components/CardButton/CardButton';
import {FormItem} from './components/FormItem/FormItem';
import {ListCards} from "./components/ListCards/ListCards.jsx";
import {PlusSVG} from "./components/UI/svg/PlusSVG.jsx";

const INITIAL_DATA = [{
    id: 1,
    title: 'Поход в горы',
    text: 'Вчера подумал, что было ...',
    date: new Date()
},
    {
        id: 2,
        title: 'Покупка автомобиля',
        text: 'Для чего человеку автом ...',
        date: new Date()
    }];

export function App() {
    const [data, setData] = useState(INITIAL_DATA);

    const addFormData = (items) => {
        console.log(items);
        setData([
            ...data,
            {
                id: data.length === 0 ? 1 : Math.max(...data.map(i => i.id)) + 1,
                title: items.title,
                text: items.text,
                date: items.date === '' ? new Date : new Date(items.date)
            }
        ]);
    };
    return (
        <>
            <SideBar>
                <Header>
                    <p className="sideBarLogo">Personal Journal</p>
                </Header>
                <CardButton nameClass="journalAdd">
                    <PlusSVG buttonColor="white"/>
                    <p>Новое воспоминание</p>
                </CardButton>
                <ListCards data={data}/>
            </SideBar>
            <Body>
                <FormItem onClick={addFormData}/>
            </Body>
        </>
    );
}
