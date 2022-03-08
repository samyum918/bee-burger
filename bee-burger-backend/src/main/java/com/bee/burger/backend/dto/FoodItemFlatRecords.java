package com.bee.burger.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodItemFlatRecords {
    Integer id;
    String name;
    String description;
    String img;
    BigDecimal price;
    Integer fpid;
    String question;
    Integer fpdid;
    String optionContent;
    BigDecimal additionalPrice;
}
