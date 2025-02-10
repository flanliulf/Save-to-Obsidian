chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveToObsidian",
    title: "保存到Obsidian",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveToObsidian") {
    chrome.tabs.sendMessage(tab.id, {
      action: "showCard",
      selectedText: info.selectionText
    });
  }
}); 