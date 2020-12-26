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

const Wrapper = tw.ul`inline-block text-4xl m-0 space-x-2`;

const Item = tw.li`inline-block`;

const SocialLink = styled(OutboundLink).attrs({
  target: '_blank',
  rel: 'noopener',
})`
  ${tw`text-inherit`}
`;

export const SocialLinks: React.FC = () => {
  const { twitter, github, linkedIn, email } = config.social;

  return (
    <Wrapper>
      <Item>
        <SocialLink href={twitter} aria-label="Tal Ohana twitter profile">
          <RiTwitterFill />
        </SocialLink>
      </Item>
      <Item>
        <SocialLink href={github} aria-label="Tal Ohana github profile">
          <RiGithubFill />
        </SocialLink>
      </Item>
      <Item>
        <SocialLink href={linkedIn} aria-label="Tal Ohana linkedin profile">
          <RiLinkedinFill />
        </SocialLink>
      </Item>
      <Item>
        <SocialLink href={`mailto:${email}`} aria-label="Mail to Tal Ohana">
          <RiAtFill />
        </SocialLink>
      </Item>
    </Wrapper>
  );
};
