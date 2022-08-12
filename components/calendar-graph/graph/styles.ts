const SIZE = '12px';
const TYPE = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default function getStyles({
  textColor = '#959494',
  fontSize = SIZE,
  fontFamily = TYPE
}) {
  const text = {
    fill: textColor,
    fontSize: fontSize,
    fontFamily: fontFamily,
    dominantBaseline: 'central'
  };
  return {
    text,
    text2: {
      ...text,
      textAnchor: 'middle'
    }
  };
}
