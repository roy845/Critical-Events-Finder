export const getRandomColor = () => {
  const letters: string = "0123456789ABCDEF";
  let color: string = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const formatFileSize = (size: number) => {
  if (size >= 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  } else if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    return `${(size / 1024).toFixed(2)} KB`;
  }
};

export const getRandomItem = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const getRandomNumber = (max: number) =>
  Math.floor(Math.random() * max) + 1;
