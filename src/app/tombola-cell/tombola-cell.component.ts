import { Component, Input } from '@angular/core';

export class TombolaCell {
  constructor(private value: number, private isCalled: boolean = false, private isUsed: boolean = false) { }
  public get Value(): number {
    return this.value != 0 ? this.value : NaN;
  }
  public get IsCalled(): boolean {
    return this.isCalled
  }
  public get IsUsed(): boolean {
    return this.isUsed;
  }
  public get IsValid(): boolean {
    return this.value != 0;
  }

  public Call(): void {
    this.isCalled = true;
  }
  public ToggleCall(): void{
    this.isCalled = !this.isCalled;
  }
  public Use(): void {
    this.isUsed = true;
  }
  public ToggleUse(): void{
    this.isUsed = !this.isUsed;
  }
}

@Component({
  selector: 'app-tombola-cell',
  templateUrl: './tombola-cell.component.html',
  styleUrls: ['./tombola-cell.component.css']
})
export class TombolaCellComponent {
  @Input() public cell!: TombolaCell;

  public ToggleCall(): void {
    if (this.cell.IsValid)
      this.cell.ToggleCall();
    console.log("Used: " + this.cell.IsUsed)
  }

}
