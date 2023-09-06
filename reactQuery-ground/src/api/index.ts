export interface Todo {
  id: number;
  text: string;
  active: boolean;
}

const todoList: Todo[] = [
  {
    id: 1,
    text: "First",
    active: false,
  },
  {
    id: 3,
    text: "Second",
    active: false,
  },
  {
    id: 4,
    text: "Third",
    active: false,
  },
  {
    id: 5,
    text: "Fourth",
    active: false,
  },
];

// GET ALL TODOS MOCK
export const getTodos = async (): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [...todoList];
};

// ADD TODO MOCK
export const addTodo = async (text: string): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const newTodo: Todo = {
    id: todoList.length + 2,
    text: text,
    active: false,
  };

  todoList.push(newTodo);

  return newTodo;
};

// UPDATE TODO MOCK
export const updateTodo = async (
  id: number,
  payload: Pick<Todo, "active">
): Promise<Todo | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  for (let el of todoList) {
    if (el.id === id) {
      el = { ...el, ...payload };
      console.log(todoList)
      return el
    }
  }

  console.log(todoList)

  return null;
};
