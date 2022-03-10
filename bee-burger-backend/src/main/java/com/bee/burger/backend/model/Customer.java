package com.bee.burger.backend.model;

import com.bee.burger.backend.model.base.BaseModel;
import com.bee.burger.backend.model.base.BaseModelUUID;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "customer")
public class Customer extends BaseModelUUID {
    @Column(name = "seat_no")
    private String seatNo;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;
}
