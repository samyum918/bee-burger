package com.bee.burger.backend.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SubmitOrderRequest {
    @NotNull
    UUID customerId;
    @NotNull
    Integer foodId;
    Set<SubmitOrderOptionsRequest> foodPreferences = new HashSet<>();
}
