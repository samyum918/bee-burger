package com.bee.burger.backend.controller;

import com.bee.burger.backend.dto.OrderRequest;
import com.bee.burger.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/submit")
    public void submitOrder(@RequestBody @Validated OrderRequest request) {
        orderService.submitOrder(request);
    }
}
