import React from 'react';

import {
  ExperienceContainer,
  Title,
} from './Experience.styles';
import CompanyInfo from '../CompanyInfo/CompanyInfo';

import data from './ExperienceData';

function Experience() {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      {data.map((company) => <CompanyInfo key={company.name} company={company} />)}
    </ExperienceContainer>
  );
}

export default Experience;
