import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";

function Home() {
  const [todos, setTodos] = useState([
    { text: "Jamelão" },
    { text: "limax" },
    { text: "kaiser" },
  ]);

  const [inputText, setInputText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [inpuTextEdit, setInputTextEdit] = useState(0);

  const handleCreateTodo = (e: any) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText }]);
    setInputText("");
  };

  const handleDelete = (indexTodo: number) => {
    const newTodos = todos.filter((_, index) => index !== indexTodo);
    setTodos(newTodos as any);
  };
  const handleUpdate = (indexTodo: number) => {
    setInputTextEdit(indexTodo);
    setShowModal(true);
  };

  return (
    <div className="text-blue-100">
      {showModal && (
        <Modal
          setTodos={setTodos}
          inpuTextEdit={inpuTextEdit}
          todos={todos}
          setShowModal={setShowModal}
        />
      )}

      <div className="container mx-auto">
        <div>
          <form
            onSubmit={(e: any) => handleCreateTodo(e)}
            className="flex gap-4 mt-12 justify-center"
          >
            <input
              type="text"
              className="p-5 border w-full  bg-white text-black"
              placeholder="Escreva aqui"
              onChange={(e: any) => setInputText(e.target.value)}
              value={inputText}
            />
            <button className="bg-blue-700 p-5">Add</button>
          </form>
        </div>

        <div className="mx-auto flex flex-col gap-5 mt-20">
          {todos.map((todo, index) => (
            <Card
              handleDelete={() => handleDelete(index)}
              handleUpdate={() => handleUpdate(index)}
              text={todo.text}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
