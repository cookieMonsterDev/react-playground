import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const { data: todoList, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list">
      {todoList?.map((e) => (
        <TodoCard {...e} key={e.id} />
      ))}
    </div>
  );
};

export default TodoList;
