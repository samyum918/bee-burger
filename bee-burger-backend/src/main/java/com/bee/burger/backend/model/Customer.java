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
    private String seatNo;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
