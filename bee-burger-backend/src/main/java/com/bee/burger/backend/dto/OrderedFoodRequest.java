package com.bee.burger.backend.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Set;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class OrderedFoodRequest {
    @NotNull
    Integer foodId;
    Integer quantity;
    BigDecimal totalPrice;
    Set<OrderedFoodOptionsRequest> foodOptions;
}
