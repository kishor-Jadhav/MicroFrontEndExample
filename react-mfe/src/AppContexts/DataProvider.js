import React, { createContext, useState, useCallback } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [accountsData, setAccountsData] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [filters, setFilters] = useState({});
  const [loginConfig, setLoginConfig] = useState({});

  const updateAccountsData = useCallback((data) => {
    setAccountsData(data);
  }, []);

  const selectAccount = useCallback((account) => {
    setSelectedAccount(account);
  }, []);

   const updateLoginConfig = useCallback((data) => {
    setLoginConfig(data);
  }, []);

  const value = {
    accountsData,
    updateAccountsData,
    selectedAccount,
    setSelectedAccount: selectAccount,
    filters,
    setFilters,
    loginConfig,
    updateLoginConfig
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for easy access
export const useLocalStore = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error('useLocalStore must be used within DataProvider');
  }
  return context;
};