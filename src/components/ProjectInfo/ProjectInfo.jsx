import React from 'react';
import SkillsList from '../SkillsList/SkillsList';

import {
  ProjectInfoContainer,
  ImageContainer,
  StyledImage,
  InfoContainer,
  ProjectTitle,
  InfoText,
  ExternalLinks,
  ExternalLinkIconText,
  ExternalLinkText,
} from './ProjectInfo.styles';

function ProjectInfo() {
  return (
    <ProjectInfoContainer>
      <ImageContainer>
        <StyledImage src="crown-clothing.png" />
      </ImageContainer>
      <InfoContainer>
        <ProjectTitle>Crown Clothing</ProjectTitle>
        <InfoText>
          Crown Clothing is an online clothing platform. It allows users
          to create an account, login, add items to a cart, and checkout.
          It uses a free version of the
          {' '}
          <a href="https://stripe.com/en-ca">Stripe API </a>
          to stimulate a checkout process for the users.
        </InfoText>
        <ExternalLinks>
          Checkout it out here:

          <div style={{ display: 'flex' }}>
            <ExternalLinkIconText
              target="_blank"
              href="https://github.com/padmaashini/crownclothing"
            >
              <img
                src="/github-logo.svg"
                alt="GitHub"
                aria-label="github"
              />
              <ExternalLinkText>
                GitHub
              </ExternalLinkText>
            </ExternalLinkIconText>
            <ExternalLinkIconText
              target="_blank"
              large
              href="https://github.com/padmaashini/crownclothing"
            >
              <img
                src="/deployed.svg"
                alt="GitHub"
                aria-label="github"
              />
              <ExternalLinkText>
                Deployed on Heroku!
              </ExternalLinkText>
            </ExternalLinkIconText>
            <ExternalLinkIconText
              target="_blank"
              large
              href="https://github.com/padmaashini/crownclothing"
            >
              <img
                src="/laptop.svg"
                alt="GitHub"
                aria-label="github"
              />
              <ExternalLinkText>
                DevPost
              </ExternalLinkText>
            </ExternalLinkIconText>
          </div>

        </ExternalLinks>
        {/* <br />
        <br />
        Feel free to checkout it out:
        <b> here</b>
        <br />
        <br />
        Github */}
        <br />
        <SkillsList skills={['React', 'Redux', 'Stripe', 'Firebase']} />
      </InfoContainer>
    </ProjectInfoContainer>
  );
}

export default ProjectInfo;
