import React from "react";

export function Main() {
  return (
    <div className="flex">
      <div className="w-3/4 bg-blue-500">
        <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold justify-end" style={{ textAlign: 'left', marginRight: '215px' }}>SYNMAC CONSULTANTS PVT LTD</h1>
          <p className="text-white px-8 py-5">
           We are young and dynamic consulting company and have diverse areas of expertise in Accounts, Tax and other finance areas. We have an enviable reputation for providing a fast, efficient service in a friendly and professional manner.
          </p>
          <div className="p-4 flex justify-end w-12" style={{ gap: '10px',textAlign: 'left', marginRight: '500px' }}>
            <a href="https://www.facebook.com">
              <img
                src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png"
                alt="Facebook"
                className="mr-8 border-2 border-white p-1 hover:bg-white hover:border-black rounded-full"

              />
            </a>
            <a href="https://www.twitter.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                alt="Twitter"
                className="mr-8 border-2 border-white p-1 hover:bg-white hover:border-black rounded-full"
                // Add your image styling here
              />
            </a>
            <a href="https://www.linkedin.com">
              <img
                src="https://png.pngtree.com/element_our/png_detail/20181011/linkedin-social-media-icon-design-template-vector-png_127000.jpg"
                alt="LinkedIn"
                className="mr-8 border-2 border-white p-1 hover:bg-white hover:border-black rounded-full"
                // Add your image styling here
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-blue-500 flex justify-center items-center">
        <img
          src="https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2018/08/BG_shutterstock_1019116420.jpg"
          alt="Your Image"
          className="border-white p-1 rounded-md box-shadow bg-white" // Updated styling
        />
      </div>
    </div>
  );
}

export default Main;
