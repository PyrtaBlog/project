export function reducer(state, action) {
  switch (action.type) {
    case "clean":
      return {
        ...state,
        formInitial: stateType.formInitial,
      };
    case "change": {
      return {
        ...state,
        formInitial: {
          [action.field]: action.value,
        },
      };
    }
    case "valid": {
      const { payload } = action;
      const err = {
        title: payload.textTitle.trim() === "",
        date: payload.date.trim() === "",
        text: payload.text.trim() === "",
      };
      const hasErrors = Object.values(err).some(Boolean);
      if (hasErrors) {
        return {
          ...state,
          formError: err,
        };
      }
      return {
        ...state,
        formReady: true,
      };
    }
  }
}

// Начальный тип формы
export const stateType = {
  formInitial: {
    textTitle: "",
    textArea: "",
    date: "",
    tags: "",
  },
  formError: {
    title: false,
    date: false,
    text: false,
  },
  formReady: false,
};
