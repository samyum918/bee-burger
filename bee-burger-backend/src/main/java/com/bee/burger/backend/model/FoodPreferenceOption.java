package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "food_preference_option")
public class FoodPreferenceOption extends BaseModel {
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="food_preference_id", nullable = false)
    private FoodPreference foodPreference;
    private Integer optionNo;
    private String optionContent;
    private BigDecimal additionalPrice = BigDecimal.ZERO;
    private Boolean defaultOption;
    private LocalDateTime updateTime;
}
