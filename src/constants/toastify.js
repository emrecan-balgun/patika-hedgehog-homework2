import { toast } from 'react-toastify';

const successLoginNotify = () => toast.success('Login success, you are being redirect.', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const failLoginNotify = () => toast.error('Login failed!', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const warningLoginNotify = () => toast.warning('All fields are required to be filled in, please check.', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const successRemoveNotify  = () => toast.success('The person was deleted successfully', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const failRemoveNotify  = () => toast.error('The person deletion has been canceled', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export { successLoginNotify, failLoginNotify, warningLoginNotify, successRemoveNotify, failRemoveNotify };