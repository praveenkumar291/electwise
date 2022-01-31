import React, { useEffect, useState } from 'react';
import axios from "axios";



import Link from 'next/link'
import { useRouter } from 'next/router';
const NewsPage = () => {

  const [selectNews, setSelectedNews] = useState([]);
   const router = useRouter();
   const { date } = router.query;
   console.log(date);
  const getNews = (newsslug) => {
    console.log(date, newsslug, 'test');
    axios
      .get(
        `https://www.electwise.in/api/v2/news/${date}/${newsslug}/`
      )
      .then(({ data }) => {
        setSelectedNews(data);

        console.log(data);
      })
      .catch((e) => console.error(e));
  };
  useEffect(() => {

    getNews(window.location.pathname.split("/").pop());

  },[])




  return (
    <div className="container px-4 p-4 mx-auto flex lg:items-start  md:flex-nowrap flex-wrap flex-col">
      <div className=" flex flex-col flex-no-shrink h-auto w-auto   md:flex-shrink-0 overflow-hidden ">
        <div class=" lg:py-12 lg:flex lg:justify-center">
          <div class=" lg:mx-8 lg:flex lg:max-w-5xl lg:rounded-lg">
            <div class="lg:w-2/3">
              <div class="text-xl text-gray-800 font-bold mb-10">
                <h1>{`${selectNews.title}`}</h1>
                <h6>{`${selectNews.published_time}`}</h6>
              </div>
              <div class="h-64 bg-cover lg:rounded-lg lg:h-auto">
                <Link href={`${selectNews.slug}`}>
                  <img src={`${selectNews.featured_image}`} />
                </Link>
              </div>

              <div class=" max-w-xl lg:max-w-5xl text-justify">
                <div
                  className="mt-0 text-gray-600 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: selectNews.excerpt,
                  }}
                />{" "}
              </div>
            </div>
            <div class=" max-w-xl py-12 px-6 lg:max-w-5xl lg:w-1/2">
              <h2 class="text-3xl text-gray-800 font-bold">Latest News</h2>
              <p class=" text-gray-600">

    Hold farm laws or we will, SC to Centre
    AP CM launches 2nd phase of Jagananna Amma Vodi
    Social Sector Investments
    Bowenpally kidnap case: High drama continues
    Rajinikanth: Don’t Indulge in protests

              </p>
              <div class="mt-8">
                <a
                  href="#"
                  class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
