package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "food_set_subcategory")
public class FoodSetSubcategory extends BaseModel {
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="food_set_id", nullable = false)
    private FoodSet foodSet;

    @OneToOne
    @JoinColumn(name = "subcategory_id")
    private Category subcategory;
}
