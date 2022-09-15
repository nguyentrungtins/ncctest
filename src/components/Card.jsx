import logo from "../images/css-icon.png";

const Card = ({ img = null }) => {
  return (
    <div className="card-item">
      <h2> Lorem ipsum dolor sit amet</h2>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex
        reprehenderit quia odio fuga natus voluptatibus, eius voluptates unde
        distinctio tenetur itaque eaque saepe, optio fugiat sit perspiciatis
        blanditiis! Vitae. Eos voluptatem ea possimus facilis, dolores deleniti
        molestiae aspernatur. Nostrum, magni rem ab maiores quae tenetur
        blanditiis optio suscipit sit eaque commodi eveniet minus incidunt
        reprehenderit eligendi quas soluta architecto?
      </p>
    </div>
  );
};
export default Card;
