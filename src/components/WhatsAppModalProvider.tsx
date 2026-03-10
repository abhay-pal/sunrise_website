import { WhatsAppPreForm } from '@/components/WhatsAppPreForm';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

interface WhatsAppModalContextValue {
  openWhatsAppModal: (defaultService?: string) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextValue | null>(null);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  const openWhatsAppModal = useCallback((service = '') => {
    setDefaultService(service);
    setIsOpen(true);
  }, []);

  const closeWhatsAppModal = useCallback(() => {
    setIsOpen(false);
    setDefaultService('');
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty('overflow');
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeWhatsAppModal();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeWhatsAppModal, isOpen]);

  const value = useMemo(
    () => ({
      openWhatsAppModal,
      closeWhatsAppModal,
    }),
    [closeWhatsAppModal, openWhatsAppModal],
  );

  return (
    <WhatsAppModalContext.Provider value={value}>
      {children}
      <WhatsAppPreForm isOpen={isOpen} onClose={closeWhatsAppModal} defaultService={defaultService} />
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
}
