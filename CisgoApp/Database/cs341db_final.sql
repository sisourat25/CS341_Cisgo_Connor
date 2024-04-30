-- MySQL dump 10.13  Distrib 8.3.0, for macos13.6 (x86_64)
--
-- Host: localhost    Database: CS341
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CISGO`
--

DROP TABLE IF EXISTS `CISGO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CISGO` (
  `NUMID` int NOT NULL AUTO_INCREMENT,
  `ADMINSTATUS` enum('Pending','Approved') NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `EVENT` varchar(200) NOT NULL,
  `EMAILCHECK` varchar(200) NOT NULL,
  `EMAIL` varchar(200) NOT NULL,
  `CITY` varchar(200) NOT NULL,
  `COUNTRY` varchar(200) NOT NULL,
  `COORLONG` varchar(200) DEFAULT NULL,
  `COORLAT` varchar(200) DEFAULT NULL,
  `DEPARTMENT` enum('Shiley School of Engineering','Pamplin School of Business','School of Education','School of Nursing and Health Innovations','College of Arts and Sciences','Other') NOT NULL,
  `TYPE` enum('Teaching','Research','Working','Volunteer','Other') NOT NULL,
  `STATUS` enum('Past','Ongoing') NOT NULL,
  `STARTMONTH` varchar(200) NOT NULL,
  `STARTYEAR` varchar(200) NOT NULL,
  `ENDMONTH` varchar(200) DEFAULT NULL,
  `ENDYEAR` varchar(200) DEFAULT NULL,
  `DESCRIPTION` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`NUMID`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CISGO`
--

