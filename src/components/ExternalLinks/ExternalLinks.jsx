import React from 'react';
import PropTypes from 'prop-types';

import ExternalLinkButton from '../ExternalLinkButton/ExternalLinkButton';
import {
  ExternalLinksContainer,
  ButtonsContainer,
} from './ExternalLinks.styles';

function ExternalLinks({ buttons }) {
  return (
    <ExternalLinksContainer>
      Check it out here:
      <ButtonsContainer>
        {buttons.map(({
          id, href, type, label,
        }) => (
          <ExternalLinkButton
            key={id}
            href={href}
            type={type}
            label={label}
          />
        ))}
      </ButtonsContainer>
    </ExternalLinksContainer>
  );
}

ExternalLinks.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    href: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['GITHUB', 'DEVPOST', 'DEPLOYMENT']).isRequired,
    label: PropTypes.string,
  })).isRequired,
};

export default ExternalLinks;
