import { Command } from './../classes/command';
import { CommandName } from './../enums/command-name.enum';

import { FileCommand } from './../classes/file-command';
import { TrackCommand } from './../classes/track-command';
import { UnknownCommand } from './../classes/unknown-command';

export class CueTree {

  tree: Command = new UnknownCommand();

  last = {
    fileCommand: null as FileCommand,
    trackCommand: null as TrackCommand,
  };

  constructor(commands: Command[]) {
    for (let i = 0; i < commands.length; i++) {
      let command: Command = commands[i];
      let parent: Command = this.tree;
      if (command.commandName == CommandName.File) {
        this.last.fileCommand = command as FileCommand;
        this.last.trackCommand = null;
      } else if (command.commandName == CommandName.Track) {
        this.last.trackCommand = command as TrackCommand;
        if (this.last.fileCommand) {
          parent = this.last.fileCommand;
        }
      } else {
        if (this.last.trackCommand) {
          parent = this.last.trackCommand;
        } else if (this.last.fileCommand) {
          parent = this.last.fileCommand;
        }
      }
      parent.addChild(command);
    }
  }

  // constructor(commands: Command[]) {
  //   for (let i = 0; i < commands.length; i++) {
  //     let command: Command = commands[i];
  //     if (command.commandName == CommandName.File) {
  //       this.last.fileCommand = command as FileCommand;
  //       this.tree.push(command);
  //       this.last.trackCommand = null;
  //     } else if (command.commandName == CommandName.Track) {
  //       this.last.trackCommand = command as TrackCommand;
  //       if (this.last.fileCommand) {
  //         this.last.fileCommand.children.push(command);
  //         command.parent = this.last.fileCommand;
  //       } else {
  //         this.tree.push(command);
  //       }
  //     } else {
  //       if (this.last.trackCommand) {
  //         this.last.trackCommand.children.push(command);
  //         command.parent = this.last.trackCommand;
  //       } else if (this.last.fileCommand) {
  //         this.last.fileCommand.children.push(command);
  //         command.parent = this.last.fileCommand;
  //       } else {
  //         this.tree.push(command);
  //       }
  //     }
  //   }
  // }

}
