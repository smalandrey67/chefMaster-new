import type { CookingStep } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";

type Step = Omit<CookingStep, "id">;

export interface StepProps extends Step {}
