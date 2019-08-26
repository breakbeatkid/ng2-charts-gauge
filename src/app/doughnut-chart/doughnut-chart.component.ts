import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartType, ChartOptions, ChartColor } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  doughnutChartData: MultiDataSet = [
    [3, 3, 3]
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColours: any[] = [{
    backgroundColor: ["red", "orange", "green"]
  }];
  doughnutChartOptions: ChartOptions = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    cutoutPercentage: 60,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    animation: {
      onComplete: () => { this.drawNeedle(300, -90 * Math.PI / 180) }
    }
  };

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  drawNeedle(radius: number, radianAngle: number): void {
    const cw = this.canvas.nativeElement.offsetWidth;
    const ch = this.canvas.nativeElement.offsetHeight;

    let cx = cw / 2;
    let cy = ch - 10;

    this.ctx.translate(cx, cy);
    this.ctx.rotate(radianAngle);
    this.ctx.beginPath();
    this.ctx.moveTo(0, -7);
    this.ctx.lineTo(radius, 0);
    this.ctx.lineTo(0, 7);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    this.ctx.rotate(-radianAngle);
    this.ctx.translate(-cx, -cy);
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 7, 0, Math.PI * 2);
    this.ctx.fill();

  }
}

