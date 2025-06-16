export function reducer(state, action) {
  switch (action.type) {
    case "clean":
      return {
        ...state,
        formInitial: {
          ...stateType.formInitial,
          date: undefined,
        },
      };
    case "resetError": {
      return {
        ...state,
        formError: stateType.formError,
      };
    }
    case "change": {
      const newState = {
        ...state,
        formInitial: {
          ...state.formInitial,
          [action.field]: action.value,
        },
      };

      return newState;
    }
    case "valid": {
      const { payload } = action;
      const err = {
        title: payload.textTitle.trim() === "",
        date: payload.date.trim() === "",
        text: payload.textArea.trim() === "",
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
