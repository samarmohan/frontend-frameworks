import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(toBeDeleted: Todo) {
    this.todos = this.todos.filter((deletedTodo) => deletedTodo.id !== toBeDeleted.id);
    this.todoService.deleteTodo(toBeDeleted).subscribe();
  }

  addTodo(toBeAdded: Todo) {
    this.todoService
      .addTodo(toBeAdded)
      .subscribe((addedTodo) => this.todos.push(addedTodo));
  }
}
