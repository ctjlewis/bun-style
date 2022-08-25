import ansiStyles from "ansi-styles";
import { BackgroundColor, ForegroundColor, Modifier } from "ansi-styles";

export type LogStyles = keyof ForegroundColor | keyof BackgroundColor | keyof Modifier;

export const style = (message: string, styles?: LogStyles[]) => {
  if (!styles) {
    return message;
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

export const styleLog = (
  message: string,
  styles?: LogStyles[],
  spacing = true
) => {
  const styled = style(message, styles);
  const lineStartSpacing = spacing ? "  " : "";
  const lineEndSpacing = spacing ? "\n" : "";
  console.log(lineStartSpacing + styled + lineEndSpacing);
}