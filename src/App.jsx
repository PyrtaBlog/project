import "./App.css";
import { useEffect, useState } from "react";

import { SideBar } from "./layouts/SideBar/SideBar";
import { Body } from "./layouts/Body/Body";
import { Header } from "./layouts/Header/Header";

import { CardButton } from "./components/CardButton/CardButton";
import { FormItem } from "./components/FormItem/FormItem";
import { ListCards } from "./components/ListCards/ListCards.jsx";
import { PlusSVG } from "./components/UI/svg/PlusSVG.jsx";

// const INITIAL_DATA = ;

export function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setData(
        items.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (data.length) {
      const newItems = JSON.stringify(data);
      localStorage.setItem("data", newItems);
    }
  }, [data]);

  const addFormData = (items) => {
    setData([
      ...data,
      {
        id: data.length === 0 ? 1 : Math.max(...data.map((i) => i.id)) + 1,
        title: items.textTitle,
        text: items.textArea,
        date: items.date === "" ? new Date() : new Date(items.date),
      },
    ]);
  };
  return (
    <>
      <SideBar>
        <Header>
          <p className="sideBarLogo">Personal Journal</p>
        </Header>
        <CardButton nameClass="journalAdd">
          <PlusSVG buttonColor="white" />
          <p>Новое воспоминание</p>
        </CardButton>
        <ListCards data={data} />
      </SideBar>
      <Body>
        <FormItem onClick={addFormData} />
      </Body>
    </>
  );
}
