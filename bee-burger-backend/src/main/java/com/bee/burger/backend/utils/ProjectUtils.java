package com.bee.burger.backend.utils;

import org.springframework.beans.BeanUtils;
import org.springframework.util.CollectionUtils;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ProjectUtils {
    public static <T> T transformFrom(Object source, Class<T> targetClass, String... ignoreProperties) {
        if (source == null || targetClass == null) {
            return null;
        }

        T targetInstance = null;
        try {
            targetInstance = targetClass.newInstance();
            BeanUtils.copyProperties(source, targetInstance, ignoreProperties);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return targetInstance;
    }


    public static <T> List<T> transformFromInBatch(Collection<?> sources, Class<T> targetClass,
                                                   String... ignoreProperties) {
        if (CollectionUtils.isEmpty(sources)) {
            return Collections.emptyList();
        }

        return sources.stream()
                .map(source -> transformFrom(source, targetClass, ignoreProperties))
                .collect(Collectors.toList());
    }
}
