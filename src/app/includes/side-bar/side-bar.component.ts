import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  is_open:boolean = false;
  @Output() toggle_side_bar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }


  toggle_side_bars(){
    this.is_open = !this.is_open;
    this.toggle_side_bar.emit(this.is_open);
  }
}
