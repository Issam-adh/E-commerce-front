import { Products } from "./products";
import { Users } from "./users";

export class Orders {

    public name?:string;
    public description?:string;
    public total_price?:string;
    public products?:Products[];
    public user?:Users[];
}
