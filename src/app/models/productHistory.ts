export class ProductHistory {
  _id?:string;
  name:string;
  action:string;
  date:number;

constructor(name: string, action: string, date: number) {

  this.name = name;
  this.action = action;
  this.date= date;

}
}
