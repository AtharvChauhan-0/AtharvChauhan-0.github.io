// src/pages/HomePage.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.accent}, transparent);
    top: -400px;
    right: -200px;
    filter: blur(70px);
    opacity: 0.15;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const AccentSpan = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const HeroCTA = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentDark};
    color: white;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(CTAButton)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  
  &:hover {
    background-color: rgba(56, 189, 248, 0.1);
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p:last-child {
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  background-color: rgba(15, 23, 42, 0.5);
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const ProfileImage = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 2rem;
  }
`;

const ProfileImagePlaceholder = styled.div`
  background-color: rgba(15, 23, 42, 0.5);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SkillsSection = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h3`
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    
    &::before {
      content: "▹";
      color: ${({ theme }) => theme.colors.accent};
      margin-right: 0.5rem;
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection>
        <div className="container">
          <HeroContent>
            <h1>Cloud <AccentSpan>Developer</AccentSpan></h1>
            <Subtitle>Building scalable infrastructure and cloud-native applications</Subtitle>
            <p>Specialized in AWS, Azure, GCP, and modern DevOps practices</p>
            <HeroCTA>
              <CTAButton to="/contact">Get In Touch</CTAButton>
              <SecondaryButton to="/projects">View My Work</SecondaryButton>
            </HeroCTA>
          </HeroContent>
        </div>
      </HeroSection>
      
      <AboutSection id="about">
        <div className="container">
          <SectionTitle>About Me</SectionTitle>
          <AboutContent>
            <AboutText>
              <p>I'm a passionate Cloud Developer with expertise in designing, implementing, and managing cloud infrastructure and applications. My focus is on building scalable, resilient, and cost-effective cloud solutions that drive business value.</p>
              <p>With a strong background in both development and operations, I bridge the gap between traditional IT and modern cloud-native practices. I love solving complex infrastructure challenges and automating everything possible.</p>
              <StatsGrid>
                <StatItem>
                  <StatNumber>5+</StatNumber>
                  <StatLabel>Years of Cloud Experience</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>50+</StatNumber>
                  <StatLabel>Projects Delivered</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>8</StatNumber>
                  <StatLabel>Cloud Certifications</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>3</StatNumber>
                  <StatLabel>Cloud Providers</StatLabel>
                </StatItem>
              </StatsGrid>
            </AboutText>
            <ProfileImage>
              <ProfileImagePlaceholder>
                <p>Your Professional Headshot</p>
              </ProfileImagePlaceholder>
            </ProfileImage>
          </AboutContent>
        </div>
      </AboutSection>
      
      <SkillsSection id="skills">
        <div className="container">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SkillsGrid>
            <SkillCard>
              <SkillIcon>☁️</SkillIcon>
              <SkillTitle>Cloud Platforms</SkillTitle>
              <SkillList>
                <li>Amazon Web Services (AWS)</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>Multi-cloud Architectures</li>
                <li>Cloud Cost Optimization</li>
              </SkillList>
            </SkillCard>
            <SkillCard>
              <SkillIcon>🔄</SkillIcon>
              <SkillTitle>DevOps & CI/CD</SkillTitle>
              <SkillList>
                <li>Docker & Kubernetes</li>
                <li>Jenkins, GitHub Actions</li>
                <li>GitLab CI, CircleCI</li>
                <li>Continuous Integration/Delivery</li>
                <li>Deployment Automation</li>
              </SkillList>
            </SkillCard>
            <SkillCard>
              <SkillIcon>🛠️</SkillIcon>
              <SkillTitle>Infrastructure as Code</SkillTitle>
              <SkillList>
                <li>Terraform</li>
                <li>AWS CloudFormation</li>
                <li>Azure Resource Manager</li>
                <li>Ansible</li>
                <li>Pulumi</li>
              </SkillList>
            </SkillCard>
          </SkillsGrid>
        </div>
      </SkillsSection>
    </main>
  );
};

export default HomePage;
