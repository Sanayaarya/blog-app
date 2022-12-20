import React, { useState } from 'react';
import axios from 'axios';
let user = JSON.parse(localStorage.getItem('user'));

function EditArticle(props) {
  const [title, setTitle] = useState(props.location.state.title);
  const [description, setDescription] = useState(
    props.location.state.description
  );
  const [body, setBody] = useState(props.location.state.body);
  const [article, setArticle] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateArticle = async () => {
      try {
        const res = await axios({
          method: 'PUT',
          url: `https://mighty-oasis-08080.herokuapp.com/api/articles/${props.location.state.slug}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
          data: JSON.stringify({
            article: {
              title,
              description,
              body,
            },
          }),
        });
        setArticle(res.data.article);
        window.location.href = `/profile`;
      } catch (error) {
        console.log(error);
      }
    };
    updateArticle();
  };

  return (
    <form className="my-6 w-2/6 mx-auto" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        placeholder="Write your article"
        id="body"
        name="body"
        className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        className=" bg-green hover:bg-green-dark text-white text-lg px-6 py-2 rounded block mx-auto"
        onClick={(e) => handleSubmit(e)}
      >
        Update Article
      </button>
    </form>
  );
}

export default EditArticle;