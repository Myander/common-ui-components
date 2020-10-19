import React from 'react';
import Notification from './Notification';
import styled from 'styled-components';
import { Story } from '@storybook/react';

const Container = styled.div`
  padding: 20px 150px;
  background: ${({ theme }) => theme.colors.backgroundMain};
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

export default {
  component: Notification,
  title: 'Notification',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode) => <Container>{story()}</Container>,
  ],
};

const Template: Story = args => <Notification />;

export const Default = Template.bind({});
