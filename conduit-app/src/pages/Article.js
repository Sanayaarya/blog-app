

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
let user = JSON.parse(localStorage.getItem('user'));

function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(
        `https://mighty-oasis-08080.herokuapp.com/api/articles/${slug.trim()}`
      );
      setArticle(res.data.article);
    };
    getArticle();
  }, [slug]);

  const handleDelete = async () => {
    try {
      await axios({
        method: 'DELETE',
        url: `https://mighty-oasis-08080.herokuapp.com/api/articles/${article.slug}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    window.location.href = `/profile`;
  };

  return (
    <>
      <div className="bg-[#333333] text-white px-44  py-8 shadow-[inset_0_-5px_8px_4px_rgba(0,0,0,0.2)]">
        <h1 className="text-4xl  font-Roboto mb-2 drop-shadow-lg">
          {article.title}
        </h1>
        <div className="flex mt-8">
          <div className="w-10 h-10">
            <img
              src={article?.author?.image}
              alt=""
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <strong className="block text-white text-sm">
              {article?.author?.username}
            </strong>
            <span className="text-grey font-light text-sm">
              {Date(article.createdAt).slice(0, 15)}
            </span>
          </div>
        </div>
        {article?.author?.username === user.username ? (
          <div className="mt-8">
            <Link
              to={{
                pathname: '/editarticle',
                state: article,
              }}
              className="border border-gray-400 hover:border-blue-400 px-2 py-1 rounded text-gray-500 hover:text-blue-500 mr-6"
            >
              Edit Article
            </Link>
            <Link
              to="/deletearticle"
              className="border border-gray-400 hover:border-red-400 px-2 py-1 rounded text-gray-500 hover:text-red-500"
              onClick={handleDelete}
            >
              Delete Article
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
      <p className="px-44 mt-10 mb-5 text-lg font-Roboto">{article.body}</p>
      <ul className="px-44">
        {article?.tagList?.map((tag) => (
          <li
            key={tag}
            className="border m-1 inline-block py-1 px-3 rounded-2xl text-sm text-grey"
          >
            <span> {tag}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Article;