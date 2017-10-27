var active = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (active) {
    active = false;
    chrome.browserAction.setIcon({path: "icon_off.png"});
  } else {
    active = true;
    chrome.browserAction.setIcon({path: "icon_on.png"});
  }

  chrome.tabs.sendMessage(tab.id, { actionName: "toggleFlick", active: active });
});
