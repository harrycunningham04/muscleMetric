-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 01, 2025 at 04:37 PM
-- Server version: 8.0.42
-- PHP Version: 8.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hc920_muscleMetric`
--

-- --------------------------------------------------------

--
-- Table structure for table `Exercises`
--

CREATE TABLE `Exercises` (
  `id` bigint NOT NULL,
  `Name` varchar(255) NOT NULL,
  `BodyPart` varchar(255) NOT NULL,
  `Equipment` varchar(255) DEFAULT NULL,
  `SetUpDescription` text,
  `RepDescription` text,
  `Type` enum('Compound','Isolation') DEFAULT NULL,
  `ExperienceLevel` enum('Beginner','Intermediate','Advanced') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Exercises`
--

INSERT INTO `Exercises` (`id`, `Name`, `BodyPart`, `Equipment`, `SetUpDescription`, `RepDescription`, `Type`, `ExperienceLevel`) VALUES
(1, 'Bench Press', 'chest', 'Barbell, Bench', 'Lie flat on your back on a bench with the barbell set above your chest. Place your hands slightly wider than shoulder-width apart on the bar.', 'Lower the barbell slowly to your chest while maintaining control. Press the bar back up to the starting position, ensuring your elbows are at a 45-degree angle to your torso throughout the movement.', 'Compound', 'Intermediate'),
(2, 'Incline Bench Press', 'chest', 'Barbell, Incline Bench', 'Lie on an incline bench with the barbell positioned above your chest. Grip the barbell slightly wider than shoulder-width.', 'Lower the barbell to the upper part of your chest and then press it back up to the starting position, keeping your elbows at a 45-degree angle.', 'Compound', 'Advanced'),
(3, 'Decline Bench Press', 'chest', 'Barbell, Decline Bench', 'Lie on a decline bench with the barbell positioned above your chest. Grip the barbell slightly wider than shoulder-width.', 'Lower the barbell to the lower part of your chest, then press it back up to the starting position while maintaining control.', 'Compound', 'Advanced'),
(4, 'Dumbbell Bench Press', 'chest', 'Dumbbells, Bench', 'Lie flat on your back on a bench and hold a dumbbell in each hand at shoulder level.', 'Press the dumbbells upward, extending your arms fully, then lower them back to the starting position.', 'Compound', 'Beginner'),
(5, 'Dumbbell Flys', 'chest', 'Dumbbells, Bench', 'Lie flat on a bench with a dumbbell in each hand, arms extended above your chest.', 'Slowly lower the dumbbells outward, keeping a slight bend in your elbows. Bring the dumbbells back together, squeezing your chest.', 'Isolation', 'Beginner'),
(6, 'Incline Dumbbell Press', 'chest', 'Dumbbells, Incline Bench', 'Lie on an incline bench and hold a dumbbell in each hand above your chest.', 'Lower the dumbbells to the sides of your chest, then press them back up to the starting position.', 'Compound', 'Intermediate'),
(7, 'Chest Dips', 'chest', 'Dip Bars', 'Grip the dip bars and lift yourself up, keeping your torso slightly forward.', 'Lower your body by bending your elbows until your upper arms are parallel to the ground, then press back up.', 'Compound', 'Intermediate'),
(8, 'Cable Chest Fly', 'chest', 'Cable Machine', 'Stand facing a cable machine with the pulleys set above your head. Hold the handles with both hands.', 'Bring your hands together in front of your chest, keeping a slight bend in your elbows, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(9, 'Machine Chest Press', 'chest', 'Chest Press Machine', 'Sit on the chest press machine, grip the handles, and adjust the seat so your arms are at a 90-degree angle.', 'Push the handles forward until your arms are fully extended, then slowly return to the starting position.', 'Compound', 'Beginner'),
(10, 'Push-Ups', 'chest', 'Bodyweight', 'Start in a plank position with your hands placed slightly wider than shoulder-width apart.', 'Lower your body toward the ground by bending your elbows, then push back up to the starting position.', 'Compound', 'Beginner'),
(11, 'Incline Cable Fly', 'chest', 'Cable Machine', 'Set the cables to the low position and lie on an incline bench with each hand holding a cable handle.', 'Bring the handles together over your chest, keeping a slight bend in your elbows, then return slowly to the starting position.', 'Isolation', 'Advanced'),
(12, 'Decline Cable Fly', 'chest', 'Cable Machine', 'Set the cables to the high position and lie on a decline bench with each hand holding a cable handle.', 'Bring the handles down and together in front of your chest, keeping a slight bend in your elbows, then return to the starting position.', 'Isolation', 'Advanced'),
(13, 'Flat Chest Press Machine', 'chest', 'Chest Press Machine', 'Sit on the machine and adjust the seat so that the handles align with your chest.', 'Push the handles forward to fully extend your arms, then slowly return to the starting position.', 'Compound', 'Beginner'),
(14, 'Wide Push-Ups', 'chest', 'Bodyweight', 'Start in a plank position with your hands placed wider than shoulder-width apart.', 'Lower your body to the ground, keeping your elbows flared out to the sides, then push back up to the starting position.', 'Compound', 'Beginner'),
(15, 'Archer Push-Ups', 'chest', 'Bodyweight', 'Start in a wide push-up position, but shift your weight toward one arm as you lower your body.', 'Lower your body as much as you can toward one arm, then push back up and repeat on the other arm.', 'Compound', 'Beginner'),
(16, 'Chest Press with Resistance Bands', 'chest', 'Resistance Bands', 'Secure the resistance bands behind you and hold one end in each hand.', 'Push the bands forward until your arms are fully extended, then slowly return to the starting position.', 'Compound', 'Advanced'),
(17, 'Single Arm Dumbbell Chest Press', 'chest', 'Dumbbell, Bench', 'Lie on a bench with a dumbbell in one hand, positioned above your chest.', 'Press the dumbbell upward, then lower it back down while maintaining control of the movement.', 'Compound', 'Intermediate'),
(18, 'Decline Dumbbell Press', 'chest', 'Dumbbells, Decline Bench', 'Lie on a decline bench and hold a dumbbell in each hand at shoulder level.', 'Press the dumbbells upward until your arms are fully extended, then lower them back to the starting position.', 'Compound', 'Advanced'),
(19, 'Dumbbell Pullover', 'chest', 'Dumbbell, Bench', 'Lie on a bench with a dumbbell in both hands extended above your chest.', 'Lower the dumbbell back over your head in an arc, then pull it back over your chest.', 'Compound', 'Advanced'),
(20, 'Flat Dumbbell Flys', 'chest', 'Dumbbells, Bench', 'Lie flat on a bench with a dumbbell in each hand, arms extended above your chest.', 'Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.', 'Isolation', 'Intermediate'),
(21, 'Close-Grip Bench Press', 'chest', 'Barbell, Bench', 'Lie flat on a bench and grip the barbell with your hands positioned closer than shoulder-width apart.', 'Lower the barbell to your chest, keeping your elbows close to your body, then press it back up to the starting position.', 'Compound', 'Advanced'),
(22, 'Flat Barbell Press', 'chest', 'Barbell, Bench', 'Lie flat on a bench with the barbell positioned above your chest.', 'Lower the barbell to your chest, keeping your elbows at a 45-degree angle, then press it back up.', 'Compound', 'Advanced'),
(23, 'Pec Deck Machine', 'chest', 'Pec Deck Machine', 'Sit on the pec deck machine with your arms at a 90-degree angle and adjust the seat to ensure proper alignment.', 'Squeeze the handles together, focusing on contracting your chest muscles, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(24, 'Cable Chest Press', 'chest', 'Cable Machine', 'Stand facing away from the cable machine, gripping the handles with both hands.', 'Push the handles forward, keeping your elbows slightly bent, then slowly return to the starting position.', 'Compound', 'Intermediate'),
(25, 'Standing Chest Fly with Bands', 'chest', 'Resistance Bands', 'Anchor the resistance bands behind you and hold the handles in each hand.', 'Bring the handles together in front of your chest, maintaining a slight bend in your elbows, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(26, 'Floor Press', 'chest', 'Barbell, Dumbbells', 'Lie on the floor with a barbell or dumbbells positioned above your chest.', 'Press the weight upward, fully extending your arms, then lower it back to the floor.', 'Compound', 'Advanced'),
(27, 'Explosive Push-Ups', 'chest', 'Bodyweight', 'Start in a plank position, hands placed slightly wider than shoulder-width apart.', 'Lower your body, then explosively push up off the ground, allowing your hands to leave the floor.', 'Compound', 'Intermediate'),
(28, 'Push-Up with Clap', 'chest', 'Bodyweight', 'Start in a plank position with your hands placed slightly wider than shoulder-width apart.', 'Lower your body to the ground, then explosively push up and clap your hands before landing.', 'Compound', 'Advanced'),
(29, 'Dumbbell Squeeze Press', 'chest', 'Dumbbells, Bench', 'Lie on a bench holding a dumbbell in each hand. Press the dumbbells together in front of your chest.', 'Press the dumbbells upward while maintaining the squeeze, then lower them back down.', 'Compound', 'Advanced'),
(30, 'Kettlebell Chest Press', 'chest', 'Kettlebells, Bench', 'Lie on a bench holding a kettlebell in each hand, positioned above your chest.', 'Press the kettlebells upward until your arms are fully extended, then lower them back down.', 'Compound', 'Intermediate'),
(31, 'Swiss Ball Push-Ups', 'chest', 'Swiss Ball, Bodyweight', 'Place your hands on a Swiss ball and start in a plank position.', 'Lower your body to the ball, then push back up to the starting position.', 'Compound', 'Advanced'),
(32, 'Push-Up to T', 'chest', 'Bodyweight', 'Start in a plank position and perform a push-up.', 'At the top of the push-up, rotate your body into a side plank, reaching one hand toward the ceiling.', 'Compound', 'Advanced'),
(33, 'Single Arm Chest Press', 'chest', 'Dumbbells, Bench', 'Lie on a bench with one dumbbell in each hand, or use one hand to hold the weight.', 'Press the dumbbell upward with one arm, then return it to the starting position.', 'Compound', 'Advanced'),
(34, 'Resistance Band Chest Fly', 'chest', 'Resistance Bands', 'Anchor the resistance bands behind you and hold the handles in each hand.', 'Bring the handles together in front of your chest, keeping a slight bend in your elbows, then slowly return to the starting position.', 'Isolation', 'Intermediate'),
(35, 'Band Chest Press', 'chest', 'Resistance Bands', 'Anchor the resistance bands behind you and hold one handle in each hand.', 'Press the bands forward, keeping your elbows slightly bent, then return to the starting position.', 'Compound', 'Beginner'),
(36, 'Incline Barbell Press', 'chest', 'Barbell, Incline Bench', 'Lie on an incline bench with the barbell positioned above your chest.', 'Lower the barbell to your chest, then press it back up to the starting position.', 'Compound', 'Intermediate'),
(37, 'Decline Barbell Press', 'chest', 'Barbell, Decline Bench', 'Lie on a decline bench with the barbell positioned above your chest.', 'Lower the barbell to the lower part of your chest, then press it back up to the starting position.', 'Compound', 'Intermediate'),
(38, 'Kettlebell Chest Fly', 'chest', 'Kettlebells, Bench', 'Lie on a bench holding a kettlebell in each hand, arms extended above your chest.', 'Lower the kettlebells outward, keeping a slight bend in your elbows, then bring them back together.', 'Isolation', 'Intermediate'),
(39, 'Medicine Ball Push-Ups', 'chest', 'Medicine Ball, Bodyweight', 'Place one hand on a medicine ball and the other hand on the floor in a plank position.', 'Lower your chest to the ground, then push back up to the starting position.', 'Compound', 'Intermediate'),
(40, 'Svend Press', 'chest', 'Plate', 'Hold a weight plate between your hands in front of your chest, arms extended.', 'Press the plate outward, squeezing your chest, then return to the starting position.', 'Isolation', 'Intermediate'),
(41, 'Incline Dumbbell Press', 'chest', 'Dumbbells, Incline Bench', 'Lie on an incline bench with a dumbbell in each hand, elbows bent at a 90-degree angle.', 'Press the dumbbells upward, fully extending your arms, then lower them back down to the starting position.', 'Compound', 'Intermediate'),
(42, 'Decline Dumbbell Press', 'chest', 'Dumbbells, Decline Bench', 'Lie on a decline bench with a dumbbell in each hand, elbows bent at a 90-degree angle.', 'Press the dumbbells upward, fully extending your arms, then lower them back down.', 'Compound', 'Intermediate'),
(43, 'Machine Chest Press', 'chest', 'Chest Press Machine', 'Sit on the chest press machine, adjusting the seat and handles so that they align with your chest.', 'Push the handles forward until your arms are fully extended, then slowly return to the starting position.', 'Compound', 'Beginner'),
(44, 'Close-Grip Push-Up', 'chest', 'Bodyweight', 'Start in a plank position with your hands placed closer than shoulder-width apart.', 'Lower your chest to the ground, keeping your elbows close to your body, then press back up to the starting position.', 'Compound', 'Intermediate'),
(45, 'Standing Chest Press (Cable)', 'chest', 'Cable Machine', 'Stand facing the cable machine with the handles at chest level.', 'Push the handles forward, keeping your elbows slightly bent, then return to the starting position.', 'Compound', 'Intermediate'),
(46, 'Cable Cross-Over', 'chest', 'Cable Machine', 'Stand facing the cable machine with the handles set high above your head.', 'Pull the handles downward and across your body, squeezing your chest at the bottom, then slowly return to the starting position.', 'Isolation', 'Intermediate'),
(47, 'Dumbbell Chest Fly', 'chest', 'Dumbbells, Bench', 'Lie on a bench with a dumbbell in each hand, arms extended above your chest.', 'Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.', 'Isolation', 'Intermediate'),
(48, 'Dips (Chest Version)', 'chest', 'Dip Bars', 'Grasp the dip bars and lift your body up.', 'Lower your body, leaning forward to target the chest, then push back up to the starting position.', 'Compound', 'Advanced'),
(49, 'Smith Machine Chest Press', 'chest', 'Smith Machine, Barbell', 'Set up the Smith machine with a barbell above your chest while lying on a bench.', 'Press the barbell upward, fully extending your arms, then lower it back down.', 'Compound', 'Intermediate'),
(50, 'Bodyweight Chest Fly (Suspension Trainer)', 'chest', 'Suspension Trainer', 'Adjust the suspension trainer handles to chest height and grab both handles.', 'Lower your body, extending your arms out in front of you, then bring your hands together in a fly motion.', 'Isolation', 'Intermediate'),
(51, 'Pec Deck Machine', 'chest', 'Pec Deck Machine', 'Sit on the pec deck machine with your arms against the pads.', 'Bring the handles together in front of your chest, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(52, 'Guillotine Press', 'chest', 'Barbell, Bench', 'Lie on a bench and grip the barbell wider than shoulder-width.', 'Lower the barbell to your neck, then press back up to the starting position.', 'Compound', 'Advanced'),
(53, 'Archer Push-Up', 'chest', 'Bodyweight', 'Start in a wide-hand push-up position.', 'Lower your chest toward one hand while keeping the other arm extended, then switch sides.', 'Compound', 'Advanced'),
(54, 'Kettlebell Chest Press', 'chest', 'Kettlebells, Bench', 'Lie on a bench with a kettlebell in each hand.', 'Press the kettlebells upward, fully extending your arms, then lower them back down.', 'Compound', 'Intermediate'),
(55, 'Landmine Press', 'chest', 'Landmine Barbell', 'Hold one end of the barbell in both hands at chest level.', 'Press the barbell forward until your arms are fully extended, then return to the starting position.', 'Compound', 'Intermediate'),
(56, 'Explosive Push-Up', 'chest', 'Bodyweight', 'Start in a plank position and perform a push-up.', 'Push off the ground explosively, lifting your hands off the floor, then land softly and repeat.', 'Compound', 'Advanced'),
(57, 'Cable Decline Press', 'chest', 'Cable Machine', 'Set the cable pulleys to a high position and grip the handles.', 'Press the cables downward in a decline motion, then slowly return to the start.', 'Compound', 'Intermediate'),
(58, 'Sling Shot Push-Up', 'chest', 'Slingshot Band, Bodyweight', 'Wear a slingshot band around your upper arms.', 'Perform push-ups with added resistance from the band, helping maintain proper form.', 'Compound', 'Intermediate'),
(59, 'Hammer Strength Chest Press', 'chest', 'Hammer Strength Machine', 'Sit at the machine and grip the handles at chest level.', 'Press the handles forward, extending your arms, then return to the starting position.', 'Compound', 'Beginner'),
(60, 'Spiderman Push-Up', 'chest', 'Bodyweight', 'Start in a push-up position.', 'Lower your chest to the floor while bringing one knee toward your elbow, then switch sides.', 'Compound', 'Advanced'),
(61, 'Feet-Elevated Push-Up', 'chest', 'Bodyweight, Bench', 'Place your feet on an elevated surface and assume a push-up position.', 'Perform push-ups with an increased range of motion due to the elevation.', 'Compound', 'Intermediate'),
(62, 'Wall Push-Up', 'chest', 'Bodyweight', 'Stand facing a wall with your hands placed at shoulder height.', 'Perform push-ups against the wall, keeping your body straight.', 'Compound', 'Beginner'),
(63, 'Arms Extended Push-Up', 'chest', 'Bodyweight', 'Start in a push-up position with your hands farther forward than usual.', 'Perform push-ups in this extended position to target the chest differently.', 'Compound', 'Advanced'),
(64, 'Incline Machine Chest Press', 'chest', 'Incline Chest Press Machine', 'Sit on the incline chest press machine and grip the handles.', 'Press the handles forward until your arms are fully extended, then slowly return.', 'Compound', 'Beginner'),
(65, 'Push-Up with Feet Elevated', 'chest', 'Bodyweight, Bench', 'Place your feet on a bench and your hands on the floor in a plank position.', 'Lower your body, then push back up to the starting position.', 'Compound', 'Intermediate'),
(66, 'Ring Push-Ups', 'chest', 'Gymnastic Rings', 'Set up gymnastic rings and hold them with your palms facing inward in a plank position.', 'Lower your body until your chest nearly touches the ground, then press back up to the starting position.', 'Compound', 'Advanced'),
(67, 'Incline Chest Press with Dumbbells', 'chest', 'Dumbbells, Incline Bench', 'Lie on an incline bench with a dumbbell in each hand.', 'Press the dumbbells upward, fully extending your arms, then lower them back down.', 'Compound', 'Intermediate'),
(68, 'Floor Chest Fly', 'chest', 'Dumbbells, Bodyweight', 'Lie on the floor holding a dumbbell in each hand, arms extended above your chest.', 'Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.', 'Isolation', 'Beginner'),
(69, 'Push-Up with One Arm', 'chest', 'Bodyweight', 'Start in a plank position with your feet shoulder-width apart, and place one hand under your chest.', 'Lower your body with one arm, then press back up to the starting position.', 'Compound', 'Advanced'),
(70, 'Dumbbell Squeeze Press on Stability Ball', 'chest', 'Dumbbells, Stability Ball', 'Lie on a stability ball with a dumbbell in each hand, pressing them together in front of your chest.', 'Press the dumbbells upward while maintaining the squeeze, then lower them back down.', 'Compound', 'Intermediate'),
(71, 'Chest Press Machine (Seated)', 'chest', 'Chest Press Machine', 'Sit on the chest press machine and set the handles at chest height.', 'Push the handles forward until your arms are fully extended, then return to the starting position.', 'Compound', 'Beginner'),
(72, 'Barbell Bench Press (Paused)', 'chest', 'Barbell, Bench', 'Lie on a bench with a barbell above your chest, keeping your feet flat on the floor.', 'Lower the barbell to your chest and pause for a second before pressing it back up.', 'Compound', 'Intermediate'),
(73, 'Hammer Strength Chest Press', 'chest', 'Hammer Strength Machine', 'Sit on the Hammer Strength machine, adjusting the seat so that the handles align with your chest.', 'Push the handles forward, extending your arms fully, then return to the starting position.', 'Compound', 'Intermediate'),
(74, 'Chest Press with Dumbbells (Single Arm)', 'chest', 'Dumbbells, Bench', 'Lie on a bench with a dumbbell in one hand, positioned above your chest.', 'Press the dumbbell upward, fully extending your arm, then lower it back down.', 'Compound', 'Intermediate'),
(75, 'Incline Dumbbell Chest Fly', 'chest', 'Dumbbells, Incline Bench', 'Lie on an incline bench holding a dumbbell in each hand, arms extended above your chest.', 'Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.', 'Isolation', 'Intermediate'),
(76, 'Push-Up with Hand Release', 'chest', 'Bodyweight', 'Start in a plank position with your hands placed slightly wider than shoulder-width apart.', 'Lower your body, then lift your hands off the ground at the bottom of the push-up before pressing back up.', 'Compound', 'Intermediate'),
(77, 'Dumbbell Pullover (Chest Focus)', 'chest', 'Dumbbell, Bench', 'Lie on a bench with a dumbbell in both hands, extended above your chest.', 'Lower the dumbbell behind your head in a controlled manner, then return it to the starting position.', 'Compound', 'Intermediate'),
(78, 'Plate Press Out', 'chest', 'Plate', 'Hold a weight plate with both hands in front of your chest.', 'Press the plate outward, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(79, 'Clapping Push-Ups (Advanced)', 'chest', 'Bodyweight', 'Start in a plank position with your hands placed slightly wider than shoulder-width apart.', 'Lower your body, then explosively push up and clap your hands before landing.', 'Compound', 'Advanced'),
(80, 'Box Push-Ups', 'chest', 'Bodyweight', 'Place your feet on a box and your hands on the floor in a plank position.', 'Lower your chest to the ground, then press back up to the starting position.', 'Compound', 'Intermediate'),
(81, 'Plyometric Push-Up', 'chest', 'Bodyweight', 'Start in a plank position with your hands placed slightly wider than shoulder-width apart.', 'Lower your body and explosively push up so your hands leave the ground, then land softly and repeat.', 'Compound', 'Advanced'),
(82, 'Flat Barbell Chest Press', 'chest', 'Barbell, Bench', 'Lie on a flat bench with a barbell above your chest, feet flat on the floor.', 'Lower the barbell slowly to your chest, then press it back up until your arms are fully extended.', 'Compound', 'Intermediate'),
(83, 'Single-Arm Cable Chest Fly', 'chest', 'Cable Machine', 'Set the cable machine to a medium height and attach one handle to each side.', 'With one hand, pull the handle across your body, keeping your arm slightly bent, then return to the starting position.', 'Isolation', 'Intermediate'),
(84, 'Decline Barbell Bench Press', 'chest', 'Barbell, Decline Bench', 'Lie on a decline bench with a barbell above your chest, feet secured.', 'Lower the barbell to your lower chest, then press it back up.', 'Compound', 'Intermediate'),
(85, 'Bodyweight Chest Dip (Weighted)', 'chest', 'Dip Bars, Weight Belt', 'Grasp the dip bars and lift your body, adding weight with a weight belt if necessary.', 'Lower your body with a slight lean forward to target the chest, then push back up.', 'Compound', 'Advanced'),
(86, 'Machine Pec Deck', 'chest', 'Pec Deck Machine', 'Sit on the machine with your back flat against the pad and your forearms against the pads.', 'Bring your arms together in front of you, squeezing your chest, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(87, 'Dumbbell Chest Press (Neutral Grip)', 'chest', 'Dumbbells, Bench', 'Lie on a bench holding a dumbbell in each hand with your palms facing each other.', 'Press the dumbbells upward, fully extending your arms, then lower them back down.', 'Compound', 'Intermediate'),
(88, 'Barbell Pullover (Chest Focused)', 'chest', 'Barbell, Bench', 'Lie on a bench holding a barbell above your chest with both hands.', 'Lower the barbell behind your head, keeping your arms slightly bent, then return to the starting position.', 'Compound', 'Intermediate'),
(89, 'T-Bar Chest Press', 'chest', 'T-Bar Machine', 'Sit at the T-Bar machine with your chest against the pad and hands on the handles.', 'Press the handles forward until your arms are extended, then return to the starting position.', 'Compound', 'Intermediate'),
(90, 'Push-Up with Band Resistance', 'chest', 'Resistance Bands, Bodyweight', 'Place a resistance band across your upper back, anchoring the ends under your hands.', 'Perform a standard push-up while the band adds resistance to the movement.', 'Compound', 'Intermediate'),
(91, 'Barbell Chest Press with Pause', 'chest', 'Barbell, Bench', 'Lie on a flat bench with a barbell above your chest, feet flat on the floor.', 'Lower the barbell to your chest and pause for a brief moment before pressing it back up.', 'Compound', 'Intermediate'),
(92, 'Incline Chest Press with Cable', 'chest', 'Cable Machine', 'Set the cables to a low position and hold a handle in each hand.', 'Press the handles upward and forward, then return to the starting position.', 'Compound', 'Intermediate'),
(93, 'Chest Fly (With Resistance Bands)', 'chest', 'Resistance Bands', 'Anchor the resistance bands in front of you at chest height and hold the handles.', 'Bring your hands together in front of your chest, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(94, 'Cable Chest Press (Low Angle)', 'chest', 'Cable Machine', 'Set the cable machine to a low height and hold the handles with palms facing down.', 'Press the handles forward, extending your arms fully, then return to the starting position.', 'Compound', 'Intermediate'),
(95, 'Rotating Chest Press', 'chest', 'Cable Machine', 'Set the cable machine to chest height and rotate the handles so your palms face each other.', 'Press the handles forward and rotate them slightly to engage your chest, then return to the starting position.', 'Compound', 'Intermediate'),
(96, 'Standing Chest Fly (With Resistance Bands)', 'chest', 'Resistance Bands', 'Anchor the resistance bands behind you and hold the handles with your arms extended.', 'Bring your arms together in front of you, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(97, 'Isometric Chest Squeeze', 'chest', 'Bodyweight', 'Place your hands together in front of your chest and squeeze them as hard as you can.', 'Hold the squeeze for as long as possible, then relax and repeat.', 'Isolation', 'Beginner'),
(98, 'Bodyweight Chest Dip (With Feet Elevated)', 'chest', 'Dip Bars, Bench', 'Grasp the dip bars, elevate your feet on a bench, and lift your body.', 'Lower your body, then push back up while leaning slightly forward to emphasise your chest.', 'Compound', 'Advanced'),
(99, 'Pec Deck Machine (Reverse Grip)', 'chest', 'Pec Deck Machine', 'Sit on the machine with the reverse grip, hands under the pads.', 'Bring your arms together while squeezing your chest, then return to the starting position.', 'Isolation', 'Intermediate'),
(100, 'Wide-Grip Cable Chest Press', 'chest', 'Cable Machine', 'Set the cable machine handles to a medium height and hold the handles with a wide grip.', 'Press the handles forward until your arms are extended, then return to the starting position.', 'Compound', 'Intermediate'),
(101, 'Deadlift', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, gripping the barbell with an overhand grip.', 'Lift the barbell by pushing through your heels and standing up straight, keeping your back flat.', 'Compound', 'Intermediate'),
(102, 'Pull-Up', 'back', 'Pull-Up Bar', 'Hang from a pull-up bar with your palms facing away from you, hands shoulder-width apart.', 'Pull yourself upward until your chin is above the bar, then lower yourself back down.', 'Compound', 'Intermediate'),
(103, 'Bent-Over Row', 'back', 'Barbell', 'Bend at the hips and knees, gripping the barbell with a shoulder-width overhand grip.', 'Pull the barbell toward your lower ribs, squeezing your shoulder blades together, then lower it back down.', 'Compound', 'Intermediate'),
(104, 'Lat Pulldown', 'back', 'Lat Pulldown Machine', 'Sit at the lat pulldown machine with your hands gripping the bar wider than shoulder-width apart.', 'Pull the bar down to your chest, then slowly return it to the starting position.', 'Compound', 'Beginner'),
(105, 'T-Bar Row', 'back', 'T-Bar Row Machine', 'Place your feet shoulder-width apart and grip the handles of the T-Bar row machine.', 'Pull the weight towards your chest, squeezing your shoulder blades together, then return to the starting position.', 'Compound', 'Intermediate'),
(106, 'Single-Arm Dumbbell Row', 'back', 'Dumbbell, Bench', 'Place one knee and hand on a bench with your other foot on the ground. Hold a dumbbell in your free hand.', 'Pull the dumbbell towards your hip, keeping your elbow close to your body, then lower it back down.', 'Compound', 'Intermediate'),
(107, 'Chest-Supported Row', 'back', 'Chest-Supported Row Machine', 'Lie face down on the chest-supported row machine and grip the handles.', 'Pull the handles towards your body, squeezing your shoulder blades together, then return to the starting position.', 'Compound', 'Intermediate'),
(108, 'Barbell Shrug', 'back', 'Barbell', 'Stand tall holding a barbell in front of your thighs with an overhand grip.', 'Shrug your shoulders upwards, then lower them back down to the starting position.', 'Isolation', 'Beginner'),
(109, 'Seated Cable Row', 'back', 'Cable Machine', 'Sit at the cable row machine, gripping the handle with both hands.', 'Pull the handle towards your torso, squeezing your shoulder blades together, then return to the starting position.', 'Compound', 'Beginner'),
(110, 'Reverse Fly', 'back', 'Dumbbells', 'Stand with a slight bend at the hips, holding a dumbbell in each hand with palms facing each other.', 'Lift the dumbbells out to your sides, squeezing your shoulder blades together, then lower them back down.', 'Isolation', 'Intermediate'),
(111, 'Face Pull', 'back', 'Cable Machine', 'Set the cable machine to face height and attach a rope handle.', 'Pull the rope towards your face, keeping your elbows high and squeezing your shoulder blades together.', 'Isolation', 'Intermediate'),
(112, 'Machine Row', 'back', 'Row Machine', 'Sit on the machine with your chest against the pad and feet firmly placed.', 'Pull the handles towards your torso, squeezing your shoulder blades, then return to the starting position.', 'Compound', 'Beginner'),
(113, 'Kettlebell Swing', 'back', 'Kettlebell', 'Stand with your feet shoulder-width apart and grip a kettlebell with both hands.', 'Swing the kettlebell between your legs, then thrust your hips forward to swing it to shoulder height.', 'Compound', 'Intermediate'),
(114, 'Rack Pull', 'back', 'Barbell', 'Stand with a barbell set just below knee height in a squat rack.', 'Lift the barbell by extending your hips and knees, then lower it back down.', 'Compound', 'Intermediate'),
(115, 'Bent-Over Dumbbell Row', 'back', 'Dumbbells', 'Stand with a slight bend at your hips and knees, holding a dumbbell in each hand.', 'Row the dumbbells toward your torso, then lower them back down.', 'Compound', 'Intermediate'),
(116, 'Good Morning', 'back', 'Barbell', 'Place a barbell on your upper back, feet shoulder-width apart.', 'Bend at the hips, keeping your back straight, then return to standing.', 'Compound', 'Intermediate'),
(117, 'Inverted Row', 'back', 'Bodyweight, Barbell', 'Set a barbell in a squat rack at waist height, lie underneath it, and grip it with an overhand grip.', 'Pull your chest towards the bar, then lower yourself back down.', 'Compound', 'Intermediate'),
(118, 'Dumbbell Pullover', 'back', 'Dumbbell, Bench', 'Lie on a bench holding a dumbbell above your chest with both hands.', 'Lower the dumbbell behind your head, keeping your arms slightly bent, then return it to the starting position.', 'Compound', 'Intermediate'),
(119, 'Renegade Row', 'back', 'Dumbbells', 'Get into a plank position holding a dumbbell in each hand.', 'Row one dumbbell towards your chest while stabilising your body, then alternate arms.', 'Compound', 'Advanced'),
(120, 'Kroc Row', 'back', 'Dumbbell', 'Stand with one dumbbell in hand and place the opposite knee and hand on a bench.', 'Row the dumbbell toward your torso, keeping your elbow close to your body, then lower it back down.', 'Compound', 'Advanced'),
(121, 'Reverse Grip Barbell Row', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, gripping the barbell with an underhand (supine) grip.', 'Row the barbell to your torso, squeezing your shoulder blades together, then lower it back down.', 'Compound', 'Intermediate'),
(122, 'Wide-Grip Lat Pulldown', 'back', 'Lat Pulldown Machine', 'Sit at the lat pulldown machine, gripping the bar wider than shoulder-width apart.', 'Pull the bar down to your chest, then slowly return to the starting position.', 'Compound', 'Beginner'),
(123, 'Single-Arm Cable Row', 'back', 'Cable Machine', 'Stand at a cable machine, attaching a single handle to the low pulley.', 'Pull the handle toward your torso, squeezing your shoulder blades together, then return to the starting position.', 'Compound', 'Intermediate'),
(124, 'Machine Pullover', 'back', 'Machine Pullover Machine', 'Sit at the pullover machine, gripping the handles with your arms extended in front of you.', 'Pull the handles down and behind your back, then slowly return to the starting position.', 'Compound', 'Intermediate'),
(125, 'Barbell Row with Pause', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, gripping the barbell with a pronated grip.', 'Row the barbell to your torso, hold the top position for 1-2 seconds, then lower it back down.', 'Compound', 'Advanced'),
(126, 'Neutral Grip Pulldown', 'back', 'Lat Pulldown Machine', 'Sit at the lat pulldown machine with a neutral grip (palms facing each other).', 'Pull the bar down to your chest, then slowly return it to the starting position.', 'Compound', 'Intermediate'),
(127, 'Dumbbell Row with Elbow Out', 'back', 'Dumbbell', 'Place one hand and knee on a bench, holding a dumbbell with the other hand.', 'Row the dumbbell towards your rib cage, with your elbow flared out to your side, then lower it back down.', 'Compound', 'Intermediate'),
(128, 'Inverted Row with Feet Elevated', 'back', 'Bodyweight, Barbell', 'Set a barbell in a squat rack at waist height, place your feet on a bench or elevated surface, and grip the bar.', 'Pull your chest towards the bar, then lower yourself back down.', 'Compound', 'Advanced'),
(129, 'Dumbbell Rack Pull', 'back', 'Dumbbells', 'Place two dumbbells on the ground in front of you, then bend over to grip them.', 'Lift the dumbbells by extending your hips and knees, then lower them back down.', 'Compound', 'Intermediate'),
(130, 'Hyperextension', 'back', 'Roman Chair', 'Position yourself on a Roman chair with your feet locked and torso extended.', 'Lower your torso toward the floor and then raise it back to the starting position, focusing on your lower back.', 'Isolation', 'Beginner'),
(131, 'Standing Cable Row', 'back', 'Cable Machine', 'Stand facing a cable machine with a straight bar or handle attached to the low pulley.', 'Pull the bar towards your torso, squeezing your shoulder blades together, then return to the starting position.', 'Compound', 'Intermediate'),
(132, 'Zottman Row', 'back', 'Dumbbells', 'Stand with a dumbbell in each hand, palms facing each other.', 'Row the dumbbells towards your torso, then rotate your wrists so your palms face down and lower them back down.', 'Compound', 'Intermediate'),
(133, 'Spider Curl Row', 'back', 'Dumbbells', 'Lie prone on a bench, gripping a dumbbell in each hand with your arms extended towards the floor.', 'Row the dumbbells towards your torso while keeping your arms parallel to the ground, then lower them back down.', 'Compound', 'Advanced'),
(134, 'Straight-Arm Pulldown', 'back', 'Cable Machine', 'Stand at a cable machine with a straight bar attachment, gripping the bar with your arms straight in front of you.', 'Pull the bar down in an arc until it reaches your thighs, then slowly return to the starting position.', 'Isolation', 'Intermediate'),
(135, 'Decline Dumbbell Row', 'back', 'Dumbbells, Bench', 'Set a bench at a slight decline and lie chest down, holding a dumbbell in each hand.', 'Row the dumbbells towards your torso, then lower them back down.', 'Compound', 'Intermediate'),
(136, 'Kettlebell Renegade Row', 'back', 'Kettlebells', 'Get into a plank position holding a kettlebell in each hand.', 'Row one kettlebell toward your torso while stabilizing your body, then alternate arms.', 'Compound', 'Advanced'),
(137, 'Machine Back Extension', 'back', 'Machine', 'Sit on the back extension machine, securing your feet and adjusting the pad to rest on your lower back.', 'Extend your back to straighten your torso, then return to the starting position.', 'Isolation', 'Beginner'),
(138, 'Bodyweight Rows (TRX)', 'back', 'TRX', 'Set the TRX straps to a suitable length and grip them with both hands.', 'Pull your chest towards your hands, keeping your body straight, then lower yourself back down.', 'Compound', 'Intermediate'),
(139, 'Dumbbell Rear Delt Row', 'back', 'Dumbbells', 'Stand with a slight bend at the hips, holding a dumbbell in each hand with palms facing each other.', 'Row the dumbbells towards your rear deltoids, keeping your elbows high and wide.', 'Compound', 'Intermediate'),
(140, 'Wide-Grip Barbell Row', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, gripping a barbell with a wide overhand grip.', 'Row the barbell towards your torso, keeping your elbows out to the sides, then lower it back down.', 'Compound', 'Intermediate'),
(141, 'Standing Barbell Row', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, gripping the barbell with a pronated grip, arms extended in front of you.', 'Row the barbell towards your torso, squeezing your shoulder blades together, then lower it back down.', 'Compound', 'Intermediate'),
(142, 'Cable Face Pull', 'back', 'Cable Machine', 'Set the cable machine to face height with a rope attachment, gripping the rope with both hands.', 'Pull the rope towards your face, keeping your elbows high and wide, then return to the starting position.', 'Isolation', 'Intermediate'),
(143, 'Chin-Up', 'back', 'Pull-Up Bar', 'Hang from a pull-up bar with your palms facing towards you (supine grip).', 'Pull yourself up until your chin is above the bar, then lower yourself back down.', 'Compound', 'Intermediate'),
(144, 'Dumbbell Deadlift', 'back', 'Dumbbells', 'Stand with your feet shoulder-width apart, holding a dumbbell in each hand.', 'Bend at the hips and knees to lower the dumbbells towards the ground, then return to standing.', 'Compound', 'Intermediate'),
(145, 'Kettlebell Deadlift', 'back', 'Kettlebell', 'Stand with your feet shoulder-width apart, gripping a kettlebell with both hands.', 'Hinge at your hips to lower the kettlebell towards the ground, then return to standing.', 'Compound', 'Intermediate'),
(146, 'Straight-Arm Dumbbell Pullover', 'back', 'Dumbbell, Bench', 'Lie on a bench holding a dumbbell above your chest with both hands.', 'Lower the dumbbell behind your head with straight arms, then bring it back to the starting position.', 'Compound', 'Intermediate'),
(147, 'Dumbbell Rack Pull (Shrug)', 'back', 'Dumbbells', 'Place two dumbbells on the ground in front of you, then bend over to grip them.', 'Lift the dumbbells by shrugging your shoulders upwards, then lower them back down.', 'Isolation', 'Intermediate'),
(148, 'Barbell Pull-Through', 'back', 'Cable Machine, Barbell', 'Attach a rope to the low pulley of a cable machine and stand facing away from the machine with a slight bend in your knees.', 'Grip the rope with both hands and pull it between your legs, squeezing your glutes and back as you extend your hips.', 'Compound', 'Intermediate'),
(149, 'Reverse Hyperextension', 'back', 'Hyperextension Machine', 'Lie face down on the reverse hyperextension machine, with your legs hanging off.', 'Lift your legs towards the ceiling while keeping them straight, then lower them back down.', 'Isolation', 'Beginner'),
(150, 'Seated Dumbbell Row', 'back', 'Dumbbells', 'Sit on a bench holding a dumbbell in each hand, elbows bent at 90 degrees.', 'Row the dumbbells towards your torso, then lower them back down.', 'Compound', 'Intermediate'),
(151, 'Machine Lat Pulldown', 'back', 'Lat Pulldown Machine', 'Sit at a lat pulldown machine with a wide grip attachment.', 'Pull the bar down to your chest, then return it to the starting position.', 'Compound', 'Beginner'),
(152, 'Dumbbell Deadlift', 'back', 'Dumbbells', 'Stand with feet shoulder-width apart, holding a dumbbell in each hand.', 'Bend at the hips and knees to lower the dumbbells towards the ground, keeping your back straight, then return to standing.', 'Compound', 'Intermediate'),
(153, 'Dumbbell Pullover', 'back', 'Dumbbell, Bench', 'Lie on a bench with a dumbbell held with both hands above your chest.', 'Lower the dumbbell behind your head with both arms, then bring it back to the starting position.', 'Compound', 'Intermediate'),
(154, 'One-Arm Cable Row', 'back', 'Cable Machine', 'Sit at a cable machine with a single handle attachment and grip it with one hand.', 'Row the handle towards your torso, keeping your elbow close to your body, then return it to the starting position.', 'Compound', 'Intermediate'),
(155, 'Wide-Grip Barbell Row', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, gripping a barbell with a wide overhand grip.', 'Row the barbell towards your chest, then lower it back down.', 'Compound', 'Intermediate'),
(156, 'Seated Reverse Cable Fly', 'back', 'Cable Machine', 'Sit at a cable machine with two handles, gripping them with both hands.', 'Pull the handles back, squeezing your shoulder blades together, then return to the starting position.', 'Isolation', 'Intermediate'),
(157, 'Kettlebell Snatch', 'back', 'Kettlebell', 'Stand with your feet shoulder-width apart, gripping a kettlebell with both hands.', 'Swing the kettlebell between your legs, then explosively extend your hips to bring the kettlebell overhead.', 'Compound', 'Advanced'),
(158, 'Barbell Row with Resistance Bands', 'back', 'Barbell, Resistance Bands', 'Place resistance bands under the barbell and grip it with an overhand grip.', 'Row the barbell toward your torso, squeezing your shoulder blades together, then lower it back down.', 'Compound', 'Intermediate'),
(159, 'Lat Pulldown (Wide Grip)', 'back', 'Lat Pulldown Machine', 'Sit at a lat pulldown machine, gripping the bar wider than shoulder-width apart.', 'Pull the bar down to your chest, then return it to the starting position.', 'Compound', 'Beginner'),
(160, 'Kettlebell Row', 'back', 'Kettlebell', 'Place one knee and hand on a bench for support, holding a kettlebell in the opposite hand.', 'Row the kettlebell towards your torso, squeezing your shoulder blade, then lower it back down.', 'Compound', 'Intermediate'),
(161, 'T-Bar Row', 'back', 'T-Bar Machine', 'Stand with your chest against the pad on the T-Bar row machine, gripping the handles.', 'Row the handles towards your torso, squeezing your shoulder blades together, then return to the starting position.', 'Compound', 'Intermediate'),
(162, 'Landmine Row', 'back', 'Landmine Attachment', 'Set a barbell in a landmine attachment and grip the barbell with both hands.', 'Row the barbell towards your torso, squeezing your shoulder blades together, then lower it back down.', 'Compound', 'Intermediate'),
(163, 'Single-Arm Dumbbell Row', 'back', 'Dumbbell', 'Place one knee and hand on a bench for support, holding a dumbbell in the opposite hand.', 'Row the dumbbell towards your torso, squeezing your shoulder blade, then lower it back down.', 'Compound', 'Intermediate'),
(164, 'Bent-Over Barbell Row', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, holding a barbell with an overhand grip.', 'Bend at your hips and row the barbell towards your torso, then lower it back down.', 'Compound', 'Intermediate'),
(165, 'Chest-Supported Row', 'back', 'Machine or Dumbbells', 'Lie face down on a chest-supported row machine, gripping the handles or dumbbells.', 'Row the handles or dumbbells towards your torso, squeezing your shoulder blades together, then lower them back down.', 'Compound', 'Intermediate'),
(166, 'Smith Machine Row', 'back', 'Smith Machine', 'Stand with a barbell on a Smith machine, gripping it with an overhand grip.', 'Row the barbell towards your torso, keeping your back straight, then lower it back down.', 'Compound', 'Intermediate'),
(167, 'Inverted Row', 'back', 'Smith Machine or Bar', 'Set a bar on a Smith machine or a squat rack at waist height and lie under it, gripping the bar.', 'Pull yourself up towards the bar, then lower yourself back down.', 'Compound', 'Intermediate'),
(168, 'Seated Cable Row (Wide Grip)', 'back', 'Cable Machine', 'Sit at a cable row machine with a wide grip attachment.', 'Pull the bar towards your torso, keeping your elbows out wide, then return it to the starting position.', 'Compound', 'Intermediate'),
(169, 'Pull-Up (Wide Grip)', 'back', 'Pull-Up Bar', 'Grip a pull-up bar with your hands wider than shoulder-width apart.', 'Pull yourself up until your chin is above the bar, then lower yourself back down.', 'Compound', 'Intermediate'),
(170, 'Suspended Row', 'back', 'Suspension Trainer', 'Set up suspension trainers, gripping the handles with your arms fully extended.', 'Pull your chest up towards the handles, then lower yourself back down.', 'Compound', 'Intermediate'),
(171, 'Rack Pull', 'back', 'Barbell', 'Set a barbell on a rack just below knee height.', 'Lift the barbell by extending your hips and knees, then lower it back down to the rack.', 'Compound', 'Intermediate'),
(172, 'Dumbbell Shrug', 'back', 'Dumbbells', 'Stand holding a dumbbell in each hand by your sides.', 'Shrug your shoulders as high as possible, then lower them back down.', 'Isolation', 'Beginner'),
(173, 'Barbell Shrug', 'back', 'Barbell', 'Stand holding a barbell with an overhand grip, arms extended in front of you.', 'Shrug your shoulders as high as possible, then lower the barbell back down.', 'Isolation', 'Beginner'),
(174, 'Seated Dumbbell Row', 'back', 'Dumbbells', 'Sit on a bench holding a dumbbell in each hand, elbows bent at 90 degrees.', 'Row the dumbbells towards your torso, then lower them back down.', 'Compound', 'Intermediate'),
(175, 'Machine Lat Pulldown', 'back', 'Lat Pulldown Machine', 'Sit at a lat pulldown machine with a wide grip attachment.', 'Pull the bar down to your chest, then return it to the starting position.', 'Compound', 'Beginner'),
(176, 'Dumbbell Deadlift', 'back', 'Dumbbells', 'Stand with feet shoulder-width apart, holding a dumbbell in each hand.', 'Bend at the hips and knees to lower the dumbbells towards the ground, keeping your back straight, then return to standing.', 'Compound', 'Intermediate'),
(177, 'Dumbbell Pullover', 'back', 'Dumbbell, Bench', 'Lie on a bench with a dumbbell held with both hands above your chest.', 'Lower the dumbbell behind your head, keeping your arms slightly bent, then bring it back to the starting position.', 'Compound', 'Intermediate'),
(178, 'One-Arm Cable Row', 'back', 'Cable Machine', 'Stand at a cable machine with a single handle attachment and grip it with one hand.', 'Row the handle towards your torso, keeping your elbow close to your body, then return to the starting position.', 'Compound', 'Intermediate'),
(179, 'Wide-Grip Barbell Row', 'back', 'Barbell', 'Stand with your feet shoulder-width apart, gripping a barbell with a wide overhand grip.', 'Row the barbell towards your chest, then lower it back down.', 'Compound', 'Intermediate'),
(180, 'Seated Reverse Cable Fly', 'back', 'Cable Machine', 'Sit at a cable machine with two handles, gripping them with both hands.', 'Pull the handles back, squeezing your shoulder blades together, then return to the starting position.', 'Isolation', 'Intermediate'),
(181, 'Kettlebell Snatch', 'back', 'Kettlebell', 'Stand with your feet shoulder-width apart, gripping a kettlebell with both hands.', 'Swing the kettlebell between your legs, then explosively extend your hips to bring the kettlebell overhead.', 'Compound', 'Advanced'),
(182, 'Barbell Row with Resistance Bands', 'back', 'Barbell, Resistance Bands', 'Place resistance bands under the barbell and grip it with an overhand grip.', 'Row the barbell toward your torso, squeezing your shoulder blades together, then lower it back down.', 'Compound', 'Intermediate'),
(183, 'Lat Pulldown (Wide Grip)', 'back', 'Lat Pulldown Machine', 'Sit at a lat pulldown machine, gripping the bar wider than shoulder-width apart.', 'Pull the bar down to your chest, then return it to the starting position.', 'Compound', 'Beginner'),
(184, 'Kettlebell Row', 'back', 'Kettlebell', 'Place one knee and hand on a bench for support, holding a kettlebell in the opposite hand.', 'Row the kettlebell towards your torso, squeezing your shoulder blade, then lower it back down.', 'Compound', 'Intermediate'),
(185, 'Seated Lat Pulldown', 'back', 'Cable Machine', 'Sit at a lat pulldown machine with a wide grip attachment.', 'Pull the bar down to your chest, then return it to the starting position.', 'Compound', 'Beginner'),
(186, 'Machine Reverse Fly', 'back', 'Reverse Fly Machine', 'Sit on the reverse fly machine, gripping the handles.', 'Open your arms to the sides, squeezing your shoulder blades together, then return to the starting position.', 'Isolation', 'Beginner'),
(187, 'Reverse Hyperextension', 'back', 'Reverse Hyper Machine', 'Lie face down on the reverse hyperextension machine, with your legs hanging off.', 'Lift your legs towards the ceiling while keeping them straight, then lower them back down.', 'Isolation', 'Beginner'),
(188, 'Dumbbell Rows (Chest Supported)', 'back', 'Dumbbells, Bench', 'Lie face down on an inclined bench, holding a dumbbell in each hand.', 'Row the dumbbells towards your torso, squeezing your shoulder blades together, then lower them back down.', 'Compound', 'Intermediate'),
(189, 'One-Arm Dumbbell Pullover', 'back', 'Dumbbell, Bench', 'Lie on a bench with one dumbbell held above your chest with one hand.', 'Lower the dumbbell behind your head with one arm, then return it to the starting position.', 'Compound', 'Intermediate');
INSERT INTO `Exercises` (`id`, `Name`, `BodyPart`, `Equipment`, `SetUpDescription`, `RepDescription`, `Type`, `ExperienceLevel`) VALUES
(190, 'Dumbbell Deadlift', 'back', 'Dumbbells', 'Stand with feet shoulder-width apart, holding a dumbbell in each hand.', 'Bend at the hips and knees to lower the dumbbells towards the ground, keeping your back straight, then return to standing.', 'Compound', 'Intermediate'),
(191, 'Barbell Rack Pull', 'back', 'Barbell', 'Set the barbell on a rack just below knee height.', 'Lift the barbell by extending your hips and knees, then lower it back down to the rack.', 'Compound', 'Intermediate'),
(192, 'Reverse Grip Pulldown', 'back', 'Cable Machine', 'Sit at a cable machine with an underhand grip on the bar.', 'Pull the bar down towards your chest, then return to the starting position.', 'Compound', 'Intermediate'),
(193, 'Pull-Up (Chin-Up Grip)', 'back', 'Pull-Up Bar', 'Grip a pull-up bar with your palms facing towards you (underhand grip).', 'Pull yourself up until your chin is above the bar, then lower yourself back down.', 'Compound', 'Intermediate'),
(194, 'Cable Face Pull', 'back', 'Cable Machine', 'Set the cable at face height and grip the rope attachment with both hands.', 'Pull the rope towards your face, flaring your elbows out and squeezing your shoulder blades together.', 'Isolation', 'Intermediate'),
(195, 'Kettlebell Row', 'back', 'Kettlebell', 'Place one knee and hand on a bench for support, holding a kettlebell in the opposite hand.', 'Row the kettlebell towards your torso, squeezing your shoulder blade, then lower it back down.', 'Compound', 'Intermediate'),
(196, 'Seated Lat Pulldown', 'back', 'Cable Machine', 'Sit at a lat pulldown machine with a wide grip attachment.', 'Pull the bar down to your chest, then return it to the starting position.', 'Compound', 'Beginner'),
(197, 'Machine Reverse Fly', 'back', 'Reverse Fly Machine', 'Sit on the reverse fly machine, gripping the handles.', 'Open your arms to the sides, squeezing your shoulder blades together, then return to the starting position.', 'Isolation', 'Beginner'),
(198, 'Reverse Hyperextension', 'back', 'Reverse Hyper Machine', 'Lie face down on the reverse hyperextension machine, with your legs hanging off.', 'Lift your legs towards the ceiling while keeping them straight, then lower them back down.', 'Isolation', 'Beginner'),
(199, 'Dumbbell Rows (Chest Supported)', 'back', 'Dumbbells, Bench', 'Lie face down on an inclined bench, holding a dumbbell in each hand.', 'Row the dumbbells towards your torso, squeezing your shoulder blades together, then lower them back down.', 'Compound', 'Intermediate'),
(200, 'Barbell Back Squat', 'quads', 'Barbell', 'Stand with your feet shoulder-width apart and the barbell resting on your upper traps.', 'Lower your body by bending your knees and hips, keeping your chest up, then push back up to the starting position.', 'Compound', 'Intermediate'),
(201, 'Front Squat', 'quads', 'Barbell', 'Stand with your feet shoulder-width apart, holding the barbell in front of your shoulders with your elbows high.', 'Lower your body by bending your knees and hips, keeping your chest up, then return to standing.', 'Compound', 'Advanced'),
(202, 'Leg Press', 'quads', 'Leg Press Machine', 'Sit on the leg press machine with your feet shoulder-width apart on the platform.', 'Push the platform away by extending your legs, then lower the weight back down by bending your knees.', 'Compound', 'Beginner'),
(203, 'Bulgarian Split Squat', 'quads', 'Dumbbells, Bench', 'Stand a few feet away from a bench, placing one foot on it behind you.', 'Lower your body by bending your front knee, then press back up to the starting position.', 'Compound', 'Intermediate'),
(204, 'Walking Lunges', 'quads', 'Dumbbells', 'Stand tall with a dumbbell in each hand by your sides.', 'Step forward with one leg, lowering your hips to drop your back knee toward the floor. Push off your front leg and bring the back leg forward to repeat.', 'Compound', 'Intermediate'),
(205, 'Hack Squat', 'quads', 'Hack Squat Machine', 'Sit on the hack squat machine with your feet shoulder-width apart on the platform.', 'Lower your body by bending your knees, then press back up to the starting position.', 'Compound', 'Beginner'),
(206, 'Leg Extension', 'quads', 'Leg Extension Machine', 'Sit on the leg extension machine with your feet under the pad and the weight set at an appropriate level.', 'Extend your legs to a straight position, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(207, 'Goblet Squat', 'quads', 'Dumbbell or Kettlebell', 'Hold a dumbbell or kettlebell close to your chest with both hands.', 'Squat down by bending your knees and hips, keeping your chest up, then press back up to standing.', 'Compound', 'Beginner'),
(208, 'Sissy Squat', 'quads', 'Bodyweight or Sissy Squat Machine', 'Stand with your feet shoulder-width apart and your heels raised, holding onto a support for balance.', 'Lower your body by bending your knees and leaning back, then return to the starting position.', 'Compound', 'Intermediate'),
(209, 'Smith Machine Squat', 'quads', 'Smith Machine', 'Set up a Smith machine with the barbell at shoulder height and your feet shoulder-width apart.', 'Lower your body by bending your knees and hips, then return to the starting position.', 'Compound', 'Beginner'),
(210, 'Step-Up', 'quads', 'Dumbbells, Bench', 'Stand in front of a bench or step with a dumbbell in each hand.', 'Step up onto the bench with one foot, then step down with the same leg and repeat with the other leg.', 'Compound', 'Intermediate'),
(211, 'Box Squat', 'quads', 'Barbell, Box', 'Stand with your feet shoulder-width apart and a barbell resting on your upper traps, in front of a box.', 'Sit back onto the box by bending your knees and hips, then drive through your heels to return to standing.', 'Compound', 'Intermediate'),
(212, 'Pistol Squat', 'quads', 'Bodyweight', 'Stand on one leg with the other leg extended in front of you.', 'Lower yourself into a squat on one leg while keeping the other leg extended, then return to standing.', 'Compound', 'Advanced'),
(213, 'Barbell Front Squat (High Bar)', 'quads', 'Barbell', 'Stand with the barbell resting on your front shoulders, elbows high, and your feet shoulder-width apart.', 'Lower your body by bending your knees and hips, keeping your chest up, then return to standing.', 'Compound', 'Advanced'),
(214, 'Kettlebell Squat', 'quads', 'Kettlebell', 'Stand with your feet shoulder-width apart, holding a kettlebell with both hands at chest height.', 'Squat down by bending your knees and hips, keeping your chest up, then return to standing.', 'Compound', 'Intermediate'),
(215, 'Smith Machine Front Squat', 'quads', 'Smith Machine', 'Set up a Smith machine with the barbell at shoulder height in front of you, elbows high.', 'Lower your body by bending your knees and hips, then return to standing.', 'Compound', 'Intermediate'),
(216, 'Barbell Bulgarian Split Squat', 'quads', 'Barbell, Bench', 'Place one foot behind you on a bench while holding a barbell across your shoulders.', 'Lower your body by bending your front knee, then press back up to the starting position.', 'Compound', 'Advanced'),
(217, 'Dumbbell Step-Up', 'quads', 'Dumbbells, Bench', 'Stand in front of a bench, holding a dumbbell in each hand.', 'Step up onto the bench with one foot, then step back down and repeat with the other foot.', 'Compound', 'Intermediate'),
(218, 'Bodyweight Squat', 'quads', 'Bodyweight', 'Stand with your feet shoulder-width apart and your arms extended in front of you.', 'Lower your body by bending your knees and hips, keeping your chest up, then return to standing.', 'Compound', 'Beginner'),
(219, 'Overhead Squat', 'quads', 'Barbell', 'Hold a barbell overhead with your arms fully extended and your feet shoulder-width apart.', 'Lower your body into a squat while keeping the barbell overhead, then return to standing.', 'Compound', 'Advanced'),
(220, 'Squat Jump', 'quads', 'Bodyweight', 'Stand with your feet shoulder-width apart and your arms at your sides.', 'Squat down and explode up into a jump, landing softly and immediately transitioning into the next squat.', 'Compound', 'Intermediate'),
(221, 'Barbell Hack Squat', 'quads', 'Barbell', 'Stand with the barbell behind your legs, bend down, and grasp the barbell.', 'Lift the barbell by extending your hips and knees, then slowly lower it back down.', 'Compound', 'Intermediate'),
(222, 'Dumbbell Bulgarian Split Squat', 'quads', 'Dumbbells, Bench', 'Place one foot behind you on a bench while holding a dumbbell in each hand.', 'Lower your body by bending your front knee, then press back up to the starting position.', 'Compound', 'Intermediate'),
(223, 'Lunge with Twist', 'quads', 'Bodyweight', 'Step forward into a lunge position with your arms extended in front of you.', 'Twist your torso towards the leg that is in front while keeping your arms extended, then return to standing.', 'Compound', 'Intermediate'),
(224, 'Iso-Lateral Leg Press', 'quads', 'Leg Press Machine', 'Sit on the leg press machine and position your feet shoulder-width apart on the platform.', 'Push the platform up with both legs, then lower it back down in a controlled manner.', 'Compound', 'Intermediate'),
(225, 'Weighted Walking Lunge', 'quads', 'Dumbbells or Barbell', 'Hold a dumbbell in each hand or a barbell on your shoulders, and stand with your feet together.', 'Step forward into a lunge, then bring the back leg forward and repeat with the other leg.', 'Compound', 'Intermediate'),
(226, 'Dumbbell Goblet Squat', 'quads', 'Dumbbell', 'Hold a dumbbell with both hands close to your chest and stand with your feet shoulder-width apart.', 'Squat down by bending your knees and hips, keeping your chest up, then press back up to standing.', 'Compound', 'Beginner'),
(227, 'Zercher Squat', 'quads', 'Barbell', 'Hold the barbell in the crooks of your elbows, keeping your elbows up and chest tall.', 'Squat down by bending your knees and hips, then return to standing.', 'Compound', 'Intermediate'),
(228, 'Trap Bar Deadlift', 'quads', 'Trap Bar', 'Step inside a trap bar and grip the handles.', 'Push through your heels and extend your hips and knees to lift the bar, then lower it back down.', 'Compound', 'Intermediate'),
(229, 'Dumbbell Lunge', 'quads', 'Dumbbells', 'Stand tall holding a dumbbell in each hand.', 'Step forward with one leg and lower your body into a lunge, then push back to the starting position and repeat with the other leg.', 'Compound', 'Intermediate'),
(230, 'Single-Leg Leg Press', 'quads', 'Leg Press Machine', 'Sit on the leg press machine and place one foot on the platform.', 'Press the weight up with one leg, then slowly lower it back down.', 'Compound', 'Intermediate'),
(231, 'Kettlebell Goblet Squat', 'quads', 'Kettlebell', 'Hold a kettlebell close to your chest with both hands and stand with your feet shoulder-width apart.', 'Squat down by bending your knees and hips, keeping your chest up, then return to standing.', 'Compound', 'Beginner'),
(232, 'Box Jump', 'quads', 'Box', 'Stand in front of a sturdy box with your feet shoulder-width apart.', 'Squat down and explode up into a jump, landing softly and immediately transitioning into the next squat.', 'Compound', 'Intermediate'),
(233, 'Barbell Hack Squat', 'quads', 'Barbell', 'Stand with the barbell behind your legs, bend down, and grasp the barbell.', 'Lift the barbell by extending your hips and knees, then slowly lower it back down.', 'Compound', 'Intermediate'),
(234, 'Dumbbell Bulgarian Split Squat', 'quads', 'Dumbbells, Bench', 'Place one foot behind you on a bench while holding a dumbbell in each hand.', 'Lower your body by bending your front knee, then press back up to the starting position.', 'Compound', 'Intermediate'),
(235, 'Squat to Box', 'quads', 'Bodyweight or Barbell', 'Stand in front of a box or bench, with your feet shoulder-width apart.', 'Squat down and lightly touch the box with your hips, then stand back up.', 'Compound', 'Beginner'),
(236, 'Weighted Walking Lunge', 'quads', 'Dumbbells or Barbell', 'Hold a dumbbell in each hand or a barbell on your shoulders, and stand with your feet together.', 'Step forward into a lunge, then bring the back leg forward and repeat with the other leg.', 'Compound', 'Intermediate'),
(237, 'Leg Extension', 'quads', 'Leg Extension Machine', 'Sit on the leg extension machine with your knees bent and your feet under the pad.', 'Extend your legs to a straight position, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(238, 'Dumbbell Squat', 'quads', 'Dumbbells', 'Hold a dumbbell in each hand by your sides and stand with your feet shoulder-width apart.', 'Squat down by bending your knees and hips, then press back up to the starting position.', 'Compound', 'Beginner'),
(239, 'Hack Squat Machine', 'quads', 'Hack Squat Machine', 'Sit on the hack squat machine with your feet shoulder-width apart on the platform.', 'Push the platform upward, then lower it back down until your thighs are parallel to the floor.', 'Compound', 'Intermediate'),
(240, 'Smith Machine Squat', 'quads', 'Smith Machine', 'Place a barbell on the Smith machine at shoulder height, positioning your feet shoulder-width apart.', 'Squat down while keeping your chest up, then press back up to standing.', 'Compound', 'Beginner'),
(241, 'Dumbbell Step-Up', 'quads', 'Dumbbells, Bench', 'Stand in front of a bench, holding a dumbbell in each hand.', 'Step up onto the bench with one foot, then step back down and repeat with the other foot.', 'Compound', 'Intermediate'),
(242, 'Box Jump', 'quads', 'Box', 'Stand in front of a sturdy box with your feet shoulder-width apart.', 'Squat down and explode up into a jump, landing softly and immediately transitioning into the next squat.', 'Compound', 'Intermediate'),
(243, 'Barbell Hack Squat', 'quads', 'Barbell', 'Stand with the barbell behind your legs, bend down, and grasp the barbell.', 'Lift the barbell by extending your hips and knees, then slowly lower it back down.', 'Compound', 'Intermediate'),
(244, 'Dumbbell Bulgarian Split Squat', 'quads', 'Dumbbells, Bench', 'Place one foot behind you on a bench while holding a dumbbell in each hand.', 'Lower your body by bending your front knee, then press back up to the starting position.', 'Compound', 'Intermediate'),
(245, 'Squat to Box', 'quads', 'Bodyweight or Barbell', 'Stand in front of a box or bench, with your feet shoulder-width apart.', 'Squat down and lightly touch the box with your hips, then stand back up.', 'Compound', 'Beginner'),
(246, 'Weighted Walking Lunge', 'quads', 'Dumbbells or Barbell', 'Hold a dumbbell in each hand or a barbell on your shoulders, and stand with your feet together.', 'Step forward into a lunge, then bring the back leg forward and repeat with the other leg.', 'Compound', 'Intermediate'),
(247, 'Leg Extension', 'quads', 'Leg Extension Machine', 'Sit on the leg extension machine with your knees bent and your feet under the pad.', 'Extend your legs to a straight position, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(248, 'Dumbbell Squat', 'quads', 'Dumbbells', 'Hold a dumbbell in each hand by your sides and stand with your feet shoulder-width apart.', 'Squat down by bending your knees and hips, then press back up to the starting position.', 'Compound', 'Beginner'),
(249, 'Hack Squat Machine', 'quads', 'Hack Squat Machine', 'Sit on the hack squat machine with your feet shoulder-width apart on the platform.', 'Push the platform upward, then lower it back down until your thighs are parallel to the floor.', 'Compound', 'Intermediate'),
(250, 'Smith Machine Squat', 'quads', 'Smith Machine', 'Place a barbell on the Smith machine at shoulder height, positioning your feet shoulder-width apart.', 'Squat down while keeping your chest up, then press back up to standing.', 'Compound', 'Beginner'),
(251, 'Romanian Deadlift', 'hamstrings', 'Barbell', 'Stand with your feet shoulder-width apart and a barbell in front of you.', 'Lower the barbell by pushing your hips back, keeping your back straight, then return to standing by driving your hips forward.', 'Compound', 'Intermediate'),
(252, 'Hamstring Curl Machine', 'hamstrings', 'Hamstring Curl Machine', 'Lie face down on the hamstring curl machine and place your feet under the padded bar.', 'Curl your legs up towards your glutes, then slowly lower them back to the starting position.', 'Isolation', 'Beginner'),
(253, 'Single-Leg Romanian Deadlift', 'hamstrings', 'Dumbbell or Barbell', 'Stand on one leg while holding a dumbbell in the opposite hand.', 'Hinge at the hips, lowering the weight towards the ground while keeping your back straight, then return to standing.', 'Compound', 'Intermediate'),
(254, 'Glute-Ham Raise', 'hamstrings', 'Glute-Ham Developer (GHD)', 'Kneel on the glute-ham developer machine with your feet secured and your body upright.', 'Lower your torso forward, then curl your hips to raise your body back to the starting position.', 'Compound', 'Advanced'),
(255, 'Kettlebell Swing', 'hamstrings', 'Kettlebell', 'Stand with your feet shoulder-width apart, holding a kettlebell with both hands between your legs.', 'Swing the kettlebell forward using your hips, glutes, and hamstrings, then return it back between your legs.', 'Compound', 'Intermediate'),
(256, 'Barbell Hip Thrust', 'hamstrings', 'Barbell, Bench', 'Sit on the floor with your upper back against a bench and a barbell across your hips.', 'Drive through your heels to lift your hips towards the ceiling, then lower back down.', 'Compound', 'Intermediate'),
(257, 'Walking Lunge', 'hamstrings', 'Dumbbells', 'Stand tall holding a dumbbell in each hand.', 'Step forward into a lunge, ensuring your knee does not pass over your toes, then bring the back leg forward and repeat with the other leg.', 'Compound', 'Intermediate'),
(258, 'Deadlift', 'hamstrings', 'Barbell', 'Stand with your feet shoulder-width apart and a barbell in front of you.', 'Bend at the hips and knees to grasp the bar, then stand up by driving your hips forward and locking your knees.', 'Compound', 'Intermediate'),
(259, 'Nordic Hamstring Curl', 'hamstrings', 'Bodyweight', 'Kneel on a mat with your feet anchored, and keep your torso upright.', 'Slowly lower your torso towards the ground by extending your knees, then return to the starting position using your hamstrings.', 'Compound', 'Advanced'),
(260, 'Good Morning', 'hamstrings', 'Barbell', 'Place a barbell on your shoulders and stand with your feet shoulder-width apart.', 'Hinge at the hips, lowering your upper body while keeping your back straight, then return to standing.', 'Compound', 'Intermediate'),
(261, 'Stiff-Legged Deadlift', 'hamstrings', 'Barbell or Dumbbells', 'Stand with your feet shoulder-width apart and hold a barbell or dumbbells in front of you.', 'With a slight bend in your knees, hinge at the hips and lower the weight towards the ground, then return to standing.', 'Compound', 'Intermediate'),
(262, 'Box Jump', 'hamstrings', 'Box', 'Stand in front of a sturdy box with your feet shoulder-width apart.', 'Squat down and explosively jump onto the box, landing softly, then step back down.', 'Compound', 'Intermediate'),
(263, 'Lying Leg Curl', 'hamstrings', 'Leg Curl Machine', 'Lie face down on a leg curl machine and position your feet under the padded bar.', 'Curl your legs up towards your glutes, then slowly lower them back to the starting position.', 'Isolation', 'Beginner'),
(264, 'Bridge with Leg Curl', 'hamstrings', 'Bodyweight, Exercise Ball', 'Lie on your back with your feet on an exercise ball and your arms at your sides.', 'Lift your hips to form a straight line from shoulders to knees, then curl the ball toward your glutes by bending your knees.', 'Compound', 'Intermediate'),
(265, 'Reverse Hyperextension', 'hamstrings', 'Reverse Hyperextension Machine', 'Position your hips on a reverse hyperextension machine with your feet secured.', 'Lift your legs up by engaging your hamstrings, then lower them back down.', 'Compound', 'Beginner'),
(266, 'Cable Pull-Through', 'hamstrings', 'Cable Machine', 'Stand facing away from a cable machine with the rope attachment between your legs.', 'Pull the rope forward and through your legs by hinging at the hips, then return to starting position.', 'Compound', 'Intermediate'),
(267, 'Barbell Glute Bridge', 'hamstrings', 'Barbell', 'Sit on the floor with your upper back against a bench, and place a barbell over your hips.', 'Drive through your heels to lift your hips towards the ceiling, then lower back down.', 'Compound', 'Intermediate'),
(268, 'Step-Up with Hamstring Curl', 'hamstrings', 'Dumbbells, Bench', 'Stand in front of a bench holding a dumbbell in each hand.', 'Step up onto the bench, and as you step back down, curl your legs towards your glutes.', 'Compound', 'Intermediate'),
(269, 'Barbell Deadlift', 'hamstrings', 'Barbell', 'Stand with your feet shoulder-width apart and a barbell in front of you.', 'Bend at the hips and knees to grasp the bar, then lift it by extending your hips and knees, standing tall.', 'Compound', 'Intermediate'),
(270, 'Walking Hamstring Curl', 'hamstrings', 'Bodyweight', 'Walk forward, but each step curls the opposite leg toward your glutes.', 'Keep alternating legs while maintaining balance.', 'Compound', 'Beginner'),
(271, 'Dumbbell Deadlift', 'hamstrings', 'Dumbbells', 'Stand with your feet shoulder-width apart, holding a dumbbell in each hand in front of your thighs.', 'Hinge at your hips, lowering the dumbbells toward the ground while keeping your back straight, then return to standing.', 'Compound', 'Intermediate'),
(272, 'BOSU Ball Hamstring Curl', 'hamstrings', 'BOSU Ball', 'Lie on your back with your feet on a BOSU ball and your arms at your sides.', 'Curl the ball towards your glutes by bending your knees, then slowly extend your legs back out.', 'Compound', 'Intermediate'),
(273, 'TRX Hamstring Curl', 'hamstrings', 'TRX', 'Set up a TRX suspension trainer with your feet in the straps and your body in a plank position.', 'Curl your heels toward your glutes by bending your knees, then slowly extend your legs back to the starting position.', 'Compound', 'Advanced'),
(274, 'Hamstring Curl with Stability Ball', 'hamstrings', 'Stability Ball', 'Lie on your back with your feet on a stability ball and your arms at your sides.', 'Lift your hips off the ground, then curl the ball toward your glutes by bending your knees.', 'Compound', 'Intermediate'),
(275, 'Seated Leg Curl', 'hamstrings', 'Leg Curl Machine', 'Sit on the leg curl machine with your knees bent and your feet under the pad.', 'Curl your legs down towards your glutes, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(276, 'Cable Hamstring Curl', 'hamstrings', 'Cable Machine', 'Set the cable machine to a low pulley position and attach an ankle strap.', 'Curl your leg back towards your glutes, then slowly extend it back to the starting position.', 'Isolation', 'Beginner'),
(277, 'Standing Hamstring Curl', 'hamstrings', 'Bodyweight or Cable Machine', 'Stand with your feet shoulder-width apart and your knees slightly bent.', 'Bend one knee to curl your leg towards your glutes, then slowly lower it back to the starting position.', 'Isolation', 'Beginner'),
(278, 'Box Squat to Hamstring Stretch', 'hamstrings', 'Box', 'Stand in front of a box with your feet shoulder-width apart.', 'Squat down until your hips are below your knees, then sit back onto the box and stretch your hamstrings.', 'Compound', 'Beginner'),
(279, 'Leg Press', 'hamstrings', 'Leg Press Machine', 'Sit on the leg press machine with your feet shoulder-width apart on the platform.', 'Press the platform upward, extending your legs, then lower the platform back down by bending your knees.', 'Compound', 'Beginner'),
(280, 'Sled Push', 'hamstrings', 'Sled', 'Push a sled forward by extending your legs, driving through your heels and engaging your hamstrings.', 'Push the sled for a specified distance or time, maintaining proper form throughout the movement.', 'Compound', 'Intermediate'),
(281, 'Sled Pull', 'hamstrings', 'Sled', 'Attach a harness to the sled and stand with your feet shoulder-width apart.', 'Pull the sled backwards by driving your legs and hips, focusing on engaging your hamstrings.', 'Compound', 'Intermediate'),
(282, 'Jumping Lunges', 'hamstrings', 'Bodyweight', 'Start in a lunge position with one foot forward and one foot back.', 'Jump and switch your legs mid-air, landing in a lunge position with the opposite leg forward.', 'Compound', 'Intermediate'),
(283, 'Mountain Climbers', 'hamstrings', 'Bodyweight', 'Start in a plank position with your body straight and hands on the ground.', 'Drive one knee towards your chest, then quickly switch legs, mimicking a climbing motion.', 'Compound', 'Intermediate'),
(284, 'Frog Pumps', 'hamstrings', 'Bodyweight', 'Lie on your back with your feet together and knees bent out to the sides.', 'Push through your heels to lift your hips off the ground, then lower them back down.', 'Compound', 'Beginner'),
(285, 'Cable Deadlift', 'hamstrings', 'Cable Machine', 'Set the cable machine to a low pulley position and attach a straight bar.', 'Hinge at your hips and pull the bar towards your body by extending your hips, then return to standing.', 'Compound', 'Intermediate'),
(286, 'Reverse Lunges', 'hamstrings', 'Bodyweight or Dumbbells', 'Stand tall with your feet shoulder-width apart, holding dumbbells at your sides.', 'Step backward into a lunge, lowering your back knee toward the ground, then press through the front foot to return to standing.', 'Compound', 'Intermediate'),
(287, 'Step-Ups with Dumbbells', 'hamstrings', 'Dumbbells, Bench', 'Hold a dumbbell in each hand by your sides and stand in front of a bench.', 'Step up onto the bench with one leg, driving through your heel, then step back down.', 'Compound', 'Intermediate'),
(288, 'Lateral Lunges', 'hamstrings', 'Bodyweight or Dumbbells', 'Stand with your feet wider than shoulder-width apart.', 'Step out to the side into a lunge, keeping your hips low and knees bent, then return to standing.', 'Compound', 'Intermediate'),
(289, 'Reverse Hyperextensions with Dumbbell', 'hamstrings', 'Dumbbell', 'Lie face down on a hyperextension bench with a dumbbell held between your feet.', 'Lift your legs up to form a straight line with your body, then lower them back down.', 'Compound', 'Intermediate'),
(290, 'Sled Drag', 'hamstrings', 'Sled', 'Attach a rope to the sled and hold the ends.', 'Drag the sled behind you, walking backwards and using your hamstrings to pull the weight.', 'Compound', 'Intermediate'),
(291, 'Hurdle Jump', 'hamstrings', 'Bodyweight', 'Stand in front of a hurdle or small object.', 'Jump over the hurdle, landing softly, and immediately jump back over it.', 'Compound', 'Intermediate'),
(292, 'Squat Jumps', 'hamstrings', 'Bodyweight', 'Stand with your feet shoulder-width apart.', 'Squat down and then explode upward, jumping as high as possible, then land softly.', 'Compound', 'Intermediate'),
(293, 'Leg Curl with Cable', 'hamstrings', 'Cable Machine', 'Attach an ankle strap to a low cable pulley and position yourself facing away from the machine.', 'Curl your leg back toward your glutes, then slowly return it to the starting position.', 'Isolation', 'Beginner'),
(294, 'Bulgarian Split Squat', 'hamstrings', 'Dumbbells', 'Place one foot behind you on a bench, holding a dumbbell in each hand.', 'Lower your back knee toward the floor, then press through the front foot to return to standing.', 'Compound', 'Intermediate'),
(295, 'Barbell Step-Up', 'hamstrings', 'Barbell', 'Place a barbell across your shoulders and stand in front of a bench.', 'Step up onto the bench, driving through your front heel, then step back down.', 'Compound', 'Intermediate'),
(296, 'Dumbbell Stiff-Legged Deadlift', 'hamstrings', 'Dumbbells', 'Stand with your feet shoulder-width apart and hold a dumbbell in each hand.', 'Hinge at your hips and lower the dumbbells toward the ground, then return to standing.', 'Compound', 'Intermediate'),
(297, 'Barbell Lunge', 'hamstrings', 'Barbell', 'Place a barbell across your shoulders and stand tall.', 'Step forward into a lunge, lowering your back knee toward the ground, then push back up to standing.', 'Compound', 'Intermediate'),
(298, 'Hamstring Pull', 'hamstrings', 'Cable Machine', 'Stand in front of the cable machine with the rope attachment at ankle height.', 'Pull the rope attachment toward your glutes, bending your knees to curl your leg back.', 'Isolation', 'Beginner'),
(299, 'Leg Curl Machine', 'hamstrings', 'Leg Curl Machine', 'Sit on the leg curl machine with your legs extended in front of you.', 'Curl your legs towards your glutes, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(300, 'Hip Thrust', 'glutes', 'Barbell, Bench', 'Sit on the ground with your upper back against a bench and a barbell placed across your hips.', 'Drive through your heels to lift your hips towards the ceiling, squeezing your glutes at the top, then lower your hips back down.', 'Compound', 'Intermediate'),
(301, 'Glute Bridge', 'glutes', 'Bodyweight', 'Lie on your back with your knees bent and feet flat on the floor.', 'Push through your heels to lift your hips off the floor, squeezing your glutes at the top, then lower back down.', 'Compound', 'Beginner'),
(302, 'Bulgarian Split Squat', 'glutes', 'Dumbbells, Bench', 'Place one foot on a bench behind you and hold a dumbbell in each hand.', 'Lower your back knee toward the ground, keeping your torso upright, then push through your front heel to return to standing.', 'Compound', 'Intermediate'),
(303, 'Step-Ups', 'glutes', 'Dumbbells, Bench', 'Stand in front of a bench holding a dumbbell in each hand.', 'Step up onto the bench with one leg, driving through the heel, then step back down.', 'Compound', 'Intermediate'),
(304, 'Donkey Kicks', 'glutes', 'Bodyweight', 'Start on all fours with your hands under your shoulders and knees under your hips.', 'Lift one leg towards the ceiling, keeping your knee bent at 90 degrees, then lower it back down.', 'Isolation', 'Beginner'),
(305, 'Cable Kickbacks', 'glutes', 'Cable Machine', 'Stand facing the cable machine with an ankle strap attached to the low pulley.', 'Kick your leg backward, squeezing your glute at the top, then slowly return to the starting position.', 'Isolation', 'Intermediate'),
(306, 'Glute Kickbacks with Resistance Bands', 'glutes', 'Resistance Bands', 'Place a resistance band around your legs and get into an all-fours position.', 'Kick one leg back while keeping your knee bent, engaging your glute, then return to the starting position.', 'Isolation', 'Beginner'),
(307, 'Clamshells', 'glutes', 'Bodyweight, Resistance Band', 'Lie on your side with your knees bent and a resistance band placed around your thighs.', 'Open your knees by rotating your hips while keeping your feet together, then return to the starting position.', 'Isolation', 'Beginner'),
(308, 'Sumo Deadlift', 'glutes', 'Barbell', 'Stand with your feet wider than shoulder-width apart, toes pointed outward, and a barbell in front of you.', 'Bend at the hips and knees to grip the barbell, then lift the barbell while engaging your glutes and hamstrings.', 'Compound', 'Intermediate'),
(309, 'Kettlebell Swing', 'glutes', 'Kettlebell', 'Stand with your feet shoulder-width apart, holding a kettlebell with both hands.', 'Swing the kettlebell between your legs, then thrust your hips forward to swing the kettlebell up to shoulder height.', 'Compound', 'Intermediate'),
(310, 'Lateral Leg Raises', 'glutes', 'Bodyweight', 'Lie on your side with your legs stacked and straight.', 'Lift your top leg towards the ceiling, keeping your knee straight, then lower it back down.', 'Isolation', 'Beginner'),
(311, 'Lunges', 'glutes', 'Bodyweight or Dumbbells', 'Stand tall with your feet hip-width apart.', 'Step forward into a lunge, lowering your back knee toward the ground, then push through your front foot to return to standing.', 'Compound', 'Intermediate'),
(312, 'Hip Abductions', 'glutes', 'Resistance Band, Machine', 'Sit or stand with a resistance band around your legs or use an abduction machine.', 'Push your legs apart, engaging your glutes, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(313, 'Romanian Deadlift', 'glutes', 'Barbell or Dumbbells', 'Stand with your feet shoulder-width apart and hold a barbell or dumbbells in front of you.', 'Hinge at the hips to lower the weight down, keeping a slight bend in your knees, then return to standing by driving your hips forward.', 'Compound', 'Intermediate'),
(314, 'Box Jumps', 'glutes', 'Box', 'Stand in front of a box with your feet shoulder-width apart.', 'Jump onto the box, landing softly with your knees slightly bent, then step back down.', 'Compound', 'Intermediate'),
(315, 'Frog Pumps', 'glutes', 'Bodyweight', 'Lie on your back with your feet together and knees bent outward.', 'Push through your heels to lift your hips toward the ceiling, squeezing your glutes at the top, then lower back down.', 'Compound', 'Beginner'),
(316, 'Single-Leg Glute Bridge', 'glutes', 'Bodyweight', 'Lie on your back with one knee bent and the other leg extended straight.', 'Lift your hips off the ground, keeping the extended leg straight, then lower your hips back down.', 'Isolation', 'Beginner'),
(317, 'Reverse Hyperextensions', 'glutes', 'Hyperextension Bench', 'Lie face down on a hyperextension bench with your legs hanging off the edge.', 'Lift your legs toward the ceiling, engaging your glutes, then lower them back down.', 'Compound', 'Intermediate'),
(318, 'Sled Push', 'glutes', 'Sled', 'Push a sled forward by extending your legs and driving through your glutes.', 'Push the sled for a specified distance or time, maintaining proper form.', 'Compound', 'Intermediate'),
(319, 'Walking Lunges', 'glutes', 'Bodyweight or Dumbbells', 'Stand tall with a dumbbell in each hand by your sides.', 'Step forward into a lunge, lowering your back knee to the floor, then step forward with the other leg into another lunge.', 'Compound', 'Intermediate'),
(320, 'Resistance Band Squats', 'glutes', 'Resistance Band', 'Place a resistance band around your legs just above your knees and stand with your feet shoulder-width apart.', 'Lower into a squat, keeping your knees pushed outward against the resistance band, then return to standing.', 'Compound', 'Beginner'),
(321, 'Squat to Chair', 'glutes', 'Bodyweight, Chair', 'Stand with your feet shoulder-width apart and a chair behind you.', 'Lower into a squat, sitting back onto the chair, then press through your heels to stand back up.', 'Compound', 'Beginner'),
(322, 'Bridge with Resistance Band', 'glutes', 'Resistance Band', 'Lie on your back with a resistance band around your legs just above your knees.', 'Lift your hips toward the ceiling while keeping the resistance band stretched, then lower your hips back down.', 'Compound', 'Beginner'),
(323, 'Kettlebell Deadlift', 'glutes', 'Kettlebell', 'Stand with your feet shoulder-width apart, holding a kettlebell with both hands.', 'Hinge at the hips to lower the kettlebell towards the floor, then drive your hips forward to return to standing.', 'Compound', 'Intermediate'),
(324, 'Pistol Squats', 'glutes', 'Bodyweight', 'Stand on one leg with the other leg extended in front of you.', 'Lower yourself into a squat on one leg while keeping the other leg extended, then press through your heel to stand back up.', 'Compound', 'Advanced'),
(325, 'Glute Kickbacks with Ankle Weights', 'glutes', 'Ankle Weights', 'Attach ankle weights to both legs and get into an all-fours position.', 'Kick one leg back, keeping your knee bent, engaging your glute, then return to the starting position.', 'Isolation', 'Intermediate'),
(326, 'Hip Abduction Machine', 'glutes', 'Hip Abduction Machine', 'Sit on the hip abduction machine with your knees bent and feet on the pads.', 'Push your knees apart, engaging your glutes, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(327, 'Squat with Resistance Band', 'glutes', 'Resistance Band', 'Place a resistance band around your legs just above your knees and stand with your feet shoulder-width apart.', 'Lower into a squat, pushing your knees outward against the resistance band, then return to standing.', 'Compound', 'Beginner'),
(328, 'Single-Leg Romanian Deadlift', 'glutes', 'Dumbbells', 'Hold a dumbbell in each hand and balance on one leg.', 'Hinge at the hips to lower the weights toward the floor, keeping the other leg extended behind you, then return to standing.', 'Compound', 'Intermediate'),
(329, 'Sumo Squats', 'glutes', 'Bodyweight or Dumbbells', 'Stand with your feet wider than shoulder-width apart and your toes pointed outward.', 'Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.', 'Compound', 'Beginner'),
(330, 'Jumping Squats', 'glutes', 'Bodyweight', 'Stand with your feet shoulder-width apart.', 'Lower into a squat, then explosively jump up, landing softly and immediately lowering into the next squat.', 'Compound', 'Intermediate'),
(331, 'Banded Glute Bridge', 'glutes', 'Resistance Band', 'Lie on your back with a resistance band around your legs just above your knees.', 'Push through your heels to lift your hips towards the ceiling, squeezing your glutes at the top, then lower your hips back down.', 'Compound', 'Beginner'),
(332, 'Lateral Lunges', 'glutes', 'Bodyweight or Dumbbells', 'Stand with your feet hip-width apart.', 'Step out to the side with one leg, lowering your hips into a lunge while keeping the other leg straight, then push back to standing.', 'Compound', 'Intermediate'),
(333, 'Glute-Ham Raise', 'glutes', 'Glute-Ham Developer', 'Position yourself on a glute-ham developer machine with your feet secured.', 'Lower your torso towards the floor, then contract your glutes and hamstrings to return to the starting position.', 'Compound', 'Advanced'),
(334, 'Cable Squat and Row', 'glutes', 'Cable Machine', 'Set the cable machine to a low pulley with a wide bar attachment.', 'Squat down, pulling the bar towards your torso, then stand back up while engaging your glutes.', 'Compound', 'Intermediate'),
(335, 'Barbell Hip Thrust', 'glutes', 'Barbell, Bench', 'Sit on the ground with your upper back against a bench and a barbell placed across your hips.', 'Drive through your heels to lift your hips toward the ceiling, squeezing your glutes at the top, then lower your hips back down.', 'Compound', 'Intermediate'),
(336, 'Squat with Heel Elevation', 'glutes', 'Bodyweight or Dumbbells', 'Stand with your feet shoulder-width apart, placing your heels on an elevated surface.', 'Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.', 'Compound', 'Beginner'),
(337, 'Kettlebell Goblet Squat', 'glutes', 'Kettlebell', 'Hold a kettlebell at chest height with both hands.', 'Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.', 'Compound', 'Beginner'),
(338, 'Walking Lunges with Dumbbells', 'glutes', 'Dumbbells', 'Hold a dumbbell in each hand by your sides.', 'Step forward into a lunge, lowering your back knee to the floor, then step forward with the other leg into another lunge.', 'Compound', 'Intermediate'),
(339, 'Hip Circle Walks', 'glutes', 'Resistance Band', 'Place a resistance band around your legs just above your knees and squat slightly.', 'Take small steps forward, backward, and to the side while maintaining tension in the resistance band.', 'Compound', 'Beginner'),
(340, 'Reverse Lunges', 'glutes', 'Bodyweight or Dumbbells', 'Stand tall with your feet hip-width apart.', 'Step backward into a lunge, lowering your back knee toward the floor, then return to standing.', 'Compound', 'Intermediate'),
(341, 'Curtsy Lunges', 'glutes', 'Bodyweight or Dumbbells', 'Stand with your feet hip-width apart.', 'Step one leg diagonally behind you, lowering your hips into a lunge, then return to standing.', 'Compound', 'Intermediate'),
(342, 'Banded Glute Kickbacks', 'glutes', 'Resistance Band', 'Place a resistance band around your legs and get into an all-fours position.', 'Kick one leg back, engaging your glute, then return to the starting position.', 'Isolation', 'Beginner'),
(343, 'Resistance Band Donkey Kicks', 'glutes', 'Resistance Band', 'Place a resistance band around your legs and get into an all-fours position.', 'Kick one leg back towards the ceiling, squeezing your glute at the top, then lower it back down.', 'Isolation', 'Beginner'),
(344, 'Barbell Glute Bridge', 'glutes', 'Barbell', 'Lie on your back with a barbell placed across your hips.', 'Push through your heels to lift your hips toward the ceiling, squeezing your glutes at the top, then lower your hips back down.', 'Compound', 'Intermediate'),
(345, 'TRX Squats', 'glutes', 'TRX Suspension Trainer', 'Hold the TRX straps in front of you with your arms extended.', 'Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.', 'Compound', 'Intermediate'),
(346, 'Resistance Band Squat Walks', 'glutes', 'Resistance Band', 'Place a resistance band around your legs just above your knees and squat slightly.', 'Walk forward and backward while maintaining the squat position and tension in the resistance band.', 'Compound', 'Beginner'),
(347, 'Standing Kickbacks', 'glutes', 'Bodyweight or Resistance Band', 'Stand with a resistance band around your ankles or use bodyweight.', 'Kick one leg back, keeping your knee straight and engaging your glute, then return to the starting position.', 'Isolation', 'Beginner'),
(348, 'Barbell Squats', 'glutes', 'Barbell', 'Place a barbell across your upper back and stand with your feet shoulder-width apart.', 'Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.', 'Compound', 'Intermediate'),
(349, 'Leg Press', 'glutes', 'Leg Press Machine', 'Sit in the leg press machine with your feet placed shoulder-width apart on the platform.', 'Press the platform upward by extending your legs, then lower the platform back down by bending your knees.', 'Compound', 'Beginner'),
(350, 'Standing Calf Raise', 'calves', 'Bodyweight or Machine', 'Stand tall with your feet shoulder-width apart on a raised platform, with the balls of your feet on the edge.', 'Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down below the platform level.', 'Isolation', 'Beginner'),
(351, 'Seated Calf Raise', 'calves', 'Seated Calf Raise Machine', 'Sit on a calf raise machine with your feet placed on the platform and your knees bent.', 'Lift your heels as high as possible, squeezing your calves at the top, then slowly lower back down.', 'Isolation', 'Beginner'),
(352, 'Donkey Calf Raise', 'calves', 'Bodyweight or Machine', 'Bend at the hips and place your feet on a raised platform, with your body bent forward and a weight on your lower back or hips.', 'Raise your heels as high as possible, squeezing your calves at the top, then lower back down.', 'Isolation', 'Intermediate'),
(353, 'Leg Press Calf Raise', 'calves', 'Leg Press Machine', 'Sit in a leg press machine with your feet placed at the bottom of the platform, using the balls of your feet to push.', 'Push the platform upward by extending your ankles, squeezing your calves at the top, then lower the platform back down.', 'Isolation', 'Beginner'),
(354, 'Standing Calf Raise with Dumbbells', 'calves', 'Dumbbells', 'Hold a dumbbell in each hand and stand tall with your feet shoulder-width apart on a raised platform.', 'Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down below the platform level.', 'Isolation', 'Intermediate'),
(355, 'Calf Raises on Smith Machine', 'calves', 'Smith Machine', 'Set up a Smith machine with the barbell positioned above your shoulders, and place the balls of your feet on a raised platform.', 'Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.', 'Isolation', 'Intermediate'),
(356, 'Box Jump Calf Raise', 'calves', 'Bodyweight', 'Stand facing a box or platform.', 'Jump up onto the box, landing softly on the balls of your feet, then rise up onto your toes before stepping back down.', 'Isolation', 'Intermediate'),
(357, 'Jump Rope', 'calves', 'Jump Rope', 'Hold a jump rope with both hands and stand tall with your feet together.', 'Jump rope continuously, staying on the balls of your feet and using your calves to propel you.', 'Isolation', 'Beginner'),
(358, 'Single-Leg Calf Raise', 'calves', 'Bodyweight or Dumbbell', 'Stand on one leg on a raised platform or flat ground, holding a dumbbell in one hand for added resistance.', 'Raise your heel as high as possible, squeezing your calf at the top, then lower back down.', 'Isolation', 'Intermediate'),
(359, 'Seated Calf Raise with Barbell', 'calves', 'Barbell', 'Sit on a bench with a barbell resting on your thighs, and your feet on a raised platform.', 'Lift your heels as high as possible, squeezing your calves at the top, then lower back down.', 'Isolation', 'Intermediate'),
(360, 'Tibialis Raise', 'calves', 'Bodyweight or Dumbbell', 'Sit on a bench with your feet flat on the floor and a dumbbell resting on your knees.', 'Lift your toes as high as possible toward your shins, then slowly lower them back down.', 'Isolation', 'Beginner'),
(361, 'Calf Raise on Leg Press Machine', 'calves', 'Leg Press Machine', 'Sit on a leg press machine with your feet placed at the bottom of the platform, using the balls of your feet to push.', 'Push the platform upward by extending your ankles, squeezing your calves at the top, then lower the platform back down.', 'Isolation', 'Beginner'),
(362, 'Calf Raises on a Smith Machine', 'calves', 'Smith Machine', 'Place the barbell of the Smith machine on your shoulders, positioning the balls of your feet on a raised platform.', 'Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.', 'Isolation', 'Intermediate'),
(363, 'Dumbbell Calf Raises', 'calves', 'Dumbbells', 'Stand tall with a dumbbell in each hand at your sides, and the balls of your feet on a raised platform.', 'Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down.', 'Isolation', 'Beginner'),
(364, 'Kettlebell Calf Raises', 'calves', 'Kettlebell', 'Stand tall with a kettlebell in each hand at your sides, with your feet shoulder-width apart.', 'Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down.', 'Isolation', 'Beginner'),
(365, 'Elevated Calf Raises', 'calves', 'Bodyweight or Dumbbells', 'Stand with the balls of your feet on a raised surface, such as a step or platform.', 'Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down below the platform.', 'Isolation', 'Beginner'),
(366, 'Barbell Calf Raises', 'calves', 'Barbell', 'Place a barbell on your upper back, positioning the balls of your feet on a raised surface.', 'Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down.', 'Isolation', 'Intermediate'),
(367, 'Jump Squats', 'calves', 'Bodyweight', 'Stand with your feet shoulder-width apart.', 'Squat down and jump up explosively, landing softly on the balls of your feet.', 'Isolation', 'Intermediate'),
(368, 'Plyometric Calf Raises', 'calves', 'Bodyweight', 'Stand tall with your feet shoulder-width apart.', 'Jump onto the balls of your feet, quickly bouncing off and landing softly, then repeat.', 'Isolation', 'Intermediate'),
(369, 'Resistance Band Calf Raises', 'calves', 'Resistance Band', 'Place a resistance band around your legs just above your knees and stand on one leg.', 'Raise your heel as high as possible, engaging your calf, then lower it back down.', 'Isolation', 'Beginner'),
(370, 'Single-Leg Seated Calf Raise', 'calves', 'Seated Calf Raise Machine', 'Sit on a calf raise machine and place one foot on the platform, with the other foot off the machine.', 'Raise your heel as high as possible, squeezing your calf at the top, then lower back down.', 'Isolation', 'Beginner'),
(371, 'Standing Calf Raise with Barbell', 'calves', 'Barbell', 'Place a barbell on your upper back and position the balls of your feet on a raised platform.', 'Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.', 'Isolation', 'Intermediate'),
(372, 'Barbell Calf Raise with Dumbbells', 'calves', 'Barbell, Dumbbells', 'Place a barbell on your upper back with a dumbbell in each hand.', 'Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.', 'Isolation', 'Intermediate'),
(373, 'Swiss Ball Calf Raise', 'calves', 'Swiss Ball', 'Position your feet on a Swiss ball while standing, keeping your knees slightly bent.', 'Raise your heels as high as possible, squeezing your calves, then lower back down.', 'Isolation', 'Intermediate'),
(374, 'Weighted Jump Rope', 'calves', 'Jump Rope', 'Hold a weighted jump rope and stand tall.', 'Jump rope continuously, staying on the balls of your feet and engaging your calves.', 'Isolation', 'Intermediate'),
(375, 'Barbell Bicep Curl', 'biceps', 'Barbell', 'Stand tall with your feet shoulder-width apart, holding a barbell with an underhand grip, arms fully extended.', 'Curl the barbell toward your chest, keeping your elbows stationary, then lower the barbell back to the starting position.', 'Isolation', 'Beginner'),
(376, 'Dumbbell Bicep Curl', 'biceps', 'Dumbbells', 'Hold a dumbbell in each hand, arms fully extended, with your palms facing forward.', 'Curl the dumbbells toward your shoulders, squeezing your biceps at the top, then slowly lower the dumbbells back to the starting position.', 'Isolation', 'Beginner'),
(377, 'Hammer Curl', 'biceps', 'Dumbbells', 'Hold a dumbbell in each hand with your palms facing your torso.', 'Curl the dumbbells while keeping your palms facing each other, then lower the dumbbells back to the starting position.', 'Isolation', 'Beginner');
INSERT INTO `Exercises` (`id`, `Name`, `BodyPart`, `Equipment`, `SetUpDescription`, `RepDescription`, `Type`, `ExperienceLevel`) VALUES
(378, 'Concentration Curl', 'biceps', 'Dumbbell', 'Sit on a bench with your legs apart and hold a dumbbell with one hand. Rest your elbow against the inside of your thigh.', 'Curl the dumbbell toward your shoulder, squeezing your bicep at the top, then lower it back down slowly.', 'Isolation', 'Intermediate'),
(379, 'Preacher Curl', 'biceps', 'Preacher Curl Bench, Barbell or Dumbbells', 'Sit on the preacher curl bench and place your upper arms on the pad. Hold a barbell or dumbbells with an underhand grip.', 'Curl the weight toward your face, then lower it back down to the starting position, fully extending your arms.', 'Isolation', 'Intermediate'),
(380, 'EZ Bar Curl', 'biceps', 'EZ Curl Bar', 'Hold an EZ curl bar with an underhand grip, hands shoulder-width apart.', 'Curl the bar toward your shoulders, squeezing your biceps at the top, then lower the bar back down slowly.', 'Isolation', 'Beginner'),
(381, 'Incline Dumbbell Curl', 'biceps', 'Dumbbells, Incline Bench', 'Lie on an incline bench, holding a dumbbell in each hand, arms fully extended.', 'Curl the dumbbells toward your shoulders, keeping your elbows stationary, then slowly lower them back down.', 'Isolation', 'Intermediate'),
(382, 'Zottman Curl', 'biceps', 'Dumbbells', 'Hold a dumbbell in each hand with an underhand grip.', 'Curl the dumbbells toward your shoulders, then rotate your wrists at the top and lower the weights with an overhand grip.', 'Isolation', 'Intermediate'),
(383, 'Cable Bicep Curl', 'biceps', 'Cable Machine', 'Attach a straight bar to a low pulley and stand facing the machine with your hands shoulder-width apart.', 'Curl the bar towards your face, squeezing your biceps at the top, then slowly lower it back down.', 'Isolation', 'Beginner'),
(384, 'Cable Hammer Curl', 'biceps', 'Cable Machine', 'Attach a rope handle to a low pulley and grab it with a neutral grip (palms facing each other).', 'Curl the rope handle toward your shoulders, squeezing your biceps at the top, then slowly lower it back down.', 'Isolation', 'Beginner'),
(385, 'Barbell Reverse Curl', 'biceps', 'Barbell', 'Hold a barbell with an overhand grip, hands shoulder-width apart.', 'Curl the barbell toward your shoulders while keeping your elbows stationary, then lower it back down slowly.', 'Isolation', 'Intermediate'),
(386, 'Spider Curl', 'biceps', 'Dumbbells or Barbell', 'Lie face down on an incline bench, holding a dumbbell or barbell with an underhand grip.', 'Curl the weight toward your forehead, keeping your elbows stationary, then lower it back down slowly.', 'Isolation', 'Intermediate'),
(387, 'Alternating Dumbbell Curl', 'biceps', 'Dumbbells', 'Stand with a dumbbell in each hand, arms fully extended, palms facing forward.', 'Curl one dumbbell toward your shoulder while keeping the other arm extended, then alternate arms.', 'Isolation', 'Beginner'),
(388, 'Bicep Curl with Resistance Bands', 'biceps', 'Resistance Bands', 'Stand on a resistance band with both hands gripping the handles, palms facing forward.', 'Curl the handles toward your shoulders, squeezing your biceps at the top, then slowly lower back down.', 'Isolation', 'Beginner'),
(389, 'Dumbbell Drag Curl', 'biceps', 'Dumbbells', 'Stand tall with a dumbbell in each hand, arms fully extended, palms facing forward.', 'Curl the dumbbells while keeping your elbows pulled back, dragging the dumbbells up your body, then lower back down.', 'Isolation', 'Intermediate'),
(390, 'Machine Bicep Curl', 'biceps', 'Machine', 'Sit on a bicep curl machine with your arms placed on the pads, holding the handles.', 'Curl the handles toward your shoulders, then slowly lower them back to the starting position.', 'Isolation', 'Beginner'),
(391, 'T-Bar Bicep Curl', 'biceps', 'T-Bar Machine or Barbell', 'Position a T-bar machine or a barbell in a landmine attachment, holding the handles or bar with both hands.', 'Curl the weight toward your chest, squeezing your biceps at the top, then lower it back down.', 'Isolation', 'Intermediate'),
(392, 'Bicep Curl with Kettlebell', 'biceps', 'Kettlebell', 'Hold a kettlebell in each hand with your arms fully extended and palms facing forward.', 'Curl the kettlebells toward your shoulders, squeezing your biceps at the top, then slowly lower them back down.', 'Isolation', 'Beginner'),
(393, 'Incline Hammer Curl', 'biceps', 'Dumbbells, Incline Bench', 'Lie on an incline bench holding a dumbbell in each hand with your palms facing each other.', 'Curl the dumbbells toward your shoulders, keeping your palms facing each other, then lower them back down.', 'Isolation', 'Intermediate'),
(394, 'Close-Grip Barbell Curl', 'biceps', 'Barbell', 'Hold a barbell with a close underhand grip, keeping your arms fully extended.', 'Curl the barbell toward your chest, keeping your elbows stationary, then slowly lower it back down.', 'Isolation', 'Intermediate'),
(395, 'Overhead Cable Curl', 'biceps', 'Cable Machine', 'Attach a rope handle to a high pulley and hold the rope with both hands.', 'Curl the rope toward your forehead, squeezing your biceps at the top, then slowly lower it back down.', 'Isolation', 'Intermediate'),
(396, 'High Cable Bicep Curl', 'biceps', 'Cable Machine', 'Attach a straight bar to a high pulley and stand facing the machine.', 'Curl the bar toward your chest, squeezing your biceps at the top, then slowly lower it back down.', 'Isolation', 'Intermediate'),
(397, 'Kettlebell Bicep Curl', 'biceps', 'Kettlebell', 'Hold a kettlebell in each hand, palms facing forward.', 'Curl the kettlebells toward your shoulders, squeezing your biceps at the top, then lower back down.', 'Isolation', 'Beginner'),
(398, 'Resistance Band Hammer Curl', 'biceps', 'Resistance Bands', 'Stand on a resistance band with both hands gripping the handles, palms facing each other.', 'Curl the handles toward your shoulders, keeping your palms facing each other, then lower back down.', 'Isolation', 'Beginner'),
(399, 'Bicep Cable Preacher Curl', 'biceps', 'Cable Machine', 'Set up a preacher bench and attach a cable machine at a low pulley position.', 'Curl the barbell or rope attachment toward your face, then slowly lower it back down.', 'Isolation', 'Intermediate'),
(400, 'Barbell Bicep Curl with Chains', 'biceps', 'Barbell, Chains', 'Add chains to a barbell and hold the bar with an underhand grip.', 'Curl the barbell toward your chest while the chains add resistance at the top of the movement.', 'Isolation', 'Advanced'),
(401, 'Dumbbell Curl with Twist', 'biceps', 'Dumbbells', 'Stand with a dumbbell in each hand, arms fully extended and palms facing forward.', 'Curl the dumbbells toward your shoulders, twisting your wrist at the top to engage the bicep more, then lower them back down.', 'Isolation', 'Intermediate'),
(402, 'Cable Rope Curl', 'biceps', 'Cable Machine, Rope Attachment', 'Attach a rope to a low pulley, grab the rope with both hands and stand facing the machine.', 'Curl the rope toward your face, keeping your elbows stationary, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(403, 'Machine Preacher Curl', 'biceps', 'Machine', 'Sit on the preacher curl machine with your upper arms on the pad and hands gripping the handles.', 'Curl the handles toward your shoulders, then lower them slowly to the starting position.', 'Isolation', 'Beginner'),
(404, 'Dumbbell Concentration Curl', 'biceps', 'Dumbbell', 'Sit on a bench with legs apart and rest one elbow on the inside of your thigh, holding a dumbbell.', 'Curl the dumbbell toward your shoulder, squeeze at the top, then lower it slowly back down.', 'Isolation', 'Intermediate'),
(405, 'Standing Bicep Curl with Resistance Bands', 'biceps', 'Resistance Bands', 'Stand on a resistance band with both hands gripping the handles, palms facing forward.', 'Curl the handles toward your shoulders, keeping your elbows close to your torso, then lower slowly.', 'Isolation', 'Beginner'),
(406, 'Seated Dumbbell Curl', 'biceps', 'Dumbbells', 'Sit on a bench with a dumbbell in each hand, arms fully extended.', 'Curl both dumbbells toward your shoulders, then lower them back down slowly.', 'Isolation', 'Beginner'),
(407, 'Machine Curl', 'biceps', 'Machine', 'Sit on the machine with your arms positioned on the pads, gripping the handles.', 'Curl the handles toward your face, squeezing your biceps at the top, then slowly lower back down.', 'Isolation', 'Beginner'),
(408, 'Alternating Cable Curl', 'biceps', 'Cable Machine', 'Attach a handle to the low pulley on a cable machine, grab the handle with one hand.', 'Curl the handle toward your face, then slowly lower back down. Alternate arms with each rep.', 'Isolation', 'Beginner'),
(409, 'Overhead Dumbbell Curl', 'biceps', 'Dumbbells', 'Sit on a bench with your back straight, holding a dumbbell in each hand above your head.', 'Curl both dumbbells down toward your shoulders, squeezing your biceps at the bottom, then extend them back to the top.', 'Isolation', 'Intermediate'),
(410, 'Incline Barbell Curl', 'biceps', 'Barbell, Incline Bench', 'Sit on an incline bench, holding a barbell with an underhand grip.', 'Curl the barbell toward your shoulders, keeping your elbows still, then lower it slowly back to the starting position.', 'Isolation', 'Intermediate'),
(411, 'Resistance Band Bicep Curl', 'biceps', 'Resistance Bands', 'Stand with a resistance band under your feet, holding the handles in each hand with your palms facing forward.', 'Curl the handles toward your shoulders, maintaining tension in the band, then lower back down.', 'Isolation', 'Beginner'),
(412, 'Bicep Curl on a Smith Machine', 'biceps', 'Smith Machine', 'Set the bar on a Smith machine at the correct height, grip the bar with an underhand grip.', 'Curl the bar toward your chest, keeping your elbows stationary, then slowly lower it back down.', 'Isolation', 'Intermediate'),
(413, 'Overhead Cable Rope Curl', 'biceps', 'Cable Machine, Rope Attachment', 'Attach a rope to the high pulley and grab the rope with both hands.', 'Curl the rope toward your face, squeezing your biceps at the top, then slowly lower it back down.', 'Isolation', 'Intermediate'),
(414, 'One-Arm Dumbbell Curl', 'biceps', 'Dumbbell', 'Stand with a dumbbell in one hand, arm fully extended.', 'Curl the dumbbell toward your shoulder, keeping your elbow stationary, then lower it back down.', 'Isolation', 'Beginner'),
(415, 'Dumbbell Alternate Curl', 'biceps', 'Dumbbells', 'Stand with a dumbbell in each hand, arms fully extended.', 'Curl one dumbbell toward your shoulder while keeping the other arm extended, then alternate arms.', 'Isolation', 'Beginner'),
(416, 'Cable Preacher Curl', 'biceps', 'Cable Machine', 'Sit at a preacher curl bench with a low pulley in front of you, grab the bar attachment.', 'Curl the bar toward your face, then lower it slowly back down.', 'Isolation', 'Intermediate'),
(417, 'Machine Bicep Curl with Plate Load', 'biceps', 'Machine, Weight Plates', 'Sit at a plate-loaded bicep curl machine with your arms on the pads.', 'Curl the handles toward your face, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(418, 'EZ Curl with Wide Grip', 'biceps', 'EZ Curl Bar', 'Hold an EZ curl bar with a wide underhand grip.', 'Curl the bar towards your chest while keeping your elbows stationary, then lower it back down slowly.', 'Isolation', 'Intermediate'),
(419, 'Decline Dumbbell Curl', 'biceps', 'Dumbbells, Decline Bench', 'Lie on a decline bench with a dumbbell in each hand, arms fully extended.', 'Curl the dumbbells toward your shoulders, squeezing at the top, then lower back down slowly.', 'Isolation', 'Intermediate'),
(420, 'Barbell Bicep Curl with Close Grip', 'biceps', 'Barbell', 'Hold a barbell with a close underhand grip, keeping your arms fully extended.', 'Curl the barbell toward your chest, keeping your elbows stationary, then slowly lower it back down.', 'Isolation', 'Intermediate'),
(421, 'Hammer Curl', 'biceps', 'Dumbbells', 'Stand with a dumbbell in each hand, palms facing your torso.', 'Curl the dumbbells as you keep your palms facing each other, then lower back down.', 'Isolation', 'Beginner'),
(422, 'Zottman Curl', 'biceps', 'Dumbbells', 'Hold a dumbbell in each hand with your palms facing up.', 'Curl the dumbbells towards your shoulders, rotate your wrists at the top to palms facing down, then lower back slowly.', 'Isolation', 'Intermediate'),
(423, 'Preacher Curl Machine', 'biceps', 'Machine', 'Sit at the preacher curl machine with your upper arms on the pad and hands gripping the handles.', 'Curl the handles toward your face, squeeze at the top, then return to the starting position.', 'Isolation', 'Beginner'),
(424, 'Incline Dumbbell Curl', 'biceps', 'Dumbbells, Incline Bench', 'Sit on an incline bench with a dumbbell in each hand, arms fully extended.', 'Curl both dumbbells toward your shoulders, squeezing at the top, then lower back slowly.', 'Isolation', 'Intermediate'),
(425, 'Tricep Pushdown', 'triceps', 'Cable Machine, Rope Attachment', 'Attach a rope to a high pulley on a cable machine, standing with feet shoulder-width apart.', 'Grab the rope with both hands, palms facing inward, and push the rope down until your arms are fully extended, then slowly return to starting position.', 'Isolation', 'Beginner'),
(426, 'Overhead Tricep Extension', 'triceps', 'Dumbbell', 'Sit or stand with a dumbbell held with both hands overhead.', 'Lower the dumbbell behind your head by bending your elbows, then extend your arms to the starting position.', 'Isolation', 'Beginner'),
(427, 'Skull Crushers', 'triceps', 'EZ Curl Bar', 'Lie on a bench holding an EZ curl bar with an overhand grip, arms extended toward the ceiling.', 'Lower the bar toward your forehead by bending your elbows, then extend your arms back to the starting position.', 'Isolation', 'Intermediate'),
(428, 'Dips', 'triceps', 'Dip Bars', 'Place your hands on dip bars, arms extended with your body hanging between the bars.', 'Lower your body by bending your elbows until your upper arms are parallel to the ground, then press back up.', 'Compound', 'Intermediate'),
(429, 'Close-Grip Bench Press', 'triceps', 'Barbell, Bench', 'Lie on a flat bench holding a barbell with a narrow grip, arms extended above your chest.', 'Lower the bar to your chest, keeping your elbows close to your sides, then press the bar back up.', 'Compound', 'Intermediate'),
(430, 'Cable Tricep Kickback', 'triceps', 'Cable Machine, Single Handle', 'Attach a single handle to a low pulley, grab the handle with one hand, and bend forward at the hips.', 'Extend your arm behind you until its fully extended, then return to the starting position.', 'Isolation', 'Beginner'),
(431, 'Tricep Dips on Bench', 'triceps', 'Bench', 'Place your hands on a bench behind you, with your feet flat on the floor and your knees bent.', 'Lower your body by bending your elbows, then push yourself back up to the starting position.', 'Compound', 'Beginner'),
(432, 'Kickback with Dumbbell', 'triceps', 'Dumbbell', 'Bend forward at the hips with a dumbbell in one hand, your opposite hand resting on a bench.', 'Extend your arm backward until it is fully extended, then return to the starting position.', 'Isolation', 'Intermediate'),
(433, 'Tricep Machine Press', 'triceps', 'Machine', 'Sit at the tricep press machine, grip the handles, and place your elbows on the pads.', 'Push the handles down until your arms are fully extended, then return to the starting position.', 'Compound', 'Beginner'),
(434, 'Overhead Cable Tricep Extension', 'triceps', 'Cable Machine', 'Attach a rope to a high pulley, step back, and grab the rope with both hands.', 'Pull the rope overhead with elbows bent, then extend your arms to fully stretch the rope.', 'Isolation', 'Intermediate'),
(435, 'Diamond Push-Up', 'triceps', 'Bodyweight', 'Get into a push-up position with your hands close together, forming a diamond shape with your fingers.', 'Lower your body toward the ground, keeping your elbows close to your torso, then push back up.', 'Compound', 'Intermediate'),
(436, 'Single-Arm Tricep Pushdown', 'triceps', 'Cable Machine, Single Handle', 'Attach a single handle to a cable machine, grab the handle with one hand, and stand facing the machine.', 'Push the handle down with one arm until it is fully extended, then return to the starting position.', 'Isolation', 'Beginner'),
(437, 'Tricep Rope Pushdown', 'triceps', 'Cable Machine, Rope Attachment', 'Attach a rope to a high pulley, grab both ends with palms facing each other.', 'Push the rope downward until your arms are fully extended, then return to starting position.', 'Isolation', 'Beginner'),
(438, 'Barbell Tricep Extension', 'triceps', 'Barbell', 'Hold a barbell with both hands, arms extended overhead.', 'Lower the barbell behind your head by bending your elbows, then extend your arms back to starting position.', 'Isolation', 'Intermediate'),
(439, 'Reverse Grip Tricep Pushdown', 'triceps', 'Cable Machine, Bar Attachment', 'Attach a straight bar to a high pulley and grip the bar with an underhand grip.', 'Push the bar down until your arms are fully extended, keeping your elbows at your sides.', 'Isolation', 'Intermediate'),
(440, 'Dumbbell Tricep Kickback', 'triceps', 'Dumbbell', 'Bend forward at the hips, holding a dumbbell in each hand with your elbows bent.', 'Extend both arms behind you until fully extended, then return to the starting position.', 'Isolation', 'Intermediate'),
(441, 'Incline Tricep Press', 'triceps', 'Barbell, Incline Bench', 'Lie on an incline bench holding a barbell with an overhand grip.', 'Lower the barbell to your forehead by bending your elbows, then press back up.', 'Compound', 'Intermediate'),
(442, 'Tricep Kickback with Cable', 'triceps', 'Cable Machine, Single Handle', 'Attach a single handle to a low pulley, bend forward at the waist with one hand on the cable handle.', 'Extend your arm behind you, fully extending at the elbow, then return to starting position.', 'Isolation', 'Beginner'),
(443, 'Cable Lying Tricep Extension', 'triceps', 'Cable Machine', 'Lie on a flat bench under a high pulley machine with a rope attachment.', 'Extend your arms to the ceiling, then lower the rope behind your head, extending your elbows.', 'Isolation', 'Intermediate'),
(444, 'Reverse Close-Grip Bench Press', 'triceps', 'Barbell, Bench', 'Lie on a bench holding a barbell with a reverse (overhand) grip.', 'Lower the barbell to your chest, keeping your elbows close to your sides, then press back up.', 'Compound', 'Intermediate'),
(445, 'Tricep Bench Dip', 'triceps', 'Bench', 'Place your hands behind you on a bench with your feet extended forward on the floor.', 'Lower your body by bending your elbows until they reach a 90-degree angle, then press back up.', 'Compound', 'Beginner'),
(446, 'Rope Overhead Tricep Extension', 'triceps', 'Cable Machine, Rope Attachment', 'Attach a rope to a high pulley and stand facing away from the machine.', 'Grab the rope with both hands and extend your arms overhead, then slowly lower the rope back behind your head.', 'Isolation', 'Intermediate'),
(447, 'Single-Arm Overhead Tricep Extension', 'triceps', 'Dumbbell', 'Hold a dumbbell with one hand and extend your arm overhead.', 'Lower the dumbbell behind your head by bending your elbow, then extend your arm back to the starting position.', 'Isolation', 'Beginner'),
(448, 'Decline Tricep Push-Up', 'triceps', 'Bodyweight, Bench', 'Place your feet on a bench and hands on the floor, in a push-up position.', 'Lower your body toward the ground, keeping your elbows close to your torso, then push back up.', 'Compound', 'Intermediate'),
(449, 'Bodyweight Tricep Dips', 'triceps', 'Bodyweight, Parallel Bars', 'Place your hands on parallel bars, body hanging between them.', 'Lower your body by bending your elbows, then press back up to the starting position.', 'Compound', 'Intermediate'),
(450, 'Dumbbell Tricep Extension', 'triceps', 'Dumbbell', 'Sit on a bench and hold a dumbbell with both hands, arms extended overhead.', 'Lower the dumbbell behind your head, then extend your arms back to the starting position.', 'Isolation', 'Beginner'),
(451, 'Tricep Extension Machine', 'triceps', 'Machine', 'Sit at the tricep extension machine, adjusting the pad so that your arms are at the correct angle.', 'Push the handles downward, extending your arms fully, then return to the starting position.', 'Isolation', 'Beginner'),
(452, 'Standing Tricep Rope Extension', 'triceps', 'Cable Machine, Rope Attachment', 'Attach a rope to a high pulley, grip the rope with both hands, and stand facing the machine.', 'Pull the rope overhead, then extend your arms fully, bringing the rope behind your head.', 'Isolation', 'Intermediate'),
(453, 'Seated Tricep Pushdown', 'triceps', 'Cable Machine', 'Sit on a bench facing a cable machine with a bar attachment at shoulder height.', 'Push the bar down until your arms are fully extended, then return to starting position.', 'Isolation', 'Beginner'),
(454, 'Two-Arm Dumbbell Tricep Extension', 'triceps', 'Dumbbell', 'Hold a dumbbell with both hands, arms extended overhead.', 'Lower the dumbbell behind your head, then extend your arms back to the starting position.', 'Isolation', 'Beginner'),
(455, 'Tricep Close-Grip Push-Up', 'triceps', 'Bodyweight', 'Place your hands closer together than usual in a push-up position.', 'Lower your body to the ground, keeping elbows close to your sides, then push back up.', 'Compound', 'Intermediate'),
(456, 'Cable Lying Tricep Pushdown', 'triceps', 'Cable Machine', 'Lie on a bench with a cable machine overhead, using a rope attachment.', 'Pull the rope down toward your chest, extending your arms fully at the bottom.', 'Isolation', 'Intermediate'),
(457, 'EZ Bar Tricep Extension', 'triceps', 'EZ Curl Bar', 'Hold an EZ curl bar with both hands, arms extended overhead.', 'Lower the bar behind your head by bending your elbows, then extend your arms back to the starting position.', 'Isolation', 'Intermediate'),
(458, 'Tricep Kickback Machine', 'triceps', 'Machine', 'Sit at the tricep kickback machine with your arms extended in front of you.', 'Extend your arms behind you, then return to the starting position.', 'Isolation', 'Beginner'),
(459, 'Single-Arm Cable Tricep Extension', 'triceps', 'Cable Machine', 'Attach a handle to the low pulley, grasp it with one hand, and stand facing the machine.', 'Extend your arm back, then return to the starting position.', 'Isolation', 'Beginner'),
(460, 'Machine Tricep Press', 'triceps', 'Machine', 'Sit at the tricep press machine and grip the handles.', 'Push the handles downward until your arms are fully extended, then return to the starting position.', 'Compound', 'Beginner'),
(461, 'Tricep Pushdown with V-Bar', 'triceps', 'Cable Machine, V-Bar Attachment', 'Attach a V-bar to the high pulley of a cable machine, standing with feet shoulder-width apart.', 'Grasp the V-bar with both hands and pull it downward until your arms are fully extended, then return to the starting position.', 'Isolation', 'Beginner'),
(462, 'Dumbbell Tricep Extension on Bench', 'triceps', 'Dumbbell, Bench', 'Sit on a bench holding a dumbbell with both hands, arms extended overhead.', 'Lower the dumbbell behind your head by bending your elbows, then extend your arms back to the starting position.', 'Isolation', 'Beginner'),
(463, 'Standing Overhead Cable Tricep Extension', 'triceps', 'Cable Machine, Rope Attachment', 'Attach a rope to a high pulley and stand facing away from the machine.', 'Hold the rope with both hands, extend your arms overhead, then return to the starting position.', 'Isolation', 'Intermediate'),
(464, 'Barbell Close-Grip Tricep Press', 'triceps', 'Barbell', 'Lie on a bench holding a barbell with an overhand, close grip.', 'Lower the barbell toward your chest, keeping your elbows close to your sides, then press back up.', 'Compound', 'Intermediate'),
(465, 'Lying Tricep Rope Extension', 'triceps', 'Cable Machine, Rope Attachment', 'Lie on a flat bench with a cable machine overhead, using a rope attachment.', 'Pull the rope down toward your chest, fully extending your arms at the bottom, then return to starting position.', 'Isolation', 'Intermediate'),
(466, 'Bench Press with Close Grip', 'triceps', 'Barbell, Bench', 'Lie on a bench and grip a barbell with your hands about shoulder-width apart.', 'Lower the barbell to your chest, keeping your elbows close to your torso, then press back up.', 'Compound', 'Intermediate'),
(467, 'Seated Overhead Tricep Extension', 'triceps', 'Dumbbell', 'Sit on a bench with a dumbbell held with both hands overhead.', 'Lower the dumbbell behind your head by bending your elbows, then extend your arms back to the starting position.', 'Isolation', 'Beginner'),
(468, 'Tricep Extension with Barbell', 'triceps', 'Barbell', 'Hold a barbell with both hands, arms extended overhead.', 'Lower the bar behind your head by bending your elbows, then extend your arms back to starting position.', 'Isolation', 'Intermediate'),
(469, 'Cable Lying Tricep Extension', 'triceps', 'Cable Machine', 'Lie on a flat bench, and pull a rope from a high pulley, positioning it above your head.', 'Pull the rope forward to your chest, extending your elbows, then return to the starting position.', 'Isolation', 'Intermediate'),
(470, 'Overhead Tricep Rope Extension', 'triceps', 'Cable Machine, Rope Attachment', 'Attach a rope to a high pulley, standing with your back facing the machine.', 'Pull the rope overhead, then extend your arms fully, bringing the rope behind your head.', 'Isolation', 'Intermediate'),
(471, 'Machine Tricep Kickback', 'triceps', 'Machine', 'Sit at the machine with your arms extended in front of you, gripping the handles.', 'Push the handles back, extending your arms fully behind you, then return to the starting position.', 'Isolation', 'Beginner'),
(472, 'Tricep Pull-Down with Rope', 'triceps', 'Cable Machine, Rope Attachment', 'Attach a rope to the high pulley of a cable machine, standing upright.', 'Pull the rope down until your arms are fully extended, then slowly return to the starting position.', 'Isolation', 'Beginner'),
(473, 'Dumbbell Kickback', 'triceps', 'Dumbbell', 'Bend forward at the waist, holding a dumbbell in each hand with your elbows bent.', 'Extend both arms behind you until fully extended, then return to the starting position.', 'Isolation', 'Intermediate'),
(474, 'Single-Arm Dumbbell Tricep Kickback', 'triceps', 'Dumbbell', 'Bend forward at the waist, holding a dumbbell in one hand with the elbow bent.', 'Extend your arm fully behind you, then return to the starting position.', 'Isolation', 'Intermediate'),
(475, 'Overhead Tricep Extension with Dumbbell', 'triceps', 'Dumbbell', 'Stand or sit with a dumbbell held with both hands overhead.', 'Lower the dumbbell behind your head by bending your elbows, then extend your arms back to the starting position.', 'Isolation', 'Beginner'),
(476, 'Dumbbell Shoulder Press', 'shoulders', 'Dumbbells', 'Sit or stand with a dumbbell in each hand at shoulder height.', 'Press the dumbbells overhead until your arms are fully extended, then lower them back to the starting position.', 'Compound', 'Beginner'),
(477, 'Arnold Press', 'shoulders', 'Dumbbells', 'Sit or stand with a dumbbell in each hand at shoulder height, palms facing you.', 'Press the dumbbells overhead while rotating your palms to face forward, then return to starting position.', 'Compound', 'Intermediate'),
(478, 'Lateral Raise', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand by your sides, palms facing your body.', 'Lift the dumbbells out to the sides until your arms are parallel to the ground, then lower them back down.', 'Isolation', 'Beginner'),
(479, 'Front Raise', 'shoulders', 'Dumbbells', 'Stand holding a dumbbell in each hand, arms extended in front of you.', 'Lift the dumbbells in front of you to shoulder height, then lower them back to the starting position.', 'Isolation', 'Beginner'),
(480, 'Rear Delt Fly', 'shoulders', 'Dumbbells', 'Bend forward at the waist, holding a dumbbell in each hand with palms facing each other.', 'Raise the dumbbells out to your sides, keeping a slight bend in your elbows, then lower them back down.', 'Isolation', 'Intermediate'),
(481, 'Cable Lateral Raise', 'shoulders', 'Cable Machine', 'Stand with a cable machine at your side, grasping the handle with one hand.', 'Pull the handle up to your side, keeping your arm straight, until it reaches shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(482, 'Cable Face Pull', 'shoulders', 'Cable Machine, Rope Attachment', 'Attach a rope to a high pulley, holding the rope with both hands in front of you.', 'Pull the rope toward your face, keeping your elbows high and squeezing your rear delts, then return to the starting position.', 'Isolation', 'Intermediate'),
(483, 'Upright Row', 'shoulders', 'Barbell', 'Stand with a barbell in front of you, hands shoulder-width apart.', 'Pull the barbell straight up to chin height, keeping it close to your body, then lower it back down.', 'Compound', 'Intermediate'),
(484, 'Dumbbell Shrug', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand by your sides.', 'Shrug your shoulders up toward your ears, squeezing the traps at the top, then lower the dumbbells back down.', 'Isolation', 'Beginner'),
(485, 'Barbell Shrug', 'shoulders', 'Barbell', 'Stand with a barbell in front of you, gripping it with both hands.', 'Lift your shoulders toward your ears, squeezing your traps, then lower the barbell back down.', 'Isolation', 'Beginner'),
(486, 'Overhead Dumbbell Extension', 'shoulders', 'Dumbbell', 'Hold a dumbbell with both hands overhead, arms fully extended.', 'Lower the dumbbell behind your head by bending your elbows, then extend your arms back overhead.', 'Isolation', 'Intermediate'),
(487, 'Seated Dumbbell Press', 'shoulders', 'Dumbbells, Bench', 'Sit on a bench with back support, holding a dumbbell in each hand at shoulder height.', 'Press the dumbbells overhead until your arms are fully extended, then lower them back to the starting position.', 'Compound', 'Beginner'),
(488, 'Landmine Shoulder Press', 'shoulders', 'Landmine', 'Stand with the landmine barbell in front of you, grasping the end with both hands.', 'Press the barbell upward until your arms are fully extended, then lower it back down.', 'Compound', 'Intermediate'),
(489, 'Kettlebell Shoulder Press', 'shoulders', 'Kettlebell', 'Stand holding a kettlebell in one hand at shoulder height.', 'Press the kettlebell overhead until your arm is fully extended, then lower it back to the starting position.', 'Compound', 'Intermediate'),
(490, 'Standing Barbell Press', 'shoulders', 'Barbell', 'Stand with a barbell at shoulder height, hands slightly wider than shoulder-width apart.', 'Press the barbell overhead until your arms are fully extended, then lower it back down.', 'Compound', 'Intermediate'),
(491, 'Dumbbell Reverse Fly', 'shoulders', 'Dumbbells', 'Bend at the waist holding a dumbbell in each hand, palms facing each other.', 'Raise the dumbbells out to your sides, keeping a slight bend in your elbows, then lower them back down.', 'Isolation', 'Intermediate'),
(492, 'Cable Lying Shoulder Extension', 'shoulders', 'Cable Machine', 'Lie face down on a bench with a cable machine in front of you.', 'Extend your arms straight back, keeping your elbows slightly bent, then return to the starting position.', 'Isolation', 'Beginner'),
(493, 'Standing Dumbbell Lateral Raise', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand by your sides, palms facing your body.', 'Lift the dumbbells out to the sides, keeping your arms slightly bent, until they reach shoulder height, then lower them back down.', 'Isolation', 'Beginner'),
(494, 'Dumbbell Incline Press', 'shoulders', 'Dumbbells, Bench', 'Set an incline bench to a slight angle and hold a dumbbell in each hand at chest height.', 'Press the dumbbells up overhead, fully extending your arms, then lower them back to the starting position.', 'Compound', 'Intermediate'),
(495, 'Dumbbell Cuban Press', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand at shoulder height, elbows bent.', 'Rotate the dumbbells outward, then press them overhead while keeping the elbows bent and close to your head.', 'Compound', 'Intermediate'),
(496, 'Standing Barbell Front Raise', 'shoulders', 'Barbell', 'Stand with your feet shoulder-width apart and hold a barbell in front of your thighs.', 'Lift the barbell to shoulder height, keeping your arms straight, then lower it back down.', 'Isolation', 'Beginner'),
(497, 'Seated Barbell Press', 'shoulders', 'Barbell, Bench', 'Sit on a bench with a barbell at shoulder height.', 'Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.', 'Compound', 'Intermediate'),
(498, 'Dumbbell Upright Row', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand in front of your thighs.', 'Pull the dumbbells straight up toward your chin, keeping them close to your body, then lower them back down.', 'Compound', 'Intermediate'),
(499, 'Cable Shoulder Press', 'shoulders', 'Cable Machine', 'Attach handles to a cable machine and set it to shoulder height.', 'Push the cables overhead until your arms are fully extended, then lower them back to the starting position.', 'Compound', 'Intermediate'),
(500, 'Dumbbell Chest Press', 'shoulders', 'Dumbbells, Bench', 'Lie on a flat bench holding a dumbbell in each hand at chest height.', 'Press the dumbbells overhead, fully extending your arms, then lower them back to the starting position.', 'Compound', 'Beginner'),
(501, 'Landmine Shoulder Press', 'shoulders', 'Landmine', 'Stand with a barbell inserted into a landmine attachment.', 'Grasp the barbell end with both hands and press it overhead, fully extending your arms, then lower it back down.', 'Compound', 'Intermediate'),
(502, 'Dumbbell Lateral Raise (Single Arm)', 'shoulders', 'Dumbbell', 'Stand with a dumbbell in one hand by your side, palm facing your body.', 'Lift the dumbbell to the side, keeping your arm straight, until it reaches shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(503, 'Kettlebell Overhead Press', 'shoulders', 'Kettlebell', 'Stand with a kettlebell in one hand at shoulder height.', 'Press the kettlebell overhead, fully extending your arm, then lower it back to shoulder height.', 'Compound', 'Intermediate'),
(504, 'Wide-Grip Barbell Upright Row', 'shoulders', 'Barbell', 'Stand with a barbell in front of you, hands wider than shoulder-width apart.', 'Lift the barbell straight up to chin height, keeping your elbows higher than your wrists, then lower it back down.', 'Compound', 'Intermediate'),
(505, 'Cable Front Raise', 'shoulders', 'Cable Machine', 'Set the cable machine to low and attach a handle.', 'Stand facing away from the machine and pull the handle forward, lifting it to shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(506, 'Single-Arm Cable Lateral Raise', 'shoulders', 'Cable Machine', 'Stand with the cable machine to your side, grasping the handle.', 'Lift the handle to your side, keeping your arm straight, until it reaches shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(507, 'Plate Front Raise', 'shoulders', 'Weight Plate', 'Hold a weight plate with both hands in front of your thighs.', 'Lift the plate in front of you to shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(508, 'Kettlebell Lateral Raise', 'shoulders', 'Kettlebell', 'Stand with a kettlebell in one hand by your side.', 'Lift the kettlebell to the side, keeping your arm straight, until it reaches shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(509, 'Smith Machine Shoulder Press', 'shoulders', 'Smith Machine', 'Set the bar on the Smith machine at shoulder height.', 'Press the barbell overhead until your arms are fully extended, then lower it back down.', 'Compound', 'Intermediate'),
(510, 'Barbell Overhead Press', 'shoulders', 'Barbell', 'Stand with a barbell at shoulder height.', 'Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.', 'Compound', 'Intermediate'),
(511, 'Standing Dumbbell Shoulder Press', 'shoulders', 'Dumbbells', 'Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height.', 'Press both dumbbells overhead until your arms are fully extended, then lower them back down to shoulder height.', 'Compound', 'Beginner'),
(512, 'Barbell Push Press', 'shoulders', 'Barbell', 'Stand with a barbell at shoulder height, hands just outside shoulder width.', 'Dip your knees slightly, then drive the barbell overhead using your legs and arms, then lower it back down.', 'Compound', 'Intermediate'),
(513, 'Dumbbell Overhead Tricep Extension', 'shoulders', 'Dumbbell', 'Sit or stand with a dumbbell held overhead with both hands.', 'Lower the dumbbell behind your head by bending your elbows, then extend your arms back overhead.', 'Isolation', 'Beginner'),
(514, 'Incline Dumbbell Front Raise', 'shoulders', 'Dumbbells, Bench', 'Sit on an incline bench with a dumbbell in each hand.', 'Lift the dumbbells in front of you to shoulder height, then lower them back down.', 'Isolation', 'Beginner'),
(515, 'Dumbbell Reverse Press', 'shoulders', 'Dumbbells', 'Hold a dumbbell in each hand at shoulder height with palms facing behind you.', 'Press the dumbbells overhead while keeping your elbows bent, then lower them back down.', 'Compound', 'Intermediate'),
(516, 'Cable Shoulder Raise', 'shoulders', 'Cable Machine', 'Attach a handle to a low pulley and stand facing the machine.', 'Raise the handle in front of you to shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(517, 'Kettlebell Shoulder Press', 'shoulders', 'Kettlebell', 'Stand with a kettlebell in each hand at shoulder height.', 'Press both kettlebells overhead, extending your arms fully, then lower them back down.', 'Compound', 'Intermediate'),
(518, 'Dumbbell Shoulder Press (Neutral Grip)', 'shoulders', 'Dumbbells', 'Sit or stand with a dumbbell in each hand, palms facing each other.', 'Press the dumbbells overhead until your arms are fully extended, then lower them back to shoulder height.', 'Compound', 'Intermediate'),
(519, 'Cable Rear Delt Fly', 'shoulders', 'Cable Machine', 'Set the cable machine at a high pulley and stand facing the machine.', 'Pull the cables back and out to your sides, keeping your elbows slightly bent, then return to the starting position.', 'Isolation', 'Intermediate'),
(520, 'Seated Military Press', 'shoulders', 'Barbell, Bench', 'Sit on a bench with back support and hold a barbell at shoulder height.', 'Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.', 'Compound', 'Intermediate'),
(521, 'Dumbbell Lateral Raise with Pause', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand by your sides.', 'Lift the dumbbells to the sides to shoulder height, hold for a second, then lower them back down.', 'Isolation', 'Beginner'),
(522, 'Standing Military Press', 'shoulders', 'Barbell', 'Stand with a barbell at shoulder height, hands slightly wider than shoulder-width.', 'Press the barbell overhead until your arms are fully extended, then lower it back down.', 'Compound', 'Intermediate'),
(523, 'Dumbbell Scaption', 'shoulders', 'Dumbbells', 'Stand holding a dumbbell in each hand by your sides.', 'Lift the dumbbells at a 45-degree angle in front of you, keeping your arms slightly bent, until they reach shoulder height, then lower them back down.', 'Isolation', 'Intermediate'),
(524, 'Overhead Barbell Extension', 'shoulders', 'Barbell', 'Hold a barbell with both hands, arms extended overhead.', 'Lower the bar behind your head by bending your elbows, then extend your arms back overhead.', 'Isolation', 'Intermediate'),
(525, 'Dumbbell Front Raise (Alternating)', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand in front of your thighs.', 'Lift one dumbbell to shoulder height, then lower it and repeat with the other arm.', 'Isolation', 'Beginner'),
(526, 'Landmine Lateral Raise', 'shoulders', 'Landmine', 'Stand with a landmine barbell in front of you.', 'Lift the end of the barbell to the side, keeping your arm straight, until it reaches shoulder height, then lower it back down.', 'Isolation', 'Intermediate'),
(527, 'Overhead Cable Extension', 'shoulders', 'Cable Machine', 'Attach a rope handle to a high pulley.', 'Pull the rope overhead with both hands, keeping your arms fully extended, then return to the starting position.', 'Isolation', 'Beginner'),
(528, 'Chest-Supported Rear Delt Raise', 'shoulders', 'Dumbbells, Bench', 'Lie face down on an incline bench, holding a dumbbell in each hand.', 'Raise the dumbbells out to your sides, squeezing your shoulder blades together, then lower them back down.', 'Isolation', 'Intermediate'),
(529, 'Seated Dumbbell Lateral Raise', 'shoulders', 'Dumbbells', 'Sit on a bench with a dumbbell in each hand by your sides.', 'Lift the dumbbells to your sides until they reach shoulder height, then lower them back down.', 'Isolation', 'Beginner'),
(530, 'Standing Barbell Overhead Press', 'shoulders', 'Barbell', 'Stand with your feet shoulder-width apart and hold a barbell at shoulder height.', 'Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.', 'Compound', 'Intermediate'),
(531, 'Seated Military Press', 'shoulders', 'Barbell, Bench', 'Sit on a bench with back support and hold a barbell at shoulder height.', 'Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.', 'Compound', 'Intermediate'),
(532, 'Front Plate Raise', 'shoulders', 'Weight Plate', 'Hold a weight plate with both hands in front of your thighs.', 'Lift the weight plate in front of you to shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(533, 'Dumbbell Lateral Raise (Seated)', 'shoulders', 'Dumbbells', 'Sit on a bench with a dumbbell in each hand by your sides.', 'Lift both dumbbells to the sides until they reach shoulder height, then lower them back down.', 'Isolation', 'Beginner'),
(534, 'Landmine Shoulder Press', 'shoulders', 'Landmine', 'Stand with the end of a barbell placed in a landmine attachment, holding the other end with both hands.', 'Press the barbell overhead, extending your arms fully, then lower it back down.', 'Compound', 'Intermediate'),
(535, 'Dumbbell Shoulder Press', 'shoulders', 'Dumbbells', 'Sit or stand with a dumbbell in each hand at shoulder height.', 'Press the dumbbells overhead until your arms are fully extended, then lower them back to shoulder height.', 'Compound', 'Beginner'),
(536, 'Cable Front Raise', 'shoulders', 'Cable Machine', 'Attach a handle to a low pulley and stand facing the machine.', 'Lift the handle in front of you to shoulder height, then lower it back down.', 'Isolation', 'Beginner'),
(537, 'Single-Arm Cable Lateral Raise', 'shoulders', 'Cable Machine', 'Attach a handle to a low pulley and stand side-on to the machine.', 'Lift the handle to the side until your arm is parallel to the floor, then lower it back down.', 'Isolation', 'Beginner'),
(538, 'Dumbbell Upright Row', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand in front of your thighs.', 'Lift the dumbbells toward your chin, keeping your elbows higher than your wrists, then lower them back down.', 'Compound', 'Intermediate'),
(539, 'Barbell Lateral Raise', 'shoulders', 'Barbell', 'Stand with a barbell in front of you at hip height.', 'Raise the barbell to the sides to shoulder height, then lower it back down.', 'Isolation', 'Intermediate'),
(540, 'Dumbbell Shrug', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand by your sides.', 'Shrug your shoulders up toward your ears, hold for a moment, then lower them back down.', 'Isolation', 'Beginner'),
(541, 'Standing Dumbbell Shoulder Press', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand at shoulder height.', 'Press both dumbbells overhead until your arms are fully extended, then lower them back down.', 'Compound', 'Beginner'),
(542, 'Cable Shoulder Press', 'shoulders', 'Cable Machine', 'Attach a handle to a low pulley and stand facing the machine.', 'Press the handle overhead until your arms are fully extended, then lower it back down.', 'Compound', 'Intermediate'),
(543, 'Dumbbell Lateral Raise with Hold', 'shoulders', 'Dumbbells', 'Stand with a dumbbell in each hand by your sides.', 'Raise the dumbbells to shoulder height, hold for a moment, then lower them back down.', 'Isolation', 'Beginner'),
(544, 'Dumbbell Arnold Press', 'shoulders', 'Dumbbells', 'Hold a dumbbell in each hand with palms facing you at shoulder height.', 'Press the dumbbells overhead while rotating your wrists so your palms face forward at the top, then reverse the motion as you lower the dumbbells.', 'Compound', 'Intermediate'),
(545, 'Seated Dumbbell Front Raise', 'shoulders', 'Dumbbells, Bench', 'Sit on a bench with a dumbbell in each hand by your sides.', 'Lift one dumbbell in front of you to shoulder height, then lower it back down and repeat with the other arm.', 'Isolation', 'Beginner'),
(546, 'Reverse Pec Deck', 'shoulders', 'Pec Deck Machine', 'Sit on the machine facing the back pad and hold the handles in front of you.', 'Pull the handles back and out to the sides, squeezing your shoulder blades together, then return to the starting position.', 'Isolation', 'Intermediate'),
(547, 'Dumbbell Cuban Press', 'shoulders', 'Dumbbells', 'Hold a dumbbell in each hand at shoulder height with your palms facing down.', 'Rotate the dumbbells outward, then press them overhead while keeping the elbows bent and close to your head.', 'Compound', 'Intermediate'),
(548, 'Cable Face Pull', 'shoulders', 'Cable Machine', 'Attach a rope handle to a high pulley and stand facing the machine.', 'Pull the rope toward your face, keeping your elbows high and wide, then return to the starting position.', 'Isolation', 'Intermediate'),
(549, 'Seated Barbell Shoulder Press', 'shoulders', 'Barbell, Bench', 'Sit on a bench with back support and hold a barbell at shoulder height.', 'Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.', 'Compound', 'Intermediate'),
(550, 'Plank', 'core', 'None', 'Start in a forearm plank position with your body in a straight line from head to heels.', 'Hold the position, keeping your core engaged and your body straight.', 'Isolation', 'Beginner'),
(551, 'Russian Twist', 'core', 'None', 'Sit on the floor with your knees bent and feet flat, holding your hands together in front of your chest.', 'Lean back slightly and rotate your torso to each side while keeping your core tight.', 'Isolation', 'Beginner'),
(552, 'Bicycle Crunch', 'core', 'None', 'Lie flat on your back with your hands behind your head and legs extended.', 'Bring one knee toward your chest while rotating your torso to bring the opposite elbow toward that knee. Alternate sides in a pedaling motion.', 'Isolation', 'Beginner'),
(553, 'Leg Raises', 'core', 'None', 'Lie flat on your back with your legs extended and your arms at your sides.', 'Lift your legs towards the ceiling while keeping them straight, then lower them back down without touching the floor.', 'Isolation', 'Beginner'),
(554, 'Mountain Climbers', 'core', 'None', 'Start in a high plank position with your arms straight and your body in a straight line.', 'Drive one knee towards your chest, then quickly switch legs, as if you\'re climbing. Continue alternating legs.', 'Compound', 'Intermediate'),
(555, 'Hanging Leg Raise', 'core', 'Pull-up Bar', 'Hang from a pull-up bar with your arms extended and legs straight.', 'Lift your legs towards your chest, keeping them straight, then lower them back down.', 'Isolation', 'Intermediate'),
(556, 'Cable Woodchopper', 'core', 'Cable Machine', 'Attach a rope handle to a high pulley and stand side-on to the machine.', 'Pull the rope down diagonally across your body, twisting your torso as you do. Return to the starting position.', 'Compound', 'Intermediate'),
(557, 'Flutter Kicks', 'core', 'None', 'Lie flat on your back with your legs extended and hands under your hips for support.', 'Lift your legs off the ground and alternate kicking them up and down in a fluttering motion.', 'Isolation', 'Beginner'),
(558, 'Side Plank', 'core', 'None', 'Lie on your side with your legs stacked and your elbow directly beneath your shoulder.', 'Lift your hips off the ground, keeping your body in a straight line, and hold the position.', 'Isolation', 'Beginner'),
(559, 'Ab Wheel Rollout', 'core', 'Ab Wheel', 'Kneel on the floor with your hands gripping an ab wheel.', 'Roll the wheel forward, extending your body as far as you can without arching your back, then roll back to the starting position.', 'Compound', 'Advanced'),
(560, 'V-Ups', 'core', 'None', 'Lie flat on your back with your arms extended overhead and legs straight.', 'Simultaneously lift your legs and torso, reaching your hands toward your toes to form a V shape, then lower back down.', 'Isolation', 'Intermediate'),
(561, 'Toe Touch Crunches', 'core', 'None', 'Lie on your back with your legs extended and arms reaching toward the ceiling.', 'Crunch your upper body towards your legs, trying to touch your toes while keeping your legs straight.', 'Isolation', 'Beginner'),
(562, 'Reverse Crunches', 'core', 'None', 'Lie on your back with your hands by your sides and legs bent at 90 degrees.', 'Lift your hips off the ground, bringing your knees toward your chest, then lower back down.', 'Isolation', 'Beginner'),
(563, 'Medicine Ball Sit-Up', 'core', 'Medicine Ball', 'Lie on your back with a medicine ball held at chest level.', 'Perform a sit-up, extending the medicine ball overhead as you sit up, then return to the starting position.', 'Compound', 'Intermediate'),
(564, 'Plank to Push-Up', 'core', 'None', 'Start in a forearm plank position.', 'Push up onto your hands, one arm at a time, and then lower back down to your forearms.', 'Compound', 'Intermediate');
INSERT INTO `Exercises` (`id`, `Name`, `BodyPart`, `Equipment`, `SetUpDescription`, `RepDescription`, `Type`, `ExperienceLevel`) VALUES
(565, 'Cable Ab Crunch', 'core', 'Cable Machine', 'Attach a rope handle to a high pulley and kneel down in front of the machine.', 'Pull the rope down towards your knees, crunching your torso as you do.', 'Isolation', 'Beginner'),
(566, 'Oblique V-Up', 'core', 'None', 'Lie on your side with your legs extended and one arm reaching overhead.', 'Lift your legs and torso simultaneously, bringing your elbow toward your knees to form a V shape.', 'Isolation', 'Intermediate'),
(567, 'Windshield Wipers', 'core', 'None', 'Lie flat on your back with your legs extended and arms out to the sides.', 'Lift your legs off the ground and move them side to side in a windshield-wiper motion.', 'Isolation', 'Intermediate'),
(568, 'Dragon Flag', 'core', 'None', 'Lie on a bench and hold onto the edge with your hands behind your head.', 'Lift your legs and torso off the bench, keeping your body straight, then lower back down without touching the bench.', 'Compound', 'Advanced'),
(569, 'Jackknife Sit-Up', 'core', 'None', 'Lie flat on your back with your arms extended overhead and legs straight.', 'Simultaneously lift your legs and torso to meet in the middle, then lower back down.', 'Isolation', 'Intermediate'),
(570, 'Hanging Oblique Raise', 'core', 'Pull-up Bar', 'Hang from a pull-up bar with your body straight and legs extended.', 'Raise your legs to one side while twisting your torso, then lower back down.', 'Isolation', 'Advanced'),
(571, 'Ab Rollout', 'core', 'Ab Wheel', 'Kneel on the floor with your hands gripping an ab wheel.', 'Roll the wheel forward, extending your body as far as you can without arching your back, then return to the starting position.', 'Compound', 'Advanced'),
(572, 'Kettlebell Russian Twist', 'core', 'Kettlebell', 'Sit on the floor with your knees bent, holding a kettlebell with both hands.', 'Lean back slightly and rotate your torso from side to side while holding the kettlebell.', 'Isolation', 'Beginner'),
(573, 'Seated Leg Raise', 'core', 'None', 'Sit on the edge of a bench with your legs extended and your hands gripping the sides.', 'Lift your legs toward your chest, then lower them back down.', 'Isolation', 'Beginner'),
(574, 'Standing Cable Crunch', 'core', 'Cable Machine', 'Attach a rope to a high pulley and stand facing the machine.', 'Pull the rope down towards your knees, bending at the waist while keeping your torso stationary.', 'Isolation', 'Beginner'),
(575, 'Plank with Arm Lift', 'core', 'None', 'Start in a forearm plank position.', 'Lift one arm off the ground and extend it straight in front of you, then return to the starting position and alternate arms.', 'Compound', 'Intermediate'),
(576, 'Side Plank with Leg Raise', 'core', 'None', 'Start in a side plank position with your body in a straight line.', 'Raise your top leg upwards, then lower it back down while maintaining the side plank.', 'Isolation', 'Intermediate'),
(577, 'Reverse Crunch with Twist', 'core', 'None', 'Lie on your back with your hands by your sides and legs bent.', 'Lift your hips off the ground and twist your torso to one side, bringing your knees towards your chest.', 'Isolation', 'Intermediate'),
(578, 'V-Sit', 'core', 'None', 'Sit on the floor with your legs extended in front of you and arms reaching overhead.', 'Lift both your torso and legs to form a V shape, then lower them back down.', 'Isolation', 'Intermediate'),
(579, 'Cable Oblique Twist', 'core', 'Cable Machine', 'Attach a rope handle to a low pulley and stand side-on to the machine.', 'Twist your torso from side to side, pulling the rope across your body with each rotation.', 'Compound', 'Intermediate'),
(580, 'Lying Leg Raises', 'core', 'None', 'Lie flat on your back with your legs extended and hands by your sides.', 'Lift your legs towards the ceiling, then lower them back down without letting them touch the floor.', 'Isolation', 'Beginner'),
(581, 'Abdominal Crunch on Stability Ball', 'core', 'Stability Ball', 'Sit on a stability ball with your feet flat on the floor, then roll your lower back over the ball.', 'Perform a crunch by lifting your torso towards your knees while keeping your lower back on the ball.', 'Isolation', 'Intermediate'),
(582, 'Bird Dog', 'core', 'None', 'Start on your hands and knees with your hands under your shoulders and knees under your hips.', 'Extend one arm forward while extending the opposite leg back, keeping your torso stable. Return to starting position and repeat on the other side.', 'Compound', 'Beginner'),
(583, 'Reverse Plank', 'core', 'None', 'Sit on the floor with your legs extended and hands behind you, fingers pointing towards your feet.', 'Lift your hips off the ground, forming a straight line from your head to your heels.', 'Isolation', 'Intermediate'),
(584, 'Dumbbell Side Bend', 'core', 'Dumbbell', 'Stand with your feet shoulder-width apart, holding a dumbbell in one hand.', 'Bend to the side, bringing the dumbbell towards your knee, then return to the starting position.', 'Isolation', 'Beginner'),
(585, 'Sit-Up with Medicine Ball', 'core', 'Medicine Ball', 'Lie on your back with your knees bent and holding a medicine ball at chest level.', 'Perform a sit-up, extending the medicine ball overhead as you sit up, then return to the starting position.', 'Compound', 'Intermediate'),
(586, 'Flutter Kicks with Hold', 'core', 'None', 'Lie flat on your back with your legs extended and hands under your hips for support.', 'Kick your legs up and down while holding the position for a set amount of time.', 'Isolation', 'Beginner'),
(587, 'Scissor Kicks', 'core', 'None', 'Lie on your back with your legs extended and arms by your sides.', 'Lift your legs off the ground and cross them over each other in a scissoring motion.', 'Isolation', 'Beginner'),
(588, 'Swiss Ball Pass', 'core', 'Stability Ball', 'Lie on your back holding a stability ball between your hands and legs.', 'Lift your legs and arms to pass the ball between your hands and legs, then lower back down.', 'Compound', 'Intermediate'),
(589, 'Dumbbell Russian Twist', 'core', 'Dumbbell', 'Sit on the floor with your knees bent and feet flat, holding a dumbbell with both hands.', 'Lean back slightly and rotate your torso to each side, holding the dumbbell throughout.', 'Isolation', 'Beginner'),
(590, 'Superman Hold', 'core', 'None', 'Lie face down on the floor with your arms extended in front of you.', 'Lift your arms, chest, and legs off the ground, holding the position while keeping your body in a straight line.', 'Isolation', 'Beginner'),
(591, 'Leg Raise and Twist', 'core', 'None', 'Lie on your back with your legs extended and arms by your sides.', 'Lift your legs and twist them to each side in a controlled manner, alternating sides.', 'Isolation', 'Intermediate'),
(592, 'Tuck Crunch', 'core', 'None', 'Sit on the floor with your knees bent and hands behind your head.', 'Lift your torso toward your knees, curling up into a tuck position, then return to starting position.', 'Isolation', 'Beginner'),
(593, 'Cable Woodchoppers', 'core', 'Cable Machine', 'Attach a handle to a high pulley and stand side-on to the machine.', 'Pull the handle down diagonally across your body, twisting your torso and engaging your core.', 'Compound', 'Intermediate'),
(594, 'Standing Oblique Crunch', 'core', 'None', 'Stand with your feet shoulder-width apart and place your hands behind your head.', 'Bend your torso to one side, bringing your elbow down toward your hip, then return to the starting position.', 'Isolation', 'Beginner'),
(595, 'Bicycle Crunch', 'core', 'None', 'Lie on your back with your hands behind your head and legs extended.', 'Bring one knee toward your chest while simultaneously twisting your torso to bring the opposite elbow toward the knee, alternating sides.', 'Compound', 'Intermediate'),
(596, 'Plank with Leg Lift', 'core', 'None', 'Start in a forearm plank position.', 'Lift one leg off the ground, holding for a moment before lowering it back down. Alternate legs.', 'Compound', 'Intermediate'),
(597, 'V-Up', 'core', 'None', 'Lie flat on your back with your arms extended above your head and legs straight.', 'Simultaneously lift your legs and torso to form a V shape, reaching your hands toward your feet.', 'Isolation', 'Intermediate'),
(598, 'Mountain Climbers', 'core', 'None', 'Start in a push-up position with your body in a straight line.', 'Drive one knee towards your chest, then quickly switch legs as if running in place.', 'Compound', 'Intermediate'),
(599, 'Heel Touches', 'core', 'None', 'Lie on your back with your knees bent and feet flat on the floor.', 'Reach down toward your heels while engaging your obliques, alternating sides.', 'Isolation', 'Beginner'),
(600, 'Side Plank with Hip Dips', 'core', 'None', 'Start in a side plank position with your body in a straight line.', 'Lower your hips towards the floor, then lift them back up, engaging your obliques.', 'Isolation', 'Intermediate'),
(601, 'Leg Raise to Hip Thrust', 'core', 'None', 'Lie flat on your back with your hands by your sides and legs extended.', 'Lift your legs and thrust your hips off the floor, then lower back down.', 'Compound', 'Intermediate'),
(602, 'Russian Twist with Medicine Ball', 'core', 'Medicine Ball', 'Sit on the floor with your knees bent, holding a medicine ball with both hands.', 'Twist your torso to each side while holding the medicine ball.', 'Isolation', 'Beginner'),
(603, 'Hanging Leg Raise', 'core', 'Pull-Up Bar', 'Hang from a pull-up bar with your legs extended.', 'Raise your legs towards your chest, then slowly lower them back down.', 'Compound', 'Intermediate'),
(604, 'Knee Tuck on Stability Ball', 'core', 'Stability Ball', 'Place your shins on a stability ball and your hands on the floor.', 'Roll the ball towards your chest by bending your knees, then return to the starting position.', 'Compound', 'Intermediate'),
(605, 'Hip Bridge', 'core', 'None', 'Lie on your back with your knees bent and feet flat on the floor.', 'Lift your hips towards the ceiling while engaging your glutes and core, then lower back down.', 'Compound', 'Beginner'),
(606, 'Lying Leg Circles', 'core', 'None', 'Lie flat on your back with your legs extended and arms by your sides.', 'Lift your legs off the floor and make small circles, then reverse direction.', 'Isolation', 'Intermediate'),
(607, 'Boat Pose', 'core', 'None', 'Sit on the floor with your knees bent and your torso upright.', 'Lift both your legs and torso to form a V shape, balancing on your sit bones.', 'Isolation', 'Intermediate'),
(608, 'Plank with Shoulder Taps', 'core', 'None', 'Start in a high plank position.', 'Tap your left shoulder with your right hand, then your right shoulder with your left hand, alternating sides.', 'Compound', 'Intermediate'),
(609, 'Ab Twist with Medicine Ball', 'core', 'Medicine Ball', 'Sit on the floor with your knees bent and holding a medicine ball with both hands.', 'Twist your torso to each side, touching the medicine ball to the floor beside you.', 'Isolation', 'Beginner'),
(610, 'Frog Crunch', 'core', 'None', 'Lie on your back with your knees bent and feet together.', 'Perform a crunch, bringing your chest toward your knees while keeping your feet together.', 'Isolation', 'Beginner'),
(611, 'Stability Ball Rollout', 'core', 'Stability Ball', 'Kneel on the floor with your hands on a stability ball.', 'Roll the ball forward, extending your body as far as you can, then return to the starting position.', 'Compound', 'Intermediate'),
(612, 'Side Plank with Leg Lift', 'core', 'None', 'Start in a side plank position.', 'Lift your top leg upwards, then lower it back down while maintaining the side plank.', 'Isolation', 'Intermediate'),
(613, 'Spider Plank', 'core', 'None', 'Start in a high plank position.', 'Bring one knee towards your elbow, then return to the starting position and alternate legs.', 'Compound', 'Intermediate'),
(614, 'Leg Raise with Twist', 'core', 'None', 'Lie on your back with your legs extended and arms by your sides.', 'Lift your legs towards the ceiling, then twist your hips to each side.', 'Isolation', 'Intermediate'),
(615, 'Crunch on Stability Ball', 'core', 'Stability Ball', 'Sit on a stability ball with your feet flat on the floor.', 'Perform a crunch while keeping your lower back supported on the ball.', 'Isolation', 'Beginner');

-- --------------------------------------------------------

--
-- Table structure for table `ExerciseStartingWeight`
--

CREATE TABLE `ExerciseStartingWeight` (
  `id` bigint NOT NULL,
  `ExerciseId` bigint NOT NULL,
  `Weight` bigint NOT NULL,
  `planId` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ExerciseStartingWeight`
--

INSERT INTO `ExerciseStartingWeight` (`id`, `ExerciseId`, `Weight`, `planId`) VALUES
(105, 72, 135, 41),
(106, 102, 28, 41),
(107, 509, 100, 41),
(108, 379, 22, 41),
(109, 425, 22, 41),
(110, 107, 190, 41),
(111, 251, 140, 42),
(112, 200, 115, 42),
(113, 351, 25, 42),
(114, 275, 45, 42),
(115, 137, 25, 42),
(116, 1, 100, 42),
(117, 106, 40, 42),
(118, 6, 34, 42),
(119, 104, 80, 42),
(120, 8, 22, 42),
(121, 112, 100, 42),
(122, 9, 85, 42),
(123, 510, 60, 42),
(124, 481, 5, 42),
(125, 463, 35, 42),
(126, 436, 10, 42),
(127, 377, 18, 42),
(128, 376, 14, 42),
(129, 427, 30, 42),
(130, 563, 8, 42),
(131, 574, 30, 42),
(132, 202, 300, 42),
(133, 206, 45, 42),
(134, 2, 80, 42),
(135, 103, 85, 42),
(136, 108, 80, 42),
(137, 527, 35, 42),
(138, 585, 8, 42),
(139, 10, 123, 43),
(140, 9, 123, 43),
(141, 11, 119, 43),
(142, 4, 18, 44),
(143, 207, 12, 44),
(144, 425, 5, 44);

-- --------------------------------------------------------

--
-- Table structure for table `Facts`
--

CREATE TABLE `Facts` (
  `id` bigint NOT NULL,
  `UserId` bigint DEFAULT NULL,
  `TotalWeight` bigint DEFAULT '0',
  `SetsCompleted` bigint DEFAULT '0',
  `WorkoutsComplete` bigint DEFAULT '0',
  `AvgWorkoutTime` time DEFAULT '00:00:00',
  `WeeklyStreak` bigint DEFAULT '0',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Facts`
--

INSERT INTO `Facts` (`id`, `UserId`, `TotalWeight`, `SetsCompleted`, `WorkoutsComplete`, `AvgWorkoutTime`, `WeeklyStreak`, `updated_at`) VALUES
(4, 4, 9594, 169, 10, '00:41:46', 1, '2025-05-01 10:42:45'),
(5, 7, 3907, 42, 4, '00:01:46', 1, '2025-04-28 11:40:01'),
(6, 8, 0, 0, 0, '00:00:00', 0, '2025-04-23 12:46:47'),
(7, 9, 7553, 61, 7, '00:00:49', 0, '2025-04-26 01:29:07'),
(8, 10, 90, 6, 2, '00:00:50', 0, '2025-04-30 11:54:28');

-- --------------------------------------------------------

--
-- Table structure for table `Goals`
--

CREATE TABLE `Goals` (
  `id` bigint NOT NULL,
  `PlanID` bigint DEFAULT NULL,
  `Exercise1Id` bigint DEFAULT NULL,
  `Exercise1Weight` decimal(10,2) DEFAULT NULL,
  `Exercise2Id` bigint DEFAULT NULL,
  `Exercise2Weight` decimal(10,2) DEFAULT NULL,
  `Exercise3Id` bigint DEFAULT NULL,
  `Exercise3Weight` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Goals`
--

INSERT INTO `Goals` (`id`, `PlanID`, `Exercise1Id`, `Exercise1Weight`, `Exercise2Id`, `Exercise2Weight`, `Exercise3Id`, `Exercise3Weight`) VALUES
(22, 41, 72, 171.00, 102, 86.00, 379, 28.00),
(23, 42, 1, 127.00, 200, 150.00, 510, 80.00),
(24, 43, 10, 263.00, 9, 263.00, 11, 139.00),
(25, 44, 4, 30.00, 207, 20.00, 425, 7.00);

-- --------------------------------------------------------

--
-- Table structure for table `HistorySets`
--

CREATE TABLE `HistorySets` (
  `id` bigint NOT NULL,
  `ExerciseId` bigint DEFAULT NULL,
  `SetNumber` bigint NOT NULL,
  `Reps` bigint NOT NULL,
  `Weight` decimal(10,2) NOT NULL,
  `HistoryId` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `HistorySets`
--

INSERT INTO `HistorySets` (`id`, `ExerciseId`, `SetNumber`, `Reps`, `Weight`, `HistoryId`) VALUES
(312, 251, 1, 8, 140.00, 45),
(315, 251, 2, 8, 145.00, 45),
(317, 251, 3, 8, 145.00, 45),
(319, 200, 1, 8, 100.00, 45),
(321, 200, 2, 8, 110.00, 45),
(323, 200, 3, 8, 115.00, 45),
(325, 351, 1, 20, 30.00, 45),
(327, 351, 2, 20, 30.00, 45),
(329, 351, 3, 20, 30.00, 45),
(331, 275, 1, 10, 47.50, 45),
(333, 275, 2, 10, 50.00, 45),
(335, 275, 3, 10, 55.00, 45),
(337, 137, 1, 12, 25.00, 45),
(338, 137, 2, 12, 25.00, 45),
(339, 72, 1, 4, 135.00, 48),
(340, 72, 2, 4, 135.00, 48),
(341, 72, 3, 4, 135.00, 48),
(342, 509, 1, 7, 90.00, 48),
(343, 379, 1, 7, 22.50, 48),
(344, 379, 2, 7, 22.00, 48),
(345, 425, 1, 10, 21.75, 48),
(346, 425, 2, 10, 21.75, 48),
(347, 107, 1, 10, 190.00, 48),
(348, 107, 2, 10, 190.00, 48),
(391, 1, 1, 5, 100.00, 53),
(392, 1, 2, 5, 105.00, 53),
(393, 1, 3, 5, 107.50, 53),
(394, 106, 1, 8, 42.50, 53),
(395, 106, 2, 8, 42.50, 53),
(396, 6, 1, 6, 34.00, 53),
(397, 6, 2, 6, 34.00, 53),
(398, 6, 3, 6, 34.00, 53),
(399, 104, 1, 8, 80.00, 53),
(400, 104, 2, 8, 80.00, 53),
(401, 104, 3, 8, 80.00, 53),
(402, 8, 1, 12, 20.00, 53),
(403, 8, 2, 12, 22.50, 53),
(404, 8, 3, 12, 25.00, 53),
(405, 112, 1, 8, 100.00, 53),
(406, 112, 2, 8, 95.00, 53),
(407, 9, 1, 8, 85.00, 53),
(408, 9, 2, 8, 85.00, 53),
(409, 510, 1, 8, 60.00, 54),
(410, 510, 2, 8, 60.00, 54),
(411, 510, 3, 8, 65.00, 54),
(412, 481, 1, 12, 5.00, 54),
(413, 481, 2, 12, 7.50, 54),
(414, 481, 3, 12, 7.50, 54),
(415, 463, 1, 12, 35.00, 54),
(416, 463, 2, 12, 37.50, 54),
(417, 463, 3, 12, 37.50, 54),
(418, 436, 1, 10, 10.00, 54),
(419, 436, 2, 10, 10.00, 54),
(420, 436, 3, 10, 10.00, 54),
(421, 377, 1, 10, 20.00, 54),
(422, 377, 2, 10, 20.00, 54),
(423, 376, 1, 8, 15.00, 54),
(424, 376, 2, 8, 15.00, 54),
(425, 427, 1, 8, 25.00, 54),
(426, 427, 2, 8, 25.00, 54),
(427, 427, 3, 8, 25.00, 54),
(428, 563, 1, 8, 8.00, 54),
(429, 563, 2, 8, 8.00, 54),
(430, 563, 3, 8, 8.00, 54),
(431, 574, 1, 20, 30.00, 54),
(432, 200, 1, 8, 110.00, 55),
(433, 200, 2, 8, 120.00, 55),
(434, 200, 3, 8, 125.00, 55),
(435, 275, 1, 10, 45.00, 55),
(436, 275, 2, 10, 50.00, 55),
(437, 275, 3, 10, 55.00, 55),
(438, 351, 1, 20, 35.00, 55),
(439, 351, 2, 20, 35.00, 55),
(440, 351, 3, 20, 35.00, 55),
(442, 202, 1, 8, 260.00, 55),
(443, 202, 2, 8, 280.00, 55),
(445, 202, 3, 8, 300.00, 55),
(447, 206, 1, 10, 25.00, 55),
(449, 206, 2, 10, 27.50, 55),
(460, 104, 1, 8, 80.00, 57),
(461, 104, 2, 8, 85.00, 57),
(462, 104, 3, 8, 85.00, 57),
(463, 2, 1, 6, 80.00, 57),
(464, 2, 2, 6, 85.00, 57),
(465, 2, 3, 6, 90.00, 57),
(466, 103, 1, 8, 85.00, 57),
(467, 103, 2, 8, 90.00, 57),
(468, 103, 3, 8, 90.00, 57),
(469, 108, 1, 10, 80.00, 57),
(470, 108, 2, 10, 80.00, 57),
(471, 108, 3, 10, 85.00, 57),
(472, 112, 1, 8, 100.00, 57),
(473, 112, 2, 8, 107.50, 57),
(474, 8, 1, 12, 22.50, 57),
(475, 8, 2, 12, 22.50, 57),
(476, 8, 3, 12, 25.00, 57),
(477, 9, 1, 8, 85.00, 57),
(478, 9, 2, 8, 85.00, 57),
(540, 510, 1, 1, 60.00, 65),
(541, 510, 2, 1, 65.00, 65),
(542, 510, 3, 1, 65.00, 65),
(543, 481, 1, 1, 5.00, 65),
(544, 481, 2, 1, 5.00, 65),
(545, 481, 3, 1, 5.00, 65),
(546, 527, 1, 1, 35.00, 65),
(547, 527, 2, 1, 37.50, 65),
(548, 527, 3, 1, 37.50, 65),
(549, 436, 1, 1, 10.00, 65),
(550, 436, 2, 1, 10.00, 65),
(551, 436, 3, 1, 10.00, 65),
(552, 377, 1, 1, 20.00, 65),
(553, 377, 2, 1, 20.00, 65),
(554, 376, 1, 1, 15.00, 65),
(555, 376, 2, 1, 15.00, 65),
(556, 427, 1, 1, 30.00, 65),
(557, 427, 2, 1, 30.00, 65),
(558, 251, 1, 1, 130.00, 66),
(559, 251, 2, 1, 140.00, 66),
(560, 251, 3, 1, 150.00, 66),
(561, 200, 1, 1, 90.00, 66),
(562, 200, 2, 1, 110.00, 66),
(563, 200, 3, 1, 115.00, 66),
(564, 351, 1, 1, 40.00, 66),
(565, 351, 2, 1, 40.00, 66),
(566, 351, 3, 1, 40.00, 66),
(567, 275, 1, 1, 47.50, 66),
(568, 275, 2, 1, 52.50, 66),
(569, 275, 3, 1, 55.00, 66),
(570, 137, 1, 1, 25.00, 66),
(571, 137, 2, 1, 25.00, 66),
(572, 1, 1, 1, 100.00, 67),
(573, 1, 2, 1, 105.00, 67),
(574, 1, 3, 1, 105.00, 67),
(575, 106, 1, 1, 42.50, 67),
(576, 106, 2, 1, 42.50, 67),
(577, 6, 1, 1, 34.00, 67),
(578, 6, 2, 1, 34.00, 67),
(579, 104, 1, 1, 80.00, 67),
(580, 104, 2, 1, 85.00, 67),
(581, 104, 3, 1, 85.00, 67),
(582, 8, 1, 1, 22.50, 67),
(583, 8, 2, 1, 25.00, 67),
(584, 8, 3, 1, 25.00, 67),
(585, 112, 1, 1, 102.50, 67),
(586, 112, 2, 1, 107.50, 67),
(587, 9, 1, 1, 85.00, 67),
(588, 9, 2, 1, 85.00, 67),
(589, 4, 1, 1, 18.00, 68),
(590, 4, 2, 1, 18.00, 68),
(591, 4, 3, 1, 18.00, 68),
(592, 207, 1, 1, 12.00, 69),
(593, 207, 2, 1, 12.00, 69),
(594, 207, 3, 1, 12.00, 69),
(595, 510, 1, 1, 60.00, 70),
(596, 510, 2, 1, 65.00, 70),
(597, 510, 3, 1, 67.50, 70),
(598, 481, 1, 1, 5.00, 70),
(599, 481, 2, 1, 5.00, 70),
(600, 481, 3, 1, 5.00, 70),
(601, 463, 1, 1, 35.00, 70),
(602, 463, 2, 1, 37.50, 70),
(603, 463, 3, 1, 37.50, 70),
(604, 436, 1, 1, 10.00, 70),
(605, 436, 2, 1, 12.50, 70),
(606, 436, 3, 1, 12.50, 70),
(607, 377, 1, 1, 20.00, 70),
(608, 377, 2, 1, 20.00, 70),
(609, 376, 1, 1, 15.00, 70),
(610, 376, 2, 1, 15.00, 70),
(611, 427, 1, 1, 25.00, 70),
(612, 427, 2, 1, 25.00, 70),
(613, 427, 3, 1, 25.00, 70),
(614, 563, 1, 1, 8.00, 70),
(615, 563, 2, 1, 6.00, 70),
(616, 563, 3, 1, 6.00, 70),
(617, 574, 1, 1, 30.00, 70),
(618, 200, 1, 1, 100.00, 71),
(619, 200, 2, 1, 120.00, 71),
(620, 200, 3, 1, 130.00, 71),
(621, 275, 1, 1, 50.00, 71),
(622, 275, 2, 1, 50.00, 71),
(623, 275, 3, 1, 50.00, 71),
(624, 351, 1, 1, 40.00, 71),
(625, 351, 2, 1, 40.00, 71),
(626, 351, 3, 1, 40.00, 71);

-- --------------------------------------------------------

--
-- Table structure for table `Plans`
--

CREATE TABLE `Plans` (
  `id` bigint NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Duration` bigint NOT NULL,
  `DaysPerWeek` bigint NOT NULL,
  `UserID` bigint DEFAULT NULL,
  `isDefault` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Plans`
--

INSERT INTO `Plans` (`id`, `Title`, `Duration`, `DaysPerWeek`, `UserID`, `isDefault`, `created_at`, `updated_at`) VALUES
(41, 'General', 12, 1, 7, 1, '2025-04-20 22:09:37', '2025-04-20 22:10:05'),
(42, 'Plan', 12, 6, 4, 1, '2025-04-21 11:27:09', '2025-04-21 11:27:38'),
(43, '8-Week Strength Program', 8, 1, 9, 1, '2025-04-26 00:47:10', '2025-04-26 00:47:24'),
(44, '8-Week Strength Program', 8, 3, 10, 1, '2025-04-30 11:40:36', '2025-04-30 11:51:08');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` bigint NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Height` decimal(5,2) DEFAULT NULL,
  `Weight` decimal(5,2) DEFAULT NULL,
  `Gender` enum('Male','Female','Other') DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `Name`, `Email`, `Height`, `Weight`, `Gender`, `DateOfBirth`, `Password`, `created_at`, `updated_at`) VALUES
(4, 'Harry Cunningham', 'cunninghamharry09@gmail.com', 176.00, 77.00, 'Male', '2004-05-01', '$2y$10$HKsiOcWWIXiGPbhuTk0gleECgUsjak21gz0VKZFZCznI694ian9UG', '2025-04-19 23:33:21', '2025-04-19 23:33:21'),
(7, 'Max', 'maxjburns+1@gmail.com', 184.00, 94.00, 'Male', '2003-07-10', '$2y$10$H6nPwv/dzANeNVOkJnFWuO.lpH9tz.aSsgPODo2/IU8DM667MsUQG', '2025-04-20 22:03:16', '2025-04-20 22:03:16'),
(8, 'Olivia Pylak', 'tvolix@gmail.com', 162.00, 62.20, 'Female', '2004-02-18', '$2y$10$GdvUn7jJvG/UW9DnaOWyteghjCxvAioeg1r7fpTxbVeDbqTgXAi.u', '2025-04-23 12:46:47', '2025-04-23 12:46:47'),
(9, 'Test', 'billybob@gmail.com', 123.00, 123.00, 'Male', '0001-01-01', '$2y$10$yHjuUfP/5po3F2t1t0fSdOMRNRxxaRmKzFlmrhI75IQnnaJyc73LO', '2025-04-26 00:45:38', '2025-04-26 00:45:38'),
(10, 'Kacper', 'kmk.duda@gmail.com', 179.00, 77.00, 'Male', '1987-10-28', '$2y$10$r6hz.vIk82WGOgwahuHtw.fbBJ4M0Ym2tM7dp/tL6ZycAKeapZIgS', '2025-04-30 11:34:57', '2025-04-30 11:34:57');

-- --------------------------------------------------------

--
-- Table structure for table `WorkoutExercises`
--

CREATE TABLE `WorkoutExercises` (
  `id` bigint NOT NULL,
  `WorkoutId` bigint DEFAULT NULL,
  `ExerciseId` bigint DEFAULT NULL,
  `Sets` bigint NOT NULL,
  `Reps` bigint NOT NULL,
  `Weight` decimal(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `WorkoutExercises`
--

INSERT INTO `WorkoutExercises` (`id`, `WorkoutId`, `ExerciseId`, `Sets`, `Reps`, `Weight`) VALUES
(331, 65, 72, 2, 6, 135.00),
(332, 65, 102, 2, 6, 27.50),
(333, 65, 509, 1, 8, 100.00),
(334, 65, 379, 2, 7, 22.50),
(335, 65, 425, 2, 10, 21.75),
(336, 65, 107, 2, 10, 190.00),
(337, 66, 251, 3, 296, 140.00),
(338, 66, 200, 3, 296, 105.00),
(339, 66, 351, 3, 67340, 40.00),
(340, 66, 275, 3, 33670, 52.00),
(341, 66, 137, 2, 606, 25.00),
(342, 67, 1, 3, 251, 103.00),
(343, 67, 106, 2, 44, 43.00),
(344, 67, 6, 2, 43, 34.00),
(345, 67, 104, 3, 296, 83.00),
(346, 67, 8, 3, 40404, 24.00),
(347, 67, 112, 2, 44, 105.00),
(348, 67, 9, 2, 33, 85.00),
(349, 68, 510, 3, 295, 64.00),
(350, 68, 481, 3, 40404, 5.00),
(351, 68, 463, 3, 40370, 37.00),
(352, 68, 436, 3, 33670, 12.00),
(353, 68, 377, 2, 505, 20.00),
(354, 68, 376, 2, 44, 15.00),
(355, 68, 427, 3, 2937, 25.00),
(356, 68, 563, 3, 196, 7.00),
(357, 68, 574, 1, 20, 30.00),
(358, 69, 200, 3, 296, 117.00),
(359, 69, 275, 3, 33670, 50.00),
(360, 69, 351, 3, 67340, 40.00),
(361, 69, 202, 3, 8, 300.00),
(362, 69, 206, 3, 10, 45.00),
(363, 70, 104, 3, 8, 80.00),
(364, 70, 2, 3, 8, 80.00),
(365, 70, 103, 3, 8, 85.00),
(366, 70, 108, 3, 10, 80.00),
(367, 70, 112, 3, 8, 100.00),
(368, 70, 8, 3, 12, 22.50),
(369, 70, 9, 3, 8, 85.00),
(370, 71, 510, 3, 295, 63.00),
(371, 71, 481, 3, 40404, 5.00),
(372, 71, 527, 3, 40404, 37.00),
(373, 71, 436, 3, 33670, 10.00),
(374, 71, 377, 2, 54, 20.00),
(375, 71, 376, 2, 44, 15.00),
(376, 71, 427, 2, 43, 30.00),
(377, 71, 585, 3, 8, 8.00),
(378, 71, 574, 3, 20, 30.00),
(379, 72, 10, 3, 6, 123.00),
(380, 72, 9, 3, 45, 123.00),
(381, 72, 11, 2, 7, 131.00),
(382, 73, 4, 3, 33670, 18.00),
(383, 74, 207, 3, 50505, 12.00),
(384, 75, 425, 3, 10, 5.00);

-- --------------------------------------------------------

--
-- Table structure for table `WorkoutHistory`
--

CREATE TABLE `WorkoutHistory` (
  `id` bigint NOT NULL,
  `WorkoutId` bigint DEFAULT NULL,
  `Duration` time NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `WorkoutHistory`
--

INSERT INTO `WorkoutHistory` (`id`, `WorkoutId`, `Duration`, `Date`) VALUES
(45, 66, '00:06:41', '2025-04-21'),
(48, 65, '00:01:41', '2025-04-21'),
(53, 67, '00:01:00', '2025-04-22'),
(54, 68, '00:02:24', '2025-04-23'),
(55, 69, '00:59:49', '2025-04-24'),
(57, 70, '01:03:42', '2025-04-25'),
(65, 71, '00:58:10', '2025-04-26'),
(66, 66, '00:53:19', '2025-04-28'),
(67, 67, '01:06:45', '2025-04-29'),
(68, 73, '00:00:14', '2025-04-30'),
(69, 74, '00:01:26', '2025-04-30'),
(70, 68, '01:10:16', '2025-04-30'),
(71, 69, '00:36:06', '2025-05-01');

-- --------------------------------------------------------

--
-- Table structure for table `Workouts`
--

CREATE TABLE `Workouts` (
  `id` bigint NOT NULL,
  `PlanID` bigint DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `Completed` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Workouts`
--

INSERT INTO `Workouts` (`id`, `PlanID`, `Name`, `Completed`) VALUES
(65, 41, 'Day 1', 0),
(66, 42, 'Leg 1', 1),
(67, 42, 'Chest Back', 1),
(68, 42, 'Shoulders Arms', 1),
(69, 42, 'Legs 2', 1),
(70, 42, 'Back Chest', 0),
(71, 42, 'Shoulder Arms', 0),
(72, 43, 'Day 1', 0),
(73, 44, 'Day 1', 1),
(74, 44, 'Day 2', 1),
(75, 44, 'Day 3', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Exercises`
--
ALTER TABLE `Exercises`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ExerciseStartingWeight`
--
ALTER TABLE `ExerciseStartingWeight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_exercise` (`ExerciseId`),
  ADD KEY `fk_planId` (`planId`);

--
-- Indexes for table `Facts`
--
ALTER TABLE `Facts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Goals`
--
ALTER TABLE `Goals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PlanID` (`PlanID`),
  ADD KEY `Exercise1Id` (`Exercise1Id`),
  ADD KEY `Exercise2Id` (`Exercise2Id`),
  ADD KEY `Exercise3Id` (`Exercise3Id`);

--
-- Indexes for table `HistorySets`
--
ALTER TABLE `HistorySets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ExerciseId` (`ExerciseId`),
  ADD KEY `HistoryId` (`HistoryId`);

--
-- Indexes for table `Plans`
--
ALTER TABLE `Plans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `WorkoutExercises`
--
ALTER TABLE `WorkoutExercises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `WorkoutId` (`WorkoutId`),
  ADD KEY `ExerciseId` (`ExerciseId`);

--
-- Indexes for table `WorkoutHistory`
--
ALTER TABLE `WorkoutHistory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `WorkoutId` (`WorkoutId`);

--
-- Indexes for table `Workouts`
--
ALTER TABLE `Workouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PlanID` (`PlanID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Exercises`
--
ALTER TABLE `Exercises`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=616;

--
-- AUTO_INCREMENT for table `ExerciseStartingWeight`
--
ALTER TABLE `ExerciseStartingWeight`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT for table `Facts`
--
ALTER TABLE `Facts`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Goals`
--
ALTER TABLE `Goals`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `HistorySets`
--
ALTER TABLE `HistorySets`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=627;

--
-- AUTO_INCREMENT for table `Plans`
--
ALTER TABLE `Plans`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `WorkoutExercises`
--
ALTER TABLE `WorkoutExercises`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=385;

--
-- AUTO_INCREMENT for table `WorkoutHistory`
--
ALTER TABLE `WorkoutHistory`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `Workouts`
--
ALTER TABLE `Workouts`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ExerciseStartingWeight`
--
ALTER TABLE `ExerciseStartingWeight`
  ADD CONSTRAINT `fk_exercise` FOREIGN KEY (`ExerciseId`) REFERENCES `Exercises` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_planId` FOREIGN KEY (`planId`) REFERENCES `Plans` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Facts`
--
ALTER TABLE `Facts`
  ADD CONSTRAINT `Facts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Goals`
--
ALTER TABLE `Goals`
  ADD CONSTRAINT `Goals_ibfk_1` FOREIGN KEY (`PlanID`) REFERENCES `Plans` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Goals_ibfk_2` FOREIGN KEY (`Exercise1Id`) REFERENCES `Exercises` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `Goals_ibfk_3` FOREIGN KEY (`Exercise2Id`) REFERENCES `Exercises` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `Goals_ibfk_4` FOREIGN KEY (`Exercise3Id`) REFERENCES `Exercises` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `HistorySets`
--
ALTER TABLE `HistorySets`
  ADD CONSTRAINT `HistorySets_ibfk_1` FOREIGN KEY (`ExerciseId`) REFERENCES `Exercises` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `HistorySets_ibfk_2` FOREIGN KEY (`HistoryId`) REFERENCES `WorkoutHistory` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Plans`
--
ALTER TABLE `Plans`
  ADD CONSTRAINT `Plans_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `User` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `WorkoutExercises`
--
ALTER TABLE `WorkoutExercises`
  ADD CONSTRAINT `WorkoutExercises_ibfk_1` FOREIGN KEY (`WorkoutId`) REFERENCES `Workouts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `WorkoutExercises_ibfk_2` FOREIGN KEY (`ExerciseId`) REFERENCES `Exercises` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `WorkoutHistory`
--
ALTER TABLE `WorkoutHistory`
  ADD CONSTRAINT `WorkoutHistory_ibfk_1` FOREIGN KEY (`WorkoutId`) REFERENCES `Workouts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Workouts`
--
ALTER TABLE `Workouts`
  ADD CONSTRAINT `Workouts_ibfk_1` FOREIGN KEY (`PlanID`) REFERENCES `Plans` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
