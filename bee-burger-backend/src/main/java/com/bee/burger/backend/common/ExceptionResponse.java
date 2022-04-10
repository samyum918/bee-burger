package com.bee.burger.backend.common;

import com.bee.burger.backend.enums.ResponseCode;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ExceptionResponse<T> {
    private int code;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String msg;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private T detail;

    public ExceptionResponse(final int code, final String msg) {
        this.code = code;
        this.msg = msg;
    }

    public static ExceptionResponse<Void> fail(final ResponseCode responseCode) {
        return new ExceptionResponse<>(responseCode.getStatusCode(), responseCode.getErrorMsg());
    }

    public static <V> ExceptionResponse<V> fail(final ResponseCode responseCode, final V detail) {
        return new ExceptionResponse<>(responseCode.getStatusCode(), responseCode.getErrorMsg(), detail);
    }
}
