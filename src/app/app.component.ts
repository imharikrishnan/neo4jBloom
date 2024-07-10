import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NVL } from '@neo4j-nvl/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'neo4j-bloom';

  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    this.renderGraph();
  }

  renderGraph(): void {
    const nodes = [{ id: '1' }, { id: '2' }];
    const relationships = [{ id: '12', from: '1', to: '2' }];

    const nvl = new NVL(this.container.nativeElement, nodes, relationships);
  }
}
