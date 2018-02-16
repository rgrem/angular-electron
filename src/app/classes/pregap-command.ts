import { TimeFormat } from './time-format';

import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class PregapCommand extends Command {
  length: TimeFormat;

  constructor() {
    super(
      CommandName.Pregap,
      [Context.Track],
      false,
      [],
      [
        [
          Context.Track,
          [],
          [CommandName.Index]
        ]
      ]
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
    this.rawParams['length'] = this.getParam(1, true);
  }

}
