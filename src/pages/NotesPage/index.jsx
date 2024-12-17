/* eslint-disable react/prop-types */
import NoteCard from "../../components/NoteCard";
import Controls from "../../components/Controls";
import { useNotesDataContext } from "../../context/NotesDataContext";
import Logo from "../../components/Logo";

const NotesPage = () => {
  const { notesData } = useNotesDataContext();

  return (
    <div>
      <Logo />
      {notesData?.map((note) => (
        <NoteCard key={note?.id} note={note} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
