import styled from 'styled-components';
import tw from 'twin.macro';

export const Chip = styled.span<{ selected?: boolean }>(
  ({ selected = false }) => [
    tw`inline-block border border-solid border-current rounded uppercase cursor-pointer px-3 py-1 transition select-none text-primary font-semibold`,
    selected && tw`bg-primary text-white border-transparent`,
  ]
);
