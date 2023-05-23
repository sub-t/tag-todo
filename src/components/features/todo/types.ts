export type TodoId = string;
export type TodoData = {
  title: string;
  dueDate: Date;
  tags?: string[];
};

export type TodoSchema = {
  id: TodoId;
} & TodoData;

export type TodoItemProps = TodoSchema & {
  complete: boolean;
};
