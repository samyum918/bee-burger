package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.OrderFoodDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderFoodDetailRepository extends JpaRepository<OrderFoodDetail, Integer> {
}
