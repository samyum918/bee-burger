package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.FoodSet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodSetRepository extends JpaRepository<FoodSet, Integer> {
}
