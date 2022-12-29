import { toast } from 'react-toastify';

const successNotify = () => toast.success('Login success, you are being redirect.', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const failNotify = () => toast.error('Login failed!', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const warningNotify = () => toast.warning('All fields are required to be filled in, please check.', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export { successNotify, failNotify, warningNotify };