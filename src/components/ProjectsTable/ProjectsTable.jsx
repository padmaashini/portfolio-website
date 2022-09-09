import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabPanel from '../ProjectTab/ProjectTab';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

function ProjectsTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('event', event);
    console.log('newValue', newValue);
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
        <Tab label="Item One" style={{ color: 'white', width: '200px' }} id={0} />
        <Tab label="Item Two" style={{ color: 'white', width: '200px' }} id={1} />
        <Tab label="Item Three" style={{ color: 'white', width: '200px' }} id={2} />
        <Tab label="Item Four" style={{ color: 'white', width: '200px' }} id={3} />
      </Tabs>
      {console.log('value', value)}
      <TabPanel value={value} index={0}>
        {/* Item Tab Zero */}
        <ProjectInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Tab One
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Tab Two
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Tab Three
      </TabPanel>
    </Box>
  );
}

export default ProjectsTable;
