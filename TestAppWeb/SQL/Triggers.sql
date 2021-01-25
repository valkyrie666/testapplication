USE [Test]
/* По изменениям в данных таблицах должна вестись история (триггеры). */

drop trigger clientReminder;

GO
create trigger clientReminder
on Clients
AFTER INSERT
AS BEGIN
SET NOCOUNT ON;
END
GO
