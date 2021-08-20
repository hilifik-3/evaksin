-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2021 at 02:37 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-vaksin`
--

-- --------------------------------------------------------

--
-- Table structure for table 'berita'
--

CREATE TABLE 'berita' (
    'judul' int(NULL) NOT NULL,
    'isi berita' int(NULL) NOT NULL,
    'penulis' int(10) NOT NULL
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

--
-- Dumping data for table 'berita'
--

INSERT INTO 'berita' ('judul', 'isi berita', 'penulis') VALUES
('Vakin Pertama Kali', 'Vaksin pertama kali diadakan oleh bapak presiden joko widodo di istana negara pada 13 januari 2021', 'administrator');


-- --------------------------------------------------------

--
-- Table structure for table `master`
--

CREATE TABLE `master` (
  `id` int(11) NOT NULL,
  `email` int(100) NOT NULL,
  `password` int(100) NOT NULL,
  'level' int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master`
--

INSERT INTO `master` (`id`, `email`, `password`) VALUES
('administrator', 'admin@google.com', 'passwordadmin', '1');
('pegawai', 'mail@yandex.com', 'mailyandex', '2');


-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `NAMA LENGKAP` int(100) NOT NULL,
  `NOMOR KTP` int(40) NOT NULL,
  `TANGGAL LAHIR` int(11) NOT NULL,
  `ALAMAT` int(100) NOT NULL,
  `NO RUMAH` int(11) NOT NULL,
  `RT` int(11) NOT NULL,
  `RW` int(11) NOT NULL,
  `KELURAHAN` int(11) NOT NULL,
  `KECAMATAN` int(11) NOT NULL,
  `KOTA` int(11) NOT NULL,
  `PROVINSI` int(11) NOT NULL,
  `TELP` int(13) NOT NULL,
  `WHATSAPP` int(13) NOT NULL,
  `EMAIL` int(20 ) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
