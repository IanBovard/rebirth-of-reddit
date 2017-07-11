/* jshint esversion: 6 */

const imageContainer = document.getElementById('image');

let redditReq = new XMLHttpRequest();
function getReddit () {
  let teslaObj = JSON.parse(this.responseText);
  let teslaPosts = teslaObj.data.children;
  let teslaImage = teslaPosts[2].data.thumbnail;
  imageContainer.style.background = `url(${teslaImage})`;
  imageContainer.style.backgroundSize  ="cover";
}

redditReq.addEventListener('load', getReddit);
redditReq.open('GET', 'https://www.reddit.com/r/Tesla.json', true);
redditReq.send();