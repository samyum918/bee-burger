package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "order_food_option")
public class OrderedFoodOption extends BaseModel {
    @ManyToOne
    @JoinColumn(name="order_food_id")
    private OrderedFood orderFood;

    @OneToOne
    @JoinColumn(name = "food_preference_option_id")
    private FoodPreferenceOption foodPreferenceOption;
}
