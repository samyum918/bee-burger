package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query("SELECT COUNT(c) FROM Customer c WHERE c.createTime >= :today")
    Integer countCustomerToday(@Param("today") LocalDateTime today);
}
