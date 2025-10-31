import { enqueueSnackbar } from 'notistack';

export function showToast(message: string, variant: 'success' | 'error' | 'info' = 'info') {
  enqueueSnackbar(message, { variant });
}
