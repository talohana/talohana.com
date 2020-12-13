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
import tw from 'twin.macro';

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

const Wrapper = tw.ul`inline-block text-4xl m-0 space-x-2`;

const Item = tw.li`inline-block`;

const StyledOutboundLink = styled(OutboundLink)`
  color: inherit;
`;
