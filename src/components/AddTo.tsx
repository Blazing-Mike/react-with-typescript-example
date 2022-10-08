import { ChangeEvent, FC, useState } from "react";
import { Istate as Props } from "../App";

interface  IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>

}
const AddToList: React.FC<IProps> = ({people, setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handlechange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = ():void => {
    if (!input.name || !input.age || !input.img) return;
    setPeople([
        ...people,
        {
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note
        }
    ]);

    setInput({
        name: "",
        age: "",
        note: "",
        img: ""
    })
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handlechange}
        name="name"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handlechange}
        name="img"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handlechange}
        name="age"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handlechange}
      />

      <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
    </div>
  );
};

export default AddToList;
