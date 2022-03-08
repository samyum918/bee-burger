package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.FoodPreferenceOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodPreferenceDetailRepository extends JpaRepository<FoodPreferenceOption, Integer> {
}
