package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.Food;
import com.bee.burger.backend.model.FoodPreference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodPreferenceRepository extends JpaRepository<FoodPreference, Integer> {
    List<FoodPreference> findByFoodOrderByPreferenceSeqAsc(Food food);
}
