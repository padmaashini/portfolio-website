import React from 'react';

import ProjectsTable from '../ProjectsTable/ProjectsTable';

import {
  ProjectsContainer,
  Title,
} from './Projects.styles';

function Projects() {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectsTable />
    </ProjectsContainer>
  );
}

export default Projects;
