import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-canvas',
  templateUrl: './test-canvas.component.html',
  styleUrls: ['./test-canvas.component.scss']
})
export class TestCanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    const square = new Square(this.ctx);
    square.draw(5, 1, 20);

  }
}

export class Square {
  constructor(private ctx: CanvasRenderingContext2D) { }

  draw(x: number, y: number, z: number) {
    this.ctx.fillRect(z * x, z * y, z, z);
  }
}

