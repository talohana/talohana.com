import styled from 'styled-components';
import tw from 'twin.macro';

export const Chip = styled.button<{ selected?: boolean }>(
  ({ selected = false }) => [
    tw`border border-solid border-current rounded uppercase cursor-pointer px-3 py-1 transition select-none text-primary font-semibold`,
    selected && tw`bg-primary text-white dark:text-black`,
  ]
);
