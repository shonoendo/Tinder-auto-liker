var timer = null;

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.actionName == "toggleFlick") {
    console.log(request);
    toggleFlick(request.active);
  }
});

function toggleFlick(active) {
  if (active) {
    console.log('on');
    timer = setInterval(flick, 500);
  } else {
    console.log('off');
    clearInterval(timer);
  }
}

function flick() {
  // console.log('click');
  $('.recsGamepad__button--like').click();
}
