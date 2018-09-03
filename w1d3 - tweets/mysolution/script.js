function fetchData() {
  // fetching data from the database - promise chain - asynchronous

  fetch("https://kea-alt-del.dk/twitter/api/?count=50&hashtag=travel")
    .then(e => e.json())
    .then(showPosts);
}

function showPosts(data) {
  console.log(data);

  //I call the function showSinglePost for each element from the data
  data.statuses.forEach(showSinglePost);
}

function showSinglePost(aPost) {
  let template = document.querySelector("#postTemp").content;
  let clone = template.cloneNode(true);
  // console.log(aPost.statuses[""0""].user.name);
  clone.querySelector("h2").textContent = "Name: " + aPost.user.name;
  clone.querySelector("p").textContent = aPost.text;
  let tweet = document.querySelector("#tweet");
  tweet.appendChild(clone);
}
fetchData();
