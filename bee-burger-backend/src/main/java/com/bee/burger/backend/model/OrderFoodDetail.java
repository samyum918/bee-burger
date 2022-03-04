package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "order_food_detail")
public class OrderFoodDetail extends BaseModel {
    @ManyToOne
    @JoinColumn(name="order_food_id")
    private OrderFood orderFood;

    @OneToOne
    @JoinColumn(name = "food_preference_detail_id")
    private FoodPreferenceDetail foodPreferenceDetail;
}
