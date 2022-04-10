package com.bee.burger.backend.service;

import com.bee.burger.backend.dto.CustomerInfoResponse;
import com.bee.burger.backend.enums.ResponseCode;
import com.bee.burger.backend.exception.ApplicationRuntimeException;
import com.bee.burger.backend.model.Customer;
import com.bee.burger.backend.model.SystemParams;
import com.bee.burger.backend.repository.CustomerRepository;
import com.bee.burger.backend.repository.SystemParamsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Slf4j
@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    SystemParamsRepository systemParamsRepository;

    public CustomerInfoResponse getCustomerInfo() {
        Optional<SystemParams> systemParamsOpt = systemParamsRepository.findByName("DAILY_CUSTOMER_LIMIT");
        if(!systemParamsOpt.isPresent()) {
            throw new ApplicationRuntimeException(ResponseCode.SYSTEM_PARAM_NOT_EXISTS, HttpStatus.BAD_REQUEST.value(),
                    "DAILY_CUSTOMER_LIMIT param not exists.");
        }
        Integer dailyCustomerLimit = Integer.valueOf(systemParamsOpt.get().getValue());
        Integer todayCustomerToday = customerRepository.countCustomerToday(LocalDate.now().atStartOfDay());
        if(todayCustomerToday > dailyCustomerLimit) {
            throw new ApplicationRuntimeException(ResponseCode.CUSTOMER_DAILY_LIMIT_EXCEED,
                    HttpStatus.BAD_REQUEST.value(), "Customer daily limit exceed.");
        }

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
