import { createContext, ReactNode, useContext, useState } from "react";

interface MobileNavMenuValues {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
}

const MobileNavMenuContext = createContext<MobileNavMenuValues>({} as MobileNavMenuValues);

interface Props {
  children: ReactNode;
}

export function MobileNavMenuProvider({ children }: Props) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToggle = () => setOpen(!open);

  const values: MobileNavMenuValues = {
    isOpen: open,
    onClose,
    onOpen,
    onToggle,
  };

  return <MobileNavMenuContext.Provider value={values}>{children}</MobileNavMenuContext.Provider>;
}

export function useMobileNavMenu() {
  return useContext(MobileNavMenuContext);
}
