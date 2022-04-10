package com.bee.burger.backend.controller;

import com.bee.burger.backend.dto.CustomerInfoResponse;
import com.bee.burger.backend.service.CustomerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CustomerController.class)
public class CustomerControllerTest {
    private static final String GET_CUSTOMER_INFO_API = "/api/customer/get-customer-info";

    @Autowired
    private MockMvc mvc;

    @MockBean
    private CustomerService customerService;

    @Test
    public void shouldCallGetCustomerInfoAPISuccessfully() throws Exception {
        String seatNo = "1A";

        CustomerInfoResponse response = new CustomerInfoResponse();
        response.setCustomerId(UUID.randomUUID());
        response.setSeatNo(seatNo);
        response.setEndTime(LocalDateTime.now());

        when(customerService.getCustomerInfo()).thenReturn(response);
        mvc.perform(MockMvcRequestBuilders.get(GET_CUSTOMER_INFO_API).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.seatNo").value(seatNo));
    }
}
