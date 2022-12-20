import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <div className="w-2/3 py-8">
      <div className="mb-2 ml-4">
        <span className="text-green" onClick={() => props.selectTag('')}>
          Global Feed
        </span>
        <span className="text-green ml-12">{props.selectedTag}</span>
      </div>

      <hr />
      <ul>
        {props.articles.map((article) => (
          <li key={article.slug} className="py-8 border-b">
            <div className="flex">
              <div className="w-14 h-14">
                <img
                  src={article.author.image}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
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
                {article.tagList.map((tag) => (
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
  );
}

export default Main;