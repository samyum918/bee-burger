package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "food_set_item_category")
public class FoodSetItemCategory extends BaseModel {
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="food_set_id", nullable = false)
    private FoodSet foodSet;

    @OneToOne
    @JoinColumn(name = "category_selection_id")
    private Category category;
}
