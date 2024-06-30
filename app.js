const userInput = document.getElementById("user-prompt");
const submitButton = document.getElementById("submit-button");
const responseDiv = document.getElementById("result");

submitButton.addEventListener("click", async () => {
  const prompt = userInput.value;
  const response = await makeRequestToAiApi(prompt);

  if (response) {
    const htmlContent = marked.parse(response);
    responseDiv.innerHTML = htmlContent;
  } else {
    responseDiv.textContent = "No response received from AI API.";
  }
  console.log(response);
});

async function makeRequestToAiApi(prompt) {
  try {
    const session = await ai.createTextSession();
    const api = await session;
    const response = await api.prompt(prompt);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}
