--
-- Database: `crud_db`
--

CREATE DATABASE IF NOT EXISTS `crud_db`;
USE `crud_db`;


-- ENTITIES

--
-- Struttura della tabella `linedetail`
--

CREATE TABLE IF NOT EXISTS `linedetail` (
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `purchaseorder`
--

CREATE TABLE IF NOT EXISTS `purchaseorder` (
	`Name` varchar(130) ,
	`PoNumber` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `crud_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `crud_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `weborderlevel`
--

CREATE TABLE IF NOT EXISTS `weborderlevel` (
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m po_lineDetails PurchaseOrder - LineDetail
ALTER TABLE `purchaseorder` ADD COLUMN `po_lineDetails` int(11)  REFERENCES linedetail(_id);

-- relation 1:m po_webOrderLevel PurchaseOrder - WebOrderLevel
ALTER TABLE `purchaseorder` ADD COLUMN `po_webOrderLevel` int(11)  REFERENCES weborderlevel(_id);


