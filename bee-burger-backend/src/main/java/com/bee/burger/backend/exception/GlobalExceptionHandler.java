package com.bee.burger.backend.exception;

import com.bee.burger.backend.common.ControllerRequestFieldViolations;
import com.bee.burger.backend.common.ExceptionResponse;
import com.bee.burger.backend.enums.ResponseCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.time.format.DateTimeParseException;
import java.util.stream.Collectors;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ApplicationRuntimeException.class)
    public ResponseEntity<ExceptionResponse<?>> handleApplicationRuntimeException(
            final ApplicationRuntimeException exception) {
        log.error("Application runtime exception occurred with details", exception);
        ExceptionResponse<?> response;
        response = exception.getMessage() == null
                ? ExceptionResponse.fail(exception.getResponseCode())
                : ExceptionResponse.fail(exception.getResponseCode(), exception.getMessage());
        return ResponseEntity.status(exception.getStatusCode()).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseCode> handlerUnexpectedGeneralException(final Exception ex) {
        log.error("Unexpected exception occurred", ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResponseCode.INTERNAL_UNEXPECTED_EXCEPTION);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ExceptionResponse<ControllerRequestFieldViolations>> handlerUnexpectedGeneralException(
            final ConstraintViolationException ex) {
        log.error("User input constraint violation exception occurred", ex);
        ControllerRequestFieldViolations violations = new ControllerRequestFieldViolations(ex.getConstraintViolations()
                .stream().map(ConstraintViolation::getMessage).collect(Collectors.toSet()));
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ExceptionResponse.fail(ResponseCode.PARAM_INVALID, violations));
    }

    @ExceptionHandler(DateTimeParseException.class)
    public ResponseEntity<ExceptionResponse<?>> handleDatetimeParseException(final DateTimeParseException ex) {
        log.error("DateTimeParseException occurred with details", ex);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ExceptionResponse.fail(ResponseCode.INVALID_DATETIME_INPUT_FORMAT));
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatus status,
                                                                  WebRequest request) {
        log.error("MethodArgumentNotValidException occurred with details", ex);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ExceptionResponse.fail(ResponseCode.PARAM_INVALID));
    }
}
