import React from "react";

const MainSection = () => (
  <div className="text-center pt-16">
    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-9 dark:text-white">
      Everything You Need
    </h1>
    <p className="pt-4 sm:pt-6 text-2xl sm:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
      Enjoy customizable lists, teamwork tools, and smart <br /> tracking all in
      one place. Set tasks, get reminders, <br /> and see your progress simply
      and quickly.
    </p>
  </div>
);

const Card = ({ title, description }) => (
  <div className="px-6 py-10 max-w-sm rounded-lg text-center border-2 border-neutral-800 bg-neutral-900">
    <h4 className="font-bold text-xl mb-2 text-white">{title}</h4>
    <p className="text-gray-300 text-base">{description}</p>
  </div>
);

const CardSection = () => (
  <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5 justify-items-center">
    <Card
      title="Integration Ecosystem"
      description="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
    />
    <Card
      title="Goal setting and tracking"
      description="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
    />
    <Card
      title="Secure data encryption"
      description="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
    />
  </div>
);

const InterfaceSection = () => (
  <div className="text-center bg-gradient-to-t from-violet-600 to-black min-h-screen text-white overflow-auto mt-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-12">
      Intuitive Interface
    </h1>
    <p className="pt-4 sm:pt-6 md:pt-9 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4">
      Celebrate the joy of accomplishment with an app <br /> designed to track
      your progress, motivate your efforts, <br /> and celebrate your successes,
      one task at a time.
    </p>
    <div className="pt-3 flex items-center justify-center">
      <div className="max-w-full max-h-screen px-4 sm:px-6 lg:px-8">
        <img
          src="src/assets/App Night.png"
          className="w-full sm:w-auto md:w-auto lg:w-auto h-auto"
          alt="App Interface"
        />
      </div>
    </div>
  </div>
);

const FAQSection = () => (
  <div className="font-mono dark:text-white bg-gradient-to-b from-violet-600 to-black flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-12 mb-9">
      Frequently asked questions
    </h1>
    <div className="w-10/12 md:w-7/12 lg:w-6/12 space-y-6">
      {[
        "How does the pricing work for teams",
        "How does the pricing work for teams",
        "How does the pricing work for teams",
        "How does the pricing work for teams",
      ].map((question, index) => (
        <div
          key={index}
          className="flex border-b-2 border-gray-500 justify-between items-center py-4"
        >
          <p className="text-lg">{question}</p>
          <button className="text-2xl font-bold">+</button>
        </div>
      ))}
    </div>
  </div>
);

const AccessSection = () => (
  <div className="bg-black text-white flex flex-col justify-center items-center space-y-8">
    <div className="flex items-center">
      <img
        src="src/assets/emojistar 1.png"
        alt="Emoji Star"
        className="w-48 md:w-80 mr-16 mb-48"
      />
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Get instant access
        </h1>
        <p className="text-gray-400 m-9">
          Celebrate the joy of accomplishment with an app designed <br /> to
          track your progress and motivate your efforts.
        </p>
        <div className="flex space-x-2 justify-center">
          <input
            type="email"
            placeholder="name@gmail.com"
            className="bg-gray-800 text-gray-400 p-2 rounded-lg w-52 md:w-72 h-9"
          />
          <button className="bg-white text-black px-4 py-2 rounded-lg font-bold">
            Get access
          </button>
        </div>
      </div>
      <img
        src="src/assets/helix2 1.png"
        alt="Helix"
        className="w-48 md:w-80 ml-16 mt-48"
      />
    </div>

    <Footer />
  </div>
);

const Footer = () => (
  <footer className="w-full mt-8 border-t-2 border-gray-500 flex flex-row justify-between p-3">
    <p className="text-gray-400 text-xs ">
      © 2024 Your Company, Inc. All rights reserved
    </p>
    <div className="flex flex-row gap-4">
      {[
        "src/assets/Vector-1.png",
        "src/assets/Vector-2.png",
        "src/assets/Vector-3.png",
        "src/assets/Vector-4.png",
        "src/assets/Vector-4.png",
        "src/assets/Vector-5.png",
      ].map((icon, index) => (
        <a key={index} href="#">
          <img src={icon} alt="" className="w-4 h-4" />
        </a>
      ))}
    </div>
  </footer>
);

const App = () => (
  <div style={{ background: "#010002" }}>
    <MainSection />
    <CardSection />
    <InterfaceSection />
    <FAQSection />
    <AccessSection />
  </div>
);

export default App;
