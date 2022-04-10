package com.bee.burger.backend.repository;

import com.bee.burger.backend.model.SystemParams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SystemParamsRepository extends JpaRepository<SystemParams, Integer> {
    Optional<SystemParams> findByName(String name);
}
