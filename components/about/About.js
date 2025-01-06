import React from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

// Styled components for layout and design
const AboutWrapper = styled.div`
  width: 95%;
  max-width: 60rem;
  padding: 1rem;
  margin: 2rem auto;
  font-size: 1.25rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0;
  padding: 32px 0;
  text-align: center;
  color: #333;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #333;
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  margin: 16px 0;
  color: #555;
`;

// The About component that displays the blog's introduction and purpose
export default function About() {
  return (
    <AboutWrapper>
      <Title>
        <TypeAnimation
          sequence={["About Us", 1000, "", 500]}
          repeat={Infinity}
          speed={20}
        />
      </Title>
      
      <ContentWrapper>
        <Paragraph>
          Welcome to the Developer's Hub! This platform is dedicated to helping developers stay up-to-date with the latest trends, tools, and technologies in the industry.
        </Paragraph>

        <SectionTitle>Our Purpose</SectionTitle>
        <Paragraph>
          Our mission is to create a space where developers from around the world can share their knowledge, experiences, and updates about the tech world. Whether you are a beginner or an experienced developer, you can find valuable insights and resources here.
        </Paragraph>

        <SectionTitle>Features</SectionTitle>
        <Paragraph>
          - Share articles, blog posts, and tutorials<br />
          - Discuss new technologies and frameworks<br />
          - Connect with other developers in the community<br />
          - Stay updated with the latest trends and news
        </Paragraph>

        <SectionTitle>Why Join Us?</SectionTitle>
        <Paragraph>
          - Build your network with fellow developers<br />
          - Share your projects and ideas<br />
          - Learn from others and grow in your career<br />
          - Contribute to a thriving tech community
        </Paragraph>

        <SectionTitle>Get Involved</SectionTitle>
        <Paragraph>
          Join us today and start sharing your ideas, knowledge, and experiences with the developer community. Together, we can shape the future of tech!
        </Paragraph>
      </ContentWrapper>
    </AboutWrapper>
  );
}
