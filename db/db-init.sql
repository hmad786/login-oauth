CREATE DATABASE IF NOT EXISTS todo;
use todo;

create table users(
uuid CHAR(36) CHARACTER SET ascii,
email text not null,
password text not null,
createdAt datetime,
updatedAt datetime,
primary key (id);
);