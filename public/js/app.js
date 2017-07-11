/* jshint esversion: 6 */

const bodyContainer = document.getElementById('body');

let redditReq = new XMLHttpRequest();
function getReddit () {
  let teslaObj = JSON.parse(this.responseText);
  let teslaPosts = teslaObj.data.children;
  /*  let teslaImage = teslaPosts[2].data.thumbnail;*/
  for (let i = 1; i < 5  ; i++){
    let mainContainer = document.createElement('div');
    mainContainer.id = 'main';
    let contentContainer = document.createElement('div');
    contentContainer.className = 'contentWrapper';
    let imageContainer = document.createElement('div');
    imageContainer.id = 'image';
    let titleContainer = document.createElement('div');
    titleContainer.id = 'title';

    let postInfoContainer = document.createElement('div');
    postInfoContainer.id = 'postInfo';
    let posterContainer = document.createElement('div');
    posterContainer.id = 'poster';
    posterContainer.className = 'infoRow';
    let datePostedContainer = document.createElement('div');
    datePostedContainer.id = 'datePosted';
    datePostedContainer.className = 'infoRow';
    let upvoteContainer = document.createElement('div');
    upvoteContainer.id = 'upvotes';
    upvoteContainer.className = 'infoRow';

    let descriptionContainer = document.createElement('div');
    descriptionContainer.id = 'description';

    bodyContainer.appendChild(mainContainer);
    mainContainer.appendChild(contentContainer);

    contentContainer.appendChild(imageContainer);
    contentContainer.appendChild(titleContainer);
    contentContainer.appendChild(postInfoContainer);

    postInfoContainer.appendChild(posterContainer);
    postInfoContainer.appendChild(datePostedContainer);
    postInfoContainer.appendChild(upvoteContainer);

    contentContainer.appendChild(descriptionContainer);
  }
}

redditReq.addEventListener('load', getReddit);
redditReq.open('GET', 'https://www.reddit.com/r/Tesla.json', true);
redditReq.send();