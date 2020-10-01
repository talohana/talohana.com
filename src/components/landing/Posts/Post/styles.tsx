import styled from 'styled-components';

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.38rem;

    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: ${props => props.theme.text};
      border-radius: 10px;
    }
  }
`;

export const PostTitle = styled.h3`
  color: ${props => props.theme.primary};
`;

export const PostDate = styled.span`
  text-transform: uppercase;
`;
