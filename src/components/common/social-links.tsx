import { config } from '@config';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import {
  RiAtFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
} from 'react-icons/ri';
import styled from 'styled-components';

export const SocialLinks: React.FC = () => {
  const { twitter, github, linkedIn, email } = config.social;

  return (
    <Wrapper>
      <Item>
        <StyledOutboundLink href={twitter} target="_blank">
          <RiTwitterFill />
        </StyledOutboundLink>
      </Item>
      <Item>
        <StyledOutboundLink href={github} target="_blank">
          <RiGithubFill />
        </StyledOutboundLink>
      </Item>
      <Item>
        <StyledOutboundLink href={linkedIn} target="_blank">
          <RiLinkedinFill />
        </StyledOutboundLink>
      </Item>
      <Item>
        <StyledOutboundLink href={`mailto:${email}`}>
          <RiAtFill />
        </StyledOutboundLink>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  font-size: 2rem;
`;

const Item = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const StyledOutboundLink = styled(OutboundLink)`
  color: inherit;
`;
