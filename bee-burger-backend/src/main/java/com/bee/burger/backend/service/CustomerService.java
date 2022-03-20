package com.bee.burger.backend.service;

import com.bee.burger.backend.dto.CustomerInfoResponse;
import com.bee.burger.backend.model.Customer;
import com.bee.burger.backend.repository.CustomerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Slf4j
@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    public CustomerInfoResponse getCustomerInfo() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime endTime = now.plusHours(1L).plusMinutes(30L);

        Customer customer = new Customer();
        customer.setSeatNo(getRandomSeatNo());
        customer.setStartTime(now);
        customer.setEndTime(endTime);
        Customer updatedCustomer = customerRepository.save(customer);

        return new CustomerInfoResponse(updatedCustomer.getId(),
                updatedCustomer.getSeatNo(), updatedCustomer.getEndTime());
    }

    String getRandomSeatNo() {
        String subSeatAlphabet = "AB";
        Random rand = new Random();
        Integer seat = rand.nextInt(20) + 1;
        Integer nextInt = rand.nextInt(2);
        String subSeat = subSeatAlphabet.substring(nextInt, nextInt + 1);
        return seat + subSeat;
    }
}
