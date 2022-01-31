import axios from "axios";
import Link from "next/link";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const News = () => {


  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const[statewise, setStatewise] = useState([])
  const getNews = () => {
    axios
      .get(`https://www.electwise.in/api/v2/news/?page=${currentPage}`)

      .then(({ data }) => {
        setNews(data.results);
        console.log(data.results);
      })
      .catch((e) => console.log(e));
  };

  const getstateNews = (stateName) => {
    axios
      .get(`https://www.electwise.in/api/v2/news/?state=${[stateName]}`)
      .then(({ data }) => {
        console.log(data);
        setStatewise(data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getNews();
    getstateNews(window.location.pathname.split("/")[1])
  }, [currentPage]);

  return (
    <div className="container px-4 p-4 mx-auto flex lg:items-start  md:flex-nowrap flex-wrap flex-col">
      <div className=" flex flex-col flex-no-shrink  h-auto   w-auto   md:flex-shrink-0 overflow-hidden ">
        {news.map((item, i) => (
          <div class=" lg:py-12 lg:flex lg:justify-center border-b">
            <div class=" lg:mx-8 lg:flex lg:max-w-5xl lg:rounded-lg">
              <div class=" mt-8 md:lg:w-1/2 ">
                <div class="h-60 w-60 bg-cover lg:rounded-lg lg:h-full news_image ">
                  {" "}

                  <Link
                    href=
                  {{
                    pathname: `/newspage/eachnews/${item.slug}/`,
                    query:{ date : moment(item.published_time).format(
                      "YYYY/MM/DD"
                    ) },
                  }}
                  >
                    <img src={item.featured_image} />
                  </Link>
                </div>
              </div>
              <div class=" px-6 max-w-xl lg:max-w-5xl lg:w-3/5">
                <h2 class="text-3xl text-gray-800 font-normal">{item.title}</h2>
                <p>{moment(item.published_time).format("YYYY/MM/DD")}</p>
                <div
                  className="mt-0 text-gray-600 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex align-center mr-8 space-between ">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="  items-center justify-items-center text-black font-bold  rounded"
        >
          Previous
        </button>
        &nbsp;
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className=" items-center justify-items-center text-black font-bold  rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
