package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "order_food_subcategory")
public class OrderedFoodSubcategory extends BaseModel {
    @ManyToOne
    @JoinColumn(name="order_food_id")
    private OrderedFood orderFood;

    @OneToOne
    @JoinColumn(name = "food_id")
    private Food food;
}
