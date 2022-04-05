package com.bee.burger.backend.controller;

import com.bee.burger.backend.model.Category;
import com.bee.burger.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/all")
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }
}
