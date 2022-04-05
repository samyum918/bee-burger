package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.FoodSet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodSetRepository extends JpaRepository<FoodSet, Integer> {
    List<FoodSet> findAllByCategory_Id(Integer catId);
}
