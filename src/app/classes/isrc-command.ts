import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class IsrcCommand extends Command {
  isrcCode: string;

  constructor() {
    super(
      CommandName.Isrc,
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
    this.rawParams['isrcCode'] = this.getParam(1, true);
  }

}
