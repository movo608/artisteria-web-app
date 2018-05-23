-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2018 at 08:29 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artisteria`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `category` varchar(32) NOT NULL,
  `image1` varchar(512) NOT NULL,
  `image2` varchar(512) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `name`, `category`, `image1`, `image2`, `description`) VALUES
(3, 'Tudom Vagyok Kurwa Anyadat', 'Painting', '1516046851artist-image-1.png', '1516046851artist-image-2.png', 'asdfsafsa');

-- --------------------------------------------------------

--
-- Table structure for table `mentors`
--

CREATE TABLE `mentors` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `category` varchar(32) NOT NULL,
  `image1` varchar(256) NOT NULL,
  `image2` varchar(256) NOT NULL,
  `description` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mentors`
--

INSERT INTO `mentors` (`id`, `name`, `category`, `image1`, `image2`, `description`) VALUES
(1, 'Mentor 1', 'Theatre', '1515831586mentor-image-1.jpg', '1515831586mentor-image-2.jpg', 'Lorem Ipsum DOlor Sit AmetLorem Ipsum DOlor Sit AmetLorem Ipsum DOlor Sit AmetLorem Ipsum DOlor Sit AmetLorem Ipsum DOlor Sit AmetLorem Ipsum DOlor Sit Amet'),
(2, 'asdf', 'Theatre', '1515832006mentor-image-1.jpg', '1515832006mentor-image-2.jpg', 'sadfasfsa');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `logo` varchar(512) NOT NULL,
  `link` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `logo`, `link`) VALUES
(2, 'asdfas', '1516741826partner-logo-1.jpg', 'www.cyka.ru');

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `birth` varchar(32) NOT NULL,
  `location` varchar(128) NOT NULL,
  `study` varchar(128) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `email` varchar(128) NOT NULL,
  `facebook_link` varchar(128) NOT NULL,
  `instagram_link` varchar(128) NOT NULL,
  `domain` varchar(32) NOT NULL,
  `motivation` varchar(256) NOT NULL,
  `work_link` varchar(1024) NOT NULL,
  `projects_link` varchar(1024) NOT NULL,
  `availability` varchar(8) NOT NULL,
  `accommodation` varchar(8) NOT NULL,
  `hobbies` varchar(256) NOT NULL,
  `found_out` varchar(64) NOT NULL,
  `about_you` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`id`, `name`, `birth`, `location`, `study`, `phone`, `email`, `facebook_link`, `instagram_link`, `domain`, `motivation`, `work_link`, `projects_link`, `availability`, `accommodation`, `hobbies`, `found_out`, `about_you`) VALUES
(6, 'Andrei George Moldovan', '"2018-02-14T07:29:03.203Z"', 'Targu Mures', 'CNU', '0740024926', 'moldovanandrei8399@gmail.com', 'asdf', 'sadf', 'Dans', 'asdffsa', 'asdfas', 'asdfas', 'Yes', 'Yes', 'asdfasf', 'Friends / Family', 'asdfas');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` varchar(256) NOT NULL,
  `description` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `image`, `description`) VALUES
(1, 'sdafsa', '1520508369testimonials.jpg', 'sadfsf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mentors`
--
ALTER TABLE `mentors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `facebook_link` (`facebook_link`,`instagram_link`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `mentors`
--
ALTER TABLE `mentors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
