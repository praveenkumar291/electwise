import React from 'react'

const News = () => {
  return (
    <div>
      <div className="bg-white flex flex-col flex-no-shrink mx-auto  h-auto w-auto  shadow-lg md:flex-shrink-0 overflow-hidden ">
        <div className="card-title">
          <h1 className="card-title-one">News</h1>
          {/* <p>vhmvdjafdkaudfashvkuqwdyfvjhdvaskuydfqwvukd</p> */}
        </div>
        <div className="image-container1">
          <img
            className="w-36 h-25  md:w-30 md:h-auto md:rounded-none rounded-none mx-auto "
            src="https://www.electwise.in/media/images/news/2021/01/11/ap-hc.jpeg"
            alt=""
            width="320"
            height="222"
          />
          <p className="img_content">AP HC squashes SEC order</p>
        </div>
        <div className="image-container1">
          <img
            className="w-36 h-25 md:w-30 md:h-auto md:rounded-none rounded-none mx-auto "
            src="https://www.electwise.in/media/images/news/2021/01/11/sc-disappointed-with-govern.jpg"
            alt=""
            width="320"
            height="222"
          />
          <p className="img_content">Hold farm laws or we will, SC to Centre</p>
        </div>
        <div className="image-container1">
          <img
            className="w-36 h-25 md:w-30 md:h-auto md:rounded-none rounded-none mx-auto "
            src="https://www.electwise.in/media/images/news/2021/01/11/AP-CM-launches-2nd-phase-o.jpg"
            alt=""
            width="320"
            height="222"
          />
          <p className="img_content">
            AP CM launches 2nd phase of Jagananna Amma Vodi
          </p>
        </div>
        <div className="image-container1">
          <img
            className="w-36 h-25 md:w-30 md:h-auto md:rounded-none rounded-none mx-auto "
            src="https://www.electwise.in/media/images/news/2021/01/11/gdp.jpg"
            alt=""
            width="320"
            height="222"
          />
          <p className="img_content">Social Sector Investments</p>
        </div>
        <div className="img_content-end">
          <p>More News</p>
        </div>
      </div>
    </div>
  );
}

export default News
