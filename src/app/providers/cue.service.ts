const fs = require("fs");
import { Injectable, NgZone } from '@angular/core';

import { Command } from './../classes/command';
import { CommandBuilder } from './../classes/command-builder';

import { CueTree } from './../classes/cue-tree';

@Injectable()
export class CueService {

  commands: Command[] = [];
  cueTree: CueTree;

  rawText: string = "";

  constructor(private ngZone: NgZone) {

  }

  loadCue(filePaths: string[]) {
    fs.readFile(filePaths[0], function(err, data) {
      if (err) {
        return console.error(err);
      }
      this.ngZone.run(() => {
        this.rawText = data.toString();
        this.buildCommands();
        this.makeTree();
      });
    }.bind(this));
  }

  buildCommands() {
    this.commands = [];
    let lines = this.rawText.split(/\r\n|\r|\n/).map(line => line.trim()).filter(line => line !== '');
    let commandBuilder = new CommandBuilder();
    for (let i = 0; i < lines.length; i++) {
      this.commands.push(commandBuilder.buildCommandFromString(lines[i]));
    }
  }

  makeTree() {
    this.cueTree = new CueTree(this.commands);
    console.log(this.cueTree);
  }

}
