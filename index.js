const form = document.querySelector(".form");
const commentsList = document.querySelector(".comments-list");

const state = [
  {
    id: 1,
    name: "Alex",
    avatarURL: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    text: "Hello, world!",
  },
  {
    id: 2,
    name: "Ivan",
    avatarURL:
      "https://otkrit-ka.ru/uploads/posts/2021-09/krasivye-foto-kartinki-na-avatarku-dlja-parnej-i-muzhchin-1.jpg",
    text: "JavaScript is the best programming language!",
  },
  {
    id: 3,
    name: "Anna",
    avatarURL:
      "https://i.pinimg.com/736x/2e/e9/e6/2ee9e6113f53f68d5e070b8cd79a4cb1.jpg",
    text: "I'm learning JavaScript.",
  },
];

renderCommentsList(state);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const commentObj = getFormData(form);

  state.push(commentObj);

  renderComment(commentObj);

  form.reset();
});

function getFormData(formElem) {
  const formData = new FormData(formElem);

  const name = formData.get("name");
  const avatarURL = formData.get("avatar");
  const text = formData.get("comment");

  const commentObj = {
    id: Date.now(),
    name,
    avatarURL,
    text,
  };

  return commentObj;
}

function renderComment(commentObj) {
  const commentHTML = `<div class="comment" key="${commentObj.id}">
    <div class=" comment__user-info">
      <div class="user-info__avatar"
        style="background-image: url('${commentObj.avatarURL}');">
      </div>
      <div class="user-info__name">${commentObj.name}</div>
    </div>

    <div class="comment__text">${commentObj.text}</div>

    <hr />
  </div>`;

  commentsList.insertAdjacentHTML("beforeend", commentHTML);
}

function renderCommentsList(arrCommentsData) {
  arrCommentsData.forEach(function (elem) {
    renderComment(elem);
  });
}
