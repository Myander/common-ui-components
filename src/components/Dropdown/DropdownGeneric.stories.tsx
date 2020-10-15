import React from 'react';
import DropdownGeneric, { DropdownGenericProps } from './DropdownGeneric';
import DropdownHover from './DropdownHover';
import { Dropdown, DropdownProps } from './DropdownGeneric.styles';
import { Story } from '@storybook/react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 150px;
  background: ${({ theme }) => theme.colors.backgroundMain};
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

const ContentData = styled.div`
  height: 300px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.main};
`;

export default {
  component: DropdownGeneric,
  title: 'Dropdown',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode) => <Container>{story()}</Container>,
  ],
};

const MenuTemplate: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <ContentData>Placeholder</ContentData>
  </Dropdown>
);
const DropTemplate: Story<DropdownGenericProps> = args => (
  <DropdownGeneric {...args}>
    <ContentData>Placeholder</ContentData>
  </DropdownGeneric>
);
const HoverTemplate: Story<DropdownGenericProps> = args => (
  <DropdownHover {...args}>
    <ContentData>Placeholder</ContentData>
  </DropdownHover>
);

export const MenuOnly = MenuTemplate.bind({});
MenuOnly.args = {
  xPos: 50,
  yPos: 50,
  open: true,
};

export const ClickDropdown = DropTemplate.bind({});
ClickDropdown.args = {
  title: 'Click',
};

export const HoverDropdown = HoverTemplate.bind({});
HoverDropdown.args = {
  title: 'Hover',
};

// export const ClickDropdown = () => (
//   <DropdownGeneric title="Click">{contentData}</DropdownGeneric>
// );

// export const HoverDropdown = () => (
//   <DropdownHover title="Hover">{contentData}</DropdownHover>
// );
