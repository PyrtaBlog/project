import styles from "./FormItem.module.css";
import cn from "classnames";

export const stylesForm = {
  titleCls: cn(styles.input, styles.titleInput, {
    [styles.errorInput]: state.formError.title,
  }),
};
