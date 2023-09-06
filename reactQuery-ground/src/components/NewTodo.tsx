import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api";

const NewTodo = () => {
  const [text, setText] = useState("");

  const queryClient = useQueryClient();

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo = async () => {
    if (!text) return;

    try {
      await addTodoMutation(text);
      setText("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};

export default NewTodo;
