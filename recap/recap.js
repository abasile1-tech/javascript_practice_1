const posts = [
  {
    title: "title 1",
    description: "description 1",
  },
  {
    title: "title 2",
    description: "description 2",
  },
];

const postList = document.getElementById("post-list");

posts.forEach((post) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  li.classList.add("post");
  li.append(h3, p);
  h3.textContent = post.title;
  p.textContent = post.description;
  postList.appendChild(li);
  console.log(postList);
});
