import "./Header.css";

function Header(props) {
  const { logo } = props;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#5878BE",
        height: "200px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        boxShadow: "0px 5px 13px rgba(16, 158, 219, 0.59)",
      }}
    >
      {/* Logo */}
      {logo ? (
        <img src={logo} alt="logo" style={{ height: "80px" }} />
      ) : (
        <h1>Logo</h1>
      )}
    </div>
  );
}


export default Header;
