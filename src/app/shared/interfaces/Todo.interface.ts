export interface Todo {
  id: number,
  status: string,
  title: string,
  description: string,
  priority: string,
  executor: string,
  reporter: string,
  watchers: string[],
  todoRelations: TodoRelation[],
  estimate: string,
  spentTime: string,
  creationDate: string,
  modificationDate: string,
  comments: Comment[],
}

export interface TodoRelation {
  todoId: number,
  isBlocking: boolean,
}

export interface Comment {
  user: string,
  date: string,
  text: string,
}
