import { useQuery } from "@tanstack/react-query";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
}

export function useExampleQuery() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}
