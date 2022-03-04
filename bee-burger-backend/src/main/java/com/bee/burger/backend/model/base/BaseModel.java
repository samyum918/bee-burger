package com.bee.burger.backend.model.base;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@MappedSuperclass
public class BaseModel {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "create_time")
    private LocalDateTime createTime;

    @PrePersist
    protected void prePersist() {
        if (createTime == null) {
            createTime = LocalDateTime.now();
        }
    }
}
