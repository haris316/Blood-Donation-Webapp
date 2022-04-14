CREATE DATABASE  IF NOT EXISTS `webapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webapp`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: webapp
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `UserRoleID` int DEFAULT '23',
  `BloodTag` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Status` int DEFAULT '1',
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `ContactNo` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,23,'B+','Flat no. D-23',22,1,'Fakhruddin Saifuddin','Moiz','F','03332358885','ttttttttttt@g.com','5454477676'),(2,23,'AB-','Flat no. F-4, North Nazimabad, Karachi',22,1,'Inam Salam','Salam','M','03223419894','yyyyy@yahoo.com','666666666'),(10,0,'A+','Pechs Block 12',21,1,'ABdul Moiz','qw','M','03332358885','admin@gmail.com','12345'),(11,23,'A+','Flat no. D-3 , Center court building, plot 600b, new ma jinnah rd, near islamia college',22,1,'Hassan Shah','Moiz','M',NULL,'a.moiz0322@gmail.com','12345'),(78,23,'A+','Flat no. D-3 , Center court building, plot 600b, new ma jinnah rd, near islamia college',21,1,'Abdul Moiz','Moiz','M','34123','12345@gmail.com','12345'),(83,23,'A+','Flat no. D-3 , Center court building, plot 600b, new ma jinnah rd, near islamia college',50,1,'Moeed',NULL,'M',NULL,'moeed@gmail.com','12345'),(84,23,'O+','Lighthouse , Saddar, Karachi',22,1,'Fakhruddin Saifuddin',NULL,'M','090078601','fakhru.fs@gmail.com','12345'),(85,23,'A+','Pechs Block 12',22,1,'Bilal',NULL,'M','0322525263','bilal@gmail.com','12345'),(86,23,'O+','Flat no. D-3 , Center court building, plot 600b, new ma jinnah rd, near islamia college',30,1,'Hassan Shah',NULL,'M','03223419894','hassanshah110@outlook.com','12345');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-28 22:03:45
