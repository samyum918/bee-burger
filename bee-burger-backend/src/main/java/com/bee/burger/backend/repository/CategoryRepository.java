package com.bee.burger.backend.repository;

import com.bee.burger.backend.dto.CategoriesResponse;
import com.bee.burger.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query("SELECT new com.bee.burger.backend.dto.CategoriesResponse(c.id, c.name) FROM Category c")
    List<CategoriesResponse> findAllCategories();
}
