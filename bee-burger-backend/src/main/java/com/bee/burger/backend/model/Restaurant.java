package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "restaurant")
public class Restaurant extends BaseModel {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "update_time")
    private LocalDateTime updateTime;
}
