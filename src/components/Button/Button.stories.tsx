import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button.styled';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.backgroundMain};
`;

export default {
  component: Button,
  title: 'Button',
  decorators: [
    (story: () => React.ReactNode) => <Container>{story()}</Container>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Button
    layout
    onClick={action('Default button clicked')}
    whileTap={{ scale: 0.95 }}
  >
    Default
  </Button>
);

export const Disabled = () => <Button disabled={true}>Disabled</Button>;
