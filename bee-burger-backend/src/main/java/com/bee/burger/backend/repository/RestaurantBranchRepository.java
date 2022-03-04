package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.RestaurantBranch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantBranchRepository extends JpaRepository<RestaurantBranch, Integer> {
}
