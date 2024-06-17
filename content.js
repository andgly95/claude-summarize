chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "summarize") {
    // Here, you would typically send the selected text to the Claude API for summarization
    // and display the summarized text in a popup or as a notification.
    // For this example, we'll just log the selected text to the console.
    console.log("Text to summarize:", request.text);
  }
});
