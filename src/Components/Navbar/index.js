import styled from "styled-components";
import logo from "./logo2.png";

function Navbar() {
  return (
    <StyledNav>
      <div className="alpha">
        <img className="logo" src={logo} alt="logo" />
        <div className="logo_text">Abscond</div>
      </div>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="https://www.instagram.com/iiche.tiet/">Prizes</a>
          </li>
          <li>
            <a href="https://www.instagram.com/iiche.tiet/">Sponsors</a>
          </li>
          <li>
            <a href="https://www.instagram.com/iiche.tiet/">Get In Touch</a>
          </li>
        </ul>
        <a className="cta" href="https://www.instagram.com/iiche.tiet/">
          {" "}
          <button className="specialbutton">LOGIN</button>
        </a>
      </nav>
    </StyledNav>
  );
}

const StyledNav = styled.header`
  width: 100%;
  height: 10vh;

  li,
  a,
  button {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: white;
    text-decoration: none;
  }

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  top: 0%;
  position: absolute;
  padding: 0 4rem;
  height: 10vh;
  z-index: 3;
  width: 100%;

  .alpha {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .logo {
    cursor: pointer;
    margin-right: auto;
    width: 2.5rem;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }

  button {
    padding: 9px 25px;
    background-color: #f97171;
    border: none;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
    margin-left: 20px;
  }

  .cta :hover {
    background: transparent;
    outline: 2px solid #fff;
    color: #fff;
  }

  .logo_text {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: 500;
  }

  nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .nav_links {
    list-style: none;
  }

  .nav_links li {
    display: inline-block;
    padding: 0% 20px;
  }

  .nav_links li a {
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }

  .nav_links li a:hover {
    color: #0088a9;
  }

  background: linear-gradient(
    to right,
    #f97171 0%,
    #f97171 30%,
    #385a7c 30%,
    #385a7c 100%
  );

  .specialbutton {
    color: black;
  }
`;
export default Navbar;
