import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const initialToasts = [];
  const [toasts, setToasts] = React.useState(initialToasts);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts(initialToasts);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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