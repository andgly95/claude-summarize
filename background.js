chrome.contextMenus.create({
  id: "summarizeWithClaude",
  title: "Summarize with Claude",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "summarizeWithClaude") {
    chrome.tabs.sendMessage(tab.id, {
      action: "summarize",
      text: info.selectionText,
    });
  }
});
