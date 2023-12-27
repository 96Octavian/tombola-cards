import { Component, Input } from '@angular/core';

export class TombolaCard {
  private rows: number[][] = [];
  private rowCount: number = 3;
  private colCount: number = 9;

  constructor() {
    this.generateCard();
  }

  public get Cells(): number[] {
    return this.rows.flat();
  }
  public get RowCount(): number {
    return this.rowCount;
  }
  public get ColCount(): number {
    return this.colCount;
  }

  private generateCard(): void {
    this.rows = Array.from(Array(this.rowCount), _ => Array(this.colCount).fill(0));

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
        if (this.rows.flat().includes(val))
          continue
        vals.push(val)
        tens.push(ten)
      }
      let unit = Math.floor(Math.random() * (10 - 1) + 1)
      while (this.rows.flat().includes(unit))
        unit = Math.floor(Math.random() * (10 - 1) + 1)
      this.rows[row][0] = unit
      tens.forEach((v, i) => {
        this.rows[row][v] = vals[i]
      })
    }


    console.log(this.rows)
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
