import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./carousel";
import { Container } from "reactstrap";
import "../css/shop.css";
import Contemporary from "../resources/images/contemporary.jpeg";
import Postwar from "../resources/images/post-war.jpeg";
import Modern from "../resources/images/modern.jpeg";
import Pre20th from "../resources/images/pre20th.jpeg";
import Photography from "../resources/images/photography.jpeg";
import Street_art from "../resources/images/street_art.jpeg";
import MinSlide from "./small_slider";
import Foot from "./foot";
import s1 from "../resources/images/s1.jpg";
import s2 from "../resources/images/s2.jpg";
import s3 from "../resources/images/s3.jpg";
import s4 from "../resources/images/s4.jpg";
import s5 from "../resources/images/s5.jpg";
import s6 from "../resources/images/s6.jpg";
import s7 from "../resources/images/s7.jpg";
import s8 from "../resources/images/s8.jpg";
import s9 from "../resources/images/s9.jpg";
import s10 from "../resources/images/s10.jpg";
import s11 from "../resources/images/s11.jpg";

function Shop() {
  return (
    <div className="shop">
      <ul className="shop-nav">
        <li>
          <input id="search-bar" type="text" placeholder="search" />
        </li>
        <li>
          <Link>Artworks</Link>
        </li>
        <li>
          <Link>Auctions</Link>
        </li>
        <li>
          <Link>Galleries</Link>
        </li>
        <li>
          <Link>Fairs</Link>
        </li>
        <li>
          <Link>Editorial</Link>
        </li>
        <li>
          <Link>More</Link>
        </li>
        <li>
          <Link id="shop-login">Log In</Link>
        </li>
        <li>
          <Link id="shop-signup">Sign Up</Link>
        </li>
      </ul>
      <div className="slider">
        <Carousel id="slider" />
      </div>
      <div className="mainContent">
        <Container>
          <section className="section-1">
            <div className="img1"></div>
            <ul>
              <li className="feature-fair">Feature Fair</li>
              <li className="shop-feature-fair-text">London Art Fair 2020</li>
            </ul>
          </section>
          <div className="shop-items">
            <div className="featured-categories">
              <p>Featured Categories</p>
              <ul>
                <li>
                  <img src={Contemporary} />
                  <br />
                  Contemporary
                  <br />
                  <span>Today's leading artists and talents</span>
                </li>
                <li>
                  <img src={Postwar} />
                  <br />
                  Post-war
                  <br />
                  <span>From abstract Expressionism to Pop Art</span>
                </li>
                <li>
                  <img src={Modern} />
                  <br />
                  Impressionist & Modern
                  <br />
                  <span>The birth of Abstraction, Surrealism and Dada</span>
                </li>
                <li>
                  <img src={Pre20th} />
                  <br />
                  Pre-20th Century
                  <br />
                  <span>Ancient Rome, the Renaissance, Baroque, and more </span>
                </li>
                <li>
                  <img src={Photography} />
                  <br />
                  Photography
                  <br />
                  <span>Through the lens--from daguerreotypes to digital</span>
                </li>
                <li>
                  <img src={Street_art} />
                  <br />
                  Street Art
                  <br />
                  <span>
                    The rise of graffiti, vinyl toys, and skate culture
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p>Works By Popular Artists</p>
          <MinSlide sArray={[s1, s2, s3, s4, s5, s6, s7, s8]} />
          <MinSlide sArray={[s4, s5, s6, s7, s8, s9, s10, s11]} />
        </Container>
      </div>
      <Foot />
    </div>
  );
}

export default Shop;
