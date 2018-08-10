import { Product } from './product.model';

export class Recipe {
    recipeId: string;
    picturePath: string;
    name: string;
    description: string;
    ingredients: Product[];
    amountOfPeople: string;
    price: string;
}
