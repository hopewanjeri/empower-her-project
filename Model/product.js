import mongoose from "mongoose";

const Schema =mongoose.Schema
const todoApi = new Schema




class Product {
    id;
    name;
    description;
    quantity;
    price;
    created_at;
    updated_at;
  
    constructor() {
      if (!this.id) {
        this.id = uuidv4();
      }
    }
  }
  
  export { Product };