import styles from "./FormItem.module.css";
import cn from "classnames";
// import { textArea, textTitle } from "./text.js";

import { Button } from "../UI/Button";
import React, { useEffect, useState, useReducer } from "react";
import { reducer, stateType } from "./FormItem.state";

const DEFAULT_ERROR = {
  title: false,
  date: false,
  text: false,
};

export function FormItem({ onClick }) {
  const [hasError, setHasError] = React.useState(DEFAULT_ERROR);
  // const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const [state, dispatch] = useReducer(reducer, stateType);
  // console.log(state.formInitial);

  useEffect(() => {
    const clearError = setTimeout(() => {
      console.log("Reset error");
      setHasError(DEFAULT_ERROR);
    }, 3000);
    return () => {
      clearTimeout(clearError);
    };
  }, [hasError]);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formItems = Object.fromEntries(formData);
    // console.log(formItems);

    // Валидируем форму и получаем статус ошибок
    const errors = validateForm(formItems);

    // Проверяем наличие хотя бы одной ошибки
    const hasErrors = Object.values(errors).some(Boolean);

    if (hasErrors) {
      setHasError(errors);
      return;
    }
    onClick(formItems);
    dispatch({ type: "clean" });
  };

  const validateForm = (data) => {
    // Создаем новый объект ошибок
    return {
      // title: data.title.trim() === "",
      text: data.text.trim() === "",
      date: data.date.trim() === "",
    };
  };

  // Для стилей используем вычисляемое значение
  const titleCls = cn(styles.input, styles.titleInput, {
    [styles.errorInput]: hasError.title,
  });

  const textCls = cn(styles.input, {
    [styles.errorInput]: hasError.text,
  });

  const dateCls = cn(styles.input, styles.specialInput, {
    [styles.errorInput]: hasError.date,
  });

  const tagsCls = cn(styles.input, styles.specialInput, {});

  const formClass = cn(styles.formInput);

  return (
    <form className={formClass} onSubmit={submitForm}>
      {hasError.title && (
        <p className={styles.errorText}>Поле не может быть пустым!</p>
      )}
      <input
        type="text"
        name="textTitle"
        className={titleCls}
        value={state.formInitial.textTitle}
        onChange={(e) =>
          dispatch({
            type: "change",
            field: e.target.name,
            value: e.target.value,
          })
        }
      />
      {hasError.date && <p className={styles.errorText}>Укажите дату!</p>}
      <input type="date" name="date" className={dateCls} />
      <input type="text" name="tags" className={tagsCls} />
      {hasError.text && (
        <p className={styles.errorText}>Поле не может быть пустым!</p>
      )}
      <textarea
        name="text"
        className={textCls}
        rows={20}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <Button text="Сохранить" />
    </form>
  );
}
