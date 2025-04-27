export interface Todo {
  _id: string; // Changed from id to match MongoDB
  text: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type TodoAction =
  | { type: "ADD"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "DELETE"; id: number };
