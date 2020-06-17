import React from 'react';
import { useToasts } from '@zeit-ui/react';

export const toastHOC = (Component) => {
  return (props) => {
    const [toasts, setToast] = useToasts();
    const toastify = () => setToast({ text: "Welcome to Learner's Deck", type: 'success' });

    return <Component toastify={toastify} {...props} />;
  };
};