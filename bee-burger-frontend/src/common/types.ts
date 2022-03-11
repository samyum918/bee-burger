export interface CategoryIf {
  id: number;
  name: string;
}

export interface FoodItemIf {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  foodPreferences?: FoodPreference[] | null | undefined;
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
  foodOptions: OrderedFoodOptionsIf[] | undefined;
}

export interface OrderedFoodOptionsIf {
  optionId: number;
}
