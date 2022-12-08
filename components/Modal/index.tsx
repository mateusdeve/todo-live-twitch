import React, { Dispatch, useState } from "react";

interface Props {
  setShowModal: Dispatch<boolean>;
  inpuTextEdit: number;
  todos: { text: string }[];
  setTodos: Dispatch<{ text: string }[]>;
}

function Modal({ setShowModal, inpuTextEdit, todos, setTodos }: Props) {
  const todoEdit = todos.find((_, index) => inpuTextEdit === index) as any;
  const [inputModal, setInputModal] = useState(todoEdit.text);

  const handleCloseModal = (e: any) => {
    e.stopPropagation();
  };

  const handleEditTodo = () => {
    const newTodos = todos.map((todo, index) => {
      if (index === inpuTextEdit) {
        todo.text = inputModal;
      }
      return todo;
    });

    setTodos(newTodos);
    setShowModal(false);
  };

  return (
    <div>
      <div
        className="fixed top-0 w-full h-full flex justify-center items-center  bg-black bg-opacity-60 "
        onClick={() => setShowModal(false)}
      >
        <div
          onClick={handleCloseModal}
          className="w-[400px] h-[300px] bg-white p-5 relative"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-black">Editar Todo {todoEdit.text}</h1>
            <button
              onClick={() => setShowModal(false)}
              className="text-red-600 font-bold border border-red-600 py-1 px-2"
            >
              X
            </button>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-4 mt-10 bg-white border border-black text-black"
              value={inputModal}
              onChange={(e) => setInputModal(e.target.value)}
            />
            <button
              onClick={handleEditTodo}
              className="mt-5 absolute bottom-0 left-0 w-full bg-blue-700 p-5"
            >
              Alterar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
