package com.bee.burger.backend.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Duration;
import java.time.LocalDateTime;

@Slf4j
@Component
public class ReqResLoggingFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        ContentCachingRequestWrapper requestWrapper = new ContentCachingRequestWrapper(request);
        ContentCachingResponseWrapper responseWrapper = new ContentCachingResponseWrapper(response);
        LocalDateTime stime = LocalDateTime.now();

        filterChain.doFilter(requestWrapper, responseWrapper);

        try {
            String clientIp = requestWrapper.getRemoteHost();
            String uri = requestWrapper.getRequestURI();
            int httpStatus = responseWrapper.getStatus();
            long exeutionTime = Duration.between(stime, LocalDateTime.now()).toMillis();
            log.info("{}|{}|{}|{}", clientIp, uri, httpStatus, exeutionTime);
        } catch (Exception ex) {
            log.error("Exception in ReqResLoggingFilter: ", ex);
        }

        responseWrapper.copyBodyToResponse();
    }
}
