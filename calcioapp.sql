-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-06-2024 a las 10:30:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `calcioapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dates`
--

CREATE TABLE `dates` (
  `id` int(8) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `colorcode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `dates`
--

INSERT INTO `dates` (`id`, `year`, `amount`, `colorcode`) VALUES
(1, 2015, 5000, 'green'),
(2, 2016, 6000, 'yellow'),
(3, 2018, 6500, 'blue');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `defaultmarker`
--

CREATE TABLE `defaultmarker` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `defaultmarker`
--

INSERT INTO `defaultmarker` (`id`, `latitude`, `longitude`, `name`, `category`) VALUES
(1, 41.4034, 2.17403, 'Sagrada Familia', 'tourist'),
(2, 41.3818, 2.1685, 'Hotel W Barcelona', 'hotel'),
(3, 41.3813, 2.12832, 'Camp Nou', 'sport'),
(4, 41.3851, 2.1734, 'Plaça de Catalunya', 'tourist'),
(5, 41.3797, 2.1925, 'Marina Port Vell', 'hotel'),
(6, 41.387, 2.1701, 'Casa Batlló', 'tourist');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` varchar(250) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `start` varchar(250) DEFAULT NULL,
  `end` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id`, `title`, `date`, `color`, `start`, `end`) VALUES
(40, 'it-academy', '2024-06-02', 'green', NULL, NULL),
(41, 'deadline sprint8', '2024-06-04', 'red', NULL, NULL),
(42, 'concerto', '2024-06-19', 'blue', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stadi`
--

CREATE TABLE `stadi` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `stadi`
--

INSERT INTO `stadi` (`id`, `name`, `city`, `country`, `latitude`, `longitude`) VALUES
(1, 'Camp Nou', 'Barcelona', 'Spain', 41.3809, 2.1228),
(2, 'Santiago Bernabeu', 'Madrid', 'Spain', 40.4531, -3.6883),
(3, 'Old Trafford', 'Manchester', 'England', 53.4631, -2.2913),
(4, 'San Siro', 'Milan', 'Italy', 45.4781, 9.1242),
(5, 'Allianz Arena', 'Munich', 'Germany', 48.2188, 11.6247);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `favoriteTeam` varchar(255) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `city`, `state`, `favoriteTeam`, `latitude`, `longitude`) VALUES
(6, 'Riccardo', 'Schicchi', 'riccardo@gmail.com', 'roma', 'italia', 'roma', NULL, NULL),
(7, 'fortunato', 'franceschi', 'fortu@gmail.com', 'napoli', 'italia', 'napoli', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dates`
--
ALTER TABLE `dates`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `defaultmarker`
--
ALTER TABLE `defaultmarker`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `stadi`
--
ALTER TABLE `stadi`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dates`
--
ALTER TABLE `dates`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `defaultmarker`
--
ALTER TABLE `defaultmarker`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stadi`
--
ALTER TABLE `stadi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
