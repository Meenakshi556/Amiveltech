-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2026 at 04:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amivel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `college` varchar(100) NOT NULL,
  `experience` varchar(50) NOT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `firstname`, `lastname`, `email`, `mobile`, `college`, `experience`, `resume`, `created_at`) VALUES
(1, 'Meenakshi', 'Kollati', 'meenu1234@gmail.com', '9988776651', 'bvc', '2', '1768025154_Screenshot 2026-01-10 111627.png', '2026-01-10 06:05:54'),
(4, 'dhatr', 'guntu', 'sri123@gmail.com', '7665429374', 'vishnu', '2', '1768842360_Screenshot 2026-01-02 135013.png', '2026-01-19 17:06:00'),
(5, 'dhatr', 'guntu', 'meenu23@gmail.com', '7665429373', 'bvc', '2', '1768842437_Screenshot 2025-12-24 202530.png', '2026-01-19 17:07:17'),
(6, 'dhatr', 'guntu', 'meenu23@gmail.com', '7665429373', 'bvc', '2', '1768842450_Screenshot 2025-12-24 202530.png', '2026-01-19 17:07:30'),
(7, 'dhatr', 'guntu', 'meenu23@gmail.com', '7665429373', 'bvc', '2', '1768842522_Screenshot 2025-12-24 202530.png', '2026-01-19 17:08:42'),
(8, 'dhatr', 'guntu', 'meenu23@gmail.com', '7665429373', 'bvc', '2', '1768842523_Screenshot 2025-12-24 202530.png', '2026-01-19 17:08:43'),
(9, 'dhatr', 'guntu', 'meenu23@gmail.com', '7665429373', 'bvc', '1', '1768842587_Screenshot 2025-12-24 202530.png', '2026-01-19 17:09:47'),
(10, '', '', 'meenakshi1234@gmail.com', '9988754651', 'srk', '7', '1768843398_Screenshot 2025-12-19 120217.png', '2026-01-19 17:23:18'),
(11, '', '', 'meenakshi1234@gmail.com', '9988754651', 'srk', '7', '1768843450_Screenshot 2025-12-19 120217.png', '2026-01-19 17:24:10'),
(12, 'Varalakshmi', 'Kollati', 'varam1234@gmail.com', '9988754234', 'mvn', '10', '1768843870_Screenshot 2026-01-02 134947.png', '2026-01-19 17:31:10'),
(13, 'Bhavani', 'Guntur', 'bhavani123@gmail.com', '9876543210', 'vishnu', '10', '1768844120_Screenshot 2026-01-19 215115.png', '2026-01-19 17:35:20'),
(14, 'Bhavani', 'Guntur', 'bhavani123@gmail.com', '9876543210', 'vishnu', '10', '1768844130_Screenshot 2026-01-19 215115.png', '2026-01-19 17:35:30');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `subject` varchar(150) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `firstname`, `lastname`, `email`, `subject`, `message`, `created_at`) VALUES
(1, '', '', 'meenu@567', 'amivel tech', 'message request', '2026-01-02 07:52:52'),
(5, 'dhatri', 'guntur', 'murali12@gmail.com', 'project', 'hello', '2026-01-17 19:27:51'),
(6, 'prabhas', 'uppalapati', 'raju@gmail.com', 'project purpuse', 'prabhas raju', '2026-01-17 19:31:02'),
(7, 'don', 'uppalapati', 'raju@gmail.com', 'project purpuse', 'prabhas raju', '2026-01-17 19:35:41'),
(10, 'keerthi', 'shetty', 'keerthi@gmail.com', 'company meeting purpuse', 'have a good day', '2026-01-17 20:45:22'),
(11, 'keerthi', 'shetty', 'keerthi@gmail.com', 'company meeting purpuse', 'have a good day', '2026-01-17 20:45:28'),
(12, 'ramakrshina', 'kollati', 'ram@gmail.com', 'exam shedule', 'hello', '2026-01-17 21:01:16'),
(13, 'sowmya', 'illingi', 'sowmya123@gmail.com', 'project', 'hello ', '2026-01-19 15:39:38'),
(14, 'sowmya', 'illingi', 'sowmya123@gmail.com', 'project', 'hello ', '2026-01-19 15:39:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `jobtitle` varchar(100) NOT NULL,
  `company` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `jobtitle`, `company`, `country`, `message`, `created_at`) VALUES
(1, 'Menakshi', 'Kollati', 'meenu123@2gmail.com', 'Software Engineer', 'Amivel tech Pvt ltd', 'india', 'good morning sir', '2026-01-01 20:03:58'),
(2, 'Bhavani', 'guntur', 'lucky123@gmail.com', 'developer', 'Amivel tech', 'india', 'have a good day', '2026-01-01 20:06:31'),
(3, 'Meenakshi', 'Kollati', 'meenakshi123@2gmail.com', 'Software Engineer', 'Amivel tech Pvt ltd', 'india', 'good morning sir', '2026-01-02 07:30:55'),
(4, 'dhatri', 'guntur', 'lucky123@gmail.com', 'Software Engineer', 'Amivel tech', 'india', 'hello', '2026-01-10 17:27:48'),
(5, 'ganesh', 'guntur', 'ganesh123@gmail.com', 'manager', 'wipro', 'india', 'explore services', '2026-01-15 14:59:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
