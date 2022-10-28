import React from "react";

export const Page = () => {
  return (
    <main>
      <div className="background"></div>
      <div className="stage">
        <header>
          <div className="logo_player">
            <div className="player"></div>
            <h1 className="logo">🐼 dev_panda</h1>
          </div>
        </header>
        <section className="hero">
          <p className="heroText1">hello there!👋, i'm</p>
          <p className="heroText2">
            a <em>frontend developer👨‍💻 - </em>which means i'm responsible for
            the <em>look👁‍🗨</em> and <em>feel🤤</em> of your everyday{" "}
            <em>applications🧩,</em> whether <em>web🕸</em>, <em>mobile📱</em> or{" "}
            <em>softwares⚙</em>.
          </p>

          <p className="heroText3">
            here's my <em>portfolio🗃</em> of projects i think you'll find{" "}
            <em>really cool!🙃...</em>
          </p>
          <div className="botin-wrapper">
            <button className="botin" id="explore" onclick="explore()">
              👨🏻‍🚀 explore
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
