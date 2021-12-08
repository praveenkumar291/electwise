import React from 'react'

const aphc = () => {
  return (
    <div>
      {/* <!-- component --> */}
      {/* <!-- This is an example component --> */}
      <div>
        <div className="relative items-center justify-center">
          {/* <!-- Header Text--> */}
          <h1 className="text-center text-2xl font-bold p-4 bg-gray-800 text-gray-400">
            Choose Your Next Adventure
          </h1>
          <h3 className="font-bold text-gray-600 text-lg mt-14 ml-9 uppercase">
            AP HC squashes SEC order
          </h3>

          {/* <!-- All Cards Container --> */}
          <div className="lg:flex  items-center container   my-auto">
            {/* <!-- Card 1 --> */}
            <div className="p-4 rounded-lg -mr-44 mt-10 ">
              {/* <!-- Card Image --> */}
              <img
                src="https://www.electwise.in/media/images/news/2021/01/11/ap-hc.jpeg"
                alt=""
                className="overflow-hidden"
              />
              {/* <!-- Card Content --> */}
              <div className="p-4 lg:m-4  max-w-4xl rounded-lg  my-12 -mx-80">
                <h3 className="font-bold text-gray-600 text-lg my-2 uppercase">
                  Relief for AP Govt
                </h3>
                <p className="text-justify p-4 max-w-5xl  mt-4 -ml-12">
                  Amaravati: Andhra Pradesh High Court has squashed the State
                  Election Commissioner’s order regarding holding Panchayat
                  elections. The State government has moved a lunch motion
                  requesting the court to squash the order since it would come
                  in the way of vaccination programme. The advocate general Sri
                  Ram and Aswani Kumar on behalf of SEC have argued for two
                  hours on Monday.
                </p>
                <p className="text-justify -ml-9">
                  The SEC is planning to appeal against the HC order to a
                  division bench.
                </p>
                <div className="mt-5">
                  {/* <a
                    href=""
                    className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100"
                  >
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="mb-96  ">
              {/* <!-- Card Image --> */}
              <h3 className="font-bold text-gray-600 text-lg uppercase">
                Latest News
              </h3>
              {/* <!-- Card Content --> */}

              <p>Hold farm laws or we will, SC to Centre</p>
              <p>AP CM launches 2nd phase of Jagananna Amma Vodi</p>
              <p>Social Sector Investments</p>
              <p>Bowenpally kidnap case: High drama continues</p>
              <p>Rajinikanth: Don’t Indulge in protests</p>

              <h3 className=" font-bold text-gray">Related Parties</h3>
              <p>Yuvajana Sramika Rythu Congress Party</p>

              <h3>Related Politicians</h3>
              <p>Jagan Mohan Reddy. Yaduguri Sandinti</p>
            </div>
            {/* <!-- Card 3 --> */}
            {/* *<div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              <!-- Card Image -->
              <img
                src="https://picsum.photos/id/342/2106/1404"
                alt=""
                className="overflow-hidden"
              />
              <!-- Card Content -->
              <div className="p-4">
                <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">
                  Tour the City
                </h3>
                <p className="text-justify">
                  Upon but that objects tis sore would what. Who formed in
                  coffined heartless shades, there mine was heart vast flaunting
                  he low relief uncouth, dear and and but suffice ofttimes.
                </p>
                <div className="mt-5">
                  <a
                    href=""
                    className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="mt-10 bottom-0 w-full  p-4  text-center">
            <h4 className="text-sm font-semibold text-gray-600 ">
              {" "}
              Courtesy :
              https://www.primepost.in/ap-highcourt-squashes-sec-order/
            </h4>
            <h4>
              (This Article has been reposted with permission from Primepost)
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aphc;
