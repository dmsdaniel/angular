import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShopppingCartService {

    items: CartItem[] = []

    clear() {
        this.items = []
        console.log("clear")
    }
    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
    }
    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }
    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }
    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removeItem(item)
        }


    }
}