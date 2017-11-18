import { Component, OnInit } from '@angular/core';

import { ExportService } from '../service/export.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  providers: [ExportService]
})
export class StatsComponent implements OnInit {
  constructor(private exportService: ExportService) { }

  wbout: any;

  table = [
    {
      First: 'one',
      Second: 'two',
      Third: 'three',
      Forth: 'four',
      Fifth: 'five'
    },
    {
      First: 'un',
      Second: 'deux',
      Third: 'trois',
      Forth: 'quatre',
      Fifth: 'cinq'
    },
  ];

  ngOnInit() {

  }
  public download() {
    this.exportService.exportXlsx(this.table);
  }

}
