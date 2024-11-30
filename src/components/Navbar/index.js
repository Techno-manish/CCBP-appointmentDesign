import styled from "styled-components";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", route: "/" },
  { name: "Find Doctors", route: "/find-doctor" },
  { name: "About Us", route: "/find-doctor" },
];

const Navbar = () => (
  <NavbarContainer>
    <NavLogoLinkContainer>
      <NavLogoImage src="/assets/Logo-appointmentDesign.png" alt="Logo" />

      <NavContainer>
        {navItems.map(({ name, route }) => (
          <NavItemContainer key={name}>
            <StyledNavLink
              to={route}
              activeClassName="active"
              exact
              style={{ color: name === "Find Doctors" ? "green" : "#000" }}
            >
              {name}
            </StyledNavLink>
          </NavItemContainer>
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
  justify-content: space-between;
  padding: 1rem;
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

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style-type: none;
  color: #000;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

const NavItemContainer = styled.li`
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    color: #3a643b;
  }

  &.active {
    color: green;
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
