import { createContext, useContext, useState, ReactNode } from 'react';

interface ErrorContextType {
  error: { status: number; statusText: string; message: string } | null;
  captureError: (error: any) => void;
  clearError: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<{ status: number; statusText: string; message: string } | null>(null);

  const captureError = (error: any) => {
    setError({
      status: error.response?.status || 500,
      statusText: error.response?.statusText || 'Unknown Error',
      message: error.response?.data?.message || error.message || 'Error desconocido',
    });
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={{ error, captureError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
