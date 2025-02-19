let startTime: number;
let questionStartTime: number;
const questionTimes: number[] = [];

export function startTimer(): void {
  startTime = Date.now();
  questionStartTime = Date.now();
}

export function switchToNextQuestion(currentIndex: number): void {
  const timeSpent = Date.now() - questionStartTime;
  questionTimes[currentIndex] = Math.floor(timeSpent / 1000);
  questionStartTime = Date.now();
}

export function finishTimer(): number {
  const totalTime = (Date.now() - startTime) / 1000;
  const timeSpent = Date.now() - questionStartTime;
  questionTimes[questionTimes.length - 1] = Math.floor(timeSpent / 1000);
  return Math.floor(totalTime);
}

export function getQuestionTimes(): number[] {
  return questionTimes;
}

export function getCurrentQuestionTime(): number {
  return Math.floor((Date.now() - questionStartTime) / 1000);
}
