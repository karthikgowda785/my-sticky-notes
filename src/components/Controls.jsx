import AddButton from "./AddButton";
import colors from "../assets/colors.json";
import { useNotesDataContext } from "../context/NotesDataContext";
import { getRandomColor, getRandomNumber } from "../utils";

const Controls = () => {
  const { setNotesData } = useNotesDataContext();
  const currentDateTime = new Date();

  const addNote = async () => {
    const payload = {
      id: currentDateTime.getTime(),
      position: JSON.stringify({
        x: getRandomNumber(),
        y: getRandomNumber(),
      }),
      colors: JSON.stringify(getRandomColor(colors)),
      body: JSON.stringify(""),
    };

    setNotesData((prev) => [...prev, payload]);
  };

  return (
    <div id="controls" onClick={addNote}>
      <AddButton />
    </div>
  );
};

export default Controls;
