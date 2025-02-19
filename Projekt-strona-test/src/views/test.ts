import questions from "../data/questions.json";
import { saveStats } from "../utils/storage";
import {
    finishTimer,
    getCurrentQuestionTime,
    getQuestionTimes,
    startTimer,
    switchToNextQuestion,
} from "../utils/timer";
import { renderSummaryView } from "./summary";

const shuffledQuestions = shuffleArray(questions);

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

let currentQuestionIndex = 0;
let userAnswers: (number | null)[] = new Array(shuffledQuestions.length).fill(
  null
);

export function renderTestView(container: HTMLElement): void {
  startTimer();

  container.innerHTML = `
    <div id="intro">
      <h1>Witaj w teście!</h1>
      <p>Odpowiedz na wszystkie pytania i zakończ test, aby zobaczyć swoje wyniki.</p>
    </div>
    <div id="stats">
      <p>Calkowity czas: <span id="total-time">0s</span></p>
      <p>Czas poświęcony temu pytaniu: <span id="question-time">0s</span></p>
      <button id="cancel-test">Anuluj test</button>
    </div>
    <div id="question-container"></div>
  `;

  document.getElementById("cancel-test")?.addEventListener("click", () => {
    if (confirm("Czy na pewno chcesz anulować test?")) {
      location.reload();
    }
  });

  const questionContainer = container.querySelector(
    "#question-container"
  ) as HTMLElement;
  renderQuestion(questionContainer);

  setInterval(() => {
    const totalTime = finishTimer();
    const currentQuestionTime = getCurrentQuestionTime();

    document.getElementById("total-time")!.textContent = `${Math.floor(
      totalTime
    )}s`;
    document.getElementById("question-time")!.textContent = `${Math.floor(
      currentQuestionTime
    )}s`;
  }, 1000);

  container.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (
      target.id === "next-button" &&
      currentQuestionIndex < shuffledQuestions.length - 1
    ) {
      switchToNextQuestion(currentQuestionIndex);
      currentQuestionIndex++;
      renderQuestion(questionContainer);
    } else if (target.id === "prev-button" && currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(questionContainer);
    } else if (target.id === "finish-button") {
      if (!userAnswers.includes(null)) {
        const totalTime = finishTimer();
        const questionTimes = getQuestionTimes();

        saveStats({ totalTime, questionTimes });

        renderSummaryView(
          container,
          userAnswers.filter((answer): answer is number => answer !== null),
          shuffledQuestions
        );
      } else {
        alert("Przed zakończeniem testu odpowiedz na wszystkie pytania.");
      }
    }
  });
}

function renderQuestion(container: HTMLElement): void {
  const question = shuffledQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];

  container.innerHTML = `
      <div>
        <h2>Pytanie ${currentQuestionIndex + 1} z ${
    shuffledQuestions.length
  }</h2>
        <p>${question.question}</p>
        <ul>
          ${question.options
            .map(
              (option, index) => `
              <li>
                <input type="radio" name="option" id="option-${index}" value="${index}" 
                  ${userAnswer === index ? "checked" : ""}
                  ${userAnswer !== null ? "disabled" : ""} />
                <label for="option-${index}">${option}</label>
              </li>
            `
            )
            .join("")}
        </ul>
        <button id="prev-button" ${
          currentQuestionIndex === 0 ? "disabled" : ""
        }>Poprzednie</button>
        <button id="next-button" ${
          currentQuestionIndex === shuffledQuestions.length - 1
            ? "disabled"
            : ""
        }>Następne</button>
        <button id="finish-button" ${
          userAnswers.includes(null) ? "disabled" : ""
        }>Zakończ</button>
      </div>
    `;

  container.querySelectorAll('input[name="option"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      const selectedOption = (event.target as HTMLInputElement).value;
      userAnswers[currentQuestionIndex] = parseInt(selectedOption, 10);

      updateFinishButtonState();
    });
  });
}

function updateFinishButtonState(): void {
  const finishButton = document.getElementById(
    "finish-button"
  ) as HTMLButtonElement;
  if (finishButton) {
    finishButton.disabled = userAnswers.includes(null);
  }
}
