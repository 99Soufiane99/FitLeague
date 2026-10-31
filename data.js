// data.js — données statiques du projet

const SPORTS = {
  course:   { id: "course",   label: "Course",   unit: "km" },
  cyclisme: { id: "cyclisme", label: "Cyclisme", unit: "km" },
  natation: { id: "natation", label: "Natation", unit: "km" },
  marche:   { id: "marche",   label: "Marche",   unit: "km" },
  fitness:  { id: "fitness",  label: "Fitness",  unit: "répétitions" },
  yoga:     { id: "yoga",     label: "Yoga",     unit: "séances" },
};

const challenges = [
  {
    id: 1,
    title: "Running Challenge",
    sport: "course",
    description: "Courir le maximum de kilomètres pendant le mois.",
    objective: 50,
    unit: "km",
    startDate: "2026-10-01",
    deadline: "2026-11-15",
    status: "active",
    participants: [1, 2, 13]
  },
  {
    id: 2,
    title: "Cycling Challenge",
    sport: "cyclisme",
    description: "Parcourir le maximum de kilomètres à vélo.",
    objective: 100,
    unit: "km",
    startDate: "2026-10-05",
    deadline: "2026-11-20",
    status: "active",
    participants: [3, 4]
  },
  {
    id: 3,
    title: "Swimming Challenge",
    sport: "natation",
    description: "Nager pour améliorer son endurance.",
    objective: 20,
    unit: "km",
    startDate: "2026-09-01",
    deadline: "2026-10-20",
    status: "completed",
    participants: [5, 6]
  },
  {
    id: 4,
    title: "Walking Challenge",
    sport: "marche",
    description: "Marcher régulièrement pour rester en forme.",
    objective: 30,
    unit: "km",
    startDate: "2026-10-10",
    deadline: "2026-11-25",
    status: "active",
    participants: [7, 8]
  },
  {
    id: 5,
    title: "Push-up Challenge",
    sport: "fitness",
    description: "Réaliser le maximum de pompes.",
    objective: 500,
    unit: "répétitions",
    startDate: "2026-09-10",
    deadline: "2026-10-10",
    status: "completed",
    participants: [9, 10]
  },
  {
    id: 6,
    title: "Yoga Challenge",
    sport: "yoga",
    description: "Améliorer sa souplesse et sa concentration.",
    objective: 15,
    unit: "séances",
    startDate: "2026-10-15",
    deadline: "2026-12-01",
    status: "active",
    participants: [11, 12, 14]
  }
];

const participants = [
  { id: 1,  name: "Oussama", pseudo: "oussama23",    sport: "course",   challengeId: 1, defi: "Running Challenge",   performance: 32,  unite: "km" },
  { id: 2,  name: "Salma",   pseudo: "salma_run",     sport: "course",   challengeId: 1, defi: "Running Challenge",   performance: 41,  unite: "km" },
  { id: 13, name: "Yassine", pseudo: "yassine_pro",   sport: "course",   challengeId: 1, defi: "Running Challenge",   performance: 27,  unite: "km" },

  { id: 3,  name: "Karim",   pseudo: "karim_bike",    sport: "cyclisme", challengeId: 2, defi: "Cycling Challenge",   performance: 67,  unite: "km" },
  { id: 4,  name: "Nadia",   pseudo: "nadia_bike",    sport: "cyclisme", challengeId: 2, defi: "Cycling Challenge",   performance: 55,  unite: "km" },

  { id: 5,  name: "Amine",   pseudo: "amine_swim",    sport: "natation", challengeId: 3, defi: "Swimming Challenge",  performance: 22,  unite: "km" },
  { id: 6,  name: "Hamza",   pseudo: "hamza_swim",    sport: "natation", challengeId: 3, defi: "Swimming Challenge",  performance: 20,  unite: "km" },

  { id: 7,  name: "Ahmed",   pseudo: "ahmed_walk",    sport: "marche",   challengeId: 4, defi: "Walking Challenge",   performance: 18,  unite: "km" },
  { id: 8,  name: "Imane",   pseudo: "imane_walk",    sport: "marche",   challengeId: 4, defi: "Walking Challenge",   performance: 25,  unite: "km" },

  { id: 9,  name: "Reda",    pseudo: "reda_fit",      sport: "fitness",  challengeId: 5, defi: "Push-up Challenge",   performance: 520, unite: "répétitions" },
  { id: 10, name: "Ayoub",   pseudo: "ayoub_fit",     sport: "fitness",  challengeId: 5, defi: "Push-up Challenge",   performance: 500, unite: "répétitions" },

  { id: 11, name: "Yasmine", pseudo: "yasmine_yoga",  sport: "yoga",     challengeId: 6, defi: "Yoga Challenge",      performance: 11,  unite: "séances" },
  { id: 12, name: "Sara",    pseudo: "sara_yoga",     sport: "yoga",     challengeId: 6, defi: "Yoga Challenge",      performance: 9,   unite: "séances" },
  { id: 14, name: "Meryem",  pseudo: "meryem_yoga",   sport: "yoga",     challengeId: 6, defi: "Yoga Challenge",      performance: 14,  unite: "séances" }
];