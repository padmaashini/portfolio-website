import React from 'react';

import {
  ContactContainer,
  Link,
} from './Contact.styles';

function Contact() {
  return (
    <ContactContainer>
      <h1>Let&apos;s connect!</h1>
      <Link
        aria-label="email"
        href="mailto:p5sukuma@uwaterloo.ca"
      >
        Email
      </Link>
      <Link
        aria-label="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/padmaashini-sukumaran/"
      >
        LinkedIn
      </Link>
      <Link
        aria-label="resume"
        target="_blank"
        href="https://drive.google.com/file/d/118PxKcI_tQpmYpg5-2EA4L-FRwgL6lfA/view?usp=sharing"
      >
        Resume
      </Link>
      <Link
        aria-label="github"
        target="_blank"
        href="https://github.com/padmaashini"
      >
        GitHub
      </Link>
      <Link
        aria-label="devpost"
        target="_blank"
        href="https://devpost.com/padmaashinis"
      >
        Devpost Portfolio
      </Link>
    </ContactContainer>
  );
}

export default Contact;
