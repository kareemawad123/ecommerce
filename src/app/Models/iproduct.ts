import { DiscountOffers } from "./discount-offers";
import { ICategory } from "./icategory";

export interface IProduct {
  id: number,
  name: string,
  discriptions: string,
  quantity: number,
  price: number,
  img: string,
  categoryId: ICategory,
  descount: DiscountOffers,
}
