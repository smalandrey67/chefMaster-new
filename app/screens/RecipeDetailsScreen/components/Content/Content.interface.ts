import type { RecipeDetails } from "../../RecipeDetailsScreen.interface";

type Content = Pick<RecipeDetails, "description" | "ingredients" | "cooking">;

export interface ContentProps extends Content {}
