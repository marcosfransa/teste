const bookmarks = [
  {
    name: "Google",
    url: "https://www.google.com"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com"
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com"
  },
  {
    name: "GitHub",
    url: "https://www.github.com"
  }
];

const tilesContainer = document.querySelector("#tiles");

bookmarks.forEach(bookmark => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.innerHTML = `<iframe src="${bookmark.url}" onclick="window.open('${bookmark.url}');" frameborder="0" allowfullscreen></iframe>`;
  tilesContainer.appendChild(tile);
});
