import React from 'react';
import PropTypes from 'prop-types';

import {
  ExternalLinkButtonContainer,
  LinkText,
} from './ExternalLinkButton.styles';

const BUTTONS = {
  GITHUB: {
    label: 'GitHub',
    img_src: '/github-logo.svg',
  },
  DEVPOST: {
    label: 'DevPost',
    img_src: '/laptop.svg',
  },
  DEPLOYMENT: {
    label: 'Deployed Here!',
    img_src: '/deployed.svg',
  },
};

function ExternalLinkButton({ href, type, label }) {
  const button = BUTTONS[type];
  return (
    <ExternalLinkButtonContainer
      target="_blank"
      href={href}
    >
      <img
        src={button.img_src}
        alt={button.label}
        aria-label={button.label}
      />
      <LinkText>
        {label || button.label}
      </LinkText>
    </ExternalLinkButtonContainer>
  );
}

ExternalLinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['GITHUB', 'DEVPOST', 'DEPLOYMENT']).isRequired,
  label: PropTypes.string,
};

ExternalLinkButton.defaultProps = {
  label: '',
};

export default ExternalLinkButton;
