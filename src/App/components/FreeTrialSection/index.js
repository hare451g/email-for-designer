import React from 'react';
import { Container, FreeTrialHeading } from './styled';
import ClimbIllustration from '../../assets/climbing.png';
import Button from '../Button';

function FreeTrialSection() {
  return (
    <Container>
      <img src={ClimbIllustration} width={420} />
      <FreeTrialHeading>Start Free Trial</FreeTrialHeading>
      <p>
        So affordable you won't believe it.
        <br /> Cancel anytime.
      </p>
      <Button>Let Me In!</Button>
    </Container>
  );
}

export default FreeTrialSection;
