import { Component, Input } from '@angular/core';
import { TombolaCell } from '../tombola-cell/tombola-cell.component';

export class TombolaCard {
  private cells: TombolaCell[][] = [];
  private rowCount: number = 3;
  private colCount: number = 9;

  constructor() {
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

  private generateCard(): void {
    let rows = Array.from(Array(this.rowCount), _ => Array(this.colCount).fill(0));

    for (let row = 0; row < 3; row++) {
      let vals: number[] = [];
      const tens: number[] = [];
      while (vals.length < 4) {
        let unit = Math.floor(Math.random() * (10 - 0) + 0);
        let ten = Math.floor(Math.random() * (9 - 1) + 1);
        while (tens.includes(ten)) {
          ten = Math.floor(Math.random() * (9 - 1) + 1)
        }
        let val = unit + ten * 10;
        if (rows.flat().includes(val))
          continue
        vals.push(val)
        tens.push(ten)
      }
      let unit = Math.floor(Math.random() * (10 - 1) + 1)
      while (rows.flat().includes(unit))
        unit = Math.floor(Math.random() * (10 - 1) + 1)
      rows[row][0] = unit
      tens.forEach((v, i) => {
        rows[row][v] = vals[i]
      })
    }

    rows.forEach((row, i) => {
      this.cells.push(row.map(val => new TombolaCell(val)));
    })

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
