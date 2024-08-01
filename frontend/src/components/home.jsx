import React from "react";
// import Chatbot from "./chatbot";

export default function Home() {
  return (
    <>
      <main>
        {/* <Chatbot /> */}
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523396140703-e5bdad4e5dea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMHRlY2h8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl">
                    Empowering Access,
                    <br /> For All{" "}
                    <b className="text-yellow-500">
                      with Multilingual, Inclusive, and Accessible Solutions
                    </b>
                  </h1>

                  <p className="mt-4 text-gray-300">
                    Welcome to InclusioTech, your destination for inclusive
                    technology solutions. Discover, innovate, and connect with
                    our wide range of tools and supportive community, designed
                    to enhance your technological experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {/* Blogs Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-book"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Blogs</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Explore educational content, recent case studies, and
                      market scope. Upload videos and contribute to our learning
                      community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk & Analysis Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Risk & Analysis</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Enter company details and investment preferences to
                      receive a detailed risk assessment and expected return
                      report using our ML model.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-brain"></i>
                    </div>
                    <h6 className="text-xl font-semibold">AI</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Leverage our AI tools for investment guidance, market
                      analysis, and personalized recommendations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Resource Finder Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-400">
                      <i className="fas fa-search"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Resource Finder</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Find important information quickly with our integrated
                      search bar. No need to visit multiple websites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Peer to Peer Funding Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400">
                      <i className="fas fa-hand-holding-usd"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Peer to Peer Funding
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      View and create funding requests to support and receive
                      investment from peers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Podcast Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-400">
                      <i className="fas fa-podcast"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Podcasts</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Listen to insightful podcasts featuring industry experts
                      and thought leaders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-400">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Community</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Engage with others, ask questions, and share knowledge in
                      our active community forum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Text to Speech Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                      <i className="fas fa-microphone-alt"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Text to Speech</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Convert written text into natural-sounding speech to
                      improve accessibility for visually impaired users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Speech to Text Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-400">
                      <i className="fas fa-voice"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Speech to Text</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Transform spoken words into written text for easier
                      documentation and communication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sign Language Conversion Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400">
                      <i className="fas fa-sign-language"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Sign Language Conversion
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Convert sign language into text or speech to facilitate
                      communication for hearing-impaired users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real-time Video Captioning Feature Card */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-cyan-400">
                      <i className="fas fa-closed-captioning"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Real-time Video Captioning
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Automatically generate captions for videos in real-time to
                      enhance accessibility for all users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-10/12 px-4 mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">About Us</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Welcome to InclusioTech, your trusted platform for inclusive
                  technology solutions. Our mission is to provide a
                  user-friendly interface for individuals with varying levels of
                  technological expertise, ensuring everyone can access and
                  benefit from our tools. With features like blogs, risk and
                  analysis tools, AI guidance, resource finders, peer-to-peer
                  funding, podcasts, and a vibrant community, InclusioTech is
                  committed to making technology accessible and beneficial for
                  all.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Whether you're just beginning to explore technology or looking
                  to deepen your understanding, InclusioTech offers an intuitive
                  and supportive environment. Our platform is designed with
                  simplicity in mind, ensuring that even those with limited
                  technological experience can navigate and utilize our features
                  effortlessly. From finding important resources quickly to
                  receiving personalized guidance through AI, InclusioTech aims
                  to empower all users to thrive in the digital world.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Join us in our mission to bridge the technological gap and
                  create an inclusive digital community. Explore our features,
                  engage with our community, and take advantage of our
                  innovative tools designed to make technology work for you,
                  regardless of your experience level.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
