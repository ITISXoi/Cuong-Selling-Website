export const transferTitle = (data: string) => {
  return data.length > 20 ? `${data.slice(0, 20)}...` : data;
};

export const formatPrice = (price: number) => {
  return price.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};
