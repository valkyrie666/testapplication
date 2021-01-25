USE [Test]

--По изменениям в данных таблицах должна вестись история (триггеры).

GO
create trigger insertClientReminder
on Clients
AFTER INSERT
AS BEGIN
insert into History(TableName, Operation, Info)
SELECT 'Clients', 'INSERT', 'Client Name: ' + ClientName + ', Address: ' + ClientAddress
FROM INSERTED;
select * from History;
END
GO


GO
create trigger updateClientReminder
on Clients
AFTER UPDATE
AS BEGIN
insert into History(TableName, Operation, Info)
SELECT 'Clients', 'UPDATE', 'Client Name: ' + ClientName + ', Address: ' + ClientAddress
FROM INSERTED;
select * from History;
END
GO


GO
create trigger deleteClientReminder
on Clients
AFTER DELETE
AS BEGIN
insert into History(TableName, Operation, Info)
SELECT 'Clients', 'DELETE', 'Client Name: ' + ClientName + ', Address: ' + ClientAddress
FROM DELETED;
select * from History;
END
GO

GO
create trigger insertAccountReminder
on Accounts
AFTER INSERT
AS BEGIN
insert into History(TableName, Operation, Info)
SELECT 'Accounts', 'INSERT', 'Account Number: ' + AccountNumber + ', Currency: ' + Currency
+ ', Created: ' + CAST(CreationDate as varchar(255)) + ', Closed: ' + CAST(CloseDate as varchar(255)) + 
', Balance: ' + CAST(Balance as varchar(255))
FROM INSERTED;
select * from History;
END
GO

GO
create trigger updateAccountReminder
on Accounts
AFTER UPDATE
AS BEGIN
insert into History(TableName, Operation, Info)
SELECT 'Accounts', 'UPDATE', 'Account Number: ' + AccountNumber + ', Currency: ' + Currency
+ ', Created: ' + CAST(CreationDate as varchar(255)) + ', Closed: ' + CAST(CloseDate as varchar(255)) 
+ ', Balance: ' + CAST(Balance as varchar(255))
FROM INSERTED;
select * from History;
END
GO

GO
create trigger deleteAccountReminder
on Accounts
AFTER DELETE
AS BEGIN
insert into History(TableName, Operation, Info)
SELECT 'Accounts', 'DELETE', 'Account Number: ' + AccountNumber + ', Currency: ' + Currency
+ ', Created: ' + CAST(CreationDate as varchar(255)) + ', Closed: ' + CAST(CloseDate as varchar(255)) + 
', Balance: ' + CAST(Balance as varchar(255))
FROM DELETED;
select * from History;
END
GO