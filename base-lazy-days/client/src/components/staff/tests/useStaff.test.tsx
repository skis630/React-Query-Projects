import { act, renderHook } from '@testing-library/react-hooks';

import { createQueryClientWrapper } from '../../../test-utils';
import { useStaff } from '../hooks/useStaff';

test('filter staff', async () => {
  const { result, waitFor } = renderHook(useStaff, {
    wrapper: createQueryClientWrapper(),
  });

  // wait for staff to populate
  await waitFor(() => result.current.staff.length > 0);

  // filter by facial treatment
  act(() => result.current.setFilter('facial'));

  // wait for staff to be filtered
  await waitFor(() => result.current.staff.length === 3);
});
