
export const darken = (color: string, amount: number) => {
  // Convert hex to rgb
  const rgb = color.replace('#', '').match(/.{1,2}/g)?.map(hex => parseInt(hex, 16));
  if (!rgb) return color;

  // Darken the color
  const darkened = rgb.map(value => Math.max(0, value - amount).toString(16).padStart(2, '0')).join('');
  return `#${darkened}`;
};

export const lighten = (color: string, amount: number) => {
  return color.replace('rgb', 'rgba').replace(')', `, ${amount})`);
};



