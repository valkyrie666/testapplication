USE [Test]

/* Необходим скрипт создания таблицы клиентов Clients, 
   в которой будет храниться следующая информация: наименование клиента, его адрес. 
   Адрес клиента может быть не известен. */
create table Clients 
(
Id int primary key not null, 
ClientName varchar(50) not null, 
ClientAddress varchar(200) default null
);

/* Необходим скрипт создания таблицы счетов клиентов Accounts, 
   в которой будет храниться следующая информация: 
   номер счета, валюта счета, дата открытия, дата закрытия, текущий остаток. 
   Текущий остаток и дата закрытия известны не сразу. */
create table Accounts 
(
Id int not null, 
ClientId int not null,
AccountNumber varchar(200) not null,
Currency varchar(4) not null 
    check(Currency = 'USD' OR Currency = 'EUR' OR Currency = 'BYN')
    default 'BYN',
CreationDate datetime not null,
CloseDate datetime default null,
Balance int default null, 
primary key(Id),
foreign key (ClientId) references Clients(Id)
);

--History table
drop table History;
create table History 
(
Id int IDENTITY(1,1) not null, 
TableName varchar(10) check(TableName = 'Accounts' or TableName = 'Clients'),
Operation varchar(20) check(Operation = 'INSERT' or Operation = 'UPDATE' or Operation = 'DELETE'),
Info text,
primary key(Id)
);

