package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;

@Getter
@Setter
@Entity
@Table(name = "food_preference")
public class FoodPreference extends BaseModel {
    @ManyToOne
    @JoinColumn(name="food_id", nullable = false)
    private Food food;

    @Column(name = "preference_seq")
    private Integer preferenceSeq;

    @Column(name = "question")
    private String question;

    @Column(name = "update_time")
    private LocalDateTime updateTime;
}
