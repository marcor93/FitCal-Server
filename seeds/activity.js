/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("activity").del();
  await knex("activity").insert([
    {
      id: 1,
      type: "Cardio",
      date: "1672905600",
      timeofday: "Morning",
      rating: "Good",
      distance: "5",
    },
    {
      id: 2,
      type: "Cardio",
      date: "1673164800",
      timeofday: "Evening",
      rating: "Great",
      distance: "10",
    },
    {
      id: 3,
      type: "Cardio",
      date: "1673596800",
      timeofday: "Afternoon",
      rating: "Okay",
      distance: "7",
    },
    {
      id: 4,
      type: "Cardio",
      date: "1674288000",
      timeofday: "Night",
      rating: "Bad",
      distance: "3",
    },
    {
      id: 5,
      type: "Workout",
      date: "1672646400",
      timeofday: "Evening",
      rating: "Good",
      exercise1: "Chest",
      exercise2: "Biceps",
      exercise3: "Triceps",
      exercise4: "Lower Back",
      exercise5: "Middle Back",
    },
    {
      id: 6,
      type: "Workout",
      date: "1672992000",
      timeofday: "Morning",
      rating: "Okay",
      exercise1: "Abs",
      exercise2: "Chest",
      exercise3: "Quadriceps",
      exercise4: "Calves",
      exercise5: "Glutes",
    },
    {
      id: 7,
      type: "Workout",
      date: "1673251200",
      timeofday: "Morning",
      rating: "Bad",
      exercise1: "Forearms",
      exercise2: "Triceps",
    },
    {
      id: 8,
      type: "Workout",
      date: "1675929600",
      timeofday: "Morning",
      rating: "Bad",
      exercise1: "Abs",
      exercise2: "Glute",
    },
  ]);
};
