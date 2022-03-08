package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.OrderedFood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderFoodRepository extends JpaRepository<OrderedFood, Integer> {
}
