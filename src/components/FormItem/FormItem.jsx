import styles from "./FormItem.module.css";
import cn from "classnames";
// import { textArea, textTitle } from "./text.js";

import { Button } from "../UI/Button";
import React, { useEffect, useState, useReducer } from "react";
import { reducer, stateType } from "./FormItem.state";

export function FormItem({ onClick }) {
  const [state, dispatch] = useReducer(reducer, stateType);
  const [hasError, setHasError] = React.useState(state.formError);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const clearError = setTimeout(() => {
      setHasError(state.formError);
    }, 3000);
    return () => {
      clearTimeout(clearError);
    };
  }, [hasError, state.formError]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(state);
    const formData = new FormData(e.target);
    const formItems = Object.fromEntries(formData);
    onClick(formItems);
  };

  // Валидируем форму
  const validForm = (e) => {
    const formData = new FormData(e.target.form);
    const formItems = Object.fromEntries(formData);
    dispatch({ type: "valid", payload: formItems });
    console.log(e);
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
      <Button text="Сохранить" onClick={validForm} />
    </form>
  );
}
