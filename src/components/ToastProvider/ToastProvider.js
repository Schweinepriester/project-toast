import React from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const initialToasts = [];
  const [toasts, setToasts] = React.useState(initialToasts);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function handleDismiss(id) {
    setToasts(toasts.filter((toast) => toast.id !== id))
  }

  function addToast(message, variant) {
    setToasts([...toasts, {
      id: crypto.randomUUID(),
      message,
      variant,
    }])
  }

  return (
      <ToastContext.Provider value={{ toasts, handleDismiss, addToast }}>
        {children}
      </ToastContext.Provider>
  );
}

export default ToastProvider;
