import ansiStyles from "ansi-styles";
import { BackgroundColor, ForegroundColor, Modifier } from "ansi-styles";

export type LogStyles = keyof ForegroundColor | keyof BackgroundColor | keyof Modifier;

export const style = (message: string, styles?: LogStyles | LogStyles[]) => {
  if (!styles) {
    return message;
  }

  if (!Array.isArray(styles)) {
    styles = [styles];
  }

  let opening = "";
  let closing = "";

  for (const style of styles) {
    const ansiStyle = ansiStyles[style];
    opening += ansiStyle.open;
    closing += ansiStyle.close;
  }

  return opening + message + closing;
}