interface TestStats {
    totalTime: number;
    questionTimes: number[];
  }
  
  export function saveStats(stats: TestStats): void {
    localStorage.setItem("testStats", JSON.stringify(stats));
  }
  
  export function loadStats(): TestStats {
    return JSON.parse(localStorage.getItem("testStats") || "{}");
  }
  
  export function clearStats(): void {
    localStorage.removeItem("testStats");
  }
  