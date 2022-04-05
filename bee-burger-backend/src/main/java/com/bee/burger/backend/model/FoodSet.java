package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "food_set")
public class FoodSet extends BaseModel {
    @Column(name = "name", nullable = false)
    private String name;
    private String description;
    private String img;
    private BigDecimal price = BigDecimal.ZERO;
    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private Category category;
    private Boolean display;
    private Boolean soldOut;
    private LocalDateTime updateTime;

    @JsonManagedReference
    @OrderBy("category.id")
    @OneToMany(mappedBy = "foodSet", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<FoodSetItemCategory> foodSetItemCategorySet = new HashSet<>();

    @JsonProperty(value = "foodSetItemCategorySet")
    public void setFoodSetItemCategorySet(Set<FoodSetItemCategory> items) {
        if(foodSetItemCategorySet != null) {
            foodSetItemCategorySet.clear();
            foodSetItemCategorySet.addAll(items);
        }
    }
}
