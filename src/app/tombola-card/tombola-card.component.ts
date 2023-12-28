import { Component, Input } from '@angular/core';
import { TombolaCell } from '../tombola-cell/tombola-cell.component';

class Attempt {
  private attemptsCount: number = 0;
  constructor(private max_attempts: number = 25) { }
  public Attempt(): void {
    this.attemptsCount++;
    if (this.attemptsCount >= this.max_attempts)
      throw new Error("Too many attempts: " + this.attemptsCount);
  }
}

export class TombolaCard {
  private cells: TombolaCell[][] = [];
  private rowCount: number = 3;
  private colCount: number = 9;

  constructor() {
    let rows = Array.from(Array(this.rowCount), _ => Array(this.colCount).fill(0));
    rows.forEach((row, i) => {
      this.cells.push(row.map(val => new TombolaCell(val))); // +1 to shift from [0, 89] to [1, 90]
    })
    this.generateCard();
  }

  public get Cells(): TombolaCell[] {
    return this.cells.flat();
  }
  public get RowCount(): number {
    return this.rowCount;
  }
  public get ColCount(): number {
    return this.colCount;
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  private generateCard(): void {
    const tens: number[] = []
    let units: number[] = []
    let att = new Attempt()

    // First row
    while (tens.length < 5) {
      let ten = this.getRandomInt(0, 9);
      while (tens.includes(ten)) {
        att.Attempt();
        ten = this.getRandomInt(0, 9)
      }
      tens.push(ten)
    }
    tens.forEach(v => {
      if (v == 0)
        units.push(this.getRandomInt(1, 10) + v * 10)
      else if (v == 8)
        units.push(this.getRandomInt(0, 11) + v * 10)
      else
        units.push(this.getRandomInt(0, 10) + v * 10)
    })

    units.forEach((v, i) => { this.cells[0][tens[i]] = new TombolaCell(v) })

    // Second row
    units = []
    tens.length = 0
    while (tens.length < 5) {
      let ten = this.getRandomInt(0, 9);
      while (tens.includes(ten)) {
        att.Attempt();
        ten = this.getRandomInt(0, 9)
      }
      tens.push(ten)
    }
    tens.forEach(v => {
      let val = 0;
      do {
        if (v == 0)
          val = this.getRandomInt(1, 10)
        else if (v == 8)
          val = this.getRandomInt(0, 11)
        else
          val = this.getRandomInt(0, 10)
        val = val + v * 10
      } while (val == this.cells[0][v].Value && att.Attempt())
      units.push(val)
    })
    units.forEach((v, i) => { this.cells[1][tens[i]] = new TombolaCell(v) })

    // Third row
    units = []
    tens.length = 0
    // If there's an empty column, the last row will fill it
    this.cells[0].map(c => c.Value).forEach((v, i) => {
      if (v + this.cells[1][i].Value == 0) {
        tens.push(i)
      }
    })
    while (tens.length < 5) {
      let ten = this.getRandomInt(0, 9);
      while (tens.includes(ten)){
        att.Attempt();
        ten = this.getRandomInt(0, 9)
      }
      tens.push(ten)
    }
    tens.forEach(v => {
      let val = 0;
      do {
        if (v == 0)
          val = this.getRandomInt(1, 10)
        else if (v == 8)
          val = this.getRandomInt(0, 11)
        else
          val = this.getRandomInt(0, 10)
        val = val + v * 10
      } while ((val == this.cells[0][v].Value || val == this.cells[1][v].Value) && att.Attempt())
      units.push(val)
    })
    units.forEach((v, i) => { this.cells[2][tens[i]] = new TombolaCell(v) })
  }

}

@Component({
  selector: 'app-tombola-card',
  templateUrl: './tombola-card.component.html',
  styleUrls: ['./tombola-card.component.css']
})
export class TombolaCardComponent {

  @Input() public card!: TombolaCard;
}
