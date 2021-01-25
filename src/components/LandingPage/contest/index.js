import "./styles.scss";
import studentImage from '../../../asset/studentImage/group-icon.png';

function Contest(props) {
  return (
    <div className="row mt-5 pixel-contest" >
      <div className="col-sm-12 col-md-6 col-lg-6 mt-3 align-content-center" > 
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h2><b>PixelMath</b></h2>
            <h2><b>Online Math Contests</b></h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Join students from all over India in a fun and playful math contest.</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button className="math-contest">Math Contest</button>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 align-content-center">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img src={studentImage} width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contest;