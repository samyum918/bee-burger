package com.bee.burger.backend.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class OrderedSubCategoryFood {
    Integer foodId;
    Integer[] foodOptionIds;
}
