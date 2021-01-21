import "./styles.scss";
import { TEXT } from "../../../constant";
function Features() {
  return (
    <div className=" mt-5 pixel-feature">
      <h2 className="font-weight-bold mb-5">Features</h2>
      <div className="row">
        {TEXT.features.map((item) => (
          <div className="col-sm-4 mt4rem">
          <img src={item.image} alt="Adaptive Questioning" />
          <h5 className="mt-4 pt-2">{item.label}</h5>
          <p>{item.content}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Features;