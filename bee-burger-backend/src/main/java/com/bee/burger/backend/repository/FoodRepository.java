package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {
    List<Food> findAllByCategory_Id(Integer catId);
}
