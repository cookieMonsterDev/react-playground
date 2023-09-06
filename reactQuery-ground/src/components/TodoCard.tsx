import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo, updateTodo } from "../api";

const TodoCard = ({ id, text, active }: Todo) => {
  const queryClient = useQueryClient();

  const [theActive, setActive] = useState(active);

  const { mutateAsync: updateTodoById } = useMutation({
    mutationFn: () => updateTodo(id, { active: theActive }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div className="card">
      <h1>{text}</h1>
      <input
        type="checkbox"
        defaultChecked={theActive}
        id={id.toString()}
        onChange={async () => {
          try {
            setActive((active) => !active);
            await updateTodoById();
          } catch (e) {
            console.error(e);
          }
        }}
      />
    </div>
  );
};

export default TodoCard;
