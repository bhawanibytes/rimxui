import { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext();

export const ToastProvider = ({ children, position = "bottom-right" }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "default", duration = 5000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} position={position} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);