CREATE TABLE category (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  is_food_set bit(1) DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE customer (
  id binary(255) NOT NULL,
  end_time timestamp DEFAULT NULL,
  seat_no varchar(255) DEFAULT NULL,
  start_time timestamp DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food (
  id int(11) NOT NULL AUTO_INCREMENT,
  description varchar(255) DEFAULT NULL,
  display bit(1) DEFAULT NULL,
  img varchar(255) DEFAULT NULL,
  name varchar(255) NOT NULL,
  price decimal(19,2) DEFAULT NULL,
  sold_out bit(1) DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  category_id int(11) NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_preference (
  id int(11) NOT NULL AUTO_INCREMENT,
  preference_seq int(11) DEFAULT NULL,
  question varchar(255) DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  food_id int(11) NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_preference_option (
  id int(11) NOT NULL AUTO_INCREMENT,
  additional_price decimal(19,2) DEFAULT NULL,
  option_content varchar(255) DEFAULT NULL,
  option_no int(11) DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  food_preference_id int(11) NOT NULL,
  default_option bit(1) DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_set (
  id int(11) NOT NULL AUTO_INCREMENT,
  description varchar(255) DEFAULT NULL,
  display bit(1) DEFAULT NULL,
  img varchar(255) DEFAULT NULL,
  name varchar(255) NOT NULL,
  price decimal(19,2) DEFAULT NULL,
  sold_out bit(1) DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  category_id int(11) NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_set_subcategory (
  id int(11) NOT NULL AUTO_INCREMENT,
  subcategory_id int(11) DEFAULT NULL,
  food_set_id int(11) NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food (
  id int(11) NOT NULL AUTO_INCREMENT,
  customer_id binary(255) DEFAULT NULL,
  food_id int(11) DEFAULT NULL,
  total_price decimal(19,2) DEFAULT NULL,
  quantity int(11) DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food_option (
  id int(11) NOT NULL AUTO_INCREMENT,
  food_preference_option_id int(11) DEFAULT NULL,
  order_food_id int(11) DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food_subcategory (
  id int(11) NOT NULL AUTO_INCREMENT,
  food_id int(11) DEFAULT NULL,
  order_food_id int(11) DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food_subcategory_option (
  id int(11) NOT NULL AUTO_INCREMENT,
  food_preference_option_id int(11) DEFAULT NULL,
  order_food_subcategory_id int(11) DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE system_params (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  value varchar(255) NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO category (id, create_time, name, is_food_set) VALUES
(1, now(), 'Set', b'1'),
(2, now(), 'Burger', b'0'),
(3, now(), 'Snack', b'0'),
(4, now(), 'Drink', b'0');

INSERT INTO food (id, create_time, description, display, img, name, price, sold_out, update_time, category_id) VALUES
(1, now(), 'Virgo Burger + 1 Snack + 1 Drink', b'1', '/img/burger1.png', 'Virgo Burger Set', '88.00', b'0', now(), 1),
(2, now(), 'Giga Bites description', b'1', '/img/burger2.png', 'Giga Bites', '92.00', b'0', now(), 2),
(3, now(), 'Flare Burger Set description', b'1', '/img/burger3.png', 'Flare Burger Set', '96.00', b'0', now(), 1),
(4, now(), 'Aristo Burger description', b'1', '/img/burger4.png', 'Aristo Burger', '78.00', b'0', now(), 2),
(5, now(), 'Leonardo Da Foodie description', b'1', '/img/burger5.png', 'Leonardo Da Foodie', '82.00', b'0', now(), 2),
(6, now(), NULL, b'1', '/img/potato_fries.png', 'Potato Fries', '12.00', b'0', now(), 3),
(7, now(), NULL, b'1', '/img/cocacola.png', 'Coca Cola', '8.00', b'0', now(), 4),
(8, now(), '', b'1', '/img/chicken_nugget.jpg', 'Chicken Nugget', '16.00', b'0', now(), 3),
(9, now(), NULL, b'1', '/img/fanta_orange.jpg', 'Fanta Orange', '8.00', b'0', now(), 4);

INSERT INTO food_preference (id, create_time, preference_seq, question, update_time, food_id) VALUES
(1, now(), 1, 'Ice:', now(), 7),
(2, now(), 1, 'Ketchup:', now(), 6),
(3, now(), 1, 'Source:', now(), 8),
(4, now(), 1, 'Ice:', now(), 9);

INSERT INTO food_preference_option (id, create_time, additional_price, option_content, option_no, update_time, food_preference_id, default_option) VALUES
(1, now(), '0.00', 'Normal', 1, now(), 1, b'1'),
(2, now(), '0.00', 'Less Ice', 2, now(), 1, b'0'),
(3, now(), '0.00', 'Ice Free', 3, now(), 1, b'0'),
(4, now(), '0.00', 'No Need', 1, now(), 2, b'0'),
(5, now(), '0.00', 'Tomato Ketchup', 2, now(), 2, b'1'),
(6, now(), '6.00', 'Truffle Ketchup', 3, now(), 2, b'0'),
(7, now(), '0.00', 'No Need', 1, now(), 3, b'0'),
(8, now(), '0.00', 'Honey Source', 2, now(), 3, b'1'),
(9, now(), '3.00', 'Lemon Caper Source', 3, now(), 3, b'0'),
(10, now(), '0.00', 'Normal', 1, now(), 4, b'1'),
(11, now(), '0.00', 'Less Ice', 2, now(), 4, b'0'),
(12, now(), '0.00', 'No Ice', 3, now(), 4, b'0');

INSERT INTO food_set (id, create_time, description, display, img, name, price, sold_out, update_time, category_id) VALUES
(1, now(), 'Virgo Burger + 1 Snack + 1 Drink', b'1', '/img/burger1.png', 'Virgo Burger Set', '88.00', b'0', now(), 1),
(2, now(), 'Flare Burger Set description', b'1', '/img/burger3.png', 'Flare Burger Set', '96.00', b'0', now(), 1);

INSERT INTO food_set_subcategory (id, create_time, subcategory_id, food_set_id) VALUES
(1, now(), 3, 1),
(2, now(), 4, 1),
(3, now(), 3, 2),
(4, now(), 4, 2);

INSERT INTO system_params (id, name, value, create_time) VALUES
(1, 'DAILY_CUSTOMER_LIMIT', '20', now());