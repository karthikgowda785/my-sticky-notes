/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getLocalItem, setLocalItem } from "../utils";

const NotesDataContext = createContext();

export const NotesDataProvider = ({ children }) => {
  const [notesData, setNotesData] = useState(getLocalItem());

  useEffect(() => {
    setLocalItem(notesData);
  }, [notesData]);

  return (
    <NotesDataContext.Provider
      value={useMemo(
        () => ({ notesData, setNotesData }), // Fix: return object here
        [notesData, setNotesData]
      )}
    >
      {children}
    </NotesDataContext.Provider>
  );
};

export const useNotesDataContext = () => {
  const context = useContext(NotesDataContext);
  return context;
};
