export type CategoryType = "burgers" | "drinks" | "salads" | "desserts" | "pizza" | "seafood";

export interface Recipe {
	image: string;
	title: string;
	cookTime: string;
	cookLevel: string;
	category: CategoryType;
	_id: string;
}
