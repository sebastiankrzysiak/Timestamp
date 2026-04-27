let intervalId = null;

function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  if (element) {
    callback(element);
    return;
  }
  setTimeout(() => waitForElement(selector, callback), 500);
}

function onMetadata(video) {
  const id = new URLSearchParams(window.location.search).get("v");
  if (!id) return;

  chrome.storage.local.get(id, (result) => {
    if (result[id] && result[id] < video.duration * 0.95) {
      video.currentTime = result[id];
    }
  });
}

waitForElement("video", (video) => {
  video.addEventListener("loadedmetadata", () => onMetadata(video));
  if (video.readyState >= 1) onMetadata(video);

  intervalId = setInterval(() => {
    const id = new URLSearchParams(window.location.search).get("v");
    if (video.currentTime > 5 && id) {
      chrome.storage.local.set({ [id]: video.currentTime });
    }
  }, 2000);
});