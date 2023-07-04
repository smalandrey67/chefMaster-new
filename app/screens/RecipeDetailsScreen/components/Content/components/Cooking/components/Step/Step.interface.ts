import type { CookingStep } from "@/interfaces/RecipeDetails.interface";

type Step = Omit<CookingStep, "id">;

export interface StepProps extends Step {}
