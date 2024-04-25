export class Product {
  _id?:string;
  name:string;
  category:string;
  quantity:number;

constructor(name: string, category: string, quantity: number) {

  this.name = name;
  this.category = category;
  this.quantity= quantity;

}
}
