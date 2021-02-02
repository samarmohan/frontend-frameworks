import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() forEachTodo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.forEachTodo.completed,
    };

    return classes;
  }

  toggleCompleted(toBeChanged) {
    toBeChanged.completed = !toBeChanged.completed;
    this.todoService
      .toggleCompleted(toBeChanged)
      .subscribe((changedTodo) => console.log(changedTodo));
  }

  onDelete(toBeDeleted) {
    this.deleteTodo.emit(toBeDeleted);
  }
}
