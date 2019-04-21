-- create a couple customers
INSERT into customers(first_name, last_name, email) 
VALUES ('John', 'Smith', 'jsmith@email.com'),
('Bob', 'Robertson', 'bobistheman@bob.com');

-- create some items that customers can purchase
INSERT into items(name, sku, inventory)
VALUES ('chair', 'A100', 50),
('ottoman', 'A101', 5),
('table', 'A102', 10),
('bench', 'A103', 19);

-- create a purchase
INSERT into purchases(item_id, purchase_qty)
VALUES (4, 1);
