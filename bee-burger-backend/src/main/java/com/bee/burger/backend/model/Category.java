package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "category")
public class Category extends BaseModel {
    @Column(name = "name", nullable = false)
    private String name;

    @OneToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Food> foodList = new ArrayList<>();

    public void addFood(Food food) {
        foodList.add(food);
        food.setCategory(this);
    }

    public void removeFood(Food food) {
        foodList.remove(food);
        food.setCategory(null);
    }
}
