import React from 'react';
import PropTypes from 'prop-types';

import {
  SkillsContainer,
  Skill,
} from './SkillsList.styles';

const SKILLS_COLOURS = ['#8791ed', '#bf1717', '#30ba52', '#eaae3f'];

function SkillsList({ skills }) {
  return (
    <SkillsContainer>
      {skills.map((skill, index) => (
        <Skill key={skill} color={SKILLS_COLOURS[index % SKILLS_COLOURS.length]}>
          {skill}
        </Skill>
      ))}
    </SkillsContainer>
  );
}

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsList;
