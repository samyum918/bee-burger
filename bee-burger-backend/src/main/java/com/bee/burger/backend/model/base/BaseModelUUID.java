package com.bee.burger.backend.model.base;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@ToString
@MappedSuperclass
public class BaseModelUUID {
    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    private UUID id;

    @Column(name = "create_time")
    private LocalDateTime createTime;

    @PrePersist
    protected void prePersist() {
        if (createTime == null) {
            createTime = LocalDateTime.now();
        }
    }
}
