import layerBaseImage from "./img/layer-base.png";
import layerMiddleImage from "./img/layer-middle.png";
import layerFrontImage from "./img/layer-front.png";
import dungeonImage from "./img/dungeon.jpg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  }, [])
  return (
    <div className="wrapper">
      <div className="content">
        <header className="header-main">
          <div className="layers">
            <div className="layer-head">
              <div className="caption">AI Arena Coding Challenge</div>
              <div className="title">Parallax Effect</div>
            </div>
            <div className="img-layer layer-base" style={{backgroundImage: `url(${layerBaseImage})`}}></div>
            <div className="img-layer layer-mid" style={{backgroundImage: `url(${layerMiddleImage})`}}></div>
            <div className="img-layer layer-front"  style={{backgroundImage: `url(${layerFrontImage})`}}></div>
          </div>
        </header>
        <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }}>
          <div className="m-article-content">
            <h2 className="m-header">Let's work together</h2>
            <p className="m-paragraph">TThis project is only a glimpse of my potential in crafting impressive solutions for you. Collaborating together, I'm confident that we can develop an exceptional end-product that surpasses our expectations.</p>
          </div>
          <div className="copy">Hector Falcon</div>
        </article>
      </div>
    </div>
  );
}

export default App;

