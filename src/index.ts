import ansiStyles from "ansi-styles";
import { BackgroundColor, ForegroundColor, Modifier } from "ansi-styles";

export type LogStyles = keyof ForegroundColor | keyof BackgroundColor | keyof Modifier;

export const style = (message: string, styles?: LogStyles[]) => {
  if (!styles || styles.length === 0) {
    return message;
  }

  const openingTags: string[] = [];
  const closingTags: string[] = [];

  for (const style of styles) {
    const ansiStyle = ansiStyles[style];
    openingTags.push(ansiStyle.open);
    closingTags.unshift(ansiStyle.close);
  }

  return `${openingTags.join('')}${message}${closingTags.join('')}`;
};

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