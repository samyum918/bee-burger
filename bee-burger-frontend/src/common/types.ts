export interface CustomerInfoIf {
  customerId: string;
  seatNo: string;
  endTime: string;
}

export interface CategoryIf {
  id: number;
  name: string;
  isFoodSet: boolean;
}

export interface FoodItemIf {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  foodSelectionCategories?: FoodSelectionCategoriesIf[] | null | undefined;
  foodPreferences?: FoodPreference[] | null | undefined;
}

export interface FoodSelectionItemIf {
  id: number;
  name: string;
  foodPreferences?: FoodPreference[] | null | undefined;
}

export interface FoodSelectionCategoriesIf {
  id: number;
  name: string;
  foodItemSelected: FoodSelectionItemIf | null | undefined;
}

export interface FoodPreference {
  id: number;
  question: string;
  options: FoodPreferenceOptions[];
}

export interface FoodPreferenceOptions {
  id: number;
  optionContent: string;
  additionalPrice: number;
  selected: boolean;
  defaultOption: boolean;
}

export interface CartItemIf {
  foodId: number;
  name: string;
  description: string;
  price: number;
  additionalPrice: number;
  img: string;
  quantity: number;
  totalPrice: number;
  editing: boolean;
  foodSelectionCategories?: FoodSelectionCategoriesIf[] | null | undefined;
  foodPreferences?: FoodPreference[] | null | undefined;
}

export interface OrderIf {
  customerId: string;
  orderedFood: OrderedFoodIf[];
}

export interface OrderedFoodIf {
  foodId: number;
  quantity: number;
  totalPrice: number;
  subCategoryFoods: OrderedSubCategoryFoodIf[] | undefined;
  foodOptionIds: number[];
}

export interface OrderedSubCategoryFoodIf {
  foodId: number;
  foodOptionIds: number[] | undefined;
}
