package com.bee.burger.backend.controller;

import com.bee.burger.backend.dto.CustomerInfoResponse;
import com.bee.burger.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @GetMapping("/get-customer-info")
    public CustomerInfoResponse getCustomerInfo() {
        return customerService.getCustomerInfo();
    }
}
