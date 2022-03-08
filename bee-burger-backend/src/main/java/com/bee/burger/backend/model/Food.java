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
@Table(name = "food")
public class Food extends BaseModel {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "img")
    private String img;

    @Column(name = "price")
    private BigDecimal price = BigDecimal.ZERO;

    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private Category category;

    @Column(name = "display")
    private Boolean display;

    @Column(name = "sold_out")
    private Boolean soldOut;

    @Column(name = "update_time")
    private LocalDateTime updateTime;
}
