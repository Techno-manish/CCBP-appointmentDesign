import styled from "styled-components";

const navItems = ["Home", "Find Doctors", "About Us"];

const Navbar = () => (
  <NavbarContainer>
    <NavLogoLinkContainer>
      <NavLogoImage src="/assets/Logo-appointmentDesign.png" alt="Logo" />

      <NavContainer>
        {navItems.map((each) => (
          <li
            key={each}
            style={{ color: each === "Find Doctors" ? "green" : "#000" }}
          >
            {each}
          </li>
        ))}
      </NavContainer>
    </NavLogoLinkContainer>
    <NavButtonContainer>
      <NavLoginButton type="button">Login</NavLoginButton>
      <NavSignUpButton type="button">Sign-Up</NavSignUpButton>
    </NavButtonContainer>
  </NavbarContainer>
);

export default Navbar;

// Styled Components
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between; /* Centers the nav items horizontally */
  padding: 1rem; /* Adds padding around the container */
  background-color: #fff7e2;
`;

const NavLogoLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
  gap: 50px;
`;

const NavLogoImage = styled.img`
  height: 49px;
  width: 259px;
  cursor: pointer;
`;

// Navigation link styled component
const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style-type: none;
  color: #000;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  li:hover {
    color: #3a643b;
    font-weight: bold;
  }
`;

const NavButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 40px;
`;

const NavLoginButton = styled.button`
  padding: 5px 10px;
  height: 40px;
  width: 100px;
  border: 1px solid #3a643b;
  color: #3a643b;
  background-color: transparent;
  border-radius: 5%;
  cursor: pointer;
`;

const NavSignUpButton = styled.button`
  padding: 10px 20px;
  height: 40px;
  width: 100px;
  background-color: #3a643b;
  color: #fff;
  border: none;
  border-radius: 5%;
  cursor: pointer;
`;
