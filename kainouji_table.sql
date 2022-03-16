-- ユーザーのテーブル
CREATE TABLE users (
    id varchar(50) primary key,
    username varchar (100) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp on update current_timestamp
);

--チップのテーブル
CREATE TABLE chips (
    id int NOT NULL primary key,
    moisture int UNSIGNED NOT Null default 25,
    temperature_high int UNSIGNED NOT Null default 28,
    temperature_low int UNSIGNED NOT Null default 10,
    humidity_high int UNSIGNED NOT Null default 61,
    humidity_low int UNSIGNED NOT Null default 40,
    air_pressure int UNSIGNED NOT Null default 1006,
    created_at timestamp NOT Null default current_timestamp,
    updated_at timestamp NOT Null default current_timestamp on update current_timestamp
);

--データのテーブル
CREATE TABLE datas (
    field_id int not null,
    detail_no int not null,
    chip_id int not null,
    moisture int UNSIGNED not null,
    humidity int UNSIGNED not null,
    temperature int UNSIGNED not null,
    air_pressure int UNSIGNED not null, 
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp on update current_timestamp,
    PRIMARY KEY(field_id,detail_no),
    CONSTRAINT datas_chip_id_foreign FOREIGN KEY(`chip_id`) REFERENCES chips(`id`)
);

--野菜のテーブル
CREATE TABLE vegetables (
    id int not null primary KEY auto_increment,
    vegetable varchar(50) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp on update current_timestamp
);

INSERT INTO vegetables(vegetable) VALUES('きゅうり'),('キャベツ'),('トマト'),('さくらひめ'),('さといも'),('お米'),('なす');

-- 畑のテーブル
CREATE TABLE fields (
    id int auto_increment,
    user_id varchar(50),
    field_name varchar(100) NOT NULL,
    vegetable_id int NOT NULL,
    chip_id int NOT NULL, 
    setting_date varchar(50) NOT NULL,
    image_name varchar(100) NOT NULL default '',
    created_at timestamp NOT Null default current_timestamp,
    updated_at timestamp NOT Null default current_timestamp on update current_timestamp,
    PRIMARY KEY(id),
    CONSTRAINT fields_user_id_foreign FOREIGN KEY(`user_id`) REFERENCES users(`id`),
    CONSTRAINT fields_vegetable_id_foreign FOREIGN KEY(`vegetable_id`) REFERENCES `vegetables`(`id`),
    CONSTRAINT fields_chip_id_foreign FOREIGN KEY(`chip_id`) REFERENCES `chips`(`id`)
);