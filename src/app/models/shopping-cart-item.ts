import { Product } from "./product";

export class ShoppingCartItem {
    $key: string;
    title: string;
    imageurl: string;
    price: number;
    quantity: number;
    
    get totalPrice(){
        return this.price * this.quantity;
    }
}