package com.bee.burger.backend.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ResponseCode {
    SUCCESS(200, "succeed"),
    PARAM_INVALID(4000, "user input invalid"),
    PARAM_EMPTY(4001, "user input blank argument"),
    INVALID_DATETIME_INPUT_FORMAT(4002, "Input date or datetime format is invalid"),
    SYSTEM_PARAM_NOT_EXISTS(4003, "system param not exists"),
    CUSTOMER_DAILY_LIMIT_EXCEED(4004, "customer daily limit exceed"),
    INTERNAL_UNEXPECTED_EXCEPTION(5000, "some internal unexpected error occurred.");

    private final Integer statusCode;
    private final String errorMsg;
}
