/* eslint-disable react/prop-types */
import NoteCard from "../../components/NoteCard";
import Controls from "../../components/Controls";
import { useNotesDataContext } from "../../context/NotesDataContext";

const NotesPage = () => {
  const { notesData } = useNotesDataContext();

  return (
    <div>
      {notesData?.map((note) => (
        <NoteCard key={note?.id} note={note} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
