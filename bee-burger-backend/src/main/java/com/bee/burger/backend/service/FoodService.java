package com.bee.burger.backend.service;

import com.bee.burger.backend.dto.FoodPreferenceRequest;
import com.bee.burger.backend.model.Food;
import com.bee.burger.backend.model.FoodPreference;
import com.bee.burger.backend.repository.FoodPreferenceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Slf4j
@Service
public class FoodService {
    @PersistenceContext
    EntityManager em;

    @Autowired
    FoodPreferenceRepository foodPreferenceRepository;

    public List<FoodPreference> getFoodPreference(FoodPreferenceRequest request) {
        return foodPreferenceRepository.findByFoodOrderByPreferenceSeqAsc(em.getReference(Food.class, request.getFoodId()));
    }
}
