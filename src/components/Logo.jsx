/* eslint-disable react/no-unknown-property */
import logo from "../assets/Logo.png";
const Logo = () => {
  return (
    <div
      style={{
        padding: "10px 20px",
        position: "fixed",
        left: "1em",
        top: "1em",
      }}
    >
      <img src={logo} />
    </div>
  );
};

export default Logo;
