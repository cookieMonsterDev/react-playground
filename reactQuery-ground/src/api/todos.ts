interface Todo {
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
const getTodos = async (): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return todoList;
};

// ADD TODO MOCK
const addTodo = async (text: string): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const newTodo: Todo = {
    id: todoList[todoList.length].id + 1,
    text: text,
    active: false,
  };

  todoList.push(newTodo);

  return newTodo;
};

// UPDATE TODO MOCK
const updateTodo = async (id: number, payload: Omit<Todo, "id">): Promise<Todo | null> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  let updatedTodo: Todo = { id, ...payload };

  for (let el of todoList) {
    if (el.id === id) {
      el = { ...el, ...updatedTodo };
      break;
    }
  }

  return updatedTodo || null;
};
