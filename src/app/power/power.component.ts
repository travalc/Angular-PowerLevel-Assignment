import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  levels: number[];
  powerLevel: number;
  multiplier: number = 0;
  constructor() 
  {
    this.levels = [10, 20, 30]
  }

  ngOnInit() 
  {
  }

  onSubmit()
  {
    if (this.powerLevel == 10)
    {
      this.multiplier = 10;
    }
    else if (this.powerLevel == 20)
    {
      this.multiplier = 20;
    }
    else
    {
      this.multiplier = 30;
    }

    console.log(this.multiplier);
    console.log(this.powerLevel);
  }

}
