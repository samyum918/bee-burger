package com.bee.burger.backend.service;

import com.bee.burger.backend.dto.OrderRequest;
import com.bee.burger.backend.repository.OrderFoodDetailRepository;
import com.bee.burger.backend.repository.OrderFoodRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class OrderService {
    @Autowired
    OrderFoodRepository orderFoodRepository;

    @Autowired
    OrderFoodDetailRepository orderFoodDetailRepository;

    public void submitOrder(OrderRequest request) {

    }
}
