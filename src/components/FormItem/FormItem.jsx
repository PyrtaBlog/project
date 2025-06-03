import styles from './FormItem.module.css';
import cn from 'classnames';
import {textArea} from "./text.js";

import {Button} from '../UI/Button';
import React from "react";


export function FormItem({onClick}) {

    const [hasError, setHasError] = React.useState({
        title: false,
        date: false,
        text: false
    });

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formItems = Object.fromEntries(formData);

        // Валидируем форму и получаем статус ошибок
        const errors = validateForm(formItems);

        // Проверяем наличие хотя бы одной ошибки
        const hasErrors = Object.values(errors).some(Boolean);

        if (hasErrors) {
            setHasError(errors);
            return;
        }
        onClick(formItems);
    };

    const validateForm = (data) => {
        // Создаем новый объект ошибок
        return {
            title: data.title.trim() === '',
            text: data.text.trim() === '',
            date: data.date.trim() === ''
        };
    };

// Для стилей используем вычисляемое значение
    const titleCls = cn(styles.input, styles.titleInput, {
        [styles.errorInput]: hasError.title
    });

    const textCls = cn(styles.input, {
        [styles.errorInput]: hasError.text
    });

    const dateCls = cn(styles.input, styles.specialInput, {
        [styles.errorInput]: hasError.date
    });

    const tagsCls = cn(styles.input, styles.specialInput, {});

    const formClass = cn(styles.formInput);


    return (
        <form className={formClass} onSubmit={submitForm}>
            {hasError.title && (
                <p className={styles.errorText}>Поле не может быть пустым!</p>
            )}
            <input type="text" name="title" className={titleCls} value="Поход в горы"/>
            {hasError.date && (
                <p className={styles.errorText}>Укажите дату!</p>
            )}
            <input type="date" name="date" className={dateCls}/>
            <input type="text" name="tags" className={tagsCls}/>
            {hasError.text && (
                <p className={styles.errorText}>Поле не может быть пустым!</p>
            )}
            <textarea name="text" className={textCls} rows={20} value={textArea}/>
            <Button text="Сохранить"/>
        </form>
    );
}
