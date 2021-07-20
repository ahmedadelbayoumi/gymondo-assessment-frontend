import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

/**
 * useNotifications Hook
 *
 * A custom hook that expose a function to create a notifcation.
 */
function useNotifications() {
  const { enqueueSnackbar } = useSnackbar();

  const notify = useCallback((message, variant = 'success') => enqueueSnackbar(
    message,
    {
      anchorOrigin: { horizontal: 'center', vertical: 'top' },
      autoHideDuration: 3000,
      variant,
    },
  ), [enqueueSnackbar]);

  return { notify };
}

export default useNotifications;
