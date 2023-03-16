export type CategoryType = "burgers" | "drinks" | "salads" | "desserts" | "pizza" | "seafood";

export interface Recipe {
	_id: string;
	image: string;
	title: string;
	cookTime: string;
	cookLevel: string;
	category: CategoryType;
	rating: number;
}
