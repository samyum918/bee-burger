package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "food_preference")
public class FoodPreference extends BaseModel {
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="food_id", nullable = false)
    private Food food;
    private Integer preferenceSeq;
    private String question;
    private LocalDateTime updateTime;

    @JsonManagedReference
    @OrderBy("optionNo")
    @OneToMany(mappedBy = "foodPreference", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<FoodPreferenceOption> foodPreferenceOptionSet = new HashSet<>();

    @JsonProperty(value = "foodPreferenceOptionSet")
    public void setFoodPreferenceOptionSet(Set<FoodPreferenceOption> items) {
        if(foodPreferenceOptionSet != null) {
            foodPreferenceOptionSet.clear();
            foodPreferenceOptionSet.addAll(items);
        }
    }
}
