CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_food_set` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `customer` (
  `id` binary(255) NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `seat_no` varchar(255) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `food` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `display` bit(1) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(19,2) DEFAULT NULL,
  `sold_out` bit(1) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `food_preference` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `preference_seq` int(11) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `food_id` int(11) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `food_preference_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `additional_price` decimal(19,2) DEFAULT NULL,
  `option_content` varchar(255) DEFAULT NULL,
  `option_no` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `food_preference_id` int(11) NOT NULL,
  `default_option` bit(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `food_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `display` bit(1) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(19,2) DEFAULT NULL,
  `sold_out` bit(1) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `food_set_subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subcategory_id` int(11) DEFAULT NULL,
  `food_set_id` int(11) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `order_food` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` binary(255) DEFAULT NULL,
  `food_id` int(11) DEFAULT NULL,
  `total_price` decimal(19,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `order_food_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `food_preference_option_id` int(11) DEFAULT NULL,
  `order_food_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `order_food_subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `food_id` int(11) DEFAULT NULL,
  `order_food_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `order_food_subcategory_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `food_preference_option_id` int(11) DEFAULT NULL,
  `order_food_subcategory_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `system_params` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (id)
);