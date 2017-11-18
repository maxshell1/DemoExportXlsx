import { Injectable } from '@angular/core';
import { utils, write, WorkBook, read } from 'xlsx';

import { saveAs } from 'file-saver';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ExportService {
  constructor() { }

  public exportXlsx(data: Array<any>) {
    const test = new Array<any>();

    data.forEach((result) => {
    test.push({
      'test row header1' : result.First,
      'test row header2' : result.Second,
      'test row header3' : result.Third,
      'test row header4' : result.Forth,
      'test row header5' : result.Fifth});
  }
  );

    const ws_name = 'SomeSheet';
    const wb: WorkBook = { SheetNames: [], Sheets: {} };
    const ws: any = utils.json_to_sheet(test);
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    const wbout = write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });

    saveAs(new Blob([this.s2ab(wbout)], { type: 'application/octet-stream' }), 'exported.xlsx');
  }

  private s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }

    return buf;
  }
}
