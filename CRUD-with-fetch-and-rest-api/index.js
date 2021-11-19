const courseApi = "http://localhost:3000/courses";

fetch(courseApi)
  .then((response) => response.json())
  .then((courses) => {
    console.log(courses);
  });

function start() {
  getCourse(renderCourse);
}
start();

function getCourse(callback) {
  fetch(courseApi)
    .then((response) => response.json())
    .then(callback);
}

function renderCourse(courses) {
  const htmls = courses.map((course) => {
    return `
      <li class="course-item-${course.id}">
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
      </li>
    `;
  });

  const coursesList = document.querySelector("#courses-list");

  coursesList.innerHTML = htmls.join("");
}

document.querySelector("#btn-create").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;

  if (name.length === 0 && description.length === 0) {
    return;
  }

  const postData = {
    name,
    description,
  };

  console.log(postData);

  createCourse(postData, () => getCourse(renderCourse));
});

function createCourse(data, callback) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(courseApi, options)
    .then((response) => response.json())
    .then(callback);
}

function handleDeleteCourse(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(courseApi + "/" + id, options)
    .then((response) => response.json())
    .then(() => {
      const courseItem = document.querySelector(`.course-item-${id}`);
      if (courseItem) {
        courseItem.remove();
      }
    });
}
