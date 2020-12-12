async function editFormHandler(event) {
    console.log("clientside edit post")
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const blogContent = document.querySelector('textarea[name="blog-edit"]')
    .value;
    console.log(blogContent);
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      blogContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("hello from edit post")
    // document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
