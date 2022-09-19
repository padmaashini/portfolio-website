import React from 'react';
import PropTypes from 'prop-types';
import SkillsList from '../SkillsList/SkillsList';

import {
  ProjectInfoContainer,
  ImageContainer,
  StyledImage,
  InfoContainer,
  ProjectTitle,
  InfoText,
} from './ProjectInfo.styles';

import ExternalLinks from '../ExternalLinks/ExternalLinks';

function ProjectInfo({
  title, imgSrc, description, links, skillsList,
}) {
  return (
    <ProjectInfoContainer>
      <ImageContainer>
        <StyledImage src={imgSrc} />
      </ImageContainer>
      <InfoContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <InfoText>
          {description}
        </InfoText>
        <ExternalLinks buttons={links} />
        <SkillsList skills={skillsList} />
      </InfoContainer>
    </ProjectInfoContainer>
  );
}

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
  skillsList: PropTypes.arrayOf(PropTypes.string),
};

ProjectInfo.defaultProps = {
  skillsList: [],
};

export default ProjectInfo;
