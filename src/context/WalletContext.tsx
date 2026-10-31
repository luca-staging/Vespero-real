import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

type WalletContextType = {
  isConnected: boolean;
  address: string | null;
  isAdmin: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const ADMIN_ADDRESSES: string[] = [];

export function WalletProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (address && isConnected) {
      const normalizedAddress = address.toLowerCase();
      setIsAdmin(ADMIN_ADDRESSES.some(admin => admin.toLowerCase() === normalizedAddress));
    } else {
      setIsAdmin(false);
    }
  }, [address, isConnected]);

  const connectWallet = () => {
    // Wallet connection is handled by RainbowKit's ConnectButton.
  };

  const disconnectWallet = () => {
    disconnect();
  };

  const value = useMemo(
    () => ({
      isConnected: isConnected ?? false,
      address: address ?? null,
      isAdmin,
      connectWallet,
      disconnectWallet,
    }),
    [isConnected, address, isAdmin, disconnect]
  );

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
