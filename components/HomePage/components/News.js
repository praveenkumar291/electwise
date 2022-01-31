import React, { useEffect, useState } from 'react'
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/router';
import { stateList } from "../../Layout/components/constants";







const News = () => {
  const router = useRouter();

  const [results, setResults] = useState([]);
  const getStateName = () => {
    const slug = router.asPath.split("/")[1];
    return stateList[slug];
  };


  const getNews = (newsslug= getStateName()) => {

    axios
      .get(`https://www.electwise.in/api/v2/news/?state=andhra-pradesh`)
      .then(({ data }) => {
        setResults(data.results.slice(1, 5));
        console.log(data);
      })
      .catch((e) => console.log(e));




  };
  useEffect(() => {
   getNews(window.location.pathname.split("/").pop())

  },[])





 return (
   <div>
     <div className="bg-white flex flex-col flex-no-shrink  h-auto   w-auto  shadow-lg md:flex-shrink-0 overflow-hidden ">
       <div className="card-title">
         <h1 className="card-title-one">News</h1>
       </div>
       {results.map((item, i) => (
         <div className="image-container1">
           <img
             className="w-20 h-25  md:w-30 md:h-auto md:rounded-none rounded-none mx-auto "
             src={item.featured_image}
             alt=""
             width="320"
             height="222"
           />

           <Link href={`/newspage/${item.slug}`}>

             <p className="img_content">{item.title}</p>
           </Link>
         </div>
       ))}
       <div className="img_content-end">
         <p>More News</p>
       </div>
     </div>
   </div>
 );
}

export default News
