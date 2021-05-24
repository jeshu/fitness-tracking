import { render } from '@testing-library/react';

import ProgressCounter from './progress-counter';

xdescribe('ProgressCounter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressCounter />);
    expect(baseElement).toBeTruthy();
  });
});
