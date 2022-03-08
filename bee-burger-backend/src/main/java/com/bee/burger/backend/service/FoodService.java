package com.bee.burger.backend.service;

import com.bee.burger.backend.dto.FoodItemFlatRecords;
import com.bee.burger.backend.dto.FoodItemsResponse;
import com.bee.burger.backend.dto.FoodPreferenceOptionsResponse;
import com.bee.burger.backend.dto.FoodPreferenceResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.*;

@Slf4j
@Service
public class FoodService {
    @PersistenceContext
    EntityManager em;

    public List<FoodItemsResponse> getFoodItemsByCategory(Integer catId) {
        List<FoodItemFlatRecords> sqlResult = em.createQuery(
                "select new com.bee.burger.backend.dto.FoodItemFlatRecords(f.id, f.name, f.description, f.img, " +
                "f.price, fp.id, fp.question, fpd.id, fpd.optionContent, fpd.additionalPrice) " +
                "from Food f " +
                "left join FoodPreference fp on f.id = fp.food.id " +
                "left join FoodPreferenceOption fpd on fp.id = fpd.foodPreference.id " +
                "where f.category.id = :catId order by f.id, fp.preferenceSeq, fpd.optionNo", FoodItemFlatRecords.class)
                .setParameter("catId", catId)
                .getResultList();

        Map<Integer, List<FoodPreferenceResponse>> foodMap = new HashMap<>();
        Map<Integer, List<FoodPreferenceOptionsResponse>> foodPreferenceMap = new HashMap<>();

        for(FoodItemFlatRecords sqlRecord : sqlResult) {
            Integer fpid = sqlRecord.getFpid();
            if(fpid == null) {
                continue;
            }
            FoodPreferenceOptionsResponse foodPreferenceDetailResponse = new FoodPreferenceOptionsResponse(
                    sqlRecord.getFpdid(), sqlRecord.getOptionContent(), sqlRecord.getAdditionalPrice());
            if(foodPreferenceMap.containsKey(fpid)) {
                if(!foodPreferenceMap.get(fpid).contains(foodPreferenceDetailResponse)) {
                    foodPreferenceMap.get(fpid).add(foodPreferenceDetailResponse);
                }
            }
            else {
                foodPreferenceMap.put(fpid, new ArrayList<>(Collections.singletonList(foodPreferenceDetailResponse)));
            }
        }

        for(FoodItemFlatRecords sqlRecord : sqlResult) {
            Integer id = sqlRecord.getId();
            Integer fpid = sqlRecord.getFpid();
            FoodPreferenceResponse foodPreferenceResponse = new FoodPreferenceResponse();
            foodPreferenceResponse.setId(sqlRecord.getFpid());
            foodPreferenceResponse.setQuestion(sqlRecord.getQuestion());
            foodPreferenceResponse.setOptions(foodPreferenceMap.get(sqlRecord.getFpid()));

            if(foodMap.containsKey(id)) {
                if(!foodMap.get(id).contains(foodPreferenceResponse)) {
                    foodMap.get(id).add(foodPreferenceResponse);
                }
            }
            else {
                if(fpid == null) {
                    foodMap.put(id, null);
                }
                else {
                    foodMap.put(id, new ArrayList<>(Collections.singletonList(foodPreferenceResponse)));
                }
            }
        }

        List<FoodItemsResponse> result = new ArrayList<>();
        foodMap.forEach((k, v) -> {
            Optional<FoodItemFlatRecords> recordOpt = sqlResult.stream().filter(
                    fields -> Objects.equals(k, fields.getId())).findFirst();
            if(recordOpt.isPresent()) {
                FoodItemsResponse foodItemsResponse = new FoodItemsResponse();
                foodItemsResponse.setId(recordOpt.get().getId());
                foodItemsResponse.setName(recordOpt.get().getName());
                foodItemsResponse.setDescription(recordOpt.get().getDescription());
                foodItemsResponse.setImg(recordOpt.get().getImg());
                foodItemsResponse.setPrice(recordOpt.get().getPrice());
                if(foodMap.containsKey(recordOpt.get().getId())) {
                    foodItemsResponse.setFoodPreferences(foodMap.get(recordOpt.get().getId()));
                }
                result.add(foodItemsResponse);
            }
        });

        return result;
    }
}
