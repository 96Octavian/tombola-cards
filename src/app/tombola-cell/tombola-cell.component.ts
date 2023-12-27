import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tombola-cell',
  templateUrl: './tombola-cell.component.html',
  styleUrls: ['./tombola-cell.component.css']
})
export class TombolaCellComponent {
  @Input() public number: number = 0;
  public marked: boolean = false;

  public hasValue(): boolean {
    return this.number != 0;
  }

  public toggleMarked(): void {
    if (this.hasValue())
      this.marked = !this.marked;
    console.log("Marked: " + this.marked)
  }

}
