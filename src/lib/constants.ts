export const ANSWERS: Record<string, any> = {
  puzzle1: "LICHT",
  puzzle2: "KNOTEN",
  puzzle3: "EWIG",
  puzzle4: "NACHT",
  puzzle5: "REISE",
  puzzle6: "WELT",
  puzzle7: "ANFANG",
  puzzle8: {
    part1: "KAHNWALD",
    part2: "NIELSEN",
    part3: "TIEDEMANN"
  }
};

export const ERA_MODES = ["1953", "1986", "2019", "2052", "inf"] as const;
export type Era = typeof ERA_MODES[number] | "";
