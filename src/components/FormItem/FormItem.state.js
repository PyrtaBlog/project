export function reducer(state, action) {
  switch (action.type) {
    case "clean":
      return {
        ...state,
        formInitial: stateType.formInitial,
      };
    case "change": {
      // console.log(action);
      console.log({
        ...state,
        formInitial: {
          [action.field]: action.value,
        },
      });

      return {
        ...state,
        formInitial: {
          [action.field]: action.value,
        },
      };
    }
  }
}

export const stateType = {
  formInitial: {
    textTitle: "",
    textArea: "",
    date: "",
    tags: "",
  },
};
