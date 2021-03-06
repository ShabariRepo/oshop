import { Product } from "./product";

export class ShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;
    
    // the init? allows you to create a shopping cart item without passing in any arguments
    // the partial means that the init can be an object that looks like the shopping cart object
    constructor (init?: Partial<ShoppingCartItem>){
        Object.assign(this, init);
    }

    get totalPrice(){
        return this.price * this.quantity;
    }
}