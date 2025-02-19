import { renderTestView } from "./test";

export function renderStartView(container: HTMLElement): void {
  container.innerHTML = `
    <h1>Witaj w aplikacji testowej</h1>
    <p>Przed tobą czeka test z paroma pytaniami. Naciśnij poniższy przycisk, aby rozpocząć test.</p>
    <button id="start-button">Rozpocznij test</button>
  `;

  const startButton = document.getElementById("start-button");
  if (startButton) {
    startButton.addEventListener("click", () => {
      renderTestView(container);
    });
  }
}
