package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "order_food_subcategory_option")
public class OrderedFoodSubcategoryOption extends BaseModel {
    @ManyToOne
    @JoinColumn(name="order_food_subcategory_id")
    private OrderedFoodSubcategory orderedFoodSubcategory;

    @OneToOne
    @JoinColumn(name = "food_preference_option_id")
    private FoodPreferenceOption foodPreferenceOption;
}
