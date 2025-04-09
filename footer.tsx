// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 3rem 0;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-5px);
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</SocialLink>
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
          <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
        </SocialLinks>
        <Copyright>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;
