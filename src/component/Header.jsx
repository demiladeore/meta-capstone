import Nav from "./Nav";

function Header(prop) {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <img src={prop.logo} />
        <Nav />
      </div>
    </>
  );
}

export default Header;
