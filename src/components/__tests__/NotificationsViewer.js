import React from 'react';
import renderer from 'react-test-renderer';
import delay from 'redux-saga';
import NotificationsViewer from '../NotificationsViewer';
// understand why not to do import (related to hoisting and the mock)
//import NotificationsService from '../../services/NotificationsService';

// need to remember when need to explicitly list the mock and when the mock would be automatically detected
jest.mock('../../services/NotificationsService');

const NotificationsService = require('../../services/NotificationsService').default;

describe('NotificationsViewer component', () => {

  beforeAll(() => {
    NotificationsService.__setCount(5)    
  })

  it('should display notifications count correctly', async() => {

    const tree = renderer
        .create(
          <NotificationsViewer />
        )
    await delay();
    const instance = tree.root;
    const component = instance.findByProps({ className: 'notifications' });
    const text = component.children[0];
    expect(text).toEqual('5 Notifications awaiting')



  })
})
