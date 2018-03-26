CREATE DATABASE cognizance_db;
create user 'cognizanceUser'@'localhost' identified by '9999';
grant all on cognizance_db.* to 'cognizanceUser'@'localhost';
CREATE TABLE `cognizance_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `cognizance_db`.`cognizance_user`
(
`password`,
`username`)
VALUES
(
'9999',
'admin');

