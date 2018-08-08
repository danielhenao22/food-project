import { Product } from './product.model';

export class Recipe {
    public recipeId: string;
    public picturePath: string;
    public name: string;
    public description: string;
    public ingredients: Product[];
    public amountOfPeople: string;
}
