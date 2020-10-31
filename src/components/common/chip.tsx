import styled from 'styled-components';

export const Chip = styled.span<{ selected?: boolean }>`
  display: inline-block;
  color: ${props =>
    props.selected ? 'var(--color-background)' : props.theme.primary};
  background-color: ${props =>
    props.selected ? props.theme.primary : 'initial'};
  border: 1px solid currentColor;
  padding: 0.1rem 0.3rem;
  border-radius: 0.2rem;
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;
`;
