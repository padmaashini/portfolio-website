import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function ProjectsTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'primary' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="projects table"
        style={{ background: '#013C40', textColor: 'secondary' }}
      >
        <Tab label="Item One" style={{ color: 'white', width: '200px' }} />
        <Tab label="Item Two" style={{ color: 'white', width: '200px' }} />
        <Tab label="Item Three" style={{ color: 'white', width: '200px' }} />
        <Tab label="Item Four" style={{ color: 'white', width: '200px' }} />
      </Tabs>
    </Box>
  );
}

export default ProjectsTable;
