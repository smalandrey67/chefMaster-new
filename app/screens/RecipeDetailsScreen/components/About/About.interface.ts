import type { RecipeDetails } from "../../RecipeDetailsScreen.interface";

type About = Pick<RecipeDetails, "title" | "cookTime" | "rating" | "cookLevel">;

export interface AboutProps extends About {}
