package com.bee.burger.backend.controller;

import com.bee.burger.backend.dto.FoodPreferenceRequest;
import com.bee.burger.backend.model.Category;
import com.bee.burger.backend.model.FoodPreference;
import com.bee.burger.backend.repository.CategoryRepository;
import com.bee.burger.backend.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    @Autowired
    FoodService foodService;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/get-by-category")
    public List<Category> getFoodByCategory() {
        return categoryRepository.findAll();
    }

    @PostMapping("/get-food-preference")
    public List<FoodPreference> getFoodPreference(@Valid @RequestBody FoodPreferenceRequest request) {
        return foodService.getFoodPreference(request);
    }
}