LOCK TABLES `CISGO` WRITE;
/*!40000 ALTER TABLE `CISGO` DISABLE KEYS */;
INSERT INTO `CISGO` VALUES (41,'Approved','September Nelson','Health and Wellness Across the Lifespan','Yes','nelson@up.edu','City of London','United Kingdom','51.5156177','-0.0919983','School of Nursing and Health Innovations','Research','Past','May','2019','August','2019','Taught NRS 216 Health and Wellness Across the Lifespan to rising sophomore students in the Summer of 2019'),(42,'Approved','Claire McKinley Yoder','Nursing Study Abroad','Yes','mckinley@up.edu','Kigali','Rwanda','-1.9646631','30.0644358','School of Nursing and Health Innovations','Other','Past','January','2024','January','2034','Teaching nursing related materials to practitioners and students, also in Malawi and Mexico'),(43,'Approved','Claire McKinley Yoder','Nursing Study Abroad','Yes','mckinley@up.edu','','Malawi','-13.2687204','33.9301963','School of Nursing and Health Innovations','Other','Past','January','2024','January','2034','Teaching nursing related materials to practitioners and students, also in Rwanda and Mexico'),(44,'Approved','Claire McKinley Yoder','Nursing Study Abroad','Yes','mckinley@up.edy','','Mexico','23.6585116','-102.0077097','School of Nursing and Health Innovations','Teaching','Past','January','2024','January','2034','Teaching nursing related materials to practitioners and students, also in Rwanda and Mexico'),(45,'Approved','Timothy Winslea','Engineering and Nursing Project','Yes','winslea@up.edu','','Malawi','-13.2687204','33.9301963','School of Nursing and Health Innovations','Teaching','Past','May','2022','August','2022','I was part of a joint engineering and nursing team that went in the summer of 2022 to complete an engineering project starte prior to the pendemic and to build the connections so that we could send nursing students this summer. '),(46,'Approved','Andrew Lafrenz','Health Clinical Services Trip','Yes','lafrenz@up.edu','','Nicaragua','12.6090157','-85.2936911','School of Nursing and Health Innovations','Teaching','Past','January','2024','January','2034','Health Clinical Services Trip for faculty and students. '),(47,'Approved','Nikki Warthen','Catholic Church Mission Trip','Yes','warthen@up.edu','Mexico City','Mexico','19.4326296','-99.1331785','School of Nursing and Health Innovations','Other','Past','January','2024','January','2034','This was a Catholic church mission trip when I was just out of high school where we worked on building a medical clinic.  '),(48,'Approved','Nikki Warthen','Catholic Church Mission Trip','Yes','warthen@up.edu','','Mexico','17.0','-96.5','School of Nursing and Health Innovations','Teaching','Past','January','2024','January','2034','This was a Catholic church mission trip when I was just out of high school where we worked on building a medical clinic.  '),(49,'Approved','Stacey Boatright','Volunteering in iKhaya LikaBaba','Yes','boatrigh@up.edu','Tokologo Local Municipality','South Africa','-28.8166236','24.991639','School of Nursing and Health Innovations','Other','Past','January','2024','January','2034','After completion of my master\'s degree in 2009, I took a 3-month sabbatical from my work as a staff member in the School of Nursing to care for abandoned and orphaned babies and children. I also helped with the groundbreaking for construction of a new home for them. The organization I volunteered with/for is called iKhaya LikaBaba and it is in Empangeni, South Africa.'),(50,'Approved','Chloé Littzen-Brown','Public Health Research Project','Yes','littzen@up.edu','','Costa Rica','10.2735633','-84.0739102','School of Nursing and Health Innovations','Other','Past','January','2024','January','2034','Public health outreach project.'),(51,'Approved','Reo Jane Francesca Jones','Nursing Abroad Research','Yes','jonesre@up.edu','Terni','Italy','42.6384261','12.674297','Shiley School of Engineering','Teaching','Past','January','2024','January','2034','Past research/personal and professional development in somatic trauma release therapeutic study related to mask work and physical theater in Japan and Italy; Proposal for a forest therapy study / post-doctoral collaboration currently being devised for Univ. of Chiba in Japan'),(52,'Approved','Reo Jane Francesca Jones','Nursing Abroad Research','Yes','jonesre@up.edu','Vargas Guerra','Peru','-6.8699697','-75.0458515','School of Nursing and Health Innovations','Research','Past','January','2024','January','2034',''),(53,'Approved','Reo Jane Francesca Jones','Nursing Abroad Research','Yes','jonesre@up.edu','Kiryu','Japan','36.5748441','139.2394179','Shiley School of Engineering','Teaching','Past','January','2024','January','2034','Past research/personal and professional development in somatic trauma release therapeutic study related to mask work and physical theater in Japan and Italy; Proposal for a forest therapy study / post-doctoral collaboration currently being devised for Univ. of Chiba in Japan'),(54,'Approved','Dan Parrish, C.S.C.','Study Abroad','Yes','parrishd@up.edu','Salzburg','Austria','47.7981346','13.0464806','Pamplin School of Business','Other','Past','January','2024','January','2034','Spent 8 months abroad in Salzburg as a sophomore at UP. '),(55,'Approved','Dan Parrish, C.S.C.','Pilgrimage','Yes','parrishd@up.edu','Rome','Italy','41.8933203','12.4829321','Pamplin School of Business','Other','Past','January','2024','January','2034','Pilgrimage to Rome'),(56,'Approved','Dan Parrish, C.S.C.','Pilgrimage','Yes','parrishd@up.edu','','Mexico','23.6585116','-102.0077097','Pamplin School of Business','Other','Past','January','2024','January','2034','Pilgrimage to Our Lady of Guadalupe in Mexico City'),(57,'Approved','Dan Parrish, C.S.C.','Pilgrimage','Yes','parrishd@up.edu','','France','46.603354','1.8883335','Pamplin School of Business','Other','Past','January','2007','February','2007','Traveled to France for the beatification of Fr. Moreau (founder of Holy Cross) in 2007'),(58,'Approved','Jon Down','Study Abroad','Yes','down@up.edu','London','United Kingdom','51.4893335','-0.14405508452768728','Shiley School of Engineering','Teaching','Past','January','2024','January','2034',''),(59,'Approved','John Down','London Business Study Abroad','Yes','down@up.edu','London','United Kingdom','51.4893335','-0.14405508452768728','Pamplin School of Business','Teaching','Past','January','2024','January','2034','Business majors take two classes in London during the summer. During the time in England there are many excursions to various interesting places. '),(60,'Approved','Jon Down','Business Study Abroad','Yes','down@up.edu','','China','35.000074','104.999927','Pamplin School of Business','Teaching','Past','January','2024','January','2034','These are trips with E-Scholar students. The idea is to take the students to places that take them out of their comfort zones. The students are tasks with setting up meetings in advance of the trips.'),(61,'Approved','Jon Down','Business Study Abroad','Yes','down@up.edu','','Vietnam','15.9266657','107.9650855','Shiley School of Engineering','Teaching','Past','January','2024','January','2034','These are trips with E-Scholar students. The idea is to take the students to places that take them out of their comfort zones. The students are tasks with setting up meetings in advance of the trips.'),(62,'Approved','Braham Adrangi','London Business Program','Yes','adrangi@up.edu','London','United Kingdom','51.4893335','-0.14405508452768728','Pamplin School of Business','Teaching','Past','January','2024','January','2034','London Business Program, MBA abroad. Did program twice.'),(63,'Approved','Tyler Laird-Magee','Public Relations & International Marketing Teaching','Yes','lairdmag@up.edu','','China','35.000074','104.999927','Pamplin School of Business','Teaching','Past','January','2024','January','2034','In Wuhan taught undergrads Public Relations & International Marketing'),(64,'Approved','Tyler Laird-Magee','Marketing & Brand Promotion','Yes','lairdmag@up.edu','Dongcheng District','China','39.9057136','116.3912972','Pamplin School of Business','Teaching','Past','January','2024','January','2034','In Beijing, I taught grad students Marketing and Brand Promotion.'),(65,'Approved','Tyler Laird-Magee','Shanghai Business Student Trip','Yes','lairdmag@up.edu','Shanghai','China','31.2312707','121.4700152','Pamplin School of Business','Teaching','Past','January','2024','January','2034','In Shanghai, I took MBA George Fox students for a week.'),(66,'Approved','Rebecca Smith','University of Armed Forces ESPE, Assessment Design','Yes','smithre@up.edu','','Ecuador','-1.3397668','-79.3666965','School of Education','Working','Past','January','2024','January','2034','As a Fulbright Specialist in Ecuador, I aided a new medical school at the University of the Armed Forces ESPE with their assessment design. I reviewed university assessment standards, and I observed medical doctors teaching courses, provided formative feedback, and created a program analysis report to help guide future teaching, assessment, and learning practices at ESPE’s medical school. '),(67,'Approved','Patrick Murphy','Soviet Era Music Study','Yes','murphy@up.edu','Novosibirsk','Russia','54.8705449','83.0873842','College of Arts and Sciences','Other','Past','January','2024','January','2034','I have spent the past 15 years studying wind band music of the Soviet era. This has included trips to Moscow, interactions and collaborations with faculty at the Russian Academy of Music (Gnesin) and the Moscow Military Conservatory. Results have included several critical editions of Soviet military band compositions and conference presentations.'),(68,'Approved','Dave Houglum','Volunteering in Nicaragua','Yes','houglum@up.edu','','Nicaragua','12.6090157','-85.2936911','College of Arts and Sciences','Volunteer','Past','January','2024','January','2034','These have been service and justice related programs (Nicaragua and India) when I was with the Moreau Center.'),(69,'Approved','Dave Houglum','Volunteering in India','Yes','houglum@up.edu','','India','22.3511148','78.6677428','College of Arts and Sciences','Volunteer','Past','January','2024','January','2034','These have been service and justice related programs (Nicaragua and India) when I was with the Moreau Center.'),(71,'Approved','Dave Houglum','Global Perspectives on Leadership Class','undefined','houglum@up.edu','','New Zealand','-41.5000831','172.8344077','College of Arts and Sciences','Teaching','Ongoing','undefined','undefined','undefined','undefined','New Zealand was a course I created called Global Perspectives on Leadership, where we explored indigenous leadership, sustainability and leadership, and leadership and the outdoors.'),(72,'Approved','Dave Houglum','Leadership, Theology, and Archaeology','undefined','houglum@up.edu','','Spain','39.613432','2.8829184529439633','Shiley School of Engineering','Teaching','Past','undefined','undefined','undefined','undefined','Spain (Mallorca) is where I\'m creating a new course that integrates Leadership, Theology, and Archaeology, called \"Global Discoveries through Time: Leadership, Ethics, & Legacy in Roman Pollentia (Mallorca, Spain)\"  '),(73,'Approved','Dave Houglum','Leadership Workshops in Belgium','undefined','houglum@up.edu','Brussels','Belgium','50.8550018','4.3512333761166175','College of Arts and Sciences','Teaching','Ongoing','undefined','undefined','undefined','undefined','Belgium (Brussels) is where I conduct leadership development workshops with emerging leaders from across Europe in the European Leadership Programme.'),(74,'Approved','Dave Houglum','South Africa Leadership Course','undefined','houglum@up.edu','Tokologo Local Municipality','South Africa','-28.8166236','24.991639','Shiley School of Engineering','Teaching','Ongoing','undefined','undefined','undefined','undefined','I have created a course, syllabus, and have the books purchased for a course called Global Perspectives on Leadership: South Africa. This course is focused on servant leadership, restorative justice, and forgiveness. The course is ready to go and was initially approved by a previous Provost (as well as by Studies Abroad/CISGO thru their proposal process) but when we were ready to do our scouting trip (bags packed), he cancelled it. I am ready to lead this course again in the future, should the university be ready to support me in it.'),(75,'Approved','Dave Houglum','Global Perspectives in Spain','undefined','houglum@up.edu','','Spain','39.3260685','-4.8379791','College of Arts and Sciences','Teaching','Ongoing','undefined','undefined','undefined','undefined','This course was called Global Perspectives on Leadership: Morocco and Spain. It was focused on servant leadership, women\'s empowerment, and sustainability. It was approved through Studies Abroad and CISGO, had an itinerary, budget, and a syllabus completely built - unfortunately it was cancelled in January 2020 due to COVID (and just missed our enrollment target).'),(76,'Approved','Deana Julka','Study Abroad in London','undefined','julka@up.edu','City of Westminster','United Kingdom','51.5074456','-0.1277653','College of Arts and Sciences','Teaching','Past','undefined','undefined','undefined','undefined','Ive taught two summers in both London and Salzburg and one in Montreal. I also studied abroad as a student myself for a year in France and have traveled for fun to dozens of countries'),(77,'Approved','Diana Julka','Study Abroad in Salzburg','undefined','julka@up.edu','Salzburg','Austria','47.7981346','13.0464806','Shiley School of Engineering','Teaching','Past','undefined','undefined','undefined','undefined','Ive taught two summers in both London and Salzburg and one in Montreal. I also studied abroad as a student myself for a year in France and have traveled for fun to dozens of countries'),(78,'Approved','Diana Julka','Study Abroad in Montreal','undefined','julka@up.edu','Montreal','Canada','45.5031824','-73.5698065','Shiley School of Engineering','Teaching','Past','undefined','undefined','undefined','undefined','Ive taught two summers in both London and Salzburg and one in Montreal. I also studied abroad as a student myself for a year in France and have traveled for fun to dozens of countries'),(79,'Approved','Larry Larsen','Study Abroad in London','undefined','larsen@up.edu','City of Westminster','United Kingdom','51.5074456','-0.1277653','College of Arts and Sciences','Teaching','Past','undefined','undefined','undefined','undefined','Was program director for 2 nursing, 2 CAS and 1 Biology summer study abroad in London'),(80,'Approved','Maye Henning','Study Abroad in Oxford','undefined','henning@up.edu','Oxford','United Kingdom','51.7520131','-1.2578499','Shiley School of Engineering','Research','Past','undefined','undefined','undefined','undefined','I was a Junior Visiting Scholar at Oxford University (Nuffield College)  '),(81,'Approved','Barbara Bloom-Groshong','Study Abroad in London','undefined','bloomgro@up.edu','City of Westminster','United Kingdom','51.5074456','-0.1277653','Pamplin School of Business','Other','Past','undefined','undefined','undefined','undefined','I participated in study abroad through the Institute of European Studies (IES) in Fall 1987, as a junior undergrad student at Santa Clara University. I lived with 5 other students in our own flat, and we attended classes taught by British Professors with other American students from across the country. We also had opportunities to travel, which I did (including Scotland, Ireland, France, Italy, Germany, and Switzerland). My primary areas of study were in the Political Science area. ');
/*!40000 ALTER TABLE `CISGO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NEW_CISGO`
--

DROP TABLE IF EXISTS `NEW_CISGO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NEW_CISGO` (
  `NUMID` int NOT NULL DEFAULT '0',
  `ADMINSTATUS` enum('Pending','Approved') NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `EVENT` varchar(200) NOT NULL,
  `EMAILCHECK` varchar(200) NOT NULL,
  `EMAIL` varchar(200) NOT NULL,
  `CITY` varchar(200) NOT NULL,
  `COUNTRY` varchar(200) NOT NULL,
  `COORLONG` varchar(200) DEFAULT NULL,
  `COORLAT` varchar(200) DEFAULT NULL,
  `DEPARTMENT` enum('Shiley School of Engineering','Pamplin School of Business','School of Education','School of Nursing and Health Innovations','College of Arts and Sciences','Other') NOT NULL,
  `TYPE` enum('Teaching','Research','Working','Volunteer','Other') NOT NULL,
  `STATUS` enum('Past','Ongoing') NOT NULL,
  `STARTMONTH` varchar(200) NOT NULL,
  `STARTYEAR` varchar(200) NOT NULL,
  `ENDMONTH` varchar(200) DEFAULT NULL,
  `ENDYEAR` varchar(200) DEFAULT NULL,
  `DESCRIPTION` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NEW_CISGO`
--

LOCK TABLES `NEW_CISGO` WRITE;
/*!40000 ALTER TABLE `NEW_CISGO` DISABLE KEYS */;
/*!40000 ALTER TABLE `NEW_CISGO` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-29 15:48:45
