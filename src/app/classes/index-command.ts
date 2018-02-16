import { TimeFormat } from './time-format';

import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class IndexCommand extends Command {
  number: number;
  length: TimeFormat;

  constructor() {
    super(
      CommandName.Index,
      [Context.Track],
      true,
      [],
      [
        [
          Context.Track,
          [
            CommandName.Flags, CommandName.Isrc, CommandName.Title,
            CommandName.Performer, CommandName.Songwriter, CommandName.Pregap
          ],
          [CommandName.Postgap]
        ]
      ]
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
    //let result = commandString.match(new RegExp('^' + this.commandName + '\\s+([0-9]+)\\s+([0-9]{2}:[0-9]{2}:[0-9]{2})$', 'i'));
    this.rawParams['number'] = this.getParam(1);
    this.rawParams['length'] = this.getParam(2, true);
    // this.number = parseInt(result[1]);
    // this.length = new TimeFormat(result[2]);
  }

}
