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
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `BloodrequestID` int NOT NULL AUTO_INCREMENT,
  `BloodTag` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL,
  `Donorcount` int DEFAULT NULL,
  `Dateofrequest` varchar(45) DEFAULT NULL,
  `Cause` varchar(45) DEFAULT NULL,
  `Blood_type` varchar(45) DEFAULT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`BloodrequestID`),
  KEY `UserID_idx` (`UserID`),
  CONSTRAINT `UserID` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (2,'A-','Incomplete','Agha kham',4,'2020-06-10','Surgery','Blood',1),(3,'A+','Incomplete','Jinnah Hospital',1,'0.004952947003467062','Cancer','Platelets',2),(4,'AB+','Incomplete','OMI Hospital',1,'0.004952947003467062','Pregnancy','Platelets',2),(5,'B-','Incomplete','Agha kham',6,'24/01/2021','Pregnancy','White Cells',2),(6,'B-','Incomplete','Agha kham',6,'24/01/2021','Pregnancy','White Cells',2),(7,'A-','Incomplete','asfsfsdfs',2,'25/01/2021','Surgery','Platelets',2),(8,'A-','Complete','asfsfsdfs',2,'25/01/2021','Surgery','Platelets',11),(9,'B+','Complete','erwrw',3,'25/01/2000','Cancer','White Cells',11),(10,'A+','Complete','Civil Hospital',2,'20-06-2022','Cancer','Blood',11),(11,'A+','Incomplete','Jinnah',3,'1/1/19','Accident','Blood',10),(12,'O-','Incomplete','Jinnah',3,'1/1/19','Accident','Blood',NULL),(13,'A+','Incomplete','Jinnah',3,'1/1/20','Accident','Blood',NULL),(14,'B-','Incomplete','OMI',3,'1/1/20','Accident','White Blood',NULL),(15,'O-','Incomplete','Agha',3,'2020-06-18','Surgery','Blood',11),(17,'AB+','Incomplete','Agha',4,'2020-06-12','Pregnancy','Blood',11),(20,'B-','Incomplete','Jinnah',6,'2020-06-23','Surgery','Platelets',11),(22,'B+','Incomplete','Jinnah',10,'2020-06-12',NULL,NULL,NULL),(23,'B-','Complete','Jinnah Hospital',3,'2020-06-05','Accident','Platelets',86);
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
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
