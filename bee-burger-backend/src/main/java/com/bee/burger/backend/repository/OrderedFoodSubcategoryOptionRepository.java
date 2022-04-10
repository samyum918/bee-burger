package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.OrderedFoodSubcategoryOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderedFoodSubcategoryOptionRepository extends JpaRepository<OrderedFoodSubcategoryOption, Integer> {
}
