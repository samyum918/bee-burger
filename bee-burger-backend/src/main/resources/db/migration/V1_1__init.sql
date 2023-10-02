CREATE TABLE category (
  id serial NOT NULL,
  name varchar(255) NOT NULL,
  is_food_set boolean DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE customer (
  id uuid NOT NULL,
  end_time timestamp DEFAULT NULL,
  seat_no varchar(255) DEFAULT NULL,
  start_time timestamp DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food (
  id serial NOT NULL,
  description varchar(255) DEFAULT NULL,
  display boolean DEFAULT NULL,
  img varchar(255) DEFAULT NULL,
  name varchar(255) NOT NULL,
  price numeric(19,2) DEFAULT NULL,
  sold_out boolean DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  category_id integer NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_preference (
  id serial NOT NULL,
  preference_seq integer DEFAULT NULL,
  question varchar(255) DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  food_id integer NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_preference_option (
  id serial NOT NULL,
  additional_price numeric(19,2) DEFAULT NULL,
  option_content varchar(255) DEFAULT NULL,
  option_no integer DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  food_preference_id integer NOT NULL,
  default_option boolean DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_set (
  id serial NOT NULL,
  description varchar(255) DEFAULT NULL,
  display boolean DEFAULT NULL,
  img varchar(255) DEFAULT NULL,
  name varchar(255) NOT NULL,
  price numeric(19,2) DEFAULT NULL,
  sold_out boolean DEFAULT NULL,
  update_time timestamp DEFAULT NULL,
  category_id integer NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food_set_subcategory (
  id serial NOT NULL,
  subcategory_id integer DEFAULT NULL,
  food_set_id integer NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food (
  id serial NOT NULL,
  customer_id uuid DEFAULT NULL,
  food_id integer DEFAULT NULL,
  total_price numeric(19,2) DEFAULT NULL,
  quantity integer DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food_option (
  id serial NOT NULL,
  food_preference_option_id integer DEFAULT NULL,
  order_food_id integer DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food_subcategory (
  id serial NOT NULL,
  food_id integer DEFAULT NULL,
  order_food_id integer DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_food_subcategory_option (
  id serial NOT NULL,
  food_preference_option_id integer DEFAULT NULL,
  order_food_subcategory_id integer DEFAULT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE system_params (
  id serial NOT NULL,
  name varchar(255) NOT NULL,
  value varchar(255) NOT NULL,
  create_time timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO category (id, create_time, name, is_food_set) VALUES
(1, now(), 'Set', true),
(2, now(), 'Burger', false),
(3, now(), 'Snack', false),
(4, now(), 'Drink', false);

INSERT INTO food (id, create_time, description, display, img, name, price, sold_out, update_time, category_id) VALUES
(1, now(), 'Virgo Burger + 1 Snack + 1 Drink', true, '/img/burger1.png', 'Virgo Burger Set', '88.00', false, now(), 1),
(2, now(), 'Giga Bites description', true, '/img/burger2.png', 'Giga Bites', '92.00', false, now(), 2),
(3, now(), 'Flare Burger Set description', true, '/img/burger3.png', 'Flare Burger Set', '96.00', false, now(), 1),
(4, now(), 'Aristo Burger description', true, '/img/burger4.png', 'Aristo Burger', '78.00', false, now(), 2),
(5, now(), 'Leonardo Da Foodie description', true, '/img/burger5.png', 'Leonardo Da Foodie', '82.00', false, now(), 2),
(6, now(), NULL, true, '/img/potato_fries.png', 'Potato Fries', '12.00', false, now(), 3),
(7, now(), NULL, true, '/img/cocacola.png', 'Coca Cola', '8.00', false, now(), 4),
(8, now(), '', true, '/img/chicken_nugget.jpg', 'Chicken Nugget', '16.00', false, now(), 3),
(9, now(), NULL, true, '/img/fanta_orange.jpg', 'Fanta Orange', '8.00', false, now(), 4);

INSERT INTO food_preference (id, create_time, preference_seq, question, update_time, food_id) VALUES
(1, now(), 1, 'Ice:', now(), 7),
(2, now(), 1, 'Ketchup:', now(), 6),
(3, now(), 1, 'Source:', now(), 8),
(4, now(), 1, 'Ice:', now(), 9);

INSERT INTO food_preference_option (id, create_time, additional_price, option_content, option_no, update_time, food_preference_id, default_option) VALUES
(1, now(), '0.00', 'Normal', 1, now(), 1, true),
(2, now(), '0.00', 'Less Ice', 2, now(), 1, false),
(3, now(), '0.00', 'Ice Free', 3, now(), 1, false),
(4, now(), '0.00', 'No Need', 1, now(), 2, false),
(5, now(), '0.00', 'Tomato Ketchup', 2, now(), 2, true),
(6, now(), '6.00', 'Truffle Ketchup', 3, now(), 2, false),
(7, now(), '0.00', 'No Need', 1, now(), 3, false),
(8, now(), '0.00', 'Honey Source', 2, now(), 3, true),
(9, now(), '3.00', 'Lemon Caper Source', 3, now(), 3, false),
(10, now(), '0.00', 'Normal', 1, now(), 4, true),
(11, now(), '0.00', 'Less Ice', 2, now(), 4, false),
(12, now(), '0.00', 'No Ice', 3, now(), 4, false);

INSERT INTO food_set (id, create_time, description, display, img, name, price, sold_out, update_time, category_id) VALUES
(1, now(), 'Virgo Burger + 1 Snack + 1 Drink', true, '/img/burger1.png', 'Virgo Burger Set', '88.00', false, now(), 1),
(2, now(), 'Flare Burger Set description', true, '/img/burger3.png', 'Flare Burger Set', '96.00', false, now(), 1);

INSERT INTO food_set_subcategory (id, create_time, subcategory_id, food_set_id) VALUES
(1, now(), 3, 1),
(2, now(), 4, 1),
(3, now(), 3, 2),
(4, now(), 4, 2);

INSERT INTO system_params (id, name, value, create_time) VALUES
(1, 'DAILY_CUSTOMER_LIMIT', '20', now());