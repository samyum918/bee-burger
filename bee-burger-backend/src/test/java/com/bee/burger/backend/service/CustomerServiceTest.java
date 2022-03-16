package com.bee.burger.backend.service;

import com.bee.burger.backend.model.Customer;
import com.bee.burger.backend.repository.CustomerRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class CustomerServiceTest {
    @Mock
    private CustomerRepository customerRepository;

    @InjectMocks
    private CustomerService customerService;

    @Test
    public void shouldGetCustomerInfoSuccessfully() {
        Customer customerInfo = new Customer();
        customerInfo.setId(UUID.randomUUID());
        customerInfo.setSeatNo("1A");
        customerInfo.setEndTime(LocalDateTime.now());

        when(customerRepository.save(any())).thenReturn(customerInfo);
        Assertions.assertEquals(customerInfo.getSeatNo(), customerService.getCustomerInfo().getSeatNo());
    }
}
