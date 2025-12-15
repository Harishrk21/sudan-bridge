import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageMode = 'bilingual' | 'english';

interface LanguageContextType {
  languageMode: LanguageMode;
  toggleLanguage: () => void;
  showSudanese: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to bilingual mode (showing both English and Sudanese)
  const [languageMode, setLanguageMode] = useState<LanguageMode>(() => {
    const saved = localStorage.getItem('languageMode');
    return (saved as LanguageMode) || 'bilingual';
  });

  useEffect(() => {
    localStorage.setItem('languageMode', languageMode);
  }, [languageMode]);

  const toggleLanguage = () => {
    setLanguageMode((prev) => (prev === 'bilingual' ? 'english' : 'bilingual'));
  };

  // When in bilingual mode, show Sudanese text. When in english mode, hide it.
  const showSudanese = languageMode === 'bilingual';

  return (
    <LanguageContext.Provider value={{ languageMode, toggleLanguage, showSudanese }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

