export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
export type TodoAction =
  | { type: "ADD"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "DELETE"; id: number };
