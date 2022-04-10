package com.bee.burger.backend.service;

import com.bee.burger.backend.dto.OrderRequest;
import com.bee.burger.backend.dto.OrderedSubCategoryFood;
import com.bee.burger.backend.model.*;
import com.bee.burger.backend.repository.OrderedFoodOptionRepository;
import com.bee.burger.backend.repository.OrderFoodRepository;
import com.bee.burger.backend.repository.OrderedFoodSubcategoryOptionRepository;
import com.bee.burger.backend.repository.OrderedFoodSubcategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.UUID;

@Slf4j
@Service
public class OrderService {
    @Autowired
    EntityManager em;

    @Autowired
    OrderFoodRepository orderFoodRepository;

    @Autowired
    OrderedFoodOptionRepository orderedFoodOptionRepository;

    @Autowired
    OrderedFoodSubcategoryRepository orderedFoodSubcategoryRepository;

    @Autowired
    OrderedFoodSubcategoryOptionRepository orderedFoodSubcategoryOptionRepository;

    @Transactional
    public void submitOrder(OrderRequest request) {
        request.getOrderedFood().forEach(f -> {
            OrderedFood orderedFood = new OrderedFood();
            orderedFood.setCustomer(em.getReference(Customer.class, UUID.fromString(request.getCustomerId())));
            orderedFood.setFood(em.getReference(Food.class, f.getFoodId()));
            orderedFood.setQuantity(f.getQuantity());
            orderedFood.setTotalPrice(f.getTotalPrice());
            orderFoodRepository.save(orderedFood);

            f.getSubCategoryFoods().forEach(sf -> {
                OrderedFoodSubcategory orderedFoodSubcategory = new OrderedFoodSubcategory();
                orderedFoodSubcategory.setOrderFood(orderedFood);
                orderedFoodSubcategory.setFood(em.getReference(Food.class, sf.getFoodId()));
                orderedFoodSubcategoryRepository.save(orderedFoodSubcategory);

                for(int i = 0; i < sf.getFoodOptionIds().length; i++) {
                    OrderedFoodSubcategoryOption orderedFoodSubcategoryOption = new OrderedFoodSubcategoryOption();
                    orderedFoodSubcategoryOption.setOrderedFoodSubcategory(orderedFoodSubcategory);
                    orderedFoodSubcategoryOption.setFoodPreferenceOption(
                            em.getReference(FoodPreferenceOption.class, sf.getFoodOptionIds()[i]));
                    orderedFoodSubcategoryOptionRepository.save(orderedFoodSubcategoryOption);
                }
            });

            for(int i = 0; i < f.getFoodOptionIds().length; i++) {
                OrderedFoodOption orderedFoodOption = new OrderedFoodOption();
                orderedFoodOption.setOrderFood(orderedFood);
                orderedFoodOption.setFoodPreferenceOption(
                        em.getReference(FoodPreferenceOption.class, f.getFoodOptionIds()[i]));
                orderedFoodOptionRepository.save(orderedFoodOption);
            }
        });
    }
}
