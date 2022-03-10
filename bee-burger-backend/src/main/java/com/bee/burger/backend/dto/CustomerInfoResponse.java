package com.bee.burger.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerInfoResponse {
    UUID customerId;
    String seatNo;
    LocalDateTime endTime;
}
