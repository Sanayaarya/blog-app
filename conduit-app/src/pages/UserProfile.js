import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let user = JSON.parse(localStorage.getItem('user'));

function UserProfile() {
  const [userDetails, setDetails] = useState({});
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resUser = await axios({
          method: 'GET',
          url: `https://mighty-oasis-08080.herokuapp.com/api/user`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const resArticle = await axios({
          method: 'GET',
          url: `https://mighty-oasis-08080.herokuapp.com/api/articles?author=${user.username}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setDetails(resUser.data.user);
        setArticle(resArticle.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = `/login`;
  };
  return (
    <>
      <div className="bg-gray-200 text-center py-7">
        <div className="w-28 h-28  mx-auto ">
          <img
            src={userDetails.image}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold mt-4 mb-4">{userDetails.username}</h1>
        <div className="px-44 text-right">
          <Link
            to="/editprofile"
            className="border border-gray-400 px-2 py-1 rounded text-gray-500 mr-6 cursor-pointer hover:border-blue-400 hover:text-blue-500"
          >
            Edit Profile
          </Link>
          <div
            to="/editprofile"
            className="border border-gray-400 px-2 py-1 rounded text-gray-500 mr-6 cursor-pointer inline hover:border-blue-400 hover:text-blue-500"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="px-44">
        <div className="mt-12 pb-2 border-b ">
          <span className="text-green ml-4">My Articles</span>
        </div>
        <ul>
          {articles.map((article) => (
            <li key={article.slug} className="py-8 border-b">
              <div className="flex">
                <div className="w-14 h-14">
                  <img
                    src={article.author.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="ml-2">
                  <strong className="block text-green">
                    {article.author.username}
                  </strong>
                  <span className="text-grey font-light text-sm">
                    {Date(article.createdAt).slice(0, 15)}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-4">{article.title}</h2>
              <p className="text-grey font-light mb-6 mt-1">
                {article.description}
              </p>
              <div className="flex justify-between">
                <Link
                  to={`/articles/ ${article.slug}`}
                  className="text-grey font-light text-sm"
                >
                  Read more...
                </Link>
                <div>
                  {article.tagList[0].split(',').map((tag) => (
                    <span
                      key={tag}
                      className="mx-1 text-grey border rounded-xl py-1 px-3 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UserProfile;