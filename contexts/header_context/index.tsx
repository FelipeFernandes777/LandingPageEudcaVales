import { createContext, ReactNode, useContext, useState } from "react";

interface HeaderContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function useHeaderNavMenu() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderNavMenu deve ser usado dentro de HeaderProvider");
  }
  return context;
}

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </HeaderContext.Provider>
  );
}
