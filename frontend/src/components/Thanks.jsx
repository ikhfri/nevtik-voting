import React from 'react'

const Thanks = () => {
  return (
      <div className="flex flex-col items-center justify-center mt-36 ">
          <div className="flex items-center">
              <img
                  src="/images/nevtik.png"
                  alt="logo-kampak"
                  className="md:w-56 w-20"
              />
              {/* <img
                  src="/images/mppk.png"
                  alt="logo-mppk"
                  className="ml-2 md:w-36 w-20"
              />
              <img
                  src="/images/osis.png"
                  alt="logo-osis"
                  className="md:w-36 w-24"
              /> */}
          </div>
          <div className="text-white gradient-bg text-center mb-24">
              <h1 className="md:text-6xl text-3xl font-bold">
                  Thank you for your vote!
              </h1>
              {/* <h3 className="md:text-3xl text-2xl">
                  'satukan suara, wujudkan demokrasi, lahirkan pemimpin
                  berdedikasi'
              </h3> */}
              
          </div>
      </div>
  );
}

export default Thanks