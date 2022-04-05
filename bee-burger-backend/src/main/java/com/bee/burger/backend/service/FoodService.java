package com.bee.burger.backend.service;

import com.bee.burger.backend.dto.*;
import com.bee.burger.backend.model.Food;
import com.bee.burger.backend.model.FoodSet;
import com.bee.burger.backend.repository.FoodRepository;
import com.bee.burger.backend.repository.FoodSetRepository;
import com.bee.burger.backend.utils.ProjectUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
public class FoodService {
    @Autowired
    FoodRepository foodRepository;

    @Autowired
    FoodSetRepository foodSetRepository;

    public List<FoodItemsResponse> getFoodItemsByCategory(Integer catId) {
        List<Food> foodList = foodRepository.findAllByCategory_Id(catId);
        return foodList.stream().map(fi -> {
            FoodItemsResponse fir = ProjectUtils.transformFrom(fi, FoodItemsResponse.class, "foodPreferences");
            fir.setFoodPreferences(fi.getFoodPreferenceSet().stream().map(fp -> {
                FoodPreferenceResponse fpr = ProjectUtils.transformFrom(fp, FoodPreferenceResponse.class, "options");
                fpr.setOptions(fp.getFoodPreferenceOptionSet().stream().map(fpo ->
                                ProjectUtils.transformFrom(fpo, FoodPreferenceOptionsResponse.class))
                        .collect(Collectors.toList()));
                return fpr;
            }).collect(Collectors.toList()));
            return fir;
        }).collect(Collectors.toList());
    }

    public List<FoodSetItemsResponse> getFoodSetItems(Integer catId) {
        List<FoodSet> foodSetList = foodSetRepository.findAllByCategory_Id(catId);
        return foodSetList.stream().map(fs -> {
            FoodSetItemsResponse responseItem = ProjectUtils.transformFrom(fs,
                    FoodSetItemsResponse.class, "foodSelectionCategories");
            responseItem.setFoodSelectionCategories(
                    fs.getFoodSetItemCategorySet().stream()
                            .map(cs -> ProjectUtils.transformFrom(cs.getCategory(),
                                    FoodSelectionCategoriesResponse.class))
                            .collect(Collectors.toList())
            );
            return responseItem;
        }).collect(Collectors.toList());
    }
}
