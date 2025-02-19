import questions from "../data/questions.json";
import { finishTimer, getQuestionTimes } from "../utils/timer";
import { renderStartView } from "./start";

export function renderSummaryView(
  container: HTMLElement,
  userAnswers: (number | null)[],
  shuffledQuestions: typeof questions
): void {
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === shuffledQuestions[index].answer
  ).length;

  const totalTimeSpent = finishTimer();
  const questionTimes = getQuestionTimes();

  container.innerHTML = `
    <h1>Podsumowanie testu</h1>
    <p>Prawidłowo odpowiedziałeś na ${correctAnswers} z ${
    shuffledQuestions.length
  } pytań.</p>
    <p>Całkowity czas spędzony: ${formatTime(totalTimeSpent)}</p>
    
    <h2>Szczegóły:</h2>
    <table>
      <thead>
        <tr>
          <th>Pytanie</th>
          <th>Twoja odpowiedź</th>
          <th>Poprawna odpowiedź</th>
          <th>Czas spędzony (s)</th>
          <th>Wynik</th>
        </tr>
      </thead>
      <tbody>
        ${shuffledQuestions
          .map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.answer;
            const timeSpent = questionTimes[index] || 0;
            return `
              <tr>
                <td>${index + 1}</td>
                <td>${
                  userAnswer !== null
                    ? question.options[userAnswer]
                    : "Bez odpowiedzi"
                }</td>
                <td>${question.options[question.answer]}</td>
                <td>${timeSpent}s</td>
                <td>${isCorrect ? "✔️ Prawidłowa" : "❌ Nieprawidłowa"}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
    
    <button id="restart-button">Powróć do strony głównej</button>
  `;

  const restartButton = document.getElementById("restart-button");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      renderStartView(container);
    });
  }
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}
