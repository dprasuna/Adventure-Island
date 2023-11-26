import React, { useEffect, useRef } from "react";
import Slider from "../components/LandingPageslider/slider";
import "./home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { data } from "../data/type";
import getImageByKey from "../Imagemapping";
import Footer from "../components/footer/footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const bgref = useRef(null);

  useEffect(() => {
    function pinBackground() {
      const t1 = gsap
        .timeline({
          delay: 1,
          scrollTrigger: {
            trigger: bgref.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: true,
          },
        })

        .to("#wildheading", {
          y: -400,
          opacity: 1,
          scale: 1,
          duration: 2,
          delay: function (index) {
            return 2 * index;
          },
        })
        .to(bgref.current, { scale: 1 }, "+=0.05");

      return t1;
    }

    const mastertimeline = gsap.timeline();
    mastertimeline.add(pinBackground());
  }, []);

  useEffect(() => {
    let sections = gsap.utils.toArray(".BirdStats");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".statbox",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=" + (sections.length - 1) * 650,
      },
    });

    gsap.to("#type1", {
      ease: "none",
      xPercent: -50,
      scrollTrigger: {
        trigger: ".saveanimal",
        end: "top bottom",
        scrub: 1,
      },
    });
    gsap.to("#type2", {
      ease: "none",
      xPercent: 50,
      scrollTrigger: {
        trigger: ".saveanimal",
        end: "top bottom",
        scrub: 1,
      },
    });
    gsap.to("#type3", {
      ease: "none",
      xPercent: -50,
      scrollTrigger: {
        trigger: ".saveanimal",
        end: "top center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="home">
      <div className="HomePageSlider">
        <Slider />
      </div>
      <div className="wildLifeStats" id="home">
        <div ref={bgref} className="WildLifeHeadingbg"></div>
        <div className="WildLifeHeading">
          <h2 id="wildheading">
            <span>Over</span> 1.7 million <span>Species</span>
          </h2>
          <h2 id="wildheading" className="Letsview">
            Lets View Few Of Them
          </h2>
        </div>
        <section className="statbox">
          <div className="birddiv">
            <div className="BirdStats">
              <div className="birdwrapper">
                <h2>Birds</h2>
                <h4>Total Species</h4>
                <p>
                  We see that there are more than 11,000 described bird species
                  in the world.
                </p>
                <button>View Article</button>
              </div>
              <div className="birdwrapper">
                <h2>Birds</h2>
                <h4>Endangered</h4>
                <p>
                  Almost 1,500 bird species are threatened with extinction
                  across the world.
                </p>
                <button>View Article</button>
              </div>
              <div className="birdwrapper">
                <h2>Birds</h2>
                <h4>Extinct</h4>
                <p>
                  Its estimated that 159 bird species have gone extinct since
                  1500.
                </p>
                <button>View Article</button>
              </div>
            </div>
            <div className="BirdStats">
              <div className="birdwrapper">
                <h2>Animals</h2>
                <h4>Total Species</h4>
                <p>
                  We see that there are more than 11,000 described bird species
                  in the world.
                </p>
                <button>View Article</button>
              </div>
              <div className="birdwrapper">
                <h2>Animals</h2>
                <h4>Endangered</h4>
                <p>
                  There are over 16,300 species believed to be endangered,
                  according to the International Union for Conservation of
                  Nature (IUCN),
                </p>
                <button>View Article</button>
              </div>
              <div className="birdwrapper">
                <h2>Animals</h2>
                <h4>Total Species</h4>
                <p>
                  We see that there are more than 11,000 described bird species
                  in the world.
                </p>
                <button>View Article</button>
              </div>
            </div>
            <div className="BirdStats">
              <div className="birdwrapper">
                <h2>Swimmer</h2>
                <h4>Total Species</h4>
                <p>
                  We see that there are more than 11,000 described bird species
                  in the world.
                </p>
                <button>View Article</button>
              </div>
              <div className="birdwrapper">
                <h2>Swimmer</h2>
                <h4>Total Species</h4>
                <p>
                  We see that there are more than 11,000 described bird species
                  in the world.
                </p>
                <button>View Article</button>
              </div>
              <div className="birdwrapper">
                <h2>Swimmer</h2>
                <h4>Total Species</h4>
                <p>
                  We see that there are more than 11,000 described bird species
                  in the world.
                </p>
                <button>View Article</button>
              </div>
            </div>
          </div>
        </section>
        <section className="typebx">
          <div className="type" id="type1">
            {data &&
              data[0].Critically_Endangered.map((animal) => {
                return (
                  <div className="card" key={animal.name}>
                    <img src={getImageByKey(animal.image)} alt={animal.name} />
                    <div className="info">{animal.name}</div>
                  </div>
                );
              })}
          </div>

          <div className="type" id="type2">
            {data &&
              data[1].Endangered.map((animal) => {
                return (
                  <div className="card" key={animal.name}>
                    <img src={getImageByKey(animal.image)} alt={animal.name} />
                    <div className="info">{animal.name}</div>
                  </div>
                );
              })}
          </div>
          <div className="type" id="type3">
            {data &&
              data[2].Vulnerable.map((animal) => {
                return (
                  <div className="card" key={animal.name}>
                    <img src={getImageByKey(animal.image)} alt={animal.name} />
                    <div className="info">{animal.name}</div>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="saveanimal">
          <div className="sectionheading">
            <h3>Save Animals</h3>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
