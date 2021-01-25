USE [TBase]

drop table T1;
drop table T2;

create table T1 (F1 int primary key not null);
create table T2 (F1 int primary key not null);

insert into T1(F1) values(1);
insert into T1(F1) values(2);
insert into T1(F1) values(3);
insert into T1(F1) values(4);
insert into T1(F1) values(5);
insert into T1(F1) values(6);
insert into T1(F1) values(7);
insert into T1(F1) values(8);
insert into T1(F1) values(9);
insert into T1(F1) values(10);

insert into T2(F1) values(1);
insert into T2(F1) values(3);
insert into T2(F1) values(6);
insert into T2(F1) values(7);
insert into T2(F1) values(8);
insert into T2(F1) values(11);
insert into T2(F1) values(15);

select T1.F1 as FirstVal, T2.F1 as SecondVal
from T1 inner join T2
on T1.F1 = T2.F1;