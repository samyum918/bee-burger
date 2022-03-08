package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
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
    @ManyToOne
    @JoinColumn(name="food_preference_id", nullable = false)
    private FoodPreference foodPreference;

    @Column(name = "option_no")
    private Integer optionNo;

    @Column(name = "option_content")
    private String optionContent;

    @Column(name = "additional_price")
    private BigDecimal additionalPrice = BigDecimal.ZERO;

    @Column(name = "update_time")
    private LocalDateTime updateTime;
}
