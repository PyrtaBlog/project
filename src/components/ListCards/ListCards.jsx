import './ListCard.css';
import {CardButton} from "../CardButton/CardButton.jsx";
import {SaidBarItem} from "../SaidBarItem/SaidBarItem.jsx";

export function ListCards({data}) {

    if (data.length === 0) {
        return <p>'Записей пока нет!'</p>;
    }
    const sortedCards = (a, b) => {
        if (a.date > b.date) {
            return -1;
        }
    };
    return <div className="listCards">
        <>
            {data.sort(sortedCards).map((el) => (
                <CardButton key={el.id}>
                    <SaidBarItem title={el.title} text={el.text} date={el.date}/>
                </CardButton>
            ))}
        </>
    </div>;
}

