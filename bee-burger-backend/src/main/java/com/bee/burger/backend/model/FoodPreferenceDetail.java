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
@Table(name = "food_preference_detail")
public class FoodPreferenceDetail extends BaseModel {
    @ManyToOne
    @JoinColumn(name="food_preference_id", nullable = false)
    private FoodPreference foodPreference;

    @Column(name = "choice_no")
    private Integer choiceNo;

    @Column(name = "choice_img")
    private String choiceImg;

    @Column(name = "choice_content")
    private String choiceContent;

    @Column(name = "additional_price")
    private BigDecimal additionalPrice = BigDecimal.ZERO;

    @Column(name = "update_time")
    private LocalDateTime updateTime;
}
