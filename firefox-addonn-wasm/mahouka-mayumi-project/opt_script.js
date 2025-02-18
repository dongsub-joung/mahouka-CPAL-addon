async function saveOptions(e) {
  e.preventDefault();
  await browser.storage.sync.set({
    speed: document.querySelector("#optionsMenu")
  });
}

async function restoreOptions() {
  let res = await browser.storage.managed.get('speed');

  res = await browser.storage.sync.get('speed');
  document.querySelector("#optionsMenu") = res.speed;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);