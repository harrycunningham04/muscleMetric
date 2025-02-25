// data/Exercise.ts
export interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  setupDescription: string;
  repDescription: string;
  type: "compound" | "isolation";
}

export const exercises: Exercise[] = [
  //Chest 1 - 100
  //Back 101 - 199
  //Quads 200 - 250
  //Hamstrings 251 - 299
  //Glutes 300 - 349
  //Calves 350 - 374
  //Biceps 375 - 424
  //Triceps 425 - 474
  //Shoulder 475 - 549
  //Core 550 - 615

  {
    id: "1",
    name: "Bench Press",
    bodyPart: "chest",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie flat on your back on a bench with the barbell set above your chest. Place your hands slightly wider than shoulder-width apart on the bar.",
    repDescription:
      "Lower the barbell slowly to your chest while maintaining control. Press the bar back up to the starting position, ensuring your elbows are at a 45-degree angle to your torso throughout the movement.",
    type: "compound",
  },
  {
    id: "2",
    name: "Incline Bench Press",
    bodyPart: "chest",
    equipment: "Barbell, Incline Bench",
    setupDescription:
      "Lie on an incline bench with the barbell positioned above your chest. Grip the barbell slightly wider than shoulder-width.",
    repDescription:
      "Lower the barbell to the upper part of your chest and then press it back up to the starting position, keeping your elbows at a 45-degree angle.",
    type: "compound",
  },
  {
    id: "3",
    name: "Decline Bench Press",
    bodyPart: "chest",
    equipment: "Barbell, Decline Bench",
    setupDescription:
      "Lie on a decline bench with the barbell positioned above your chest. Grip the barbell slightly wider than shoulder-width.",
    repDescription:
      "Lower the barbell to the lower part of your chest, then press it back up to the starting position while maintaining control.",
    type: "compound",
  },
  {
    id: "4",
    name: "Dumbbell Bench Press",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie flat on your back on a bench and hold a dumbbell in each hand at shoulder level.",
    repDescription:
      "Press the dumbbells upward, extending your arms fully, then lower them back to the starting position.",
    type: "compound",
  },
  {
    id: "5",
    name: "Dumbbell Flys",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie flat on a bench with a dumbbell in each hand, arms extended above your chest.",
    repDescription:
      "Slowly lower the dumbbells outward, keeping a slight bend in your elbows. Bring the dumbbells back together, squeezing your chest.",
    type: "isolation",
  },
  {
    id: "6",
    name: "Incline Dumbbell Press",
    bodyPart: "chest",
    equipment: "Dumbbells, Incline Bench",
    setupDescription:
      "Lie on an incline bench and hold a dumbbell in each hand above your chest.",
    repDescription:
      "Lower the dumbbells to the sides of your chest, then press them back up to the starting position.",
    type: "compound",
  },
  {
    id: "7",
    name: "Chest Dips",
    bodyPart: "chest",
    equipment: "Dip Bars",
    setupDescription:
      "Grip the dip bars and lift yourself up, keeping your torso slightly forward.",
    repDescription:
      "Lower your body by bending your elbows until your upper arms are parallel to the ground, then press back up.",
    type: "compound",
  },
  {
    id: "8",
    name: "Cable Chest Fly",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Stand facing a cable machine with the pulleys set above your head. Hold the handles with both hands.",
    repDescription:
      "Bring your hands together in front of your chest, keeping a slight bend in your elbows, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "9",
    name: "Machine Chest Press",
    bodyPart: "chest",
    equipment: "Chest Press Machine",
    setupDescription:
      "Sit on the chest press machine, grip the handles, and adjust the seat so your arms are at a 90-degree angle.",
    repDescription:
      "Push the handles forward until your arms are fully extended, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "10",
    name: "Push-Ups",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed slightly wider than shoulder-width apart.",
    repDescription:
      "Lower your body toward the ground by bending your elbows, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "11",
    name: "Incline Cable Fly",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cables to the low position and lie on an incline bench with each hand holding a cable handle.",
    repDescription:
      "Bring the handles together over your chest, keeping a slight bend in your elbows, then return slowly to the starting position.",
    type: "isolation",
  },
  {
    id: "12",
    name: "Decline Cable Fly",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cables to the high position and lie on a decline bench with each hand holding a cable handle.",
    repDescription:
      "Bring the handles down and together in front of your chest, keeping a slight bend in your elbows, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "13",
    name: "Flat Chest Press Machine",
    bodyPart: "chest",
    equipment: "Chest Press Machine",
    setupDescription:
      "Sit on the machine and adjust the seat so that the handles align with your chest.",
    repDescription:
      "Push the handles forward to fully extend your arms, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "14",
    name: "Wide Push-Ups",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed wider than shoulder-width apart.",
    repDescription:
      "Lower your body to the ground, keeping your elbows flared out to the sides, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "15",
    name: "Archer Push-Ups",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a wide push-up position, but shift your weight toward one arm as you lower your body.",
    repDescription:
      "Lower your body as much as you can toward one arm, then push back up and repeat on the other arm.",
    type: "compound",
  },
  {
    id: "16",
    name: "Chest Press with Resistance Bands",
    bodyPart: "chest",
    equipment: "Resistance Bands",
    setupDescription:
      "Secure the resistance bands behind you and hold one end in each hand.",
    repDescription:
      "Push the bands forward until your arms are fully extended, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "17",
    name: "Single Arm Dumbbell Chest Press",
    bodyPart: "chest",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Lie on a bench with a dumbbell in one hand, positioned above your chest.",
    repDescription:
      "Press the dumbbell upward, then lower it back down while maintaining control of the movement.",
    type: "compound",
  },
  {
    id: "18",
    name: "Decline Dumbbell Press",
    bodyPart: "chest",
    equipment: "Dumbbells, Decline Bench",
    setupDescription:
      "Lie on a decline bench and hold a dumbbell in each hand at shoulder level.",
    repDescription:
      "Press the dumbbells upward until your arms are fully extended, then lower them back to the starting position.",
    type: "compound",
  },
  {
    id: "19",
    name: "Dumbbell Pullover",
    bodyPart: "chest",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Lie on a bench with a dumbbell in both hands extended above your chest.",
    repDescription:
      "Lower the dumbbell back over your head in an arc, then pull it back over your chest.",
    type: "compound",
  },
  {
    id: "20",
    name: "Flat Dumbbell Flys",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie flat on a bench with a dumbbell in each hand, arms extended above your chest.",
    repDescription:
      "Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.",
    type: "isolation",
  },
  {
    id: "21",
    name: "Close-Grip Bench Press",
    bodyPart: "chest",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie flat on a bench and grip the barbell with your hands positioned closer than shoulder-width apart.",
    repDescription:
      "Lower the barbell to your chest, keeping your elbows close to your body, then press it back up to the starting position.",
    type: "compound",
  },
  {
    id: "22",
    name: "Flat Barbell Press",
    bodyPart: "chest",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie flat on a bench with the barbell positioned above your chest.",
    repDescription:
      "Lower the barbell to your chest, keeping your elbows at a 45-degree angle, then press it back up.",
    type: "compound",
  },
  {
    id: "23",
    name: "Pec Deck Machine",
    bodyPart: "chest",
    equipment: "Pec Deck Machine",
    setupDescription:
      "Sit on the pec deck machine with your arms at a 90-degree angle and adjust the seat to ensure proper alignment.",
    repDescription:
      "Squeeze the handles together, focusing on contracting your chest muscles, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "24",
    name: "Cable Chest Press",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Stand facing away from the cable machine, gripping the handles with both hands.",
    repDescription:
      "Push the handles forward, keeping your elbows slightly bent, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "25",
    name: "Standing Chest Fly with Bands",
    bodyPart: "chest",
    equipment: "Resistance Bands",
    setupDescription:
      "Anchor the resistance bands behind you and hold the handles in each hand.",
    repDescription:
      "Bring the handles together in front of your chest, maintaining a slight bend in your elbows, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "26",
    name: "Floor Press",
    bodyPart: "chest",
    equipment: "Barbell, Dumbbells",
    setupDescription:
      "Lie on the floor with a barbell or dumbbells positioned above your chest.",
    repDescription:
      "Press the weight upward, fully extending your arms, then lower it back to the floor.",
    type: "compound",
  },
  {
    id: "27",
    name: "Explosive Push-Ups",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position, hands placed slightly wider than shoulder-width apart.",
    repDescription:
      "Lower your body, then explosively push up off the ground, allowing your hands to leave the floor.",
    type: "compound",
  },
  {
    id: "28",
    name: "Push-Up with Clap",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed slightly wider than shoulder-width apart.",
    repDescription:
      "Lower your body to the ground, then explosively push up and clap your hands before landing.",
    type: "compound",
  },
  {
    id: "29",
    name: "Dumbbell Squeeze Press",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie on a bench holding a dumbbell in each hand. Press the dumbbells together in front of your chest.",
    repDescription:
      "Press the dumbbells upward while maintaining the squeeze, then lower them back down.",
    type: "compound",
  },
  {
    id: "30",
    name: "Kettlebell Chest Press",
    bodyPart: "chest",
    equipment: "Kettlebells, Bench",
    setupDescription:
      "Lie on a bench holding a kettlebell in each hand, positioned above your chest.",
    repDescription:
      "Press the kettlebells upward until your arms are fully extended, then lower them back down.",
    type: "compound",
  },
  {
    id: "31",
    name: "Swiss Ball Push-Ups",
    bodyPart: "chest",
    equipment: "Swiss Ball, Bodyweight",
    setupDescription:
      "Place your hands on a Swiss ball and start in a plank position.",
    repDescription:
      "Lower your body to the ball, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "32",
    name: "Push-Up to T",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription: "Start in a plank position and perform a push-up.",
    repDescription:
      "At the top of the push-up, rotate your body into a side plank, reaching one hand toward the ceiling.",
    type: "compound",
  },
  {
    id: "33",
    name: "Single Arm Chest Press",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie on a bench with one dumbbell in each hand, or use one hand to hold the weight.",
    repDescription:
      "Press the dumbbell upward with one arm, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "34",
    name: "Resistance Band Chest Fly",
    bodyPart: "chest",
    equipment: "Resistance Bands",
    setupDescription:
      "Anchor the resistance bands behind you and hold the handles in each hand.",
    repDescription:
      "Bring the handles together in front of your chest, keeping a slight bend in your elbows, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "35",
    name: "Band Chest Press",
    bodyPart: "chest",
    equipment: "Resistance Bands",
    setupDescription:
      "Anchor the resistance bands behind you and hold one handle in each hand.",
    repDescription:
      "Press the bands forward, keeping your elbows slightly bent, then return to the starting position.",
    type: "compound",
  },
  {
    id: "36",
    name: "Incline Barbell Press",
    bodyPart: "chest",
    equipment: "Barbell, Incline Bench",
    setupDescription:
      "Lie on an incline bench with the barbell positioned above your chest.",
    repDescription:
      "Lower the barbell to your chest, then press it back up to the starting position.",
    type: "compound",
  },
  {
    id: "37",
    name: "Decline Barbell Press",
    bodyPart: "chest",
    equipment: "Barbell, Decline Bench",
    setupDescription:
      "Lie on a decline bench with the barbell positioned above your chest.",
    repDescription:
      "Lower the barbell to the lower part of your chest, then press it back up to the starting position.",
    type: "compound",
  },
  {
    id: "38",
    name: "Kettlebell Chest Fly",
    bodyPart: "chest",
    equipment: "Kettlebells, Bench",
    setupDescription:
      "Lie on a bench holding a kettlebell in each hand, arms extended above your chest.",
    repDescription:
      "Lower the kettlebells outward, keeping a slight bend in your elbows, then bring them back together.",
    type: "isolation",
  },
  {
    id: "39",
    name: "Medicine Ball Push-Ups",
    bodyPart: "chest",
    equipment: "Medicine Ball, Bodyweight",
    setupDescription:
      "Place one hand on a medicine ball and the other hand on the floor in a plank position.",
    repDescription:
      "Lower your chest to the ground, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "40",
    name: "Svend Press",
    bodyPart: "chest",
    equipment: "Plate",
    setupDescription:
      "Hold a weight plate between your hands in front of your chest, arms extended.",
    repDescription:
      "Press the plate outward, squeezing your chest, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "41",
    name: "Incline Dumbbell Press",
    bodyPart: "chest",
    equipment: "Dumbbells, Incline Bench",
    setupDescription:
      "Lie on an incline bench with a dumbbell in each hand, elbows bent at a 90-degree angle.",
    repDescription:
      "Press the dumbbells upward, fully extending your arms, then lower them back down to the starting position.",
    type: "compound",
  },
  {
    id: "42",
    name: "Decline Dumbbell Press",
    bodyPart: "chest",
    equipment: "Dumbbells, Decline Bench",
    setupDescription:
      "Lie on a decline bench with a dumbbell in each hand, elbows bent at a 90-degree angle.",
    repDescription:
      "Press the dumbbells upward, fully extending your arms, then lower them back down.",
    type: "compound",
  },
  {
    id: "43",
    name: "Machine Chest Press",
    bodyPart: "chest",
    equipment: "Chest Press Machine",
    setupDescription:
      "Sit on the chest press machine, adjusting the seat and handles so that they align with your chest.",
    repDescription:
      "Push the handles forward until your arms are fully extended, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "44",
    name: "Close-Grip Push-Up",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed closer than shoulder-width apart.",
    repDescription:
      "Lower your chest to the ground, keeping your elbows close to your body, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "45",
    name: "Standing Chest Press (Cable)",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Stand facing the cable machine with the handles at chest level.",
    repDescription:
      "Push the handles forward, keeping your elbows slightly bent, then return to the starting position.",
    type: "compound",
  },
  {
    id: "46",
    name: "Cable Cross-Over",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Stand facing the cable machine with the handles set high above your head.",
    repDescription:
      "Pull the handles downward and across your body, squeezing your chest at the bottom, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "47",
    name: "Dumbbell Chest Fly",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie on a bench with a dumbbell in each hand, arms extended above your chest.",
    repDescription:
      "Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.",
    type: "isolation",
  },
  {
    id: "48",
    name: "Dips (Chest Version)",
    bodyPart: "chest",
    equipment: "Dip Bars",
    setupDescription: "Grasp the dip bars and lift your body up.",
    repDescription:
      "Lower your body, leaning forward to target the chest, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "49",
    name: "Smith Machine Chest Press",
    bodyPart: "chest",
    equipment: "Smith Machine, Barbell",
    setupDescription:
      "Set up the Smith machine with a barbell above your chest while lying on a bench.",
    repDescription:
      "Press the barbell upward, fully extending your arms, then lower it back down.",
    type: "compound",
  },
  {
    id: "50",
    name: "Bodyweight Chest Fly (Suspension Trainer)",
    bodyPart: "chest",
    equipment: "Suspension Trainer",
    setupDescription:
      "Adjust the suspension trainer handles to chest height and grab both handles.",
    repDescription:
      "Lower your body, extending your arms out in front of you, then bring your hands together in a fly motion.",
    type: "isolation",
  },
  {
    id: "51",
    name: "Serratus Punch",
    bodyPart: "chest",
    equipment: "Dumbbells",
    setupDescription: "Hold a dumbbell in each hand at chest height.",
    repDescription:
      "Extend your arms straight out in front of you, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "52",
    name: "Incline Cable Chest Fly",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine at a low height and adjust the handles so they align with your chest.",
    repDescription:
      "Fly the cables upward, bringing your hands together, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "53",
    name: "Decline Chest Fly",
    bodyPart: "chest",
    equipment: "Dumbbells, Decline Bench",
    setupDescription:
      "Lie on a decline bench holding a dumbbell in each hand, arms extended above your chest.",
    repDescription:
      "Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.",
    type: "isolation",
  },
  {
    id: "54",
    name: "Incline Dumbbell Fly",
    bodyPart: "chest",
    equipment: "Dumbbells, Incline Bench",
    setupDescription:
      "Lie on an incline bench with a dumbbell in each hand, arms extended above your chest.",
    repDescription:
      "Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.",
    type: "isolation",
  },
  {
    id: "55",
    name: "Cable Pec Deck",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Sit on the cable machine and set the handles to chest height.",
    repDescription:
      "Pull the handles inward, squeezing your chest, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "56",
    name: "Landmine Chest Press",
    bodyPart: "chest",
    equipment: "Landmine Attachment, Barbell",
    setupDescription:
      "Stand facing the landmine with the barbell inserted into the attachment.",
    repDescription:
      "Push the barbell away from your chest, fully extending your arms, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "57",
    name: "Overhead Chest Press (Cable)",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to the lowest height and attach the handles.",
    repDescription:
      "Press the handles upward and slightly forward, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "58",
    name: "Medicine Ball Chest Pass",
    bodyPart: "chest",
    equipment: "Medicine Ball",
    setupDescription:
      "Stand with a medicine ball held in both hands at chest height.",
    repDescription:
      "Push the ball forward explosively, then return to the starting position.",
    type: "compound",
  },
  {
    id: "59",
    name: "Clap Push-Ups",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position, hands placed slightly wider than shoulder-width apart.",
    repDescription:
      "Lower your body, then explosively push up and clap your hands before landing.",
    type: "compound",
  },
  {
    id: "60",
    name: "Wide-Grip Push-Ups",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed wider than shoulder-width apart.",
    repDescription:
      "Lower your body to the ground, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "61",
    name: "Cable Chest Press (High)",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine handles to a high position, and grip the handles with palms facing downward.",
    repDescription:
      "Press the handles down and forward, focusing on squeezing your chest, then return to the starting position.",
    type: "compound",
  },
  {
    id: "62",
    name: "Chest Fly with Resistance Bands",
    bodyPart: "chest",
    equipment: "Resistance Bands",
    setupDescription:
      "Anchor the resistance bands in front of you at chest height and hold the handles in each hand.",
    repDescription:
      "Bring the handles together in front of your chest, keeping a slight bend in your elbows, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "63",
    name: "Incline Barbell Chest Fly",
    bodyPart: "chest",
    equipment: "Barbell, Incline Bench",
    setupDescription:
      "Lie on an incline bench with a barbell positioned above your chest.",
    repDescription:
      "Lower the barbell outward, maintaining a slight bend in your elbows, then bring it back together.",
    type: "isolation",
  },
  {
    id: "64",
    name: "Cable Low Chest Fly",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine handles to a low position, and grip the handles with your palms facing upward.",
    repDescription:
      "Fly the handles upward and forward, squeezing your chest, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "65",
    name: "Push-Up with Feet Elevated",
    bodyPart: "chest",
    equipment: "Bodyweight, Bench",
    setupDescription:
      "Place your feet on a bench and your hands on the floor in a plank position.",
    repDescription:
      "Lower your body, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "66",
    name: "Ring Push-Ups",
    bodyPart: "chest",
    equipment: "Gymnastic Rings",
    setupDescription:
      "Set up gymnastic rings and hold them with your palms facing inward in a plank position.",
    repDescription:
      "Lower your body until your chest nearly touches the ground, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "67",
    name: "Incline Chest Press with Dumbbells",
    bodyPart: "chest",
    equipment: "Dumbbells, Incline Bench",
    setupDescription: "Lie on an incline bench with a dumbbell in each hand.",
    repDescription:
      "Press the dumbbells upward, fully extending your arms, then lower them back down.",
    type: "compound",
  },
  {
    id: "68",
    name: "Floor Chest Fly",
    bodyPart: "chest",
    equipment: "Dumbbells, Bodyweight",
    setupDescription:
      "Lie on the floor holding a dumbbell in each hand, arms extended above your chest.",
    repDescription:
      "Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.",
    type: "isolation",
  },
  {
    id: "69",
    name: "Push-Up with One Arm",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your feet shoulder-width apart, and place one hand under your chest.",
    repDescription:
      "Lower your body with one arm, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "70",
    name: "Dumbbell Squeeze Press on Stability Ball",
    bodyPart: "chest",
    equipment: "Dumbbells, Stability Ball",
    setupDescription:
      "Lie on a stability ball with a dumbbell in each hand, pressing them together in front of your chest.",
    repDescription:
      "Press the dumbbells upward while maintaining the squeeze, then lower them back down.",
    type: "compound",
  },
  {
    id: "71",
    name: "Chest Press Machine (Seated)",
    bodyPart: "chest",
    equipment: "Chest Press Machine",
    setupDescription:
      "Sit on the chest press machine and set the handles at chest height.",
    repDescription:
      "Push the handles forward until your arms are fully extended, then return to the starting position.",
    type: "compound",
  },
  {
    id: "72",
    name: "Barbell Bench Press (Paused)",
    bodyPart: "chest",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie on a bench with a barbell above your chest, keeping your feet flat on the floor.",
    repDescription:
      "Lower the barbell to your chest and pause for a second before pressing it back up.",
    type: "compound",
  },
  {
    id: "73",
    name: "Hammer Strength Chest Press",
    bodyPart: "chest",
    equipment: "Hammer Strength Machine",
    setupDescription:
      "Sit on the Hammer Strength machine, adjusting the seat so that the handles align with your chest.",
    repDescription:
      "Push the handles forward, extending your arms fully, then return to the starting position.",
    type: "compound",
  },
  {
    id: "74",
    name: "Chest Press with Dumbbells (Single Arm)",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie on a bench with a dumbbell in one hand, positioned above your chest.",
    repDescription:
      "Press the dumbbell upward, fully extending your arm, then lower it back down.",
    type: "compound",
  },
  {
    id: "75",
    name: "Incline Dumbbell Chest Fly",
    bodyPart: "chest",
    equipment: "Dumbbells, Incline Bench",
    setupDescription:
      "Lie on an incline bench holding a dumbbell in each hand, arms extended above your chest.",
    repDescription:
      "Lower the dumbbells outward, keeping a slight bend in your elbows, then bring them back together.",
    type: "isolation",
  },
  {
    id: "76",
    name: "Push-Up with Hand Release",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed slightly wider than shoulder-width apart.",
    repDescription:
      "Lower your body, then lift your hands off the ground at the bottom of the push-up before pressing back up.",
    type: "compound",
  },
  {
    id: "77",
    name: "Dumbbell Pullover (Chest Focus)",
    bodyPart: "chest",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Lie on a bench with a dumbbell in both hands, extended above your chest.",
    repDescription:
      "Lower the dumbbell behind your head in a controlled manner, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "78",
    name: "Plate Press Out",
    bodyPart: "chest",
    equipment: "Plate",
    setupDescription:
      "Hold a weight plate with both hands in front of your chest.",
    repDescription:
      "Press the plate outward, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "79",
    name: "Clapping Push-Ups (Advanced)",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed slightly wider than shoulder-width apart.",
    repDescription:
      "Lower your body, then explosively push up and clap your hands before landing.",
    type: "compound",
  },
  {
    id: "80",
    name: "Box Push-Ups",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Place your feet on a box and your hands on the floor in a plank position.",
    repDescription:
      "Lower your chest to the ground, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "81",
    name: "Plyometric Push-Up",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your hands placed slightly wider than shoulder-width apart.",
    repDescription:
      "Lower your body and explosively push up so your hands leave the ground, then land softly and repeat.",
    type: "compound",
  },
  {
    id: "82",
    name: "Flat Barbell Chest Press",
    bodyPart: "chest",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie on a flat bench with a barbell above your chest, feet flat on the floor.",
    repDescription:
      "Lower the barbell slowly to your chest, then press it back up until your arms are fully extended.",
    type: "compound",
  },
  {
    id: "83",
    name: "Single-Arm Cable Chest Fly",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to a medium height and attach one handle to each side.",
    repDescription:
      "With one hand, pull the handle across your body, keeping your arm slightly bent, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "84",
    name: "Decline Barbell Bench Press",
    bodyPart: "chest",
    equipment: "Barbell, Decline Bench",
    setupDescription:
      "Lie on a decline bench with a barbell above your chest, feet secured.",
    repDescription:
      "Lower the barbell to your lower chest, then press it back up.",
    type: "compound",
  },
  {
    id: "85",
    name: "Bodyweight Chest Dip (Weighted)",
    bodyPart: "chest",
    equipment: "Dip Bars, Weight Belt",
    setupDescription:
      "Grasp the dip bars and lift your body, adding weight with a weight belt if necessary.",
    repDescription:
      "Lower your body with a slight lean forward to target the chest, then push back up.",
    type: "compound",
  },
  {
    id: "86",
    name: "Machine Pec Deck",
    bodyPart: "chest",
    equipment: "Pec Deck Machine",
    setupDescription:
      "Sit on the machine with your back flat against the pad and your forearms against the pads.",
    repDescription:
      "Bring your arms together in front of you, squeezing your chest, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "87",
    name: "Dumbbell Chest Press (Neutral Grip)",
    bodyPart: "chest",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie on a bench holding a dumbbell in each hand with your palms facing each other.",
    repDescription:
      "Press the dumbbells upward, fully extending your arms, then lower them back down.",
    type: "compound",
  },
  {
    id: "88",
    name: "Barbell Pullover (Chest Focused)",
    bodyPart: "chest",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie on a bench holding a barbell above your chest with both hands.",
    repDescription:
      "Lower the barbell behind your head, keeping your arms slightly bent, then return to the starting position.",
    type: "compound",
  },
  {
    id: "89",
    name: "T-Bar Chest Press",
    bodyPart: "chest",
    equipment: "T-Bar Machine",
    setupDescription:
      "Sit at the T-Bar machine with your chest against the pad and hands on the handles.",
    repDescription:
      "Press the handles forward until your arms are extended, then return to the starting position.",
    type: "compound",
  },
  {
    id: "90",
    name: "Push-Up with Band Resistance",
    bodyPart: "chest",
    equipment: "Resistance Bands, Bodyweight",
    setupDescription:
      "Place a resistance band across your upper back, anchoring the ends under your hands.",
    repDescription:
      "Perform a standard push-up while the band adds resistance to the movement.",
    type: "compound",
  },
  {
    id: "91",
    name: "Barbell Chest Press with Pause",
    bodyPart: "chest",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie on a flat bench with a barbell above your chest, feet flat on the floor.",
    repDescription:
      "Lower the barbell to your chest and pause for a brief moment before pressing it back up.",
    type: "compound",
  },
  {
    id: "92",
    name: "Incline Chest Press with Cable",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cables to a low position and hold a handle in each hand.",
    repDescription:
      "Press the handles upward and forward, then return to the starting position.",
    type: "compound",
  },
  {
    id: "93",
    name: "Chest Fly (With Resistance Bands)",
    bodyPart: "chest",
    equipment: "Resistance Bands",
    setupDescription:
      "Anchor the resistance bands in front of you at chest height and hold the handles.",
    repDescription:
      "Bring your hands together in front of your chest, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "94",
    name: "Cable Chest Press (Low Angle)",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to a low height and hold the handles with palms facing down.",
    repDescription:
      "Press the handles forward, extending your arms fully, then return to the starting position.",
    type: "compound",
  },
  {
    id: "95",
    name: "Rotating Chest Press",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to chest height and rotate the handles so your palms face each other.",
    repDescription:
      "Press the handles forward and rotate them slightly to engage your chest, then return to the starting position.",
    type: "compound",
  },
  {
    id: "96",
    name: "Standing Chest Fly (With Resistance Bands)",
    bodyPart: "chest",
    equipment: "Resistance Bands",
    setupDescription:
      "Anchor the resistance bands behind you and hold the handles with your arms extended.",
    repDescription:
      "Bring your arms together in front of you, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "97",
    name: "Isometric Chest Squeeze",
    bodyPart: "chest",
    equipment: "Bodyweight",
    setupDescription:
      "Place your hands together in front of your chest and squeeze them as hard as you can.",
    repDescription:
      "Hold the squeeze for as long as possible, then relax and repeat.",
    type: "isolation",
  },
  {
    id: "98",
    name: "Bodyweight Chest Dip (With Feet Elevated)",
    bodyPart: "chest",
    equipment: "Dip Bars, Bench",
    setupDescription:
      "Grasp the dip bars, elevate your feet on a bench, and lift your body.",
    repDescription:
      "Lower your body, then push back up while leaning slightly forward to emphasize your chest.",
    type: "compound",
  },
  {
    id: "99",
    name: "Pec Deck Machine (Reverse Grip)",
    bodyPart: "chest",
    equipment: "Pec Deck Machine",
    setupDescription:
      "Sit on the machine with the reverse grip, hands under the pads.",
    repDescription:
      "Bring your arms together while squeezing your chest, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "100",
    name: "Wide-Grip Cable Chest Press",
    bodyPart: "chest",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine handles to a medium height and hold the handles with a wide grip.",
    repDescription:
      "Press the handles forward until your arms are extended, then return to the starting position.",
    type: "compound",
  },
  {
    id: "101",
    name: "Deadlift",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping the barbell with an overhand grip.",
    repDescription:
      "Lift the barbell by pushing through your heels and standing up straight, keeping your back flat.",
    type: "compound",
  },
  {
    id: "102",
    name: "Pull-Up",
    bodyPart: "back",
    equipment: "Pull-Up Bar",
    setupDescription:
      "Hang from a pull-up bar with your palms facing away from you, hands shoulder-width apart.",
    repDescription:
      "Pull yourself upward until your chin is above the bar, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "103",
    name: "Bent-Over Row",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Bend at the hips and knees, gripping the barbell with a shoulder-width overhand grip.",
    repDescription:
      "Pull the barbell toward your lower ribs, squeezing your shoulder blades together, then lower it back down.",
    type: "compound",
  },
  {
    id: "104",
    name: "Lat Pulldown",
    bodyPart: "back",
    equipment: "Lat Pulldown Machine",
    setupDescription:
      "Sit at the lat pulldown machine with your hands gripping the bar wider than shoulder-width apart.",
    repDescription:
      "Pull the bar down to your chest, then slowly return it to the starting position.",
    type: "compound",
  },
  {
    id: "105",
    name: "T-Bar Row",
    bodyPart: "back",
    equipment: "T-Bar Row Machine",
    setupDescription:
      "Place your feet shoulder-width apart and grip the handles of the T-Bar row machine.",
    repDescription:
      "Pull the weight towards your chest, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "106",
    name: "Single-Arm Dumbbell Row",
    bodyPart: "back",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Place one knee and hand on a bench with your other foot on the ground. Hold a dumbbell in your free hand.",
    repDescription:
      "Pull the dumbbell towards your hip, keeping your elbow close to your body, then lower it back down.",
    type: "compound",
  },
  {
    id: "107",
    name: "Chest-Supported Row",
    bodyPart: "back",
    equipment: "Chest-Supported Row Machine",
    setupDescription:
      "Lie face down on the chest-supported row machine and grip the handles.",
    repDescription:
      "Pull the handles towards your body, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "108",
    name: "Barbell Shrug",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand tall holding a barbell in front of your thighs with an overhand grip.",
    repDescription:
      "Shrug your shoulders upwards, then lower them back down to the starting position.",
    type: "isolation",
  },
  {
    id: "109",
    name: "Seated Cable Row",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at the cable row machine, gripping the handle with both hands.",
    repDescription:
      "Pull the handle towards your torso, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "110",
    name: "Reverse Fly",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a slight bend at the hips, holding a dumbbell in each hand with palms facing each other.",
    repDescription:
      "Lift the dumbbells out to your sides, squeezing your shoulder blades together, then lower them back down.",
    type: "isolation",
  },
  {
    id: "111",
    name: "Face Pull",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to face height and attach a rope handle.",
    repDescription:
      "Pull the rope towards your face, keeping your elbows high and squeezing your shoulder blades together.",
    type: "isolation",
  },
  {
    id: "112",
    name: "Machine Row",
    bodyPart: "back",
    equipment: "Row Machine",
    setupDescription:
      "Sit on the machine with your chest against the pad and feet firmly placed.",
    repDescription:
      "Pull the handles towards your torso, squeezing your shoulder blades, then return to the starting position.",
    type: "compound",
  },
  {
    id: "113",
    name: "Kettlebell Swing",
    bodyPart: "back",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart and grip a kettlebell with both hands.",
    repDescription:
      "Swing the kettlebell between your legs, then thrust your hips forward to swing it to shoulder height.",
    type: "compound",
  },
  {
    id: "114",
    name: "Rack Pull",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with a barbell set just below knee height in a squat rack.",
    repDescription:
      "Lift the barbell by extending your hips and knees, then lower it back down.",
    type: "compound",
  },
  {
    id: "115",
    name: "Bent-Over Dumbbell Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a slight bend at your hips and knees, holding a dumbbell in each hand.",
    repDescription:
      "Row the dumbbells toward your torso, then lower them back down.",
    type: "compound",
  },
  {
    id: "116",
    name: "Good Morning",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell on your upper back, feet shoulder-width apart.",
    repDescription:
      "Bend at the hips, keeping your back straight, then return to standing.",
    type: "compound",
  },
  {
    id: "117",
    name: "Inverted Row",
    bodyPart: "back",
    equipment: "Bodyweight, Barbell",
    setupDescription:
      "Set a barbell in a squat rack at waist height, lie underneath it, and grip it with an overhand grip.",
    repDescription:
      "Pull your chest towards the bar, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "118",
    name: "Dumbbell Pullover",
    bodyPart: "back",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Lie on a bench holding a dumbbell above your chest with both hands.",
    repDescription:
      "Lower the dumbbell behind your head, keeping your arms slightly bent, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "119",
    name: "Renegade Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Get into a plank position holding a dumbbell in each hand.",
    repDescription:
      "Row one dumbbell towards your chest while stabilizing your body, then alternate arms.",
    type: "compound",
  },
  {
    id: "120",
    name: "Kroc Row",
    bodyPart: "back",
    equipment: "Dumbbell",
    setupDescription:
      "Stand with one dumbbell in hand and place the opposite knee and hand on a bench.",
    repDescription:
      "Row the dumbbell toward your torso, keeping your elbow close to your body, then lower it back down.",
    type: "compound",
  },
  {
    id: "121",
    name: "Reverse Grip Barbell Row",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping the barbell with an underhand (supine) grip.",
    repDescription:
      "Row the barbell to your torso, squeezing your shoulder blades together, then lower it back down.",
    type: "compound",
  },
  {
    id: "122",
    name: "Wide-Grip Lat Pulldown",
    bodyPart: "back",
    equipment: "Lat Pulldown Machine",
    setupDescription:
      "Sit at the lat pulldown machine, gripping the bar wider than shoulder-width apart.",
    repDescription:
      "Pull the bar down to your chest, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "123",
    name: "Single-Arm Cable Row",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Stand at a cable machine, attaching a single handle to the low pulley.",
    repDescription:
      "Pull the handle toward your torso, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "124",
    name: "Machine Pullover",
    bodyPart: "back",
    equipment: "Machine Pullover Machine",
    setupDescription:
      "Sit at the pullover machine, gripping the handles with your arms extended in front of you.",
    repDescription:
      "Pull the handles down and behind your back, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "125",
    name: "Barbell Row with Pause",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping the barbell with a pronated grip.",
    repDescription:
      "Row the barbell to your torso, hold the top position for 1-2 seconds, then lower it back down.",
    type: "compound",
  },
  {
    id: "126",
    name: "Neutral Grip Pulldown",
    bodyPart: "back",
    equipment: "Lat Pulldown Machine",
    setupDescription:
      "Sit at the lat pulldown machine with a neutral grip (palms facing each other).",
    repDescription:
      "Pull the bar down to your chest, then slowly return it to the starting position.",
    type: "compound",
  },
  {
    id: "127",
    name: "Dumbbell Row with Elbow Out",
    bodyPart: "back",
    equipment: "Dumbbell",
    setupDescription:
      "Place one hand and knee on a bench, holding a dumbbell with the other hand.",
    repDescription:
      "Row the dumbbell towards your rib cage, with your elbow flared out to your side, then lower it back down.",
    type: "compound",
  },
  {
    id: "128",
    name: "Inverted Row with Feet Elevated",
    bodyPart: "back",
    equipment: "Bodyweight, Barbell",
    setupDescription:
      "Set a barbell in a squat rack at waist height, place your feet on a bench or elevated surface, and grip the bar.",
    repDescription:
      "Pull your chest towards the bar, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "129",
    name: "Dumbbell Rack Pull",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Place two dumbbells on the ground in front of you, then bend over to grip them.",
    repDescription:
      "Lift the dumbbells by extending your hips and knees, then lower them back down.",
    type: "compound",
  },
  {
    id: "130",
    name: "Hyperextension",
    bodyPart: "back",
    equipment: "Roman Chair",
    setupDescription:
      "Position yourself on a Roman chair with your feet locked and torso extended.",
    repDescription:
      "Lower your torso toward the floor and then raise it back to the starting position, focusing on your lower back.",
    type: "isolation",
  },
  {
    id: "131",
    name: "Standing Cable Row",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Stand facing a cable machine with a straight bar or handle attached to the low pulley.",
    repDescription:
      "Pull the bar towards your torso, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "132",
    name: "Zottman Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand, palms facing each other.",
    repDescription:
      "Row the dumbbells towards your torso, then rotate your wrists so your palms face down and lower them back down.",
    type: "compound",
  },
  {
    id: "133",
    name: "Spider Curl Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Lie prone on a bench, gripping a dumbbell in each hand with your arms extended towards the floor.",
    repDescription:
      "Row the dumbbells towards your torso while keeping your arms parallel to the ground, then lower them back down.",
    type: "compound",
  },
  {
    id: "134",
    name: "Straight-Arm Pulldown",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Stand at a cable machine with a straight bar attachment, gripping the bar with your arms straight in front of you.",
    repDescription:
      "Pull the bar down in an arc until it reaches your thighs, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "135",
    name: "Decline Dumbbell Row",
    bodyPart: "back",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Set a bench at a slight decline and lie chest down, holding a dumbbell in each hand.",
    repDescription:
      "Row the dumbbells towards your torso, then lower them back down.",
    type: "compound",
  },
  {
    id: "136",
    name: "Kettlebell Renegade Row",
    bodyPart: "back",
    equipment: "Kettlebells",
    setupDescription:
      "Get into a plank position holding a kettlebell in each hand.",
    repDescription:
      "Row one kettlebell toward your torso while stabilizing your body, then alternate arms.",
    type: "compound",
  },
  {
    id: "137",
    name: "Machine Back Extension",
    bodyPart: "back",
    equipment: "Machine",
    setupDescription:
      "Sit on the back extension machine, securing your feet and adjusting the pad to rest on your lower back.",
    repDescription:
      "Extend your back to straighten your torso, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "138",
    name: "Bodyweight Rows (TRX)",
    bodyPart: "back",
    equipment: "TRX",
    setupDescription:
      "Set the TRX straps to a suitable length and grip them with both hands.",
    repDescription:
      "Pull your chest towards your hands, keeping your body straight, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "139",
    name: "Dumbbell Rear Delt Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a slight bend at the hips, holding a dumbbell in each hand with palms facing each other.",
    repDescription:
      "Row the dumbbells towards your rear deltoids, keeping your elbows high and wide.",
    type: "compound",
  },
  {
    id: "140",
    name: "Wide-Grip Barbell Row",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping the barbell with a wide overhand grip.",
    repDescription:
      "Row the barbell towards your torso, keeping your elbows out to the sides, then lower it back down.",
    type: "compound",
  },
  {
    id: "141",
    name: "Standing Barbell Row",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping the barbell with a pronated grip, arms extended in front of you.",
    repDescription:
      "Row the barbell towards your torso, squeezing your shoulder blades together, then lower it back down.",
    type: "compound",
  },
  {
    id: "142",
    name: "Cable Face Pull",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to face height with a rope attachment, gripping the rope with both hands.",
    repDescription:
      "Pull the rope towards your face, keeping your elbows high and wide, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "143",
    name: "Chin-Up",
    bodyPart: "back",
    equipment: "Pull-Up Bar",
    setupDescription:
      "Hang from a pull-up bar with your palms facing towards you (supine grip).",
    repDescription:
      "Pull yourself up until your chin is above the bar, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "144",
    name: "Dumbbell Deadlift",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
    repDescription:
      "Bend at the hips and knees to lower the dumbbells towards the ground, then return to standing.",
    type: "compound",
  },
  {
    id: "145",
    name: "Kettlebell Deadlift",
    bodyPart: "back",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping a kettlebell with both hands.",
    repDescription:
      "Hinge at your hips to lower the kettlebell towards the ground, then return to standing.",
    type: "compound",
  },
  {
    id: "146",
    name: "Straight-Arm Dumbbell Pullover",
    bodyPart: "back",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Lie on a bench holding a dumbbell above your chest with both hands.",
    repDescription:
      "Lower the dumbbell behind your head with straight arms, then return to the starting position.",
    type: "compound",
  },
  {
    id: "147",
    name: "Dumbbell Rack Pull (Shrug)",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Place two dumbbells on the ground in front of you, then bend over to grip them.",
    repDescription:
      "Lift the dumbbells by shrugging your shoulders upwards, then lower them back down.",
    type: "isolation",
  },
  {
    id: "148",
    name: "Barbell Pull-Through",
    bodyPart: "back",
    equipment: "Cable Machine, Barbell",
    setupDescription:
      "Attach a rope to the low pulley of a cable machine and stand facing away from the machine with a slight bend in your knees.",
    repDescription:
      "Grip the rope with both hands and pull it between your legs, squeezing your glutes and back as you extend your hips.",
    type: "compound",
  },
  {
    id: "149",
    name: "Reverse Hyperextension",
    bodyPart: "back",
    equipment: "Hyperextension Machine",
    setupDescription:
      "Position yourself face down on a reverse hyperextension machine, with your legs hanging off the edge.",
    repDescription:
      "Raise your legs towards the ceiling while keeping your back straight, then lower them back down.",
    type: "isolation",
  },
  {
    id: "150",
    name: "Seated Reverse Fly",
    bodyPart: "back",
    equipment: "Machine",
    setupDescription:
      "Sit on the reverse fly machine with your chest against the pad, grasping the handles in front of you.",
    repDescription:
      "Pull the handles outward and squeeze your shoulder blades together, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "151",
    name: "Wide-Grip Cable Row",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription: "Sit at a cable row machine with a wide grip attachment.",
    repDescription:
      "Pull the bar towards your chest, keeping your elbows out wide, then slowly return to the starting position.",
    type: "compound",
  },
  {
    id: "152",
    name: "Barbell Good Morning",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell across your upper back and stand with your feet shoulder-width apart.",
    repDescription:
      "Hinge at the hips and lower your torso towards the ground while maintaining a flat back, then return to standing.",
    type: "compound",
  },
  {
    id: "153",
    name: "Ring Row",
    bodyPart: "back",
    equipment: "Gymnastic Rings",
    setupDescription:
      "Set gymnastic rings at waist height and grip them with both hands.",
    repDescription:
      "Pull your chest towards the rings, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "154",
    name: "Cable Lat Pulldown (Underhand Grip)",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable lat pulldown machine, gripping the bar with an underhand (supine) grip.",
    repDescription:
      "Pull the bar down to your chest, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "155",
    name: "Dumbbell Reverse Fly",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Bend at the hips, holding a dumbbell in each hand with palms facing each other.",
    repDescription:
      "Lift the dumbbells out to your sides, squeezing your shoulder blades together, then lower them back down.",
    type: "isolation",
  },
  {
    id: "156",
    name: "Prone Row (Machine)",
    bodyPart: "back",
    equipment: "Machine",
    setupDescription:
      "Lie face down on a prone row machine with your arms extended in front of you.",
    repDescription:
      "Row the handles towards your torso, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "157",
    name: "Kettlebell Snatch",
    bodyPart: "back",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping a kettlebell with both hands.",
    repDescription:
      "Swing the kettlebell between your legs, then explosively extend your hips to bring the kettlebell overhead.",
    type: "compound",
  },
  {
    id: "158",
    name: "Barbell Row with Resistance Bands",
    bodyPart: "back",
    equipment: "Barbell, Resistance Bands",
    setupDescription:
      "Place resistance bands under the barbell and grip it with an overhand grip.",
    repDescription:
      "Row the barbell toward your torso, squeezing your shoulder blades together, then lower it back down.",
    type: "compound",
  },
  {
    id: "159",
    name: "Lat Pulldown (Wide Grip)",
    bodyPart: "back",
    equipment: "Lat Pulldown Machine",
    setupDescription:
      "Sit at a lat pulldown machine, gripping the bar wider than shoulder-width apart.",
    repDescription:
      "Pull the bar down to your chest, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "160",
    name: "Kettlebell Row",
    bodyPart: "back",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with a slight bend at your hips and knees, holding a kettlebell in each hand.",
    repDescription:
      "Row the kettlebells towards your torso, then lower them back down.",
    type: "compound",
  },
  {
    id: "161",
    name: "T-Bar Row",
    bodyPart: "back",
    equipment: "T-Bar Machine",
    setupDescription:
      "Stand with your chest against the pad on the T-Bar row machine, gripping the handles.",
    repDescription:
      "Row the handles towards your torso, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "162",
    name: "Landmine Row",
    bodyPart: "back",
    equipment: "Landmine Attachment",
    setupDescription:
      "Set a barbell in a landmine attachment and grip the barbell with both hands.",
    repDescription:
      "Row the barbell towards your torso, squeezing your shoulder blades together, then lower it back down.",
    type: "compound",
  },
  {
    id: "163",
    name: "Single-Arm Dumbbell Row",
    bodyPart: "back",
    equipment: "Dumbbell",
    setupDescription:
      "Place one knee and hand on a bench for support, holding a dumbbell in the opposite hand.",
    repDescription:
      "Row the dumbbell towards your torso, squeezing your shoulder blade, then lower it back down.",
    type: "compound",
  },
  {
    id: "164",
    name: "Bent-Over Barbell Row",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a barbell with an overhand grip.",
    repDescription:
      "Bend at your hips and row the barbell towards your torso, then lower it back down.",
    type: "compound",
  },
  {
    id: "165",
    name: "Chest-Supported Row",
    bodyPart: "back",
    equipment: "Machine or Dumbbells",
    setupDescription:
      "Lie face down on a chest-supported row machine, gripping the handles or dumbbells.",
    repDescription:
      "Row the handles or dumbbells towards your torso, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "166",
    name: "Smith Machine Row",
    bodyPart: "back",
    equipment: "Smith Machine",
    setupDescription:
      "Stand with a barbell on a Smith machine, gripping it with an overhand grip.",
    repDescription:
      "Row the barbell towards your torso, keeping your back straight, then lower it back down.",
    type: "compound",
  },
  {
    id: "167",
    name: "Inverted Row",
    bodyPart: "back",
    equipment: "Smith Machine or Bar",
    setupDescription:
      "Set a bar on a Smith machine or a squat rack at waist height and lie under it, gripping the bar.",
    repDescription:
      "Pull yourself up towards the bar, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "168",
    name: "Seated Cable Row (Wide Grip)",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable row machine, gripping the wide attachment.",
    repDescription:
      "Pull the bar towards your torso, keeping your elbows out wide, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "169",
    name: "Pull-Up (Wide Grip)",
    bodyPart: "back",
    equipment: "Pull-Up Bar",
    setupDescription:
      "Grip a pull-up bar with your hands wider than shoulder-width apart.",
    repDescription:
      "Pull yourself up until your chin is above the bar, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "170",
    name: "Suspended Row",
    bodyPart: "back",
    equipment: "Suspension Trainer",
    setupDescription:
      "Set up suspension trainers, gripping the handles with your arms fully extended.",
    repDescription:
      "Pull your chest up towards the handles, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "171",
    name: "Rack Pull",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Set a barbell on a rack just below knee height, standing with your feet shoulder-width apart.",
    repDescription:
      "Lift the barbell by extending your hips and knees, then lower it back to the rack.",
    type: "compound",
  },
  {
    id: "172",
    name: "Dumbbell Shrug",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription: "Stand holding a dumbbell in each hand by your sides.",
    repDescription:
      "Shrug your shoulders as high as possible, then lower them back down.",
    type: "isolation",
  },
  {
    id: "173",
    name: "Barbell Shrug",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand holding a barbell with an overhand grip, arms extended in front of you.",
    repDescription:
      "Shrug your shoulders as high as possible, then lower the barbell back down.",
    type: "isolation",
  },
  {
    id: "174",
    name: "Seated Dumbbell Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Sit on a bench holding a dumbbell in each hand, elbows bent at 90 degrees.",
    repDescription:
      "Row the dumbbells towards your torso, then lower them back down.",
    type: "compound",
  },
  {
    id: "175",
    name: "Machine Lat Pulldown",
    bodyPart: "back",
    equipment: "Lat Pulldown Machine",
    setupDescription:
      "Sit at a lat pulldown machine with a wide grip attachment.",
    repDescription:
      "Pull the bar down to your chest, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "176",
    name: "Dumbbell Deadlift",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with feet shoulder-width apart, holding a dumbbell in each hand.",
    repDescription:
      "Bend at the hips and knees to lower the dumbbells towards the ground, keeping your back straight, then return to standing.",
    type: "compound",
  },
  {
    id: "177",
    name: "Dumbbell Pullover",
    bodyPart: "back",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Lie on a bench with a dumbbell held with both hands above your chest.",
    repDescription:
      "Lower the dumbbell behind your head with straight arms, then bring it back to the starting position.",
    type: "compound",
  },
  {
    id: "178",
    name: "One-Arm Cable Row",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable machine with a single handle attachment and grip it with one hand.",
    repDescription:
      "Row the handle towards your torso, keeping your elbow close to your body, then return to the starting position.",
    type: "compound",
  },
  {
    id: "179",
    name: "Wide-Grip Barbell Row",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, gripping a barbell with a wide overhand grip.",
    repDescription:
      "Row the barbell towards your chest, then lower it back down.",
    type: "compound",
  },
  {
    id: "180",
    name: "Seated Reverse Cable Fly",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable machine with two handles, gripping them with both hands.",
    repDescription:
      "Pull the handles back, squeezing your shoulder blades together, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "181",
    name: "Standing Dumbbell Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
    repDescription:
      "Row the dumbbells towards your torso, keeping your elbows close to your body, then lower them back down.",
    type: "compound",
  },
  {
    id: "182",
    name: "Lat Pulldown (Neutral Grip)",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable lat pulldown machine with a neutral grip attachment.",
    repDescription:
      "Pull the bar down towards your chest, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "183",
    name: "Straight Bar Cable Row",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable row machine with a straight bar attachment.",
    repDescription:
      "Row the bar towards your torso, squeezing your shoulder blades together, then return to the starting position.",
    type: "compound",
  },
  {
    id: "184",
    name: "Resistance Band Lat Pulldown",
    bodyPart: "back",
    equipment: "Resistance Bands",
    setupDescription:
      "Anchor a resistance band overhead and grip it with both hands.",
    repDescription:
      "Pull the band down towards your chest, then return to the starting position.",
    type: "compound",
  },
  {
    id: "185",
    name: "Dumbbell Bent-Over Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
    repDescription:
      "Bend at the hips and row the dumbbells towards your torso, then lower them back down.",
    type: "compound",
  },
  {
    id: "186",
    name: "Cable Lat Pulldown (Close Grip)",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable lat pulldown machine with a close grip attachment.",
    repDescription:
      "Pull the bar down to your chest, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "187",
    name: "Dumbbell Renegade Row",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription:
      "Start in a plank position, holding a dumbbell in each hand.",
    repDescription:
      "Row one dumbbell towards your torso while stabilizing with the other arm, then alternate sides.",
    type: "compound",
  },
  {
    id: "188",
    name: "Single-Leg Deadlift",
    bodyPart: "back",
    equipment: "Dumbbell",
    setupDescription: "Stand on one leg, holding a dumbbell in each hand.",
    repDescription:
      "Hinge at the hips to lower the dumbbells towards the ground while keeping your back straight, then return to standing.",
    type: "compound",
  },
  {
    id: "189",
    name: "Dumbbell Shrug",
    bodyPart: "back",
    equipment: "Dumbbells",
    setupDescription: "Stand holding a dumbbell in each hand by your sides.",
    repDescription:
      "Shrug your shoulders as high as possible, then lower them back down.",
    type: "isolation",
  },
  {
    id: "190",
    name: "Barbell Rack Pull",
    bodyPart: "back",
    equipment: "Barbell",
    setupDescription: "Set the barbell on a rack just below knee height.",
    repDescription:
      "Lift the barbell by extending your hips and knees, then lower it back down to the rack.",
    type: "compound",
  },
  {
    id: "191",
    name: "Reverse Grip Pulldown",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a cable machine with an underhand grip on the bar.",
    repDescription:
      "Pull the bar down towards your chest, then return to the starting position.",
    type: "compound",
  },
  {
    id: "192",
    name: "Pull-Up (Chin-Up Grip)",
    bodyPart: "back",
    equipment: "Pull-Up Bar",
    setupDescription:
      "Grip a pull-up bar with your palms facing towards you (underhand grip).",
    repDescription:
      "Pull yourself up until your chin is above the bar, then lower yourself back down.",
    type: "compound",
  },
  {
    id: "193",
    name: "Cable Face Pull",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable at face height and grip the rope attachment with both hands.",
    repDescription:
      "Pull the rope towards your face, flaring your elbows out and squeezing your shoulder blades together.",
    type: "isolation",
  },
  {
    id: "194",
    name: "Kettlebell Row",
    bodyPart: "back",
    equipment: "Kettlebell",
    setupDescription:
      "Place one knee and hand on a bench for support, holding a kettlebell in the opposite hand.",
    repDescription:
      "Row the kettlebell towards your torso, squeezing your shoulder blade, then lower it back down.",
    type: "compound",
  },
  {
    id: "195",
    name: "Seated Lat Pulldown",
    bodyPart: "back",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a lat pulldown machine with a wide grip attachment.",
    repDescription:
      "Pull the bar down to your chest, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "196",
    name: "Machine Reverse Fly",
    bodyPart: "back",
    equipment: "Reverse Fly Machine",
    setupDescription: "Sit on the reverse fly machine, gripping the handles.",
    repDescription:
      "Open your arms to the sides, squeezing your shoulder blades together, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "197",
    name: "Reverse Hyperextension",
    bodyPart: "back",
    equipment: "Reverse Hyper Machine",
    setupDescription:
      "Lie face down on the reverse hyperextension machine, with your legs hanging off.",
    repDescription:
      "Lift your legs towards the ceiling while keeping them straight, then lower them back down.",
    type: "isolation",
  },
  {
    id: "198",
    name: "Dumbbell Rows (Chest Supported)",
    bodyPart: "back",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie face down on an inclined bench, holding a dumbbell in each hand.",
    repDescription:
      "Row the dumbbells towards your torso, squeezing your shoulder blades together, then lower them back down.",
    type: "compound",
  },
  {
    id: "199",
    name: "One-Arm Dumbbell Pullover",
    bodyPart: "back",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Lie on a bench with one dumbbell held above your chest with both hands.",
    repDescription:
      "Lower the dumbbell behind your head with one arm, then return it to the starting position.",
    type: "compound",
  },
  {
    id: "200",
    name: "Barbell Back Squat",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart and the barbell resting on your upper traps.",
    repDescription:
      "Lower your body by bending your knees and hips, keeping your chest up, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "201",
    name: "Front Squat",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding the barbell in front of your shoulders with your elbows high.",
    repDescription:
      "Lower your body by bending your knees and hips, keeping your chest up, then return to standing.",
    type: "compound",
  },
  {
    id: "202",
    name: "Leg Press",
    bodyPart: "quads",
    equipment: "Leg Press Machine",
    setupDescription:
      "Sit on the leg press machine with your feet shoulder-width apart on the platform.",
    repDescription:
      "Push the platform away by extending your legs, then lower the weight back down by bending your knees.",
    type: "compound",
  },
  {
    id: "203",
    name: "Bulgarian Split Squat",
    bodyPart: "quads",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Stand a few feet away from a bench, placing one foot on it behind you.",
    repDescription:
      "Lower your body by bending your front knee, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "204",
    name: "Walking Lunges",
    bodyPart: "quads",
    equipment: "Dumbbells",
    setupDescription: "Stand tall with a dumbbell in each hand by your sides.",
    repDescription:
      "Step forward with one leg, lowering your hips to drop your back knee toward the floor. Push off your front leg and bring the back leg forward to repeat.",
    type: "compound",
  },
  {
    id: "205",
    name: "Hack Squat",
    bodyPart: "quads",
    equipment: "Hack Squat Machine",
    setupDescription:
      "Sit on the hack squat machine with your feet shoulder-width apart on the platform.",
    repDescription:
      "Lower your body by bending your knees, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "206",
    name: "Leg Extension",
    bodyPart: "quads",
    equipment: "Leg Extension Machine",
    setupDescription:
      "Sit on the leg extension machine with your feet under the pad and the weight set at an appropriate level.",
    repDescription:
      "Extend your legs to a straight position, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "207",
    name: "Goblet Squat",
    bodyPart: "quads",
    equipment: "Dumbbell or Kettlebell",
    setupDescription:
      "Hold a dumbbell or kettlebell close to your chest with both hands.",
    repDescription:
      "Squat down by bending your knees and hips, keeping your chest up, then press back up to standing.",
    type: "compound",
  },
  {
    id: "208",
    name: "Sissy Squat",
    bodyPart: "quads",
    equipment: "Bodyweight or Sissy Squat Machine",
    setupDescription:
      "Stand with your feet shoulder-width apart and your heels raised, holding onto a support for balance.",
    repDescription:
      "Lower your body by bending your knees and leaning back, then return to the starting position.",
    type: "compound",
  },
  {
    id: "209",
    name: "Smith Machine Squat",
    bodyPart: "quads",
    equipment: "Smith Machine",
    setupDescription:
      "Set up a Smith machine with the barbell at shoulder height and your feet shoulder-width apart.",
    repDescription:
      "Lower your body by bending your knees and hips, then return to the starting position.",
    type: "compound",
  },
  {
    id: "210",
    name: "Step-Up",
    bodyPart: "quads",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Stand in front of a bench or step with a dumbbell in each hand.",
    repDescription:
      "Step up onto the bench with one foot, then step down with the same leg and repeat with the other leg.",
    type: "compound",
  },
  {
    id: "211",
    name: "Box Squat",
    bodyPart: "quads",
    equipment: "Barbell, Box",
    setupDescription:
      "Stand with your feet shoulder-width apart and a barbell resting on your upper traps, in front of a box.",
    repDescription:
      "Sit back onto the box by bending your knees and hips, then drive through your heels to return to standing.",
    type: "compound",
  },
  {
    id: "212",
    name: "Pistol Squat",
    bodyPart: "quads",
    equipment: "Bodyweight",
    setupDescription:
      "Stand on one leg with the other leg extended in front of you.",
    repDescription:
      "Lower yourself into a squat on one leg while keeping the other leg extended, then return to standing.",
    type: "compound",
  },
  {
    id: "213",
    name: "Barbell Front Squat (High Bar)",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Stand with the barbell resting on your front shoulders, elbows high, and your feet shoulder-width apart.",
    repDescription:
      "Lower your body by bending your knees and hips, keeping your chest up, then return to standing.",
    type: "compound",
  },
  {
    id: "214",
    name: "Kettlebell Squat",
    bodyPart: "quads",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a kettlebell with both hands at chest height.",
    repDescription:
      "Squat down by bending your knees and hips, keeping your chest up, then return to standing.",
    type: "compound",
  },
  {
    id: "215",
    name: "Smith Machine Front Squat",
    bodyPart: "quads",
    equipment: "Smith Machine",
    setupDescription:
      "Set up a Smith machine with the barbell at shoulder height in front of you, elbows high.",
    repDescription:
      "Lower your body by bending your knees and hips, then return to standing.",
    type: "compound",
  },
  {
    id: "216",
    name: "Barbell Bulgarian Split Squat",
    bodyPart: "quads",
    equipment: "Barbell, Bench",
    setupDescription:
      "Place one foot behind you on a bench while holding a barbell across your shoulders.",
    repDescription:
      "Lower your body by bending your front knee, then push back up to the starting position.",
    type: "compound",
  },
  {
    id: "217",
    name: "Dumbbell Step-Up",
    bodyPart: "quads",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Stand in front of a bench, holding a dumbbell in each hand.",
    repDescription:
      "Step up onto the bench with one foot, then step back down and repeat with the other foot.",
    type: "compound",
  },
  {
    id: "218",
    name: "Bodyweight Squat",
    bodyPart: "quads",
    equipment: "Bodyweight",
    setupDescription:
      "Stand with your feet shoulder-width apart and your arms extended in front of you.",
    repDescription:
      "Lower your body by bending your knees and hips, keeping your chest up, then return to standing.",
    type: "compound",
  },
  {
    id: "219",
    name: "Overhead Squat",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Hold a barbell overhead with your arms fully extended and your feet shoulder-width apart.",
    repDescription:
      "Lower your body into a squat while keeping the barbell overhead, then return to standing.",
    type: "compound",
  },
  {
    id: "220",
    name: "Squat Jump",
    bodyPart: "quads",
    equipment: "Bodyweight",
    setupDescription:
      "Stand with your feet shoulder-width apart and your arms at your sides.",
    repDescription:
      "Squat down and explode up into a jump, landing softly and immediately transitioning into the next squat.",
    type: "compound",
  },
  {
    id: "221",
    name: "Barbell Hack Squat",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Stand with the barbell behind your legs, bend down, and grasp the barbell.",
    repDescription:
      "Lift the barbell by extending your hips and knees, then slowly lower it back down.",
    type: "compound",
  },
  {
    id: "222",
    name: "Dumbbell Bulgarian Split Squat",
    bodyPart: "quads",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Place one foot behind you on a bench while holding a dumbbell in each hand.",
    repDescription:
      "Lower your body by bending your front knee, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "223",
    name: "Lunge with Twist",
    bodyPart: "quads",
    equipment: "Bodyweight",
    setupDescription:
      "Step forward into a lunge position with your arms extended in front of you.",
    repDescription:
      "Twist your torso towards the leg that is in front while keeping your arms extended, then return to standing.",
    type: "compound",
  },
  {
    id: "224",
    name: "Iso-Lateral Leg Press",
    bodyPart: "quads",
    equipment: "Leg Press Machine",
    setupDescription:
      "Sit on the leg press machine and position your feet shoulder-width apart on the platform.",
    repDescription:
      "Push the platform up with both legs, then lower it back down in a controlled manner.",
    type: "compound",
  },
  {
    id: "225",
    name: "Weighted Step-Up",
    bodyPart: "quads",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Stand in front of a bench, holding a dumbbell in each hand.",
    repDescription:
      "Step up onto the bench with one foot, hold the position briefly, then step back down and repeat with the other leg.",
    type: "compound",
  },
  {
    id: "226",
    name: "Dumbbell Goblet Squat",
    bodyPart: "quads",
    equipment: "Dumbbell",
    setupDescription:
      "Hold a dumbbell with both hands close to your chest and stand with your feet shoulder-width apart.",
    repDescription:
      "Squat down by bending your knees and hips, keeping your chest up, then press back up to standing.",
    type: "compound",
  },
  {
    id: "227",
    name: "Zercher Squat",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Hold the barbell in the crooks of your elbows, keeping your elbows up and chest tall.",
    repDescription:
      "Squat down by bending your knees and hips, then return to standing.",
    type: "compound",
  },
  {
    id: "228",
    name: "Trap Bar Deadlift",
    bodyPart: "quads",
    equipment: "Trap Bar",
    setupDescription: "Step inside a trap bar and grip the handles.",
    repDescription:
      "Push through your heels and extend your hips and knees to lift the bar, then lower it back to the ground.",
    type: "compound",
  },
  {
    id: "229",
    name: "Dumbbell Lunge",
    bodyPart: "quads",
    equipment: "Dumbbells",
    setupDescription: "Stand tall holding a dumbbell in each hand.",
    repDescription:
      "Step forward with one leg and lower your body into a lunge, then push back to the starting position and repeat with the other leg.",
    type: "compound",
  },
  {
    id: "230",
    name: "Single-Leg Leg Press",
    bodyPart: "quads",
    equipment: "Leg Press Machine",
    setupDescription:
      "Sit on the leg press machine and place one foot on the platform.",
    repDescription:
      "Press the weight up with one leg, then slowly lower it back down.",
    type: "compound",
  },
  {
    id: "231",
    name: "Kettlebell Goblet Squat",
    bodyPart: "quads",
    equipment: "Kettlebell",
    setupDescription:
      "Hold a kettlebell close to your chest with both hands and stand with your feet shoulder-width apart.",
    repDescription:
      "Squat down by bending your knees and hips, keeping your chest up, then return to standing.",
    type: "compound",
  },
  {
    id: "232",
    name: "Box Jump",
    bodyPart: "quads",
    equipment: "Box",
    setupDescription:
      "Stand in front of a sturdy box with your feet shoulder-width apart.",
    repDescription:
      "Squat down and explosively jump onto the box, landing softly, then step back down.",
    type: "compound",
  },
  {
    id: "233",
    name: "Reverse Lunge",
    bodyPart: "quads",
    equipment: "Bodyweight or Dumbbells",
    setupDescription:
      "Stand tall with your feet together and your hands by your sides or holding dumbbells.",
    repDescription:
      "Step backward with one leg, lowering your hips until both knees are bent at a 90-degree angle, then step back to starting position.",
    type: "compound",
  },
  {
    id: "234",
    name: "Lateral Lunge",
    bodyPart: "quads",
    equipment: "Bodyweight or Dumbbells",
    setupDescription:
      "Stand tall with feet together and your hands by your sides or holding dumbbells.",
    repDescription:
      "Step to the side with one leg, lowering your hips while keeping the other leg straight, then return to the starting position.",
    type: "compound",
  },
  {
    id: "235",
    name: "Squat with Calf Raise",
    bodyPart: "quads",
    equipment: "Bodyweight or Dumbbells",
    setupDescription:
      "Perform a regular squat, but at the top of the movement, rise onto the balls of your feet for a calf raise.",
    repDescription:
      "Squat down, then return to standing, finishing with a calf raise.",
    type: "compound",
  },
  {
    id: "236",
    name: "Dumbbell Sumo Squat",
    bodyPart: "quads",
    equipment: "Dumbbell",
    setupDescription:
      "Stand with your feet wider than shoulder-width apart, holding a dumbbell with both hands.",
    repDescription:
      "Squat down, keeping your chest up, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "237",
    name: "Bulgarian Split Squat with Dumbbells",
    bodyPart: "quads",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Place one foot behind you on a bench and hold a dumbbell in each hand by your sides.",
    repDescription:
      "Lower your body by bending your front knee, then return to standing.",
    type: "compound",
  },
  {
    id: "238",
    name: "Squat to Box",
    bodyPart: "quads",
    equipment: "Bodyweight or Barbell",
    setupDescription:
      "Stand in front of a box or bench, with your feet shoulder-width apart.",
    repDescription:
      "Squat down and lightly touch the box with your hips, then stand back up.",
    type: "compound",
  },
  {
    id: "239",
    name: "Dumbbell Bulgarian Split Squat (Kettlebell)",
    bodyPart: "quads",
    equipment: "Kettlebell, Bench",
    setupDescription:
      "Place one foot behind you on a bench and hold a kettlebell in each hand by your sides.",
    repDescription:
      "Lower your body by bending your front knee, then return to standing.",
    type: "compound",
  },
  {
    id: "240",
    name: "Step-Up with Knee Raise",
    bodyPart: "quads",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Stand in front of a bench, holding a dumbbell in each hand.",
    repDescription:
      "Step up onto the bench with one foot, then bring your knee up towards your chest before stepping back down.",
    type: "compound",
  },
  {
    id: "241",
    name: "Barbell Front Squat",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell on the front of your shoulders, holding it with an overhand grip, and stand with your feet shoulder-width apart.",
    repDescription:
      "Squat down, keeping your chest up and knees tracking over your toes, then press back up to standing.",
    type: "compound",
  },
  {
    id: "242",
    name: "Weighted Walking Lunge",
    bodyPart: "quads",
    equipment: "Dumbbells or Barbell",
    setupDescription:
      "Hold a dumbbell in each hand or a barbell on your shoulders, and stand with your feet together.",
    repDescription:
      "Step forward into a lunge, then bring the back leg forward and repeat with the other leg.",
    type: "compound",
  },
  {
    id: "243",
    name: "Leg Extension",
    bodyPart: "quads",
    equipment: "Leg Extension Machine",
    setupDescription:
      "Sit on a leg extension machine with your knees bent and your feet behind the padded bar.",
    repDescription:
      "Extend your legs out in front of you until they are straight, then slowly lower them back down.",
    type: "isolation",
  },
  {
    id: "244",
    name: "Dumbbell Squat",
    bodyPart: "quads",
    equipment: "Dumbbells",
    setupDescription:
      "Hold a dumbbell in each hand by your sides and stand with your feet shoulder-width apart.",
    repDescription:
      "Squat down by bending your knees and hips, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "245",
    name: "Hack Squat Machine",
    bodyPart: "quads",
    equipment: "Hack Squat Machine",
    setupDescription:
      "Sit on the hack squat machine with your feet shoulder-width apart on the platform.",
    repDescription:
      "Push the platform upward, then lower it back down until your thighs are parallel to the floor.",
    type: "compound",
  },
  {
    id: "246",
    name: "Smith Machine Squat",
    bodyPart: "quads",
    equipment: "Smith Machine",
    setupDescription:
      "Place a barbell on the Smith machine at shoulder height, positioning your feet shoulder-width apart.",
    repDescription:
      "Squat down while keeping your chest up, then press back up to standing.",
    type: "compound",
  },
  {
    id: "247",
    name: "Dumbbell Sumo Squat with Pulse",
    bodyPart: "quads",
    equipment: "Dumbbell",
    setupDescription:
      "Hold a dumbbell with both hands in front of you and stand with your feet wider than shoulder-width apart.",
    repDescription:
      "Squat down, then pulse slightly at the bottom before pressing back up.",
    type: "compound",
  },
  {
    id: "248",
    name: "Kettlebell Swing",
    bodyPart: "quads",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a kettlebell with both hands between your legs.",
    repDescription:
      "Swing the kettlebell up to shoulder height, using your hips and quads to power the movement, then swing it back down.",
    type: "compound",
  },
  {
    id: "249",
    name: "Barbell Split Squat",
    bodyPart: "quads",
    equipment: "Barbell",
    setupDescription:
      "Place one foot behind you on a bench and hold a barbell across your shoulders.",
    repDescription:
      "Lower your body by bending your front knee, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "250",
    name: "Medicine Ball Squat to Press",
    bodyPart: "quads",
    equipment: "Medicine Ball",
    setupDescription:
      "Hold a medicine ball at chest height with your feet shoulder-width apart.",
    repDescription:
      "Squat down, then press the ball overhead as you return to standing.",
    type: "compound",
  },
  {
    id: "251",
    name: "Romanian Deadlift",
    bodyPart: "hamstrings",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart and a barbell in front of you.",
    repDescription:
      "Lower the barbell by pushing your hips back, keeping your back straight, then return to standing by driving your hips forward.",
    type: "compound",
  },
  {
    id: "252",
    name: "Hamstring Curl Machine",
    bodyPart: "hamstrings",
    equipment: "Hamstring Curl Machine",
    setupDescription:
      "Lie face down on the hamstring curl machine and place your feet under the padded bar.",
    repDescription:
      "Curl your legs up towards your glutes, then slowly lower them back to the starting position.",
    type: "isolation",
  },
  {
    id: "253",
    name: "Single-Leg Romanian Deadlift",
    bodyPart: "hamstrings",
    equipment: "Dumbbell or Barbell",
    setupDescription:
      "Stand on one leg while holding a dumbbell in the opposite hand.",
    repDescription:
      "Hinge at the hips, lowering the weight towards the ground while keeping your back straight, then return to standing.",
    type: "compound",
  },
  {
    id: "254",
    name: "Glute-Ham Raise",
    bodyPart: "hamstrings",
    equipment: "Glute-Ham Developer (GHD)",
    setupDescription:
      "Kneel on the glute-ham developer machine with your feet secured and your body upright.",
    repDescription:
      "Lower your torso forward, then curl your hips to raise your body back to the starting position.",
    type: "compound",
  },
  {
    id: "255",
    name: "Kettlebell Swing",
    bodyPart: "hamstrings",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a kettlebell with both hands between your legs.",
    repDescription:
      "Swing the kettlebell forward using your hips, glutes, and hamstrings, then return it back between your legs.",
    type: "compound",
  },
  {
    id: "256",
    name: "Barbell Hip Thrust",
    bodyPart: "hamstrings",
    equipment: "Barbell, Bench",
    setupDescription:
      "Sit on the floor with your upper back against a bench and a barbell across your hips.",
    repDescription:
      "Drive through your heels to lift your hips towards the ceiling, then lower back down.",
    type: "compound",
  },
  {
    id: "257",
    name: "Walking Lunge",
    bodyPart: "hamstrings",
    equipment: "Dumbbells",
    setupDescription: "Stand tall holding a dumbbell in each hand.",
    repDescription:
      "Step forward into a lunge, ensuring your knee does not pass over your toes, then bring the back leg forward and repeat with the other leg.",
    type: "compound",
  },
  {
    id: "258",
    name: "Deadlift",
    bodyPart: "hamstrings",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart and a barbell in front of you.",
    repDescription:
      "Bend at the hips and knees to grasp the bar, then stand up by driving your hips forward and locking your knees.",
    type: "compound",
  },
  {
    id: "259",
    name: "Nordic Hamstring Curl",
    bodyPart: "hamstrings",
    equipment: "Bodyweight",
    setupDescription:
      "Kneel on a mat with your feet anchored, and keep your torso upright.",
    repDescription:
      "Slowly lower your torso towards the ground by extending your knees, then return to the starting position using your hamstrings.",
    type: "compound",
  },
  {
    id: "260",
    name: "Good Morning",
    bodyPart: "hamstrings",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell on your shoulders and stand with your feet shoulder-width apart.",
    repDescription:
      "Hinge at the hips, lowering your upper body while keeping your back straight, then return to standing.",
    type: "compound",
  },
  {
    id: "261",
    name: "Stiff-Legged Deadlift",
    bodyPart: "hamstrings",
    equipment: "Barbell or Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart and hold a barbell or dumbbells in front of you.",
    repDescription:
      "With a slight bend in your knees, hinge at the hips and lower the weight towards the ground, then return to standing.",
    type: "compound",
  },
  {
    id: "262",
    name: "Box Jump",
    bodyPart: "hamstrings",
    equipment: "Box",
    setupDescription:
      "Stand in front of a sturdy box with your feet shoulder-width apart.",
    repDescription:
      "Squat down and explosively jump onto the box, landing softly, then step back down.",
    type: "compound",
  },
  {
    id: "263",
    name: "Lying Leg Curl",
    bodyPart: "hamstrings",
    equipment: "Leg Curl Machine",
    setupDescription:
      "Lie face down on a leg curl machine and position your feet under the padded bar.",
    repDescription:
      "Curl your legs up towards your glutes, then slowly lower them back to the starting position.",
    type: "isolation",
  },
  {
    id: "264",
    name: "Bridge with Leg Curl",
    bodyPart: "hamstrings",
    equipment: "Bodyweight, Exercise Ball",
    setupDescription:
      "Lie on your back with your feet on an exercise ball and your arms at your sides.",
    repDescription:
      "Lift your hips to form a straight line from shoulders to knees, then curl the ball toward your glutes by bending your knees.",
    type: "compound",
  },
  {
    id: "265",
    name: "Reverse Hyperextension",
    bodyPart: "hamstrings",
    equipment: "Reverse Hyperextension Machine",
    setupDescription:
      "Position your hips on a reverse hyperextension machine with your feet secured.",
    repDescription:
      "Lift your legs up by engaging your hamstrings, then lower them back down.",
    type: "compound",
  },
  {
    id: "266",
    name: "Cable Pull-Through",
    bodyPart: "hamstrings",
    equipment: "Cable Machine",
    setupDescription:
      "Stand facing away from a cable machine with the rope attachment between your legs.",
    repDescription:
      "Pull the rope forward and through your legs by hinging at the hips, then return to starting position.",
    type: "compound",
  },
  {
    id: "267",
    name: "Barbell Glute Bridge",
    bodyPart: "hamstrings",
    equipment: "Barbell",
    setupDescription:
      "Sit on the floor with your upper back against a bench, and place a barbell over your hips.",
    repDescription:
      "Drive through your heels to lift your hips towards the ceiling, then lower back down.",
    type: "compound",
  },
  {
    id: "268",
    name: "Step-Up with Hamstring Curl",
    bodyPart: "hamstrings",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Stand in front of a bench holding a dumbbell in each hand.",
    repDescription:
      "Step up onto the bench, and as you step back down, curl your legs towards your glutes.",
    type: "compound",
  },
  {
    id: "269",
    name: "Barbell Deadlift",
    bodyPart: "hamstrings",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart and a barbell in front of you.",
    repDescription:
      "Bend at your hips and knees to grasp the bar, then lift it by extending your hips and knees, standing tall.",
    type: "compound",
  },
  {
    id: "270",
    name: "Walking Hamstring Curl",
    bodyPart: "hamstrings",
    equipment: "Bodyweight",
    setupDescription:
      "Walk forward, but each step curls the opposite leg toward your glutes.",
    repDescription: "Keep alternating legs while maintaining balance.",
    type: "compound",
  },
  {
    id: "271",
    name: "Dumbbell Deadlift",
    bodyPart: "hamstrings",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand in front of your thighs.",
    repDescription:
      "Hinge at your hips, lowering the dumbbells toward the ground while keeping your back straight, then return to standing.",
    type: "compound",
  },
  {
    id: "272",
    name: "BOSU Ball Hamstring Curl",
    bodyPart: "hamstrings",
    equipment: "BOSU Ball",
    setupDescription:
      "Lie on your back with your feet on a BOSU ball and your arms at your sides.",
    repDescription:
      "Curl the ball towards your glutes by bending your knees, then slowly extend your legs back out.",
    type: "compound",
  },
  {
    id: "273",
    name: "TRX Hamstring Curl",
    bodyPart: "hamstrings",
    equipment: "TRX",
    setupDescription:
      "Set up a TRX suspension trainer with your feet in the straps and your body in a plank position.",
    repDescription:
      "Curl your heels toward your glutes by bending your knees, then slowly extend your legs back to the starting position.",
    type: "compound",
  },
  {
    id: "274",
    name: "Hamstring Curl with Stability Ball",
    bodyPart: "hamstrings",
    equipment: "Stability Ball",
    setupDescription:
      "Lie on your back with your feet on a stability ball and your arms at your sides.",
    repDescription:
      "Lift your hips off the ground, then curl the ball toward your glutes by bending your knees.",
    type: "compound",
  },
  {
    id: "275",
    name: "Seated Leg Curl",
    bodyPart: "hamstrings",
    equipment: "Leg Curl Machine",
    setupDescription:
      "Sit on the leg curl machine with your legs extended and your feet positioned under the pads.",
    repDescription:
      "Curl your legs down towards your glutes, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "276",
    name: "Cable Hamstring Curl",
    bodyPart: "hamstrings",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to a low pulley position and attach an ankle strap.",
    repDescription:
      "Curl your leg back towards your glutes, then slowly extend it back to the starting position.",
    type: "isolation",
  },
  {
    id: "277",
    name: "Standing Hamstring Curl",
    bodyPart: "hamstrings",
    equipment: "Bodyweight or Cable Machine",
    setupDescription:
      "Stand with your feet shoulder-width apart and your knees slightly bent.",
    repDescription:
      "Bend one knee to curl your leg towards your glutes, then slowly lower it back to the starting position.",
    type: "isolation",
  },
  {
    id: "278",
    name: "Box Squat to Hamstring Stretch",
    bodyPart: "hamstrings",
    equipment: "Box",
    setupDescription:
      "Stand in front of a box with your feet shoulder-width apart.",
    repDescription:
      "Squat down until your hips are below your knees, then sit back onto the box and stretch your hamstrings.",
    type: "compound",
  },
  {
    id: "279",
    name: "Leg Press",
    bodyPart: "hamstrings",
    equipment: "Leg Press Machine",
    setupDescription:
      "Sit on the leg press machine with your feet shoulder-width apart on the platform.",
    repDescription:
      "Press the platform upward, extending your legs, then lower the platform back down by bending your knees.",
    type: "compound",
  },
  {
    id: "280",
    name: "Sled Push",
    bodyPart: "hamstrings",
    equipment: "Sled",
    setupDescription:
      "Push a sled forward by extending your legs, driving through your heels and engaging your hamstrings.",
    repDescription:
      "Push the sled for a specified distance or time, maintaining proper form throughout the movement.",
    type: "compound",
  },
  {
    id: "281",
    name: "Sled Pull",
    bodyPart: "hamstrings",
    equipment: "Sled",
    setupDescription:
      "Attach a harness to the sled and stand with your feet shoulder-width apart.",
    repDescription:
      "Pull the sled backwards by driving your legs and hips, focusing on engaging your hamstrings.",
    type: "compound",
  },
  {
    id: "282",
    name: "Jumping Lunges",
    bodyPart: "hamstrings",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a lunge position with one foot forward and one foot back.",
    repDescription:
      "Jump and switch your legs mid-air, landing in a lunge position with the opposite leg forward.",
    type: "compound",
  },
  {
    id: "283",
    name: "Mountain Climbers",
    bodyPart: "hamstrings",
    equipment: "Bodyweight",
    setupDescription:
      "Start in a plank position with your body straight and hands on the ground.",
    repDescription:
      "Drive one knee towards your chest, then quickly switch legs, mimicking a climbing motion.",
    type: "compound",
  },
  {
    id: "284",
    name: "Frog Pumps",
    bodyPart: "hamstrings",
    equipment: "Bodyweight",
    setupDescription:
      "Lie on your back with your feet together and knees bent out to the sides.",
    repDescription:
      "Push through your heels to lift your hips off the ground, then lower them back down.",
    type: "compound",
  },
  {
    id: "285",
    name: "Cable Deadlift",
    bodyPart: "hamstrings",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to a low pulley position and attach a straight bar.",
    repDescription:
      "Hinge at your hips and pull the bar towards your body by extending your hips, then return to standing.",
    type: "compound",
  },
  {
    id: "286",
    name: "Reverse Lunges",
    bodyPart: "hamstrings",
    equipment: "Bodyweight or Dumbbells",
    setupDescription:
      "Stand tall with your feet shoulder-width apart, holding dumbbells at your sides.",
    repDescription:
      "Step backward into a lunge, lowering your back knee toward the ground, then press through the front foot to return to standing.",
    type: "compound",
  },
  {
    id: "287",
    name: "Step-Ups with Dumbbells",
    bodyPart: "hamstrings",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Hold a dumbbell in each hand by your sides and stand in front of a bench.",
    repDescription:
      "Step up onto the bench with one leg, driving through your heel, then step back down.",
    type: "compound",
  },
  {
    id: "288",
    name: "Lateral Lunges",
    bodyPart: "hamstrings",
    equipment: "Bodyweight or Dumbbells",
    setupDescription: "Stand with your feet wider than shoulder-width apart.",
    repDescription:
      "Step out to the side into a lunge, keeping your hips low and knees bent, then return to standing.",
    type: "compound",
  },
  {
    id: "289",
    name: "Reverse Hyperextensions with Dumbbell",
    bodyPart: "hamstrings",
    equipment: "Dumbbell",
    setupDescription:
      "Lie face down on a hyperextension bench with a dumbbell held between your feet.",
    repDescription:
      "Lift your legs up to form a straight line with your body, then lower them back down.",
    type: "compound",
  },
  {
    id: "290",
    name: "Sled Drag",
    bodyPart: "hamstrings",
    equipment: "Sled",
    setupDescription: "Attach a rope to the sled and hold the ends.",
    repDescription:
      "Drag the sled behind you, walking backwards and using your hamstrings to pull the weight.",
    type: "compound",
  },
  {
    id: "291",
    name: "Hurdle Jump",
    bodyPart: "hamstrings",
    equipment: "Bodyweight",
    setupDescription: "Stand in front of a hurdle or small object.",
    repDescription:
      "Jump over the hurdle, landing softly, and immediately jump back over it.",
    type: "compound",
  },
  {
    id: "292",
    name: "Squat Jumps",
    bodyPart: "hamstrings",
    equipment: "Bodyweight",
    setupDescription: "Stand with your feet shoulder-width apart.",
    repDescription:
      "Squat down and then explode upward, jumping as high as possible, then land softly.",
    type: "compound",
  },
  {
    id: "293",
    name: "Leg Curl with Cable",
    bodyPart: "hamstrings",
    equipment: "Cable Machine",
    setupDescription:
      "Attach an ankle strap to a low cable pulley and position yourself facing away from the machine.",
    repDescription:
      "Curl your leg back toward your glutes, then slowly return it to the starting position.",
    type: "isolation",
  },
  {
    id: "294",
    name: "Bulgarian Split Squat",
    bodyPart: "hamstrings",
    equipment: "Dumbbells",
    setupDescription:
      "Place one foot behind you on a bench, holding a dumbbell in each hand.",
    repDescription:
      "Lower your back knee toward the floor, then press through the front foot to return to standing.",
    type: "compound",
  },
  {
    id: "295",
    name: "Barbell Step-Up",
    bodyPart: "hamstrings",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell across your shoulders and stand in front of a bench.",
    repDescription:
      "Step up onto the bench, driving through your front heel, then step back down.",
    type: "compound",
  },
  {
    id: "296",
    name: "Dumbbell Stiff-Legged Deadlift",
    bodyPart: "hamstrings",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.",
    repDescription:
      "Hinge at your hips and lower the dumbbells toward the ground, then return to standing.",
    type: "compound",
  },
  {
    id: "297",
    name: "Barbell Lunge",
    bodyPart: "hamstrings",
    equipment: "Barbell",
    setupDescription: "Place a barbell across your shoulders and stand tall.",
    repDescription:
      "Step forward into a lunge, lowering your back knee toward the ground, then push back up to standing.",
    type: "compound",
  },
  {
    id: "298",
    name: "Hamstring Pull",
    bodyPart: "hamstrings",
    equipment: "Cable Machine",
    setupDescription:
      "Stand in front of the cable machine with the rope attachment at ankle height.",
    repDescription:
      "Pull the rope attachment toward your glutes, bending your knees to curl your leg back.",
    type: "isolation",
  },
  {
    id: "299",
    name: "Leg Curl Machine",
    bodyPart: "hamstrings",
    equipment: "Leg Curl Machine",
    setupDescription:
      "Sit on the leg curl machine with your legs extended in front of you.",
    repDescription:
      "Curl your legs toward your glutes, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "300",
    name: "Hip Thrust",
    bodyPart: "glutes",
    equipment: "Barbell, Bench",
    setupDescription:
      "Sit on the ground with your upper back against a bench and a barbell placed across your hips.",
    repDescription:
      "Drive through your heels to lift your hips towards the ceiling, squeezing your glutes at the top, then lower your hips back down.",
    type: "compound",
  },
  {
    id: "301",
    name: "Glute Bridge",
    bodyPart: "glutes",
    equipment: "Bodyweight",
    setupDescription:
      "Lie on your back with your knees bent and feet flat on the floor.",
    repDescription:
      "Push through your heels to lift your hips off the floor, squeezing your glutes at the top, then lower back down.",
    type: "compound",
  },
  {
    id: "302",
    name: "Bulgarian Split Squat",
    bodyPart: "glutes",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Place one foot on a bench behind you and hold a dumbbell in each hand.",
    repDescription:
      "Lower your back knee toward the ground, keeping your torso upright, then push through your front heel to return to standing.",
    type: "compound",
  },
  {
    id: "303",
    name: "Step-Ups",
    bodyPart: "glutes",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Stand in front of a bench holding a dumbbell in each hand.",
    repDescription:
      "Step up onto the bench with one leg, driving through the heel, then step back down.",
    type: "compound",
  },
  {
    id: "304",
    name: "Donkey Kicks",
    bodyPart: "glutes",
    equipment: "Bodyweight",
    setupDescription:
      "Start on all fours with your hands under your shoulders and knees under your hips.",
    repDescription:
      "Lift one leg towards the ceiling, keeping your knee bent at 90 degrees, then lower it back down.",
    type: "isolation",
  },
  {
    id: "305",
    name: "Cable Kickbacks",
    bodyPart: "glutes",
    equipment: "Cable Machine",
    setupDescription:
      "Stand facing the cable machine with an ankle strap attached to the low pulley.",
    repDescription:
      "Kick your leg backward, squeezing your glute at the top, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "306",
    name: "Glute Kickbacks with Resistance Bands",
    bodyPart: "glutes",
    equipment: "Resistance Bands",
    setupDescription:
      "Place a resistance band around your legs and get into an all-fours position.",
    repDescription:
      "Kick one leg back while keeping your knee bent, engaging your glute, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "307",
    name: "Clamshells",
    bodyPart: "glutes",
    equipment: "Bodyweight, Resistance Band",
    setupDescription:
      "Lie on your side with your knees bent and a resistance band placed around your thighs.",
    repDescription:
      "Open your knees by rotating your hips while keeping your feet together, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "308",
    name: "Sumo Deadlift",
    bodyPart: "glutes",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet wider than shoulder-width apart, toes pointed outward, and a barbell in front of you.",
    repDescription:
      "Bend at the hips and knees to grip the barbell, then lift the barbell while engaging your glutes and hamstrings.",
    type: "compound",
  },
  {
    id: "309",
    name: "Kettlebell Swing",
    bodyPart: "glutes",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a kettlebell with both hands.",
    repDescription:
      "Swing the kettlebell between your legs, then thrust your hips forward to swing the kettlebell up to shoulder height.",
    type: "compound",
  },
  {
    id: "310",
    name: "Lateral Leg Raises",
    bodyPart: "glutes",
    equipment: "Bodyweight",
    setupDescription: "Lie on your side with your legs stacked and straight.",
    repDescription:
      "Lift your top leg towards the ceiling, keeping your knee straight, then lower it back down.",
    type: "isolation",
  },
  {
    id: "311",
    name: "Lunges",
    bodyPart: "glutes",
    equipment: "Bodyweight or Dumbbells",
    setupDescription: "Stand tall with your feet hip-width apart.",
    repDescription:
      "Step forward into a lunge, lowering your back knee toward the ground, then push through your front foot to return to standing.",
    type: "compound",
  },
  {
    id: "312",
    name: "Hip Abductions",
    bodyPart: "glutes",
    equipment: "Resistance Band, Machine",
    setupDescription:
      "Sit or stand with a resistance band around your legs or use an abduction machine.",
    repDescription:
      "Push your legs apart, engaging your glutes, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "313",
    name: "Romanian Deadlift",
    bodyPart: "glutes",
    equipment: "Barbell or Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart and hold a barbell or dumbbells in front of you.",
    repDescription:
      "Hinge at your hips to lower the weight down, keeping a slight bend in your knees, then return to standing by driving your hips forward.",
    type: "compound",
  },
  {
    id: "314",
    name: "Box Jumps",
    bodyPart: "glutes",
    equipment: "Box",
    setupDescription:
      "Stand in front of a box with your feet shoulder-width apart.",
    repDescription:
      "Jump onto the box, landing softly with your knees slightly bent, then step back down.",
    type: "compound",
  },
  {
    id: "315",
    name: "Frog Pumps",
    bodyPart: "glutes",
    equipment: "Bodyweight",
    setupDescription:
      "Lie on your back with your feet together and knees bent outward.",
    repDescription:
      "Lift your hips toward the ceiling by pushing through your heels, squeezing your glutes at the top, then lower back down.",
    type: "compound",
  },
  {
    id: "316",
    name: "Single-Leg Glute Bridge",
    bodyPart: "glutes",
    equipment: "Bodyweight",
    setupDescription:
      "Lie on your back with one knee bent and the other leg extended straight.",
    repDescription:
      "Lift your hips off the ground, keeping your extended leg straight, then lower your hips back down.",
    type: "isolation",
  },
  {
    id: "317",
    name: "Reverse Hyperextensions",
    bodyPart: "glutes",
    equipment: "Hyperextension Bench",
    setupDescription:
      "Lie face down on a hyperextension bench with your legs hanging off the edge.",
    repDescription:
      "Lift your legs toward the ceiling, engaging your glutes, then lower them back down.",
    type: "compound",
  },
  {
    id: "318",
    name: "Sled Push",
    bodyPart: "glutes",
    equipment: "Sled",
    setupDescription:
      "Push a sled forward by extending your legs and driving through your glutes.",
    repDescription:
      "Push the sled for a specified distance or time, maintaining proper form.",
    type: "compound",
  },
  {
    id: "319",
    name: "Walking Lunges",
    bodyPart: "glutes",
    equipment: "Bodyweight or Dumbbells",
    setupDescription: "Stand tall with a dumbbell in each hand by your sides.",
    repDescription:
      "Step forward into a lunge, lowering your back knee to the floor, then step forward with the other leg into another lunge.",
    type: "compound",
  },
  {
    id: "320",
    name: "Resistance Band Squats",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Place a resistance band around your legs just above your knees and stand with your feet shoulder-width apart.",
    repDescription:
      "Lower into a squat, keeping your knees pushed outward against the resistance band, then return to standing.",
    type: "compound",
  },
  {
    id: "321",
    name: "Squat to Chair",
    bodyPart: "glutes",
    equipment: "Bodyweight, Chair",
    setupDescription:
      "Stand with your feet shoulder-width apart and a chair behind you.",
    repDescription:
      "Lower into a squat, sitting back into the chair, then press through your heels to stand back up.",
    type: "compound",
  },
  {
    id: "322",
    name: "Bridge with Resistance Band",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Lie on your back with a resistance band around your legs just above your knees.",
    repDescription:
      "Lift your hips toward the ceiling while keeping the resistance band stretched, then lower your hips back down.",
    type: "compound",
  },
  {
    id: "323",
    name: "Kettlebell Deadlift",
    bodyPart: "glutes",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a kettlebell with both hands in front of you.",
    repDescription:
      "Hinge at the hips to lower the kettlebell towards the floor, then drive your hips forward to return to standing.",
    type: "compound",
  },
  {
    id: "324",
    name: "Pistol Squats",
    bodyPart: "glutes",
    equipment: "Bodyweight",
    setupDescription:
      "Stand on one leg with the other leg extended straight in front of you.",
    repDescription:
      "Lower your body into a squat on one leg, keeping the extended leg off the ground, then press through your heel to stand back up.",
    type: "compound",
  },
  {
    id: "325",
    name: "Glute Kickbacks with Ankle Weights",
    bodyPart: "glutes",
    equipment: "Ankle Weights",
    setupDescription:
      "Attach ankle weights to both legs and get into an all-fours position.",
    repDescription:
      "Kick one leg back, keeping your knee bent, engaging your glute, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "326",
    name: "Hip Abduction Machine",
    bodyPart: "glutes",
    equipment: "Hip Abduction Machine",
    setupDescription:
      "Sit on the hip abduction machine with your knees bent and feet on the pads.",
    repDescription:
      "Push your knees apart, engaging your glutes, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "327",
    name: "Squat with Resistance Band",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Place a resistance band around your legs just above your knees and stand with your feet shoulder-width apart.",
    repDescription:
      "Lower into a squat, pushing your knees outward against the resistance band, then return to standing.",
    type: "compound",
  },
  {
    id: "328",
    name: "Single-Leg Romanian Deadlift",
    bodyPart: "glutes",
    equipment: "Dumbbells",
    setupDescription: "Hold a dumbbell in each hand and balance on one leg.",
    repDescription:
      "Hinge at the hips to lower the weights toward the floor, keeping the other leg extended behind you, then return to standing.",
    type: "compound",
  },
  {
    id: "329",
    name: "Sumo Squats",
    bodyPart: "glutes",
    equipment: "Bodyweight or Dumbbells",
    setupDescription:
      "Stand with your feet wider than shoulder-width apart and your toes pointed outward.",
    repDescription:
      "Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.",
    type: "compound",
  },
  {
    id: "330",
    name: "Jumping Squats",
    bodyPart: "glutes",
    equipment: "Bodyweight",
    setupDescription: "Stand with your feet shoulder-width apart.",
    repDescription:
      "Lower into a squat, then explosively jump up, landing softly and immediately lowering into the next squat.",
    type: "compound",
  },
  {
    id: "331",
    name: "Banded Glute Bridge",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Lie on your back with a resistance band around your legs just above your knees.",
    repDescription:
      "Push through your heels to lift your hips towards the ceiling, squeezing your glutes at the top, then lower your hips back down.",
    type: "compound",
  },
  {
    id: "332",
    name: "Lateral Lunges",
    bodyPart: "glutes",
    equipment: "Bodyweight or Dumbbells",
    setupDescription: "Stand with your feet hip-width apart.",
    repDescription:
      "Step out to the side with one leg, lowering your hips into a lunge while keeping the other leg straight, then push back to standing.",
    type: "compound",
  },
  {
    id: "333",
    name: "Glute-Ham Raise",
    bodyPart: "glutes",
    equipment: "Glute-Ham Developer",
    setupDescription:
      "Position yourself on a glute-ham developer machine with your feet secured.",
    repDescription:
      "Lower your torso towards the floor, then contract your glutes and hamstrings to return to the starting position.",
    type: "compound",
  },
  {
    id: "334",
    name: "Cable Squat and Row",
    bodyPart: "glutes",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine to a low pulley with a wide bar attachment.",
    repDescription:
      "Squat down, pulling the bar towards your torso, then stand back up while engaging your glutes.",
    type: "compound",
  },
  {
    id: "335",
    name: "Barbell Hip Thrust",
    bodyPart: "glutes",
    equipment: "Barbell, Bench",
    setupDescription:
      "Sit on the ground with your upper back against a bench and a barbell placed across your hips.",
    repDescription:
      "Drive through your heels to lift your hips toward the ceiling, squeezing your glutes at the top, then lower your hips back down.",
    type: "compound",
  },
  {
    id: "336",
    name: "Squat with Heel Elevation",
    bodyPart: "glutes",
    equipment: "Bodyweight or Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart, placing your heels on an elevated surface.",
    repDescription:
      "Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.",
    type: "compound",
  },
  {
    id: "337",
    name: "Kettlebell Goblet Squat",
    bodyPart: "glutes",
    equipment: "Kettlebell",
    setupDescription: "Hold a kettlebell at chest height with both hands.",
    repDescription:
      "Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.",
    type: "compound",
  },
  {
    id: "338",
    name: "Walking Lunges with Dumbbells",
    bodyPart: "glutes",
    equipment: "Dumbbells",
    setupDescription: "Hold a dumbbell in each hand by your sides.",
    repDescription:
      "Step forward into a lunge, lowering your back knee to the floor, then step forward with the other leg into another lunge.",
    type: "compound",
  },
  {
    id: "339",
    name: "Hip Circle Walks",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Place a resistance band around your legs just above your knees and squat slightly.",
    repDescription:
      "Take small steps forward, backward, and to the side while maintaining tension in the resistance band.",
    type: "compound",
  },
  {
    id: "340",
    name: "Reverse Lunges",
    bodyPart: "glutes",
    equipment: "Bodyweight or Dumbbells",
    setupDescription: "Stand tall with your feet hip-width apart.",
    repDescription:
      "Step backward into a lunge, lowering your back knee toward the floor, then return to standing.",
    type: "compound",
  },
  {
    id: "341",
    name: "Curtsy Lunges",
    bodyPart: "glutes",
    equipment: "Bodyweight or Dumbbells",
    setupDescription: "Stand with your feet hip-width apart.",
    repDescription:
      "Step one leg diagonally behind you, lowering your hips into a lunge, then return to standing.",
    type: "compound",
  },
  {
    id: "342",
    name: "Banded Glute Kickbacks",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Place a resistance band around your legs and get into an all-fours position.",
    repDescription:
      "Kick one leg back, engaging your glute, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "343",
    name: "Resistance Band Donkey Kicks",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Place a resistance band around your legs and get into an all-fours position.",
    repDescription:
      "Kick one leg back towards the ceiling, squeezing your glute at the top, then lower it back down.",
    type: "isolation",
  },
  {
    id: "344",
    name: "Barbell Glute Bridge",
    bodyPart: "glutes",
    equipment: "Barbell",
    setupDescription:
      "Lie on your back with a barbell placed across your hips.",
    repDescription:
      "Push through your heels to lift your hips toward the ceiling, squeezing your glutes at the top, then lower your hips back down.",
    type: "compound",
  },
  {
    id: "345",
    name: "TRX Squats",
    bodyPart: "glutes",
    equipment: "TRX Suspension Trainer",
    setupDescription:
      "Hold the TRX straps in front of you with your arms extended.",
    repDescription:
      "Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.",
    type: "compound",
  },
  {
    id: "346",
    name: "Resistance Band Squat Walks",
    bodyPart: "glutes",
    equipment: "Resistance Band",
    setupDescription:
      "Place a resistance band around your legs just above your knees and squat slightly.",
    repDescription:
      "Walk forward and backward while maintaining the squat position and tension in the resistance band.",
    type: "compound",
  },
  {
    id: "347",
    name: "Standing Kickbacks",
    bodyPart: "glutes",
    equipment: "Bodyweight or Resistance Band",
    setupDescription:
      "Stand with a resistance band around your ankles or with bodyweight.",
    repDescription:
      "Kick one leg back, keeping your knee straight and engaging your glute, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "348",
    name: "Barbell Squats",
    bodyPart: "glutes",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell across your upper back and stand with your feet shoulder-width apart.",
    repDescription:
      "Lower into a squat, keeping your chest up and knees tracking over your toes, then return to standing.",
    type: "compound",
  },
  {
    id: "349",
    name: "Leg Press",
    bodyPart: "glutes",
    equipment: "Leg Press Machine",
    setupDescription:
      "Sit in the leg press machine with your feet placed shoulder-width apart on the platform.",
    repDescription:
      "Push the platform upward by extending your legs, then lower the platform back down by bending your knees.",
    type: "compound",
  },
  {
    id: "350",
    name: "Standing Calf Raise",
    bodyPart: "calves",
    equipment: "Bodyweight or Machine",
    setupDescription:
      "Stand tall with your feet shoulder-width apart on a raised platform, with the balls of your feet on the edge.",
    repDescription:
      "Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down below the platform level.",
    type: "isolation",
  },
  {
    id: "351",
    name: "Seated Calf Raise",
    bodyPart: "calves",
    equipment: "Seated Calf Raise Machine",
    setupDescription:
      "Sit on a calf raise machine with your feet placed on the platform and your knees bent.",
    repDescription:
      "Lift your heels as high as possible, squeezing your calves at the top, then slowly lower back down.",
    type: "isolation",
  },
  {
    id: "352",
    name: "Donkey Calf Raise",
    bodyPart: "calves",
    equipment: "Bodyweight or Machine",
    setupDescription:
      "Bend at the hips and place your feet on a raised platform, with your body bent forward and a weight on your lower back or hips.",
    repDescription:
      "Raise your heels as high as possible, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "353",
    name: "Leg Press Calf Raise",
    bodyPart: "calves",
    equipment: "Leg Press Machine",
    setupDescription:
      "Sit in a leg press machine with your feet placed at the bottom of the platform, using the balls of your feet to push.",
    repDescription:
      "Push the platform upward by extending your ankles, squeezing your calves at the top, then lower the platform back down.",
    type: "isolation",
  },
  {
    id: "354",
    name: "Standing Calf Raise with Dumbbells",
    bodyPart: "calves",
    equipment: "Dumbbells",
    setupDescription:
      "Hold a dumbbell in each hand and stand tall with your feet shoulder-width apart on a raised platform.",
    repDescription:
      "Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down below the platform level.",
    type: "isolation",
  },
  {
    id: "355",
    name: "Calf Raises on Smith Machine",
    bodyPart: "calves",
    equipment: "Smith Machine",
    setupDescription:
      "Set up a Smith machine with the barbell positioned above your shoulders, and place the balls of your feet on a raised platform.",
    repDescription:
      "Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "356",
    name: "Box Jump Calf Raise",
    bodyPart: "calves",
    equipment: "Bodyweight",
    setupDescription: "Stand facing a box or platform.",
    repDescription:
      "Jump up onto the box, landing softly on the balls of your feet, then rise up onto your toes before stepping back down.",
    type: "isolation",
  },
  {
    id: "357",
    name: "Jump Rope",
    bodyPart: "calves",
    equipment: "Jump Rope",
    setupDescription:
      "Hold a jump rope with both hands and stand tall with your feet together.",
    repDescription:
      "Jump rope continuously, staying on the balls of your feet and using your calves to propel you.",
    type: "isolation",
  },
  {
    id: "358",
    name: "Single-Leg Calf Raise",
    bodyPart: "calves",
    equipment: "Bodyweight or Dumbbell",
    setupDescription:
      "Stand on one leg on a raised platform or flat ground, holding a dumbbell in one hand for added resistance.",
    repDescription:
      "Raise your heel as high as possible, squeezing your calf at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "359",
    name: "Seated Calf Raise with Barbell",
    bodyPart: "calves",
    equipment: "Barbell",
    setupDescription:
      "Sit on a bench with a barbell resting on your thighs, and your feet on a raised platform.",
    repDescription:
      "Lift your heels as high as possible, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "360",
    name: "Tibialis Raise",
    bodyPart: "calves",
    equipment: "Bodyweight or Dumbbell",
    setupDescription:
      "Sit on a bench with your feet flat on the floor and a dumbbell resting on your knees.",
    repDescription:
      "Lift your toes as high as possible toward your shins, then slowly lower them back down.",
    type: "isolation",
  },
  {
    id: "361",
    name: "Calf Raise on Leg Press Machine",
    bodyPart: "calves",
    equipment: "Leg Press Machine",
    setupDescription:
      "Sit on a leg press machine with your feet placed at the bottom of the platform, using the balls of your feet to push.",
    repDescription:
      "Push the platform upward by extending your ankles, squeezing your calves at the top, then lower the platform back down.",
    type: "isolation",
  },
  {
    id: "362",
    name: "Calf Raises on a Smith Machine",
    bodyPart: "calves",
    equipment: "Smith Machine",
    setupDescription:
      "Place the barbell of the Smith machine on your shoulders, positioning the balls of your feet on a raised platform.",
    repDescription:
      "Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "363",
    name: "Dumbbell Calf Raises",
    bodyPart: "calves",
    equipment: "Dumbbells",
    setupDescription:
      "Stand tall with a dumbbell in each hand at your sides, and the balls of your feet on a raised platform.",
    repDescription:
      "Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "364",
    name: "Kettlebell Calf Raises",
    bodyPart: "calves",
    equipment: "Kettlebell",
    setupDescription:
      "Stand tall with a kettlebell in each hand at your sides, with your feet shoulder-width apart.",
    repDescription:
      "Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "365",
    name: "Elevated Calf Raises",
    bodyPart: "calves",
    equipment: "Bodyweight or Dumbbells",
    setupDescription:
      "Stand with the balls of your feet on a raised surface, such as a step or platform.",
    repDescription:
      "Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down below the platform.",
    type: "isolation",
  },
  {
    id: "366",
    name: "Barbell Calf Raises",
    bodyPart: "calves",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell on your upper back, positioning the balls of your feet on a raised surface.",
    repDescription:
      "Rise up onto the balls of your feet, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "367",
    name: "Jump Squats",
    bodyPart: "calves",
    equipment: "Bodyweight",
    setupDescription: "Stand with your feet shoulder-width apart.",
    repDescription:
      "Squat down and jump up explosively, landing softly on the balls of your feet.",
    type: "isolation",
  },
  {
    id: "368",
    name: "Plyometric Calf Raises",
    bodyPart: "calves",
    equipment: "Bodyweight",
    setupDescription: "Stand tall with your feet shoulder-width apart.",
    repDescription:
      "Jump onto the balls of your feet, quickly bouncing off and landing softly, then repeat.",
    type: "isolation",
  },
  {
    id: "369",
    name: "Resistance Band Calf Raises",
    bodyPart: "calves",
    equipment: "Resistance Band",
    setupDescription:
      "Place a resistance band around your legs just above your knees and stand on one leg.",
    repDescription:
      "Raise your heel as high as possible, engaging your calf, then lower it back down.",
    type: "isolation",
  },
  {
    id: "370",
    name: "Single-Leg Seated Calf Raise",
    bodyPart: "calves",
    equipment: "Seated Calf Raise Machine",
    setupDescription:
      "Sit on a calf raise machine and place one foot on the platform, with the other foot off the machine.",
    repDescription:
      "Raise your heel as high as possible, squeezing your calf at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "371",
    name: "Standing Calf Raise with Barbell",
    bodyPart: "calves",
    equipment: "Barbell",
    setupDescription:
      "Place a barbell on your upper back and position the balls of your feet on a raised platform.",
    repDescription:
      "Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "372",
    name: "Barbell Calf Raise with Dumbbells",
    bodyPart: "calves",
    equipment: "Barbell, Dumbbells",
    setupDescription:
      "Place a barbell on your upper back with a dumbbell in each hand.",
    repDescription:
      "Push up onto the balls of your feet, squeezing your calves at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "373",
    name: "Swiss Ball Calf Raise",
    bodyPart: "calves",
    equipment: "Swiss Ball",
    setupDescription:
      "Position your feet on a Swiss ball while standing, keeping your knees slightly bent.",
    repDescription:
      "Raise your heels as high as possible, squeezing your calves, then lower back down.",
    type: "isolation",
  },
  {
    id: "374",
    name: "Weighted Jump Rope",
    bodyPart: "calves",
    equipment: "Jump Rope",
    setupDescription: "Hold a weighted jump rope and stand tall.",
    repDescription:
      "Jump rope continuously, staying on the balls of your feet and engaging your calves.",
    type: "isolation",
  },
  {
    id: "375",
    name: "Barbell Bicep Curl",
    bodyPart: "biceps",
    equipment: "Barbell",
    setupDescription:
      "Stand tall with your feet shoulder-width apart, holding a barbell with an underhand grip, arms fully extended.",
    repDescription:
      "Curl the barbell toward your chest, keeping your elbows stationary, then lower the barbell back to the starting position.",
    type: "isolation",
  },
  {
    id: "376",
    name: "Dumbbell Bicep Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Hold a dumbbell in each hand, arms fully extended, with your palms facing forward.",
    repDescription:
      "Curl the dumbbells toward your shoulders, squeezing your biceps at the top, then slowly lower the dumbbells back to the starting position.",
    type: "isolation",
  },
  {
    id: "377",
    name: "Hammer Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Hold a dumbbell in each hand with your palms facing your torso.",
    repDescription:
      "Curl the dumbbells while keeping your palms facing each other, then lower the dumbbells back to the starting position.",
    type: "isolation",
  },
  {
    id: "378",
    name: "Concentration Curl",
    bodyPart: "biceps",
    equipment: "Dumbbell",
    setupDescription:
      "Sit on a bench with your legs apart and hold a dumbbell with one hand. Rest your elbow against the inside of your thigh.",
    repDescription:
      "Curl the dumbbell toward your shoulder, squeezing your bicep at the top, then lower it back down slowly.",
    type: "isolation",
  },
  {
    id: "379",
    name: "Preacher Curl",
    bodyPart: "biceps",
    equipment: "Preacher Curl Bench, Barbell or Dumbbells",
    setupDescription:
      "Sit on the preacher curl bench and place your upper arms on the pad. Hold a barbell or dumbbells with an underhand grip.",
    repDescription:
      "Curl the weight toward your face, then lower it back down to the starting position, fully extending your arms.",
    type: "isolation",
  },
  {
    id: "380",
    name: "EZ Bar Curl",
    bodyPart: "biceps",
    equipment: "EZ Curl Bar",
    setupDescription:
      "Hold an EZ curl bar with an underhand grip, hands shoulder-width apart.",
    repDescription:
      "Curl the bar toward your shoulders, squeezing your biceps at the top, then lower the bar back down slowly.",
    type: "isolation",
  },
  {
    id: "381",
    name: "Incline Dumbbell Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells, Incline Bench",
    setupDescription:
      "Lie on an incline bench, holding a dumbbell in each hand, arms fully extended.",
    repDescription:
      "Curl the dumbbells toward your shoulders, keeping your elbows stationary, then slowly lower them back down.",
    type: "isolation",
  },
  {
    id: "382",
    name: "Zottman Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription: "Hold a dumbbell in each hand with an underhand grip.",
    repDescription:
      "Curl the dumbbells toward your shoulders, then rotate your wrists at the top and lower the weights with an overhand grip.",
    type: "isolation",
  },
  {
    id: "383",
    name: "Cable Bicep Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a straight bar to a low pulley and stand facing the machine with your hands shoulder-width apart.",
    repDescription:
      "Curl the bar towards your face, squeezing your biceps at the top, then slowly lower it back down.",
    type: "isolation",
  },
  {
    id: "384",
    name: "Cable Hammer Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope handle to a low pulley and grab it with a neutral grip (palms facing each other).",
    repDescription:
      "Curl the rope handle toward your shoulders, squeezing your biceps at the top, then slowly lower it back down.",
    type: "isolation",
  },
  {
    id: "385",
    name: "Barbell Reverse Curl",
    bodyPart: "biceps",
    equipment: "Barbell",
    setupDescription:
      "Hold a barbell with an overhand grip, hands shoulder-width apart.",
    repDescription:
      "Curl the barbell toward your shoulders while keeping your elbows stationary, then lower it back down slowly.",
    type: "isolation",
  },
  {
    id: "386",
    name: "Spider Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells or Barbell",
    setupDescription:
      "Lie face down on an incline bench, holding a dumbbell or barbell with an underhand grip.",
    repDescription:
      "Curl the weight toward your forehead, keeping your elbows stationary, then lower it back down slowly.",
    type: "isolation",
  },
  {
    id: "387",
    name: "Alternating Dumbbell Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand, arms fully extended, palms facing forward.",
    repDescription:
      "Curl one dumbbell toward your shoulder while keeping the other arm extended, then alternate arms.",
    type: "isolation",
  },
  {
    id: "388",
    name: "Bicep Curl with Resistance Bands",
    bodyPart: "biceps",
    equipment: "Resistance Bands",
    setupDescription:
      "Stand on a resistance band with both hands gripping the handles, palms facing forward.",
    repDescription:
      "Curl the handles toward your shoulders, squeezing your biceps at the top, then slowly lower back down.",
    type: "isolation",
  },
  {
    id: "389",
    name: "Dumbbell Drag Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Stand tall with a dumbbell in each hand, arms fully extended, palms facing forward.",
    repDescription:
      "Curl the dumbbells while keeping your elbows pulled back, dragging the dumbbells up your body, then lower back down.",
    type: "isolation",
  },
  {
    id: "390",
    name: "Machine Bicep Curl",
    bodyPart: "biceps",
    equipment: "Machine",
    setupDescription:
      "Sit on a bicep curl machine with your arms placed on the pads, holding the handles.",
    repDescription:
      "Curl the handles toward your shoulders, then slowly lower them back to the starting position.",
    type: "isolation",
  },
  {
    id: "391",
    name: "T-Bar Bicep Curl",
    bodyPart: "biceps",
    equipment: "T-Bar Machine or Barbell",
    setupDescription:
      "Position a T-bar machine or a barbell in a landmine attachment, holding the handles or bar with both hands.",
    repDescription:
      "Curl the weight toward your chest, squeezing your biceps at the top, then lower it back down.",
    type: "isolation",
  },
  {
    id: "392",
    name: "Bicep Curl with Kettlebell",
    bodyPart: "biceps",
    equipment: "Kettlebell",
    setupDescription:
      "Hold a kettlebell in each hand with your arms fully extended and palms facing forward.",
    repDescription:
      "Curl the kettlebells toward your shoulders, squeezing your biceps at the top, then slowly lower them back down.",
    type: "isolation",
  },
  {
    id: "393",
    name: "Incline Hammer Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells, Incline Bench",
    setupDescription:
      "Lie on an incline bench holding a dumbbell in each hand with your palms facing each other.",
    repDescription:
      "Curl the dumbbells toward your shoulders, keeping your palms facing each other, then lower them back down.",
    type: "isolation",
  },
  {
    id: "394",
    name: "Close-Grip Barbell Curl",
    bodyPart: "biceps",
    equipment: "Barbell",
    setupDescription:
      "Hold a barbell with a close underhand grip, keeping your arms fully extended.",
    repDescription:
      "Curl the barbell toward your chest, keeping your elbows stationary, then slowly lower it back down.",
    type: "isolation",
  },
  {
    id: "395",
    name: "Overhead Cable Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope handle to a high pulley and hold the rope with both hands.",
    repDescription:
      "Curl the rope toward your forehead, squeezing your biceps at the top, then slowly lower it back down.",
    type: "isolation",
  },
  {
    id: "396",
    name: "High Cable Bicep Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a straight bar to a high pulley and stand facing the machine.",
    repDescription:
      "Curl the bar toward your chest, squeezing your biceps at the top, then slowly lower it back down.",
    type: "isolation",
  },
  {
    id: "397",
    name: "Kettlebell Bicep Curl",
    bodyPart: "biceps",
    equipment: "Kettlebell",
    setupDescription: "Hold a kettlebell in each hand, palms facing forward.",
    repDescription:
      "Curl the kettlebells toward your shoulders, squeezing your biceps at the top, then lower back down.",
    type: "isolation",
  },
  {
    id: "398",
    name: "Resistance Band Hammer Curl",
    bodyPart: "biceps",
    equipment: "Resistance Bands",
    setupDescription:
      "Stand on a resistance band with both hands gripping the handles, palms facing each other.",
    repDescription:
      "Curl the handles toward your shoulders, keeping your palms facing each other, then lower back down.",
    type: "isolation",
  },
  {
    id: "399",
    name: "Bicep Cable Preacher Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine",
    setupDescription:
      "Set up a preacher bench and attach a cable machine at a low pulley position.",
    repDescription:
      "Curl the barbell or rope attachment toward your face, then slowly lower it back down.",
    type: "isolation",
  },
  {
    id: "400",
    name: "Barbell Bicep Curl with Chains",
    bodyPart: "biceps",
    equipment: "Barbell, Chains",
    setupDescription:
      "Add chains to a barbell and hold the bar with an underhand grip.",
    repDescription:
      "Curl the barbell toward your chest while the chains add resistance at the top of the movement.",
    type: "isolation",
  },
  {
    id: "401",
    name: "Dumbbell Curl with Twist",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand, arms fully extended and palms facing forward.",
    repDescription:
      "Curl the dumbbells toward your shoulders, twisting your wrist at the top to engage the bicep more, then lower them back down.",
    type: "isolation",
  },
  {
    id: "402",
    name: "Cable Rope Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a low pulley, grab the rope with both hands and stand facing the machine.",
    repDescription:
      "Curl the rope toward your face, keeping your elbows stationary, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "403",
    name: "Machine Preacher Curl",
    bodyPart: "biceps",
    equipment: "Machine",
    setupDescription:
      "Sit on the preacher curl machine with your upper arms on the pad and hands gripping the handles.",
    repDescription:
      "Curl the handles toward your shoulders, then lower them slowly to the starting position.",
    type: "isolation",
  },
  {
    id: "404",
    name: "Dumbbell Concentration Curl",
    bodyPart: "biceps",
    equipment: "Dumbbell",
    setupDescription:
      "Sit on a bench with legs apart and rest one elbow on the inside of your thigh, holding a dumbbell.",
    repDescription:
      "Curl the dumbbell toward your shoulder, squeeze at the top, then lower it slowly back down.",
    type: "isolation",
  },
  {
    id: "405",
    name: "Standing Bicep Curl with Resistance Bands",
    bodyPart: "biceps",
    equipment: "Resistance Bands",
    setupDescription:
      "Stand on a resistance band with both hands gripping the handles, palms facing forward.",
    repDescription:
      "Curl the handles toward your shoulders, keeping your elbows close to your torso, then lower slowly.",
    type: "isolation",
  },
  {
    id: "406",
    name: "Seated Dumbbell Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Sit on a bench with a dumbbell in each hand, arms fully extended.",
    repDescription:
      "Curl both dumbbells toward your shoulders, then lower them back down slowly.",
    type: "isolation",
  },
  {
    id: "407",
    name: "Machine Curl",
    bodyPart: "biceps",
    equipment: "Machine",
    setupDescription:
      "Sit on the machine with your arms positioned on the pads, gripping the handles.",
    repDescription:
      "Curl the handles toward your face, squeezing your biceps at the top, then slowly lower back down.",
    type: "isolation",
  },
  {
    id: "408",
    name: "Alternating Cable Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a handle to the low pulley on a cable machine, grab the handle with one hand.",
    repDescription:
      "Curl the handle toward your face, then slowly lower back down. Alternate arms with each rep.",
    type: "isolation",
  },
  {
    id: "409",
    name: "Overhead Dumbbell Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Sit on a bench with your back straight, holding a dumbbell in each hand above your head.",
    repDescription:
      "Curl both dumbbells down toward your shoulders, squeezing your biceps at the bottom, then extend them back to the top.",
    type: "isolation",
  },
  {
    id: "410",
    name: "Incline Barbell Curl",
    bodyPart: "biceps",
    equipment: "Barbell, Incline Bench",
    setupDescription:
      "Sit on an incline bench, holding a barbell with an underhand grip.",
    repDescription:
      "Curl the barbell toward your shoulders, keeping your elbows still, then lower it slowly back to the starting position.",
    type: "isolation",
  },
  {
    id: "411",
    name: "Resistance Band Bicep Curl",
    bodyPart: "biceps",
    equipment: "Resistance Bands",
    setupDescription:
      "Stand with a resistance band under your feet, holding the handles in each hand with your palms facing forward.",
    repDescription:
      "Curl the handles toward your shoulders, maintaining tension in the band, then lower back down.",
    type: "isolation",
  },
  {
    id: "412",
    name: "Bicep Curl on a Smith Machine",
    bodyPart: "biceps",
    equipment: "Smith Machine",
    setupDescription:
      "Set the bar on a Smith machine at the correct height, grip the bar with an underhand grip.",
    repDescription:
      "Curl the bar toward your chest, keeping your elbows stationary, then slowly lower back down.",
    type: "isolation",
  },
  {
    id: "413",
    name: "Overhead Cable Rope Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to the high pulley and grab the rope with both hands.",
    repDescription:
      "Curl the rope toward your face, squeezing your biceps at the top, then slowly lower it back down.",
    type: "isolation",
  },
  {
    id: "414",
    name: "One-Arm Dumbbell Curl",
    bodyPart: "biceps",
    equipment: "Dumbbell",
    setupDescription: "Stand with a dumbbell in one hand, arm fully extended.",
    repDescription:
      "Curl the dumbbell toward your shoulder, keeping your elbow stationary, then lower it back down.",
    type: "isolation",
  },
  {
    id: "415",
    name: "Dumbbell Alternate Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand, arms fully extended.",
    repDescription:
      "Curl one dumbbell toward your shoulder while keeping the other arm extended, then alternate arms.",
    type: "isolation",
  },
  {
    id: "416",
    name: "Cable Preacher Curl",
    bodyPart: "biceps",
    equipment: "Cable Machine",
    setupDescription:
      "Sit at a preacher curl bench with a low pulley in front of you, grab the bar attachment.",
    repDescription:
      "Curl the bar towards your face, then lower it slowly back down.",
    type: "isolation",
  },
  {
    id: "417",
    name: "Machine Bicep Curl with Plate Load",
    bodyPart: "biceps",
    equipment: "Machine, Weight Plates",
    setupDescription:
      "Sit at a plate-loaded bicep curl machine with your arms on the pads.",
    repDescription:
      "Curl the handles toward your face, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "418",
    name: "EZ Curl with Wide Grip",
    bodyPart: "biceps",
    equipment: "EZ Curl Bar",
    setupDescription: "Hold an EZ curl bar with a wide underhand grip.",
    repDescription:
      "Curl the bar towards your chest while keeping your elbows stationary, then lower it back down slowly.",
    type: "isolation",
  },
  {
    id: "419",
    name: "Decline Dumbbell Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells, Decline Bench",
    setupDescription:
      "Lie on a decline bench with a dumbbell in each hand, arms fully extended.",
    repDescription:
      "Curl the dumbbells toward your shoulders, squeezing your biceps at the top, then lower back down slowly.",
    type: "isolation",
  },
  {
    id: "420",
    name: "Barbell Bicep Curl with Close Grip",
    bodyPart: "biceps",
    equipment: "Barbell",
    setupDescription:
      "Hold a barbell with a close underhand grip, elbows at your sides.",
    repDescription:
      "Curl the barbell toward your chest, keeping your elbows stationary, then lower it slowly back down.",
    type: "isolation",
  },
  {
    id: "421",
    name: "Hammer Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand, palms facing your torso.",
    repDescription:
      "Curl the dumbbells as you keep your palms facing each other, then lower back down.",
    type: "isolation",
  },
  {
    id: "422",
    name: "Zottman Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells",
    setupDescription: "Hold a dumbbell in each hand with your palms facing up.",
    repDescription:
      "Curl the dumbbells towards your shoulders, rotate your wrists at the top to palms facing down, then lower back slowly.",
    type: "isolation",
  },
  {
    id: "423",
    name: "Preacher Curl Machine",
    bodyPart: "biceps",
    equipment: "Machine",
    setupDescription:
      "Sit at the preacher curl machine with arms on the pad and hands gripping the handles.",
    repDescription:
      "Curl the handles toward your face, squeeze at the top, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "424",
    name: "Incline Dumbbell Curl",
    bodyPart: "biceps",
    equipment: "Dumbbells, Incline Bench",
    setupDescription:
      "Sit on an incline bench with a dumbbell in each hand, arms fully extended.",
    repDescription:
      "Curl both dumbbells toward your shoulders, squeezing at the top, then lower back slowly.",
    type: "isolation",
  },
  {
    id: "425",
    name: "Tricep Pushdown",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a high pulley on a cable machine, standing with feet shoulder-width apart.",
    repDescription:
      "Grab the rope with both hands, palms facing inward, and push the rope down until your arms are fully extended, then slowly return to starting position.",
    type: "isolation",
  },
  {
    id: "426",
    name: "Overhead Tricep Extension",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Sit or stand with a dumbbell held with both hands overhead.",
    repDescription:
      "Lower the dumbbell behind your head by bending your elbows, then extend your arms to the starting position.",
    type: "isolation",
  },
  {
    id: "427",
    name: "Skull Crushers",
    bodyPart: "triceps",
    equipment: "EZ Curl Bar",
    setupDescription:
      "Lie on a bench holding an EZ curl bar with an overhand grip, arms extended toward the ceiling.",
    repDescription:
      "Lower the bar toward your forehead by bending your elbows, then extend your arms back to the starting position.",
    type: "isolation",
  },
  {
    id: "428",
    name: "Dips",
    bodyPart: "triceps",
    equipment: "Dip Bars",
    setupDescription:
      "Place your hands on dip bars, arms extended with your body hanging between the bars.",
    repDescription:
      "Lower your body by bending your elbows until your upper arms are parallel to the ground, then press back up.",
    type: "compound",
  },
  {
    id: "429",
    name: "Close-Grip Bench Press",
    bodyPart: "triceps",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie on a flat bench holding a barbell with a narrow grip, arms extended above your chest.",
    repDescription:
      "Lower the bar to your chest, keeping your elbows close to your sides, then press the bar back up.",
    type: "compound",
  },
  {
    id: "430",
    name: "Cable Tricep Kickback",
    bodyPart: "triceps",
    equipment: "Cable Machine, Single Handle",
    setupDescription:
      "Attach a single handle to a low pulley, grab the handle with one hand, and bend forward at the hips.",
    repDescription:
      "Extend your arm behind you until it's fully extended, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "431",
    name: "Tricep Dips on Bench",
    bodyPart: "triceps",
    equipment: "Bench",
    setupDescription:
      "Place your hands on a bench behind you, with your feet flat on the floor and your knees bent.",
    repDescription:
      "Lower your body by bending your elbows, then push yourself back up to the starting position.",
    type: "compound",
  },
  {
    id: "432",
    name: "Kickback with Dumbbell",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Bend forward at the hips with a dumbbell in one hand, your opposite hand resting on a bench.",
    repDescription:
      "Extend your arm backward until it is fully extended, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "433",
    name: "Tricep Machine Press",
    bodyPart: "triceps",
    equipment: "Machine",
    setupDescription:
      "Sit at the tricep press machine, grip the handles, and place your elbows on the pads.",
    repDescription:
      "Push the handles down until your arms are fully extended, then return to the starting position.",
    type: "compound",
  },
  {
    id: "434",
    name: "Overhead Cable Tricep Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope to a high pulley, step back, and grab the rope with both hands.",
    repDescription:
      "Pull the rope overhead with elbows bent, then extend your arms to fully stretch the rope.",
    type: "isolation",
  },
  {
    id: "435",
    name: "Diamond Push-Up",
    bodyPart: "triceps",
    equipment: "Bodyweight",
    setupDescription:
      "Get into a push-up position with your hands close together, forming a diamond shape with your fingers.",
    repDescription:
      "Lower your body toward the ground, keeping your elbows close to your torso, then push back up.",
    type: "compound",
  },
  {
    id: "436",
    name: "Single-Arm Tricep Pushdown",
    bodyPart: "triceps",
    equipment: "Cable Machine, Single Handle",
    setupDescription:
      "Attach a single handle to a cable machine, grab the handle with one hand, and stand facing the machine.",
    repDescription:
      "Push the handle down with one arm until it is fully extended, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "437",
    name: "Tricep Rope Pushdown",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a high pulley, grab both ends with palms facing each other.",
    repDescription:
      "Push the rope downward until your arms are fully extended, then return to starting position.",
    type: "isolation",
  },
  {
    id: "438",
    name: "Barbell Tricep Extension",
    bodyPart: "triceps",
    equipment: "Barbell",
    setupDescription: "Hold a barbell with both hands, arms extended overhead.",
    repDescription:
      "Lower the barbell behind your head by bending your elbows, then extend your arms back to starting position.",
    type: "isolation",
  },
  {
    id: "439",
    name: "Reverse Grip Tricep Pushdown",
    bodyPart: "triceps",
    equipment: "Cable Machine, Bar Attachment",
    setupDescription:
      "Attach a straight bar to a high pulley and grip the bar with an underhand grip.",
    repDescription:
      "Push the bar down until your arms are fully extended, keeping your elbows at your sides.",
    type: "isolation",
  },
  {
    id: "440",
    name: "Dumbbell Tricep Kickback",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Bend forward at the hips, holding a dumbbell in each hand with your elbows bent.",
    repDescription:
      "Extend both arms behind you until fully extended, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "441",
    name: "Incline Tricep Press",
    bodyPart: "triceps",
    equipment: "Barbell, Incline Bench",
    setupDescription:
      "Lie on an incline bench holding a barbell with an overhand grip.",
    repDescription:
      "Lower the barbell to your forehead by bending your elbows, then press back up.",
    type: "compound",
  },
  {
    id: "442",
    name: "Tricep Kickback with Cable",
    bodyPart: "triceps",
    equipment: "Cable Machine, Single Handle",
    setupDescription:
      "Attach a single handle to a low pulley, bend forward at the waist with one hand on the cable handle.",
    repDescription:
      "Extend your arm behind you, fully extending at the elbow, then return to starting position.",
    type: "isolation",
  },
  {
    id: "443",
    name: "Cable Lying Tricep Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine",
    setupDescription:
      "Lie on a flat bench under a high pulley machine with a rope attachment.",
    repDescription:
      "Extend your arms to the ceiling, then lower the rope behind your head, extending your elbows.",
    type: "isolation",
  },
  {
    id: "444",
    name: "Reverse Close-Grip Bench Press",
    bodyPart: "triceps",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie on a bench holding a barbell with a reverse (overhand) grip.",
    repDescription:
      "Lower the barbell to your chest, keeping your elbows close to your sides, then press back up.",
    type: "compound",
  },
  {
    id: "445",
    name: "Tricep Bench Dip",
    bodyPart: "triceps",
    equipment: "Bench",
    setupDescription:
      "Place your hands behind you on a bench with your feet extended forward on the floor.",
    repDescription:
      "Lower your body by bending your elbows until they reach a 90-degree angle, then press back up.",
    type: "compound",
  },
  {
    id: "446",
    name: "Rope Overhead Tricep Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a high pulley and stand facing away from the machine.",
    repDescription:
      "Grab the rope with both hands and extend your arms overhead, then slowly lower the rope back behind your head.",
    type: "isolation",
  },
  {
    id: "447",
    name: "Single-Arm Overhead Tricep Extension",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Hold a dumbbell with one hand and extend your arm overhead.",
    repDescription:
      "Lower the dumbbell behind your head by bending your elbow, then extend your arm back to the starting position.",
    type: "isolation",
  },
  {
    id: "448",
    name: "Decline Tricep Push-Up",
    bodyPart: "triceps",
    equipment: "Bodyweight, Bench",
    setupDescription:
      "Place your feet on a bench and hands on the floor, in a push-up position.",
    repDescription:
      "Lower your body until your chest nearly touches the floor, then push yourself back up.",
    type: "compound",
  },
  {
    id: "449",
    name: "Bodyweight Tricep Dips",
    bodyPart: "triceps",
    equipment: "Bodyweight, Parallel Bars",
    setupDescription:
      "Place your hands on parallel bars, body hanging between them.",
    repDescription:
      "Lower your body by bending your elbows, then press back up to the starting position.",
    type: "compound",
  },
  {
    id: "450",
    name: "Dumbbell Tricep Extension",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Sit on a bench and hold a dumbbell with both hands, arms extended overhead.",
    repDescription:
      "Lower the dumbbell behind your head, then extend your arms back to the starting position.",
    type: "isolation",
  },
  {
    id: "451",
    name: "Tricep Extension Machine",
    bodyPart: "triceps",
    equipment: "Machine",
    setupDescription:
      "Sit at the tricep extension machine, adjusting the pad so that your arms are at the correct angle.",
    repDescription:
      "Push the handles downward, extending your arms fully, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "452",
    name: "Standing Tricep Rope Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a high pulley, grip the rope with both hands, and stand facing the machine.",
    repDescription:
      "Pull the rope overhead, then extend your arms fully, bringing the rope behind your head.",
    type: "isolation",
  },
  {
    id: "453",
    name: "Seated Tricep Pushdown",
    bodyPart: "triceps",
    equipment: "Cable Machine",
    setupDescription:
      "Sit on a bench facing a cable machine with a bar attachment at shoulder height.",
    repDescription:
      "Push the bar down until your arms are fully extended, then return to starting position.",
    type: "isolation",
  },
  {
    id: "454",
    name: "Two-Arm Dumbbell Tricep Extension",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Hold a dumbbell with both hands, arms extended overhead.",
    repDescription:
      "Lower the dumbbell behind your head, then extend your arms back to the starting position.",
    type: "isolation",
  },
  {
    id: "455",
    name: "Tricep Close-Grip Push-Up",
    bodyPart: "triceps",
    equipment: "Bodyweight",
    setupDescription:
      "Place your hands closer together than usual in a push-up position.",
    repDescription:
      "Lower your body to the ground, keeping elbows close to your sides, then push back up.",
    type: "compound",
  },
  {
    id: "456",
    name: "Cable Lying Tricep Pushdown",
    bodyPart: "triceps",
    equipment: "Cable Machine",
    setupDescription:
      "Lie on a bench with a cable machine overhead, using a rope attachment.",
    repDescription:
      "Pull the rope down toward your chest, extending your arms fully at the bottom.",
    type: "isolation",
  },
  {
    id: "457",
    name: "EZ Bar Tricep Extension",
    bodyPart: "triceps",
    equipment: "EZ Curl Bar",
    setupDescription:
      "Hold an EZ curl bar with both hands, arms extended overhead.",
    repDescription:
      "Lower the bar behind your head by bending your elbows, then extend your arms back to the starting position.",
    type: "isolation",
  },
  {
    id: "458",
    name: "Tricep Kickback Machine",
    bodyPart: "triceps",
    equipment: "Machine",
    setupDescription:
      "Sit at the tricep kickback machine with your arms extended in front of you.",
    repDescription:
      "Extend your arms behind you, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "459",
    name: "Single-Arm Cable Tricep Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a handle to the low pulley, grasp it with one hand, and stand facing the machine.",
    repDescription:
      "Extend your arm back, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "460",
    name: "Machine Tricep Press",
    bodyPart: "triceps",
    equipment: "Machine",
    setupDescription: "Sit at the tricep press machine and grip the handles.",
    repDescription:
      "Push the handles downward until your arms are fully extended, then return to the starting position.",
    type: "compound",
  },
  {
    id: "461",
    name: "Tricep Pushdown with V-Bar",
    bodyPart: "triceps",
    equipment: "Cable Machine, V-Bar Attachment",
    setupDescription:
      "Attach a V-bar to the high pulley of a cable machine, standing with feet shoulder-width apart.",
    repDescription:
      "Grasp the V-bar with both hands and pull it downward until your arms are fully extended, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "462",
    name: "Dumbbell Tricep Extension on Bench",
    bodyPart: "triceps",
    equipment: "Dumbbell, Bench",
    setupDescription:
      "Sit on a bench holding a dumbbell with both hands, arms extended overhead.",
    repDescription:
      "Lower the dumbbell behind your head by bending your elbows, then extend your arms back to the starting position.",
    type: "isolation",
  },
  {
    id: "463",
    name: "Standing Overhead Cable Tricep Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a high pulley and stand facing away from the machine.",
    repDescription:
      "Hold the rope with both hands, extend your arms overhead, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "464",
    name: "Barbell Close-Grip Tricep Press",
    bodyPart: "triceps",
    equipment: "Barbell",
    setupDescription:
      "Lie on a bench holding a barbell with an overhand, close grip.",
    repDescription:
      "Lower the barbell toward your chest, keeping your elbows close to your sides, then press back up.",
    type: "compound",
  },
  {
    id: "465",
    name: "Lying Tricep Rope Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Lie on a bench with a cable machine overhead, using a rope attachment.",
    repDescription:
      "Pull the rope down toward your chest, fully extending your arms at the bottom, then return to starting position.",
    type: "isolation",
  },
  {
    id: "466",
    name: "Bench Press with Close Grip",
    bodyPart: "triceps",
    equipment: "Barbell, Bench",
    setupDescription:
      "Lie on a bench and grip a barbell with your hands about shoulder-width apart.",
    repDescription:
      "Lower the barbell to your chest, keeping your elbows close to your torso, then press back up.",
    type: "compound",
  },
  {
    id: "467",
    name: "Seated Overhead Tricep Extension",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Sit on a bench with a dumbbell held with both hands overhead.",
    repDescription:
      "Lower the dumbbell behind your head by bending your elbows, then extend your arms back to the starting position.",
    type: "isolation",
  },
  {
    id: "468",
    name: "Tricep Extension with Barbell",
    bodyPart: "triceps",
    equipment: "Barbell",
    setupDescription: "Hold a barbell with both hands, arms extended overhead.",
    repDescription:
      "Lower the bar behind your head by bending your elbows, then extend your arms back to starting position.",
    type: "isolation",
  },
  {
    id: "469",
    name: "Cable Lying Tricep Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine",
    setupDescription:
      "Lie on a flat bench, and pull a rope from a high pulley, positioning it above your head.",
    repDescription:
      "Pull the rope forward to your chest, extending your elbows, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "470",
    name: "Overhead Tricep Rope Extension",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a high pulley, standing with your back facing the machine.",
    repDescription:
      "Pull the rope overhead, then extend your arms fully, bringing the rope behind your head.",
    type: "isolation",
  },
  {
    id: "471",
    name: "Machine Tricep Kickback",
    bodyPart: "triceps",
    equipment: "Machine",
    setupDescription:
      "Sit at the machine with your arms extended in front of you, gripping the handles.",
    repDescription:
      "Push the handles back, extending your arms fully behind you, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "472",
    name: "Tricep Pull-Down with Rope",
    bodyPart: "triceps",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to the high pulley of a cable machine, standing upright.",
    repDescription:
      "Pull the rope down until your arms are fully extended, then slowly return to the starting position.",
    type: "isolation",
  },
  {
    id: "473",
    name: "Dumbbell Kickback",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Bend forward at the waist, holding a dumbbell in each hand with your elbows bent.",
    repDescription:
      "Extend your arms fully behind you, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "474",
    name: "Single-Arm Dumbbell Tricep Kickback",
    bodyPart: "triceps",
    equipment: "Dumbbell",
    setupDescription:
      "Bend forward at the waist, holding a dumbbell in one hand with the elbow bent.",
    repDescription:
      "Extend your arm fully behind you, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "475",
    name: "Overhead Press",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with feet shoulder-width apart, holding a barbell at shoulder height with your hands slightly wider than shoulder-width.",
    repDescription:
      "Press the barbell overhead, fully extending your arms, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "476",
    name: "Dumbbell Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Sit or stand with a dumbbell in each hand at shoulder height.",
    repDescription:
      "Press the dumbbells overhead until your arms are fully extended, then lower them back to the starting position.",
    type: "compound",
  },
  {
    id: "477",
    name: "Arnold Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Sit or stand with a dumbbell in each hand at shoulder height, palms facing you.",
    repDescription:
      "Press the dumbbells overhead while rotating your palms to face forward, then return to starting position.",
    type: "compound",
  },
  {
    id: "478",
    name: "Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand by your sides, palms facing your body.",
    repDescription:
      "Lift the dumbbells out to the sides until your arms are parallel to the ground, then lower them back down.",
    type: "isolation",
  },
  {
    id: "479",
    name: "Front Raise",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand holding a dumbbell in each hand, arms extended in front of you.",
    repDescription:
      "Lift the dumbbells in front of you to shoulder height, then lower them back to the starting position.",
    type: "isolation",
  },
  {
    id: "480",
    name: "Rear Delt Fly",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Bend forward at the waist, holding a dumbbell in each hand with palms facing each other.",
    repDescription:
      "Raise the dumbbells out to your sides, keeping a slight bend in your elbows, then lower them back down.",
    type: "isolation",
  },
  {
    id: "481",
    name: "Cable Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Stand with a cable machine at your side, grasping the handle with one hand.",
    repDescription:
      "Pull the handle up to your side, keeping your arm straight, until it reaches shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "482",
    name: "Cable Face Pull",
    bodyPart: "shoulders",
    equipment: "Cable Machine, Rope Attachment",
    setupDescription:
      "Attach a rope to a high pulley, holding the rope with both hands in front of you.",
    repDescription:
      "Pull the rope toward your face, keeping your elbows high and squeezing your rear delts, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "483",
    name: "Upright Row",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with a barbell in front of you, hands shoulder-width apart.",
    repDescription:
      "Pull the barbell straight up to chin height, keeping it close to your body, then lower it back down.",
    type: "compound",
  },
  {
    id: "484",
    name: "Dumbbell Shrug",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription: "Stand with a dumbbell in each hand by your sides.",
    repDescription:
      "Shrug your shoulders up toward your ears, squeezing the traps at the top, then lower the dumbbells back down.",
    type: "isolation",
  },
  {
    id: "485",
    name: "Barbell Shrug",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with a barbell in front of you, gripping it with both hands.",
    repDescription:
      "Lift your shoulders toward your ears, squeezing your traps, then lower the barbell back down.",
    type: "isolation",
  },
  {
    id: "486",
    name: "Overhead Dumbbell Extension",
    bodyPart: "shoulders",
    equipment: "Dumbbell",
    setupDescription:
      "Hold a dumbbell with both hands overhead, arms fully extended.",
    repDescription:
      "Lower the dumbbell behind your head by bending your elbows, then extend your arms back overhead.",
    type: "isolation",
  },
  {
    id: "487",
    name: "Seated Dumbbell Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Sit on a bench with back support, holding a dumbbell in each hand at shoulder height.",
    repDescription:
      "Press the dumbbells overhead until your arms are fully extended, then lower them back to the starting position.",
    type: "compound",
  },
  {
    id: "488",
    name: "Landmine Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Landmine",
    setupDescription:
      "Stand with the landmine barbell in front of you, grasping the end with both hands.",
    repDescription:
      "Press the barbell upward until your arms are fully extended, then lower it back down.",
    type: "compound",
  },
  {
    id: "489",
    name: "Kettlebell Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Kettlebell",
    setupDescription:
      "Stand holding a kettlebell in one hand at shoulder height.",
    repDescription:
      "Press the kettlebell overhead until your arm is fully extended, then lower it back to the starting position.",
    type: "compound",
  },
  {
    id: "490",
    name: "Standing Barbell Press",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with a barbell at shoulder height, hands slightly wider than shoulder-width apart.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back down.",
    type: "compound",
  },
  {
    id: "491",
    name: "Dumbbell Reverse Fly",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Bend at the waist holding a dumbbell in each hand, palms facing each other.",
    repDescription:
      "Raise the dumbbells out to your sides, keeping a slight bend in your elbows, then lower them back down.",
    type: "isolation",
  },
  {
    id: "492",
    name: "Cable Lying Shoulder Extension",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Lie face down on a bench with a cable machine in front of you.",
    repDescription:
      "Extend your arms straight back, keeping your elbows slightly bent, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "493",
    name: "Standing Dumbbell Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand by your sides, palms facing your body.",
    repDescription:
      "Lift the dumbbells out to the sides, keeping your arms slightly bent, until they reach shoulder height, then lower them back down.",
    type: "isolation",
  },
  {
    id: "494",
    name: "Dumbbell Incline Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Set an incline bench to a slight angle and hold a dumbbell in each hand at chest height.",
    repDescription:
      "Press the dumbbells up overhead, extending your arms fully, then lower them back to the starting position.",
    type: "compound",
  },
  {
    id: "495",
    name: "Dumbbell Cuban Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand at shoulder height, elbows bent.",
    repDescription:
      "Rotate the dumbbells outward, then press them overhead while keeping the elbows bent and close to your head.",
    type: "compound",
  },
  {
    id: "496",
    name: "Standing Barbell Front Raise",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart and hold a barbell in front of your thighs.",
    repDescription:
      "Lift the barbell to shoulder height, keeping your arms straight, then lower it back down.",
    type: "isolation",
  },
  {
    id: "497",
    name: "Seated Barbell Press",
    bodyPart: "shoulders",
    equipment: "Barbell, Bench",
    setupDescription: "Sit on a bench with a barbell at shoulder height.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "498",
    name: "Dumbbell Upright Row",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand in front of your thighs.",
    repDescription:
      "Pull the dumbbells straight up toward your chin, keeping them close to your body, then lower them back down.",
    type: "compound",
  },
  {
    id: "499",
    name: "Cable Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Attach handles to a cable machine and set it to shoulder height.",
    repDescription:
      "Push the cables overhead until your arms are fully extended, then lower them back to the starting position.",
    type: "compound",
  },
  {
    id: "500",
    name: "Dumbbell Chest Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie on a flat bench holding a dumbbell in each hand at chest height.",
    repDescription:
      "Press the dumbbells overhead, fully extending your arms, then lower them back to the starting position.",
    type: "compound",
  },
  {
    id: "501",
    name: "Landmine Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Landmine",
    setupDescription:
      "Stand with a barbell inserted into a landmine attachment.",
    repDescription:
      "Grasp the barbell end with both hands and press it overhead, fully extending your arms, then lower it back down.",
    type: "compound",
  },
  {
    id: "502",
    name: "Dumbbell Lateral Raise (Single Arm)",
    bodyPart: "shoulders",
    equipment: "Dumbbell",
    setupDescription:
      "Stand with a dumbbell in one hand by your side, palm facing your body.",
    repDescription:
      "Lift the dumbbell to the side, keeping your arm straight, until it reaches shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "503",
    name: "Kettlebell Overhead Press",
    bodyPart: "shoulders",
    equipment: "Kettlebell",
    setupDescription: "Stand with a kettlebell in one hand at shoulder height.",
    repDescription:
      "Press the kettlebell overhead, fully extending your arm, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "504",
    name: "Wide-Grip Barbell Upright Row",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with a barbell in front of you, hands wider than shoulder-width apart.",
    repDescription:
      "Lift the barbell straight up to chin height, keeping your elbows higher than your wrists, then lower it back down.",
    type: "compound",
  },
  {
    id: "505",
    name: "Cable Front Raise",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription: "Set the cable machine to low and attach a handle.",
    repDescription:
      "Stand facing away from the machine and pull the handle forward, lifting it to shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "506",
    name: "Single-Arm Cable Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Stand with the cable machine to your side, grasping the handle.",
    repDescription:
      "Lift the handle to your side, keeping your arm straight, until it reaches shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "507",
    name: "Plate Front Raise",
    bodyPart: "shoulders",
    equipment: "Weight Plate",
    setupDescription:
      "Hold a weight plate with both hands in front of your thighs.",
    repDescription:
      "Lift the plate in front of you to shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "508",
    name: "Kettlebell Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Kettlebell",
    setupDescription: "Stand with a kettlebell in one hand by your side.",
    repDescription:
      "Lift the kettlebell to the side, keeping your arm straight, until it reaches shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "509",
    name: "Smith Machine Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Smith Machine",
    setupDescription: "Set the bar on the Smith machine at shoulder height.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back down.",
    type: "compound",
  },
  {
    id: "510",
    name: "Barbell Overhead Press",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription: "Stand with a barbell at shoulder height.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "511",
    name: "Standing Dumbbell Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height.",
    repDescription:
      "Press both dumbbells overhead until your arms are fully extended, then lower them back down to shoulder height.",
    type: "compound",
  },
  {
    id: "512",
    name: "Barbell Push Press",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with a barbell at shoulder height, hands just outside shoulder width.",
    repDescription:
      "Dip your knees slightly, then drive the barbell overhead using your legs and arms, then lower it back down.",
    type: "compound",
  },
  {
    id: "513",
    name: "Dumbbell Overhead Tricep Extension",
    bodyPart: "shoulders",
    equipment: "Dumbbell",
    setupDescription:
      "Sit or stand with a dumbbell held overhead with both hands.",
    repDescription:
      "Lower the dumbbell behind your head by bending your elbows, then extend your arms back overhead.",
    type: "isolation",
  },
  {
    id: "514",
    name: "Incline Dumbbell Front Raise",
    bodyPart: "shoulders",
    equipment: "Dumbbells, Bench",
    setupDescription: "Sit on an incline bench with a dumbbell in each hand.",
    repDescription:
      "Lift the dumbbells in front of you to shoulder height, then lower them back down.",
    type: "isolation",
  },
  {
    id: "515",
    name: "Dumbbell Reverse Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Hold a dumbbell in each hand at shoulder height with palms facing behind you.",
    repDescription:
      "Press the dumbbells overhead while keeping your elbows bent, then lower them back down.",
    type: "compound",
  },
  {
    id: "516",
    name: "Cable Shoulder Raise",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a handle to a low pulley and stand facing the machine.",
    repDescription:
      "Raise the handle in front of you to shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "517",
    name: "Kettlebell Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Kettlebell",
    setupDescription:
      "Stand with a kettlebell in each hand at shoulder height.",
    repDescription:
      "Press both kettlebells overhead, extending your arms fully, then lower them back down.",
    type: "compound",
  },
  {
    id: "518",
    name: "Dumbbell Shoulder Press (Neutral Grip)",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Sit or stand with a dumbbell in each hand, palms facing each other.",
    repDescription:
      "Press the dumbbells overhead until your arms are fully extended, then lower them back to shoulder height.",
    type: "compound",
  },
  {
    id: "519",
    name: "Cable Rear Delt Fly",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Set the cable machine at a high pulley and stand facing the machine.",
    repDescription:
      "Pull the cables back and out to your sides, keeping your elbows slightly bent, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "520",
    name: "Seated Military Press",
    bodyPart: "shoulders",
    equipment: "Barbell, Bench",
    setupDescription:
      "Sit on a bench with back support and hold a barbell at shoulder height.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "521",
    name: "Dumbbell Lateral Raise with Pause",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription: "Stand with a dumbbell in each hand by your sides.",
    repDescription:
      "Lift the dumbbells to the sides to shoulder height, hold for a second, then lower them back down.",
    type: "isolation",
  },
  {
    id: "522",
    name: "Standing Military Press",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with a barbell at shoulder height, hands slightly wider than shoulder-width.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back down.",
    type: "compound",
  },
  {
    id: "523",
    name: "Dumbbell Scaption",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription: "Stand holding a dumbbell in each hand by your sides.",
    repDescription:
      "Lift the dumbbells at a 45-degree angle in front of you, keeping your arms slightly bent, until they reach shoulder height, then lower them back down.",
    type: "isolation",
  },
  {
    id: "524",
    name: "Overhead Barbell Extension",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Hold a barbell with both hands overhead, arms fully extended.",
    repDescription:
      "Lower the barbell behind your head by bending your elbows, then extend your arms back overhead.",
    type: "isolation",
  },
  {
    id: "525",
    name: "Dumbbell Front Raise (Alternating)",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand in front of your thighs.",
    repDescription:
      "Lift one dumbbell to shoulder height, then lower it and repeat with the other arm.",
    type: "isolation",
  },
  {
    id: "526",
    name: "Landmine Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Landmine",
    setupDescription: "Stand with a landmine barbell in front of you.",
    repDescription:
      "Lift the end of the barbell to the side, keeping your arm straight, until it reaches shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "527",
    name: "Overhead Cable Extension",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription: "Attach a rope handle to a high pulley.",
    repDescription:
      "Pull the rope overhead with both hands, keeping your arms fully extended, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "528",
    name: "Chest-Supported Rear Delt Raise",
    bodyPart: "shoulders",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Lie face down on an incline bench, holding a dumbbell in each hand.",
    repDescription:
      "Raise the dumbbells out to your sides, squeezing your shoulder blades together, then lower them back down.",
    type: "isolation",
  },
  {
    id: "529",
    name: "Seated Dumbbell Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Sit on a bench with a dumbbell in each hand by your sides.",
    repDescription:
      "Lift the dumbbells to your sides until they reach shoulder height, then lower them back down.",
    type: "isolation",
  },
  {
    id: "530",
    name: "Standing Barbell Overhead Press",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription:
      "Stand with your feet shoulder-width apart and hold a barbell at shoulder height.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "531",
    name: "Seated Military Press",
    bodyPart: "shoulders",
    equipment: "Barbell, Bench",
    setupDescription:
      "Sit on a bench with back support and hold a barbell at shoulder height.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "532",
    name: "Front Plate Raise",
    bodyPart: "shoulders",
    equipment: "Weight Plate",
    setupDescription:
      "Stand holding a weight plate with both hands in front of your thighs.",
    repDescription:
      "Lift the weight plate in front of you to shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "533",
    name: "Dumbbell Lateral Raise (Seated)",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Sit on a bench with a dumbbell in each hand by your sides.",
    repDescription:
      "Lift both dumbbells to the sides until they reach shoulder height, then lower them back down.",
    type: "isolation",
  },
  {
    id: "534",
    name: "Landmine Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Landmine",
    setupDescription:
      "Stand with the end of a barbell placed in a landmine attachment, holding the other end with both hands.",
    repDescription:
      "Press the barbell overhead, extending your arms fully, then lower it back down.",
    type: "compound",
  },
  {
    id: "535",
    name: "Dumbbell Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Sit or stand with a dumbbell in each hand at shoulder height.",
    repDescription:
      "Press the dumbbells overhead until your arms are fully extended, then lower them back to shoulder height.",
    type: "compound",
  },
  {
    id: "536",
    name: "Cable Front Raise",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a handle to a low pulley and stand facing the machine.",
    repDescription:
      "Lift the handle in front of you to shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "537",
    name: "Single-Arm Cable Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a handle to a low pulley and stand side-on to the machine.",
    repDescription:
      "Lift the handle to the side until your arm is parallel to the floor, then lower it back down.",
    type: "isolation",
  },
  {
    id: "538",
    name: "Dumbbell Upright Row",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Stand with a dumbbell in each hand in front of your thighs.",
    repDescription:
      "Lift the dumbbells toward your chin, keeping your elbows higher than your wrists, then lower them back down.",
    type: "compound",
  },
  {
    id: "539",
    name: "Barbell Lateral Raise",
    bodyPart: "shoulders",
    equipment: "Barbell",
    setupDescription: "Stand with a barbell in front of you at hip height.",
    repDescription:
      "Raise the barbell to the sides to shoulder height, then lower it back down.",
    type: "isolation",
  },
  {
    id: "540",
    name: "Dumbbell Shrug",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription: "Stand with a dumbbell in each hand by your sides.",
    repDescription:
      "Shrug your shoulders up toward your ears, hold for a moment, then lower them back down.",
    type: "isolation",
  },
  {
    id: "541",
    name: "Standing Dumbbell Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription: "Stand with a dumbbell in each hand at shoulder height.",
    repDescription:
      "Press both dumbbells overhead until your arms are fully extended, then lower them back down.",
    type: "compound",
  },
  {
    id: "542",
    name: "Cable Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a handle to a low pulley and stand facing the machine.",
    repDescription:
      "Press the handle overhead until your arms are fully extended, then lower it back down.",
    type: "compound",
  },
  {
    id: "543",
    name: "Dumbbell Lateral Raise with Hold",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription: "Stand with a dumbbell in each hand by your sides.",
    repDescription:
      "Raise the dumbbells to shoulder height, hold for a moment, then lower them back down.",
    type: "isolation",
  },
  {
    id: "544",
    name: "Dumbbell Arnold Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Hold a dumbbell in each hand with palms facing you at shoulder height.",
    repDescription:
      "Press the dumbbells overhead while rotating your wrists so your palms face forward at the top, then reverse the motion as you lower the dumbbells.",
    type: "compound",
  },
  {
    id: "545",
    name: "Seated Dumbbell Front Raise",
    bodyPart: "shoulders",
    equipment: "Dumbbells, Bench",
    setupDescription:
      "Sit on a bench with a dumbbell in each hand by your sides.",
    repDescription:
      "Lift one dumbbell in front of you to shoulder height, then lower it back down and repeat with the other arm.",
    type: "isolation",
  },
  {
    id: "546",
    name: "Reverse Pec Deck",
    bodyPart: "shoulders",
    equipment: "Pec Deck Machine",
    setupDescription:
      "Sit on the machine facing the back pad and hold the handles in front of you.",
    repDescription:
      "Pull the handles back and out to the sides, squeezing your shoulder blades together, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "547",
    name: "Dumbbell Cuban Press",
    bodyPart: "shoulders",
    equipment: "Dumbbells",
    setupDescription:
      "Hold a dumbbell in each hand at shoulder height with your palms facing down.",
    repDescription:
      "Rotate your shoulders so your elbows are pointed out, then press the dumbbells overhead while rotating your wrists.",
    type: "compound",
  },
  {
    id: "548",
    name: "Cable Face Pull",
    bodyPart: "shoulders",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope handle to a high pulley and stand facing the machine.",
    repDescription:
      "Pull the rope toward your face, keeping your elbows high and wide, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "549",
    name: "Seated Barbell Shoulder Press",
    bodyPart: "shoulders",
    equipment: "Barbell, Bench",
    setupDescription:
      "Sit on a bench with back support and hold a barbell at shoulder height.",
    repDescription:
      "Press the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
    type: "compound",
  },
  {
    id: "550",
    name: "Plank",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Start in a forearm plank position with your body in a straight line from head to heels.",
    repDescription:
      "Hold the position, keeping your core engaged and your body straight.",
    type: "isolation",
  },
  {
    id: "551",
    name: "Russian Twist",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Sit on the floor with your knees bent and feet flat, holding your hands together in front of your chest.",
    repDescription:
      "Lean back slightly and rotate your torso to each side while keeping your core tight.",
    type: "isolation",
  },
  {
    id: "552",
    name: "Bicycle Crunch",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your hands behind your head and legs extended.",
    repDescription:
      "Bring one knee toward your chest while rotating your torso to bring the opposite elbow toward that knee. Alternate sides in a pedaling motion.",
    type: "isolation",
  },
  {
    id: "553",
    name: "Leg Raises",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your legs extended and your arms at your sides.",
    repDescription:
      "Lift your legs towards the ceiling while keeping them straight, then lower them back down without touching the floor.",
    type: "isolation",
  },
  {
    id: "554",
    name: "Mountain Climbers",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Start in a high plank position with your arms straight and your body in a straight line.",
    repDescription:
      "Drive one knee towards your chest, then quickly switch legs, as if you're climbing. Continue alternating legs.",
    type: "compound",
  },
  {
    id: "555",
    name: "Hanging Leg Raise",
    bodyPart: "core",
    equipment: "Pull-up Bar",
    setupDescription:
      "Hang from a pull-up bar with your arms extended and legs straight.",
    repDescription:
      "Lift your legs towards your chest, keeping them straight, then lower them back down.",
    type: "isolation",
  },
  {
    id: "556",
    name: "Cable Woodchopper",
    bodyPart: "core",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope handle to a high pulley and stand side-on to the machine.",
    repDescription:
      "Pull the rope down diagonally across your body, twisting your torso as you do. Return to the starting position.",
    type: "compound",
  },
  {
    id: "557",
    name: "Flutter Kicks",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your legs extended and hands under your hips for support.",
    repDescription:
      "Lift your legs off the ground and alternate kicking them up and down in a fluttering motion.",
    type: "isolation",
  },
  {
    id: "558",
    name: "Side Plank",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your side with your legs stacked and your elbow directly beneath your shoulder.",
    repDescription:
      "Lift your hips off the ground, keeping your body in a straight line, and hold the position.",
    type: "isolation",
  },
  {
    id: "559",
    name: "Ab Wheel Rollout",
    bodyPart: "core",
    equipment: "Ab Wheel",
    setupDescription:
      "Kneel on the floor with your hands gripping an ab wheel.",
    repDescription:
      "Roll the wheel forward, extending your body as far as you can without arching your back, then roll back to the starting position.",
    type: "compound",
  },
  {
    id: "560",
    name: "V-Ups",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your arms extended overhead and legs straight.",
    repDescription:
      "Simultaneously lift your legs and torso, reaching your hands toward your toes to form a V shape, then lower back down.",
    type: "isolation",
  },
  {
    id: "561",
    name: "Toe Touch Crunches",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your legs extended and arms reaching toward the ceiling.",
    repDescription:
      "Crunch your upper body towards your legs, trying to touch your toes while keeping your legs straight.",
    type: "isolation",
  },
  {
    id: "562",
    name: "Reverse Crunches",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your hands by your sides and legs bent at 90 degrees.",
    repDescription:
      "Lift your hips off the ground, bringing your knees toward your chest, then lower back down.",
    type: "isolation",
  },
  {
    id: "563",
    name: "Medicine Ball Sit-Up",
    bodyPart: "core",
    equipment: "Medicine Ball",
    setupDescription:
      "Lie on your back with a medicine ball held at chest level.",
    repDescription:
      "Perform a sit-up, extending the medicine ball overhead as you sit up, then return to the starting position.",
    type: "compound",
  },
  {
    id: "564",
    name: "Plank to Push-Up",
    bodyPart: "core",
    equipment: "None",
    setupDescription: "Start in a forearm plank position.",
    repDescription:
      "Push up onto your hands, one arm at a time, and then lower back down to your forearms.",
    type: "compound",
  },
  {
    id: "565",
    name: "Cable Ab Crunch",
    bodyPart: "core",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope handle to a high pulley and kneel down in front of the machine.",
    repDescription:
      "Pull the rope down towards your knees, crunching your torso as you do.",
    type: "isolation",
  },
  {
    id: "566",
    name: "Oblique V-Up",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your side with your legs extended and one arm reaching overhead.",
    repDescription:
      "Lift your legs and torso simultaneously, bringing your elbow toward your knees to form a V shape.",
    type: "isolation",
  },
  {
    id: "567",
    name: "Windshield Wipers",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your legs extended and arms out to the sides.",
    repDescription:
      "Lift your legs off the ground and move them side to side in a windshield-wiper motion.",
    type: "isolation",
  },
  {
    id: "568",
    name: "Dragon Flag",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on a bench and hold onto the edge with your hands behind your head.",
    repDescription:
      "Lift your legs and torso off the bench, keeping your body straight, then lower back down without touching the bench.",
    type: "compound",
  },
  {
    id: "569",
    name: "Jackknife Sit-Up",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your arms extended overhead and legs straight.",
    repDescription:
      "Simultaneously lift your legs and torso to meet in the middle, then lower back down.",
    type: "isolation",
  },
  {
    id: "570",
    name: "Hanging Oblique Raise",
    bodyPart: "core",
    equipment: "Pull-up Bar",
    setupDescription:
      "Hang from a pull-up bar with your body straight and legs extended.",
    repDescription:
      "Raise your legs to one side while twisting your torso, then lower back down.",
    type: "isolation",
  },
  {
    id: "571",
    name: "Ab Rollout",
    bodyPart: "core",
    equipment: "Ab Wheel",
    setupDescription:
      "Kneel on the floor with your hands gripping an ab wheel.",
    repDescription:
      "Roll the wheel forward, extending your body as far as you can, then return to the starting position.",
    type: "compound",
  },
  {
    id: "572",
    name: "Kettlebell Russian Twist",
    bodyPart: "core",
    equipment: "Kettlebell",
    setupDescription:
      "Sit on the floor with your knees bent, holding a kettlebell with both hands.",
    repDescription:
      "Lean back slightly and rotate your torso from side to side while holding the kettlebell.",
    type: "isolation",
  },
  {
    id: "573",
    name: "Seated Leg Raise",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Sit on the edge of a bench with your legs extended and your hands gripping the sides.",
    repDescription:
      "Lift your legs toward your chest, then lower them back down.",
    type: "isolation",
  },
  {
    id: "574",
    name: "Standing Cable Crunch",
    bodyPart: "core",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope to a high pulley and stand facing the machine.",
    repDescription:
      "Pull the rope down towards your knees, bending at the waist while keeping your torso stationary.",
    type: "isolation",
  },
  {
    id: "575",
    name: "Plank with Arm Lift",
    bodyPart: "core",
    equipment: "None",
    setupDescription: "Start in a forearm plank position.",
    repDescription:
      "Lift one arm off the ground and extend it straight in front of you, then return to the starting position and alternate arms.",
    type: "compound",
  },
  {
    id: "576",
    name: "Side Plank with Leg Raise",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Start in a side plank position with your body in a straight line.",
    repDescription:
      "Raise your top leg upwards, then lower it back down while maintaining the side plank.",
    type: "isolation",
  },
  {
    id: "577",
    name: "Reverse Crunch with Twist",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your hands by your sides and legs bent.",
    repDescription:
      "Lift your hips off the ground and twist your torso to one side, bringing your knees towards your chest.",
    type: "isolation",
  },
  {
    id: "578",
    name: "V-Sit",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Sit on the floor with your legs extended in front of you and arms reaching overhead.",
    repDescription:
      "Lift both your torso and legs to form a V shape, then lower them back down.",
    type: "isolation",
  },
  {
    id: "579",
    name: "Cable Oblique Twist",
    bodyPart: "core",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a rope handle to a low pulley and stand side-on to the machine.",
    repDescription:
      "Twist your torso from side to side, pulling the rope across your body with each rotation.",
    type: "compound",
  },
  {
    id: "580",
    name: "Lying Leg Raises",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your legs extended and hands by your sides.",
    repDescription:
      "Lift your legs towards the ceiling, then lower them back down without letting them touch the floor.",
    type: "isolation",
  },
  {
    id: "581",
    name: "Abdominal Crunch on Stability Ball",
    bodyPart: "core",
    equipment: "Stability Ball",
    setupDescription:
      "Sit on a stability ball with your feet flat on the floor, then roll your lower back over the ball.",
    repDescription:
      "Perform a crunch by lifting your torso towards your knees while keeping your lower back on the ball.",
    type: "isolation",
  },
  {
    id: "582",
    name: "Bird Dog",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Start on your hands and knees with your hands under your shoulders and knees under your hips.",
    repDescription:
      "Extend one arm forward while extending the opposite leg back, keeping your torso stable. Return to starting position and repeat on the other side.",
    type: "compound",
  },
  {
    id: "583",
    name: "Reverse Plank",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Sit on the floor with your legs extended and hands behind you, fingers pointing towards your feet.",
    repDescription:
      "Lift your hips off the ground, forming a straight line from your head to your heels.",
    type: "isolation",
  },
  {
    id: "584",
    name: "Dumbbell Side Bend",
    bodyPart: "core",
    equipment: "Dumbbell",
    setupDescription:
      "Stand with your feet shoulder-width apart, holding a dumbbell in one hand.",
    repDescription:
      "Bend to the side, bringing the dumbbell towards your knee, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "585",
    name: "Sit-Up with Medicine Ball",
    bodyPart: "core",
    equipment: "Medicine Ball",
    setupDescription:
      "Lie on your back with your knees bent and holding a medicine ball at chest level.",
    repDescription:
      "Perform a sit-up, extending the medicine ball overhead as you come up, then return to the starting position.",
    type: "compound",
  },
  {
    id: "586",
    name: "Flutter Kicks with Hold",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your legs extended and hands under your hips for support.",
    repDescription:
      "Kick your legs up and down while holding the position for a set amount of time.",
    type: "isolation",
  },
  {
    id: "587",
    name: "Scissor Kicks",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your legs extended and arms by your sides.",
    repDescription:
      "Lift your legs off the ground and cross them over each other in a scissoring motion.",
    type: "isolation",
  },
  {
    id: "588",
    name: "Swiss Ball Pass",
    bodyPart: "core",
    equipment: "Stability Ball",
    setupDescription:
      "Lie on your back holding a stability ball between your hands and legs.",
    repDescription:
      "Lift your legs and arms to pass the ball between your hands and legs, then lower back down.",
    type: "compound",
  },
  {
    id: "589",
    name: "Dumbbell Russian Twist",
    bodyPart: "core",
    equipment: "Dumbbell",
    setupDescription:
      "Sit on the floor with your knees bent and feet flat, holding a dumbbell with both hands.",
    repDescription:
      "Lean back slightly and rotate your torso to each side, holding the dumbbell throughout.",
    type: "isolation",
  },
  {
    id: "590",
    name: "Superman Hold",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie face down on the floor with your arms extended in front of you.",
    repDescription:
      "Lift your arms, chest, and legs off the ground, holding the position while keeping your body in a straight line.",
    type: "isolation",
  },
  {
    id: "591",
    name: "Leg Raise and Twist",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your legs extended and arms by your sides.",
    repDescription:
      "Lift your legs and twist them to each side in a controlled manner, alternating sides.",
    type: "isolation",
  },
  {
    id: "592",
    name: "Tuck Crunch",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Sit on the floor with your knees bent and hands behind your head.",
    repDescription:
      "Lift your torso toward your knees, curling up into a tuck position, then return to starting position.",
    type: "isolation",
  },
  {
    id: "593",
    name: "Cable Woodchoppers",
    bodyPart: "core",
    equipment: "Cable Machine",
    setupDescription:
      "Attach a handle to a high pulley and stand side-on to the machine.",
    repDescription:
      "Pull the handle down diagonally across your body, twisting your torso and engaging your core.",
    type: "compound",
  },
  {
    id: "594",
    name: "Standing Oblique Crunch",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Stand with your feet shoulder-width apart and place your hands behind your head.",
    repDescription:
      "Bend your torso to one side, bringing your elbow down toward your hip, then return to the starting position.",
    type: "isolation",
  },
  {
    id: "595",
    name: "Bicycle Crunch",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your hands behind your head and legs extended.",
    repDescription:
      "Bring one knee toward your chest while simultaneously twisting your torso to bring the opposite elbow toward the knee, alternating sides.",
    type: "compound",
  },
  {
    id: "596",
    name: "Plank with Leg Lift",
    bodyPart: "core",
    equipment: "None",
    setupDescription: "Start in a forearm plank position.",
    repDescription:
      "Lift one leg off the ground, holding for a moment before lowering it back down. Alternate legs.",
    type: "compound",
  },
  {
    id: "597",
    name: "V-Up",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your arms extended above your head and legs straight.",
    repDescription:
      "Simultaneously lift your legs and torso to form a V shape, reaching your hands toward your feet.",
    type: "isolation",
  },
  {
    id: "598",
    name: "Mountain Climbers",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Start in a push-up position with your body in a straight line.",
    repDescription:
      "Drive one knee towards your chest, then quickly switch legs as if running in place.",
    type: "compound",
  },
  {
    id: "599",
    name: "Heel Touches",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your knees bent and feet flat on the floor.",
    repDescription:
      "Reach down toward your heels while engaging your obliques, alternating sides.",
    type: "isolation",
  },
  {
    id: "600",
    name: "Side Plank with Hip Dips",
    bodyPart: "core",
    equipment: "None",
    setupDescription: "Start in a side plank position.",
    repDescription:
      "Lower your hips towards the floor, then lift them back up, engaging your obliques.",
    type: "isolation",
  },
  {
    id: "601",
    name: "Leg Raise to Hip Thrust",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie flat on your back with your hands by your sides and legs extended.",
    repDescription:
      "Lift your legs and thrust your hips off the floor, then lower your legs back down.",
    type: "compound",
  },
  {
    id: "602",
    name: "Russian Twist with Medicine Ball",
    bodyPart: "core",
    equipment: "Medicine Ball",
    setupDescription:
      "Sit on the floor with your knees bent and feet flat, holding a medicine ball with both hands.",
    repDescription:
      "Lean back slightly and rotate your torso from side to side while holding the medicine ball.",
    type: "isolation",
  },
  {
    id: "603",
    name: "Hanging Leg Raise",
    bodyPart: "core",
    equipment: "Pull-Up Bar",
    setupDescription: "Hang from a pull-up bar with your legs extended.",
    repDescription:
      "Raise your legs towards your chest, then slowly lower them back down.",
    type: "compound",
  },
  {
    id: "604",
    name: "Knee Tuck on Stability Ball",
    bodyPart: "core",
    equipment: "Stability Ball",
    setupDescription:
      "Place your shins on a stability ball and your hands on the floor.",
    repDescription:
      "Roll the ball towards your chest by bending your knees, then return to the starting position.",
    type: "compound",
  },
  {
    id: "605",
    name: "Hip Bridge",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your knees bent and feet flat on the floor.",
    repDescription:
      "Lift your hips towards the ceiling while engaging your glutes and core, then lower back down.",
    type: "compound",
  },
  {
    id: "606",
    name: "Lying Leg Circles",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your legs extended and arms by your sides.",
    repDescription:
      "Lift your legs off the floor and make small circles, then reverse direction.",
    type: "isolation",
  },
  {
    id: "607",
    name: "Boat Pose",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Sit on the floor with your knees bent and your torso upright.",
    repDescription:
      "Lift your legs so that your body forms a V shape, balancing on your sit bones.",
    type: "isolation",
  },
  {
    id: "608",
    name: "Plank with Shoulder Taps",
    bodyPart: "core",
    equipment: "None",
    setupDescription: "Start in a high plank position.",
    repDescription:
      "Tap your left shoulder with your right hand, then your right shoulder with your left hand, alternating sides.",
    type: "compound",
  },
  {
    id: "609",
    name: "Ab Twist with Medicine Ball",
    bodyPart: "core",
    equipment: "Medicine Ball",
    setupDescription:
      "Sit on the floor with your knees bent and hold a medicine ball with both hands.",
    repDescription:
      "Twist your torso to each side, touching the medicine ball to the floor beside you.",
    type: "isolation",
  },
  {
    id: "610",
    name: "Frog Crunch",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your knees bent and feet together.",
    repDescription:
      "Perform a crunch, bringing your chest toward your knees while keeping your feet together.",
    type: "isolation",
  },
  {
    id: "611",
    name: "Stability Ball Rollout",
    bodyPart: "core",
    equipment: "Stability Ball",
    setupDescription: "Kneel on the floor with your hands on a stability ball.",
    repDescription:
      "Roll the ball forward, extending your body as far as you can, then return to the starting position.",
    type: "compound",
  },
  {
    id: "612",
    name: "Side Plank with Leg Lift",
    bodyPart: "core",
    equipment: "None",
    setupDescription: "Start in a side plank position.",
    repDescription:
      "Lift your top leg upwards, then lower it back down while maintaining the side plank.",
    type: "isolation",
  },
  {
    id: "613",
    name: "Spider Plank",
    bodyPart: "core",
    equipment: "None",
    setupDescription: "Start in a high plank position.",
    repDescription:
      "Bring one knee towards your elbow, then return to the starting position and alternate legs.",
    type: "compound",
  },
  {
    id: "614",
    name: "Leg Raise with Twist",
    bodyPart: "core",
    equipment: "None",
    setupDescription:
      "Lie on your back with your legs extended and arms by your sides.",
    repDescription:
      "Lift your legs towards the ceiling, then twist your hips to each side.",
    type: "isolation",
  },
  {
    id: "615",
    name: "Crunch on Stability Ball",
    bodyPart: "core",
    equipment: "Stability Ball",
    setupDescription:
      "Sit on a stability ball with your feet flat on the floor.",
    repDescription:
      "Perform a crunch while keeping your lower back supported on the ball.",
    type: "isolation",
  },
];
