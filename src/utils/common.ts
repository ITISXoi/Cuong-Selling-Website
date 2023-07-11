export const transferTitle = (data: string) => {
  return data.length > 20 ? `${data.slice(0, 20)}...` : data;
};
