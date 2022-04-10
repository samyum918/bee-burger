package com.bee.burger.backend.exception;

import com.bee.burger.backend.enums.ResponseCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ApplicationRuntimeException extends RuntimeException {
    private ResponseCode responseCode;
    private int statusCode;
    private Object detail;

    public ApplicationRuntimeException(ResponseCode responseCode, int statusCode, Object detail) {
        super(detail == null ? "null" : detail.toString());
        this.responseCode = responseCode;
        this.statusCode = statusCode;
        this.detail = detail;
    }
}
