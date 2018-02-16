import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CueService } from '../../providers/cue.service';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.scss']
})
export class TaglistComponent implements OnInit {

  rawText: string = "";

  constructor(private cueService: CueService) {

  }

  // getRawText(): void {
  //   this.cueService.ge.subscribe(rawText => this.rawText = rawText);
  // }
  //
  ngOnInit() {
    //this.getRawText();
    this.cueService.loadCue(["C:/testfile.cue"]);
  }

}
