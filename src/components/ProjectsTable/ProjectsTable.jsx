/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Box from '@mui/material/Box';

import TabPanel from '../ProjectTab/ProjectTab';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

import data from './ProjectsTableData';
import {
  StyledTabs,
  StyledTab,
} from './ProjectsTable.styles';

function ProjectsTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'primary' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="projects-table"
      >
        {data.map(({ id, title }) => (
          <StyledTab label={title} key={id} id={id} />
        ))}
      </StyledTabs>
      {data.map(({ id, ...props }) => (
        <TabPanel value={value} index={id} key={id}>
          <ProjectInfo
            {...props}
          />
        </TabPanel>
      ))}
    </Box>
  );
}

export default ProjectsTable;
