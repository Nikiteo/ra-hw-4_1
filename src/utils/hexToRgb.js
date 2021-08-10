export default function hexToRgb(text) {
  const r = parseInt(text.slice(1, 3), 16);
  const g = parseInt(text.slice(3, 5), 16);
  const b = parseInt(text.slice(5, 7), 16);
  return {
    r,
    g,
    b,
    string: `rgb(${r}, ${g}, ${b})`,
  };
}