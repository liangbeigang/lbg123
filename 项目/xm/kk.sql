set names utf8;
drop database if exists kk;
create database kk charset=utf8;
use kk;
create table kkimg(
	img varchar(120)
);
insert into kkimg values('img/lbt1.png');
