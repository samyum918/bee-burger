package com.bee.burger.backend.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    @NotNull
    String customerId;
    Set<OrderedFoodRequest> orderedFood = new HashSet<>();
}
