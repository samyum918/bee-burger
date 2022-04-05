package com.bee.burger.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FoodSetItemsResponse {
    private Integer id;
    private String name;
    private String description;
    private String img;
    private BigDecimal price;
    private List<FoodSelectionCategoriesResponse> foodSelectionCategories;
}
