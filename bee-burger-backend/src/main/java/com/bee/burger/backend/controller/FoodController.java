package com.bee.burger.backend.controller;

import com.bee.burger.backend.dto.FoodItemsResponse;
import com.bee.burger.backend.dto.FoodSetItemsResponse;
import com.bee.burger.backend.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    @Autowired
    FoodService foodService;

    @GetMapping("/get-food-items-by-category")
    public List<FoodItemsResponse> getFoodItemsByCategory(@RequestParam @NotNull Integer catId) {
        return foodService.getFoodItemsByCategory(catId);
    }

    @GetMapping("/get-food-set-items")
    public List<FoodSetItemsResponse> getFoodSetItems(@RequestParam @NotNull Integer catId) {
        return foodService.getFoodSetItems(catId);
    }
}
