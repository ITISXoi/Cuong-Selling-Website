interface Product {
  id: string;
  url: string;
  name: string;
  price: number;
  category: string;
  rating: number | string;
  description: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  quantity: number;
  comment: [{ rating: number; quanlity: string }];
}
