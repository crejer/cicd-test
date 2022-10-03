/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('App Tests around', () => {
  it('renders correctly 1', () => {
    renderer.create(<App />);
  });

  it('renders correctly 2', () => {
    renderer.create(<App />);
  });

  describe('second Tests', () => {
    it('renders correctly', () => {
      renderer.create(<App />);
    });
  });
});
