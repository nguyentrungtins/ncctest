import logo from "../images/logoNCC 1.png";
import img1 from "../images/css-icon.png";
import img2 from "../images/html-icon.png";
import img3 from "../images/url-icon.png";

import Card from "./Card";
const Content = () => {
  return (
    <section class="site-body">
      <div className="logo">
        <img src={logo} alt="logoNCC" />
      </div>
      <div className="introduce">
        <h4>Lorem ipsum dolor sit amet consectetur?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta,
          velit ea quidem molestias accusamus magni ducimus corrupti nulla vel
          aspernatur ut porro officia neque sapiente quod voluptates quos
          doloribus. Culpa consequatur eum, iusto qui ad quas? Sit quia autem
          vitae tenetur ipsa, minus, incidunt eveniet atque fugit temporibus
          exercitationem. Odio autem eligendi aliquid hic aliquam dolor optio
          adipisci molestiae.
        </p>
      </div>
      <div className="card">
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
      </div>
    </section>
  );
};
export default Content;
