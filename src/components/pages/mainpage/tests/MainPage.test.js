import React from 'react';
import {render} from '@testing-library/react-native';
import MainPage from '../MainPage';

test('Render MainPage', () => {
  render(<MainPage />);
});

test('Render MainPage with prop', () => {
  render(<MainPage enabled={false} />);
});
