import React from 'react';

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

import { IconsContainer } from './IconLinks.styles';

function IconLinks() {
  return (
    <IconsContainer>
      <IconButton
        aria-label="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/padmaashini-sukumaran/"
        color="secondary"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="email"
        href="mailto:p5sukuma@uwaterloo.ca"
        color="secondary"
      >
        <EmailIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="resume"
        target="_blank"
        href="https://drive.google.com/file/d/118PxKcI_tQpmYpg5-2EA4L-FRwgL6lfA/view?usp=sharing"
        color="secondary"
      >
        <DescriptionIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="resume"
        target="_blank"
        href="https://github.com/padmaashini"
        color="secondary"
      >
        <img
          src="/github-logo.svg"
          alt="GitHub"
          aria-label="github"
        />
      </IconButton>
    </IconsContainer>
  );
}

export default IconLinks;
