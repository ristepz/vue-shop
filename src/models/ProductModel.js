export class ProductModel {
  constructor(data = {}) {
    this.ID = data.id;
    this.Title = data.title;
    this.Price = data.price;
    this.Desc = data.description;
    this.Category = data.category;
    this.Image = data.image;
  }
}