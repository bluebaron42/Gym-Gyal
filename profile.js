// Gym-Gyal profile: everything that is specific to this person's app.
// index.html, data.js and guides.js are shared with Gym-Bro.
window.GB_PROFILE = {
  id: "gyal",
  app: "Gym-Gyal",
  slug: "gym-gyal",
  legacySlugs: [],
  person: "Harriett",
  storage: "gymgyal:",
  menuSet: "gyal",
  // Portion scale by food group: p = protein and dairy, c = carbs, fats and sauces, v = fruit and veg.
  // Tuned so the menu lands near 1,600 kcal and 140 g protein a day.
  scales: { p: 0.7, c: 0.45, v: 1 },
  exclude: ["pork"],
  protein: 140,
  planWeeks: null,
  goalWeight: 79,
  phases: [
    { name: "Fat loss", label: "Fat loss", kcal: 1600, trend: [-1.0, -0.2], trendText: "down 0.4–0.6 kg a week",
      low: "Faster than target: eat a little more", high: "Slower than target" }
  ],
  banner: { weeks: [4, 5], text: "<b>Week 4 check:</b> if your weekly average hasn't dropped by about 1.5 kg, copy your data for Claude and we'll adjust your calories." },
  // [week, waist drop cm, weight drop kg, text]: hit when either drop is reached.
  checkpoints: [[4, null, 1.5, "Weight down 1.5–2 kg"], [8, 3, 3.5, "Weight down 3.5–4 kg or waist down 3 cm"], [12, 5, 5, "Weight down 5–6 kg or waist down 5 cm"], [24, 10, 10, "Weight down 10–12 kg"], [36, null, 16, "Goal reached: about 79 kg"]],
  weekIntro: { title: "4 sessions", lead: "Glutes and hamstrings, upper body, glutes and quads, then a glute pump with full body. 8–10k steps every day." },
  backupWhere: "the Files app",
  themeColor: { light: "#F8F0F3", dark: "#160E12" },
  theme: ":root{--bg:#F8F0F3;--surface:#FFFFFF;--sunk:#F1E3E9;--line:#E6D3DB;--fg:#1E1418;--muted:#6E5A63;--accent:#B8175A;--accent-ink:#FFFFFF;--accent-soft:#FBE1EC;--plate:#E0457B;--plate-ink:#FFFFFF}" +
    "@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]){--bg:#160E12;--surface:#21161B;--sunk:#2B1D23;--line:#3A2830;--fg:#F3E8EC;--muted:#B39CA6;--accent:#F48FB8;--accent-ink:#1A0D13;--accent-soft:#3A1A28;--plate:#FF6FA3;--plate-ink:#1A0D13}}" +
    ":root[data-theme=\"dark\"]{--bg:#160E12;--surface:#21161B;--sunk:#2B1D23;--line:#3A2830;--fg:#F3E8EC;--muted:#B39CA6;--accent:#F48FB8;--accent-ink:#1A0D13;--accent-soft:#3A1A28;--plate:#FF6FA3;--plate-ink:#1A0D13}",
  // [id, gym name, sets, lo, hi, home name, home lo, home hi, rest seconds, unit, "H" = heavy lift]
  days: {
    1: { title: "Glutes + hamstrings", focus: "Heavy hip thrusts, then hamstrings, glutes and core", ex: [
      ["hip-thrust", "Barbell hip thrust", 4, 6, 10, "Single-leg DB hip thrust", 12, 15, 180, null, "H"],
      ["rdl", "Romanian deadlift", 3, 8, 10, "DB Romanian deadlift", 12, 15, 150],
      ["bss-glute", "Bulgarian split squat (glute bias)", 3, 8, 12, "Bulgarian split squat with DBs", 10, 15, 120],
      ["legcurl", "Seated leg curl", 3, 10, 12, "Single-leg glute bridge", 12, 15, 75],
      ["abduction", "Hip abduction machine", 3, 15, 20, "Banded hip abduction", 20, 30, 60],
      ["dead-bug", "Dead bug (each side)", 3, 8, 10, "Dead bug (each side)", 8, 10, 45]] },
    2: { title: "Upper body", focus: "Heavy shoulder press, then back, chest and core. A wider top makes the waist look smaller", ex: [
      ["seated-press", "Seated dumbbell shoulder press", 4, 6, 10, "Seated DB shoulder press", 10, 15, 150, null, "H"],
      ["pulldown", "Lat pulldown", 3, 8, 12, "Band pulldowns", 12, 15, 90],
      ["row", "Chest-supported row", 3, 10, 12, "One-arm DB row", 12, 15, 90],
      ["incline-press", "Incline dumbbell press", 3, 8, 12, "Incline DB press or push-ups", 10, 15, 90],
      ["lateral-mon", "Lateral raise", 3, 12, 20, "DB lateral raise", 12, 20, 60],
      ["facepull", "Face pull", 2, 15, 20, "Band face pull", 15, 20, 60],
      ["pallof", "Pallof press (each side)", 3, 10, 12, "Band Pallof press (each side)", 10, 12, 45]] },
    3: { rest: true, title: "Rest", focus: "8–10k steps, stretch, sleep" },
    4: { title: "Glutes + quads", focus: "Heavy squats, then glutes, quads and lower abs", ex: [
      ["squat", "Back squat (or goblet squat)", 4, 6, 10, "Goblet squat, 3-sec lowering", 12, 15, 180, null, "H"],
      ["step-up", "Dumbbell step-up", 3, 10, 12, "Step-up onto a sturdy chair", 12, 15, 90],
      ["kickback", "Cable kickback", 3, 12, 15, "Banded kickback", 15, 20, 60],
      ["back-ext", "45° back extension (glute bias)", 3, 12, 15, "Glute bridge, slow", 15, 20, 60],
      ["knee-raise", "Hanging knee raise", 3, 10, 15, "Lying reverse crunch", 12, 15, 45]] },
    5: { rest: true, title: "Rest", focus: "8–10k steps, stretch, sleep" },
    6: { title: "Glute pump + full body", focus: "Heavy trap-bar deadlift, then a glute pump and upper-body work", ex: [
      ["deadlift", "Trap-bar deadlift", 3, 5, 8, "DB Romanian deadlift", 12, 15, 180, null, "H"],
      ["glute-bridge", "Barbell glute bridge", 3, 12, 15, "DB glute bridge, 2-sec squeeze", 15, 20, 75],
      ["rev-lunge", "Reverse lunge (each leg)", 3, 10, 12, "DB reverse lunge (each leg)", 10, 12, 90],
      ["flat-db", "Flat dumbbell press", 3, 8, 12, "Push-ups", 8, 15, 90],
      ["db-row", "One-arm dumbbell row", 3, 10, 12, "One-arm DB row", 10, 15, 75],
      ["abduction", "Hip abduction machine", 2, 20, 25, "Banded hip abduction", 25, 30, 60]] },
    0: { rest: true, title: "Rest", focus: "8–10k steps, Sunday food prep" }
  },
  mainLifts: [["hip-thrust", "Hip thrust"], ["squat", "Squat"], ["deadlift", "Trap-bar deadlift"], ["rdl", "Romanian deadlift"], ["seated-press", "Shoulder press"], ["pulldown", "Lat pulldown"]],
  e1rm: [["hip-thrust", "Hip thrust"], ["squat", "Squat"], ["deadlift", "Deadlift"], ["rdl", "RDL"]]
};
