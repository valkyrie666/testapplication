USE [Test]

/* 1. Необходимо написать запрос, который возвращает список клиентов, у которых есть счета и количество этих счетов. */
select Clients.ClientName, 
Accounts.AccountNumber, Accounts.CreationDate, Accounts.CloseDate, Accounts.Balance
from Clients inner join Accounts on Clients.Id = Accounts.ClientId;

select c.ClientName, 
(select count(Accounts.ClientId) as AccountsCount from Accounts where ClientId = c.Id having count(Accounts.ClientId) > 0)
from Clients c;


/* 2. Необходим написать запрос, который возвращает список клиентов, у которых все счета закрыты. */
select Clients.ClientName, Accounts.AccountNumber, Accounts.CreationDate, Accounts.Balance
from Clients inner join Accounts on Clients.Id = Accounts.ClientId 
where Accounts.CloseDate is not NULL and Accounts.CloseDate <= GETDATE();


/* 3. Необходимо написать запрос, который возвращает список счетов клиентов, у которых в наименование есть ОАО. */
select * from Clients where ClientName LIKE '%ОАО%';


/* 4. Необходимо написать запрос, который для клиентов с наименованиями, 
   определяемыми в условии, проставляет текущий остаток счета равным 0, 
   если он был неизвестен. */
update a
SET Balance = 0
from Accounts a inner join Clients on Clients.Id = a.ClientId
where Clients.ClientName LIKE '%ОАО%' and Balance is NULL;

select Clients.ClientName, Accounts.AccountNumber, Accounts.CreationDate, Accounts.CloseDate, Accounts.Balance
from Clients inner join Accounts on Clients.Id = Accounts.ClientId  where Accounts.Balance is not NULL;

/* 5. Необходимо написать запрос, 
   который возвращает список незакрытых счетов вместе с наименованием клиента, 
   кому принадлежит этот счет */
select Accounts.AccountNumber, Accounts.Currency, 
Accounts.CreationDate, Accounts.CloseDate, Accounts.Balance, Clients.ClientName
from Accounts inner join Clients on Accounts.ClientId = Clients.Id
where Accounts.CloseDate is null or Accounts.CloseDate > GETDATE();