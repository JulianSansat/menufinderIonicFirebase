export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public kind?: string,
    public description?: string,
    public image?: string,
    public price?: number,
    public establishment_id?: number,
  ) {}
}