class TodoContent {
  text: string;
  constructor(todoText: string, readonly id: number) {
    this.text = todoText;
    this.id = id;
  }
}

export default TodoContent;
