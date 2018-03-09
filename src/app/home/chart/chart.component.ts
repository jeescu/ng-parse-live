import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { ResponseService } from '../../shared/response.service';
import { Response } from '../../shared/response.model';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 150];
  public doughnutChartType:string = 'doughnut';

  @ViewChild(BaseChartDirective) private _chart;
  
  constructor(public responseService: ResponseService) { }

  ngOnInit() {
    this.doughnutChartData = this.responseService.getComputedResponse();

    this.responseService.responsesChanged.subscribe((responses: Response[]) => {
      // this._chart.ngOnChanges({} as SimpleChanges)      
      this.doughnutChartData = this.responseService.getComputedResponse();
      this._chart.ngOnChanges({
        datasets: {
          currentValue: this.doughnutChartData,
          previousValue: null,
          firstChange: false,
          isFirstChange: () => false
        }
    });
    })
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
