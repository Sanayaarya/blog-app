import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tag(props) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await axios.get(
          `https://mighty-oasis-08080.herokuapp.com/api/tags`
        );
        setTags(res.data.tags);
      } catch (error) {
        console.log(error);
      }
    };
    getTags();
  }, []);

  return (
    <aside className="w-3/12 mt-8 bg-gray-100 p-2  h-fit">
      <p className="my-2">Popular Tags</p>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag}
            className="bg-gray-400 m-1 inline-block py-1 px-3 rounded-2xl text-xs uppercase text-white cursor-pointer"
            onClick={() => props.selectTag(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Tag;