import React from 'react';
import TagsList from './TagsList';
import renderer from 'react-test-renderer';

describe('TagsList component', () => {

  it('should render', () => {
    const tree = renderer
      .create(<TagsList tags={[`css`, `html`, `swift`]} />)
      .toJSON();

    console.log('tree', tree);

    expect(tree).toMatchSnapshot();
  })

})
