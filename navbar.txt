// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  background-color: rgba(15, 23, 42, 0.95);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
`;

const NavContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  
  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1rem 2rem;
    gap: 1rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <NavbarContainer>
      <div className="container">
        <NavContent>
          <Logo to="/">Cloud<span>Dev</span></Logo>
          <MobileMenuButton onClick={toggleMenu}>☰</MobileMenuButton>
          <NavLinks isOpen={isOpen}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavLinks>
        </NavContent>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
