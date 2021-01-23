import pixelLogo from "../../asset/logo.png";
import "./styles.scss";

export default () => {
  return (
    <div className="pixel-logo">
    <div
      style={{
        padding: '20px 10px',
        display: 'flex',
      }}>
      <img width="70px" height="70px" src={pixelLogo} alt="logo" />
      <h2 style={{ marginTop: -1, fontWeight: 600, fontSize: 44 }}>PixelMath</h2>
    </div>
    </div>
  )
}