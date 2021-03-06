package com.bee.burger.backend.controller;

import com.bee.burger.backend.model.Category;
import com.bee.burger.backend.repository.CategoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CategoryController.class)
public class CategoryControllerTest {
    private static final String GET_ALL_CATEGORIES_API = "/api/category/all";

    @Autowired
    private MockMvc mvc;

    @MockBean
    private CategoryRepository categoryRepository;

    @Test
    public void shouldCallGetCategoriesAPISuccessfully() throws Exception {
        Category categorySet = new Category();
        categorySet.setId(1);
        categorySet.setName("Set");
        categorySet.setIsFoodSet(true);

        Category categoryFood = new Category();
        categoryFood.setId(2);
        categoryFood.setName("Food");
        categoryFood.setIsFoodSet(false);

        when(categoryRepository.findAll()).thenReturn(Arrays.asList(categorySet, categoryFood));
        mvc.perform(MockMvcRequestBuilders.get(GET_ALL_CATEGORIES_API).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Set"));
    }
}
