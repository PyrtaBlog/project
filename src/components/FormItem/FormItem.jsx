import styles from "./FormItem.module.css";
import cn from "classnames";

import { Button } from "../UI/Button";
import React, { useEffect, useReducer } from "react";
import { reducer, stateType } from "./FormItem.state";

export function FormItem({ onClick }) {
  const [state, dispatch] = useReducer(reducer, stateType);

  useEffect(() => {
    const clearError = setTimeout(() => {
      dispatch({ type: "resetError" });
    }, 3000);
    return () => {
      clearTimeout(clearError);
    };
  }, [state.formError]);

  const createFormData = (data) => {
    const formData = new FormData(data);
    return Object.fromEntries(formData);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!state.formReady) {
      return;
    }
    onClick(createFormData(e.target));
    dispatch({ type: "clean" });
  };

  const changeField = (e) => {
    dispatch({
      type: "change",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Валидируем форму
  const validForm = (e) => {
    dispatch({ type: "valid", payload: createFormData(e.target.form) });
  };

  // Для стилей используем вычисляемое значение
  const titleCls = cn(styles.input, styles.titleInput, {
    [styles.errorInput]: state.formError.title,
  });

  const textCls = cn(styles.input, {
    [styles.errorInput]: state.formError.text,
  });

  const dateCls = cn(styles.input, styles.specialInput, {
    [styles.errorInput]: state.formError.date,
  });

  const tagsCls = cn(styles.input, styles.specialInput, {});

  const formClass = cn(styles.formInput);

  return (
    <form className={formClass} onSubmit={submitForm}>
      {state.formError.title && (
        <p className={styles.errorText}>Поле не может быть пустым!</p>
      )}
      <input
        type="text"
        name="textTitle"
        className={titleCls}
        value={state.formInitial.textTitle}
        onChange={changeField}
      />
      {state.formError.date && (
        <p className={styles.errorText}>Укажите дату!</p>
      )}
      <input type="date" name="date" className={dateCls} />
      <input type="text" name="tags" className={tagsCls} />
      {state.formError.text && (
        <p className={styles.errorText}>Поле не может быть пустым!</p>
      )}
      <textarea
        name="textArea"
        className={textCls}
        rows={20}
        value={state.formInitial.textArea}
        onChange={changeField}
      />
      <Button text="Сохранить" onClick={validForm} />
    </form>
  );
}
