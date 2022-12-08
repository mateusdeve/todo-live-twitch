import React, { Dispatch } from "react";

interface Props {
  text: string;
  handleDelete: () => void;
  handleUpdate: () => void;
}

function Card({ text, handleDelete, handleUpdate }: Props) {
  return (
    <div className="w-full p-5 border border-[#fff] flex justify-between">
      <p className="text-white">{text}</p>
      <div className="flex gap-3">
        <button className="bg-red-600 p-1 px-3 font0" onClick={handleDelete}>
          X
        </button>
        <button className="bg-blue-600 p-1 px-3 font0" onClick={handleUpdate}>
          E
        </button>
      </div>
    </div>
  );
}

export default Card;
