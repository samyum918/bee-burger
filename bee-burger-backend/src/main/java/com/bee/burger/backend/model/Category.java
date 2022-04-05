package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "category")
public class Category extends BaseModel {
    @Column(name = "name", nullable = false)
    private String name;
    private Boolean isFoodSet;
}
