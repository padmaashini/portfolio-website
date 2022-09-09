/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

function TabPanel({
  children, value, index, other,
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ padding: '0px' }}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
        // <>
        //   {children}
        // </>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

TabPanel.defaultProps = {
  children: '',
};

export default TabPanel;
