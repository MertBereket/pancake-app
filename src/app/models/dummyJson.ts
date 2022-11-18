import { Products } from './products';

export class DummyJson {
  products: Array<Products>;
  limit!: number;
  skip!: number;
  total!: number;
}
