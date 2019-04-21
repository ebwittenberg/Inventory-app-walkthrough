create table customers (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(200),
    email varchar(300)
);

create table items (
    id serial primary key,
    name varchar(200),
    sku varchar(50),
    inventory integer
);

create table purchases (
    id serial primary key,
    item_id integer references items(id),
    purchase_qty integer
);