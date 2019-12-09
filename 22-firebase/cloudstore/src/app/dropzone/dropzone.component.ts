import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  
  isDraggingOver=false;
  @Output() droppedFiles =  new EventEmitter<FileList>();

  constructor() { }

  ngOnInit() {
  }

  onDropEvent(event: DragEvent) {
    event.preventDefault();
    console.log(event.dataTransfer.files);
    this.isDraggingOver = false;
    this.droppedFiles.emit(event.dataTransfer.files);
  }

  onDragOverEvent(event) {
    event.preventDefault();
    this.isDraggingOver = true;
  }

  onDragLeaveEvent(event) {
    event.preventDefault();
    this.isDraggingOver = false;
  }
}
