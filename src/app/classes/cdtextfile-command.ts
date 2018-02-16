import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class CdtextfileCommand extends Command {
  cdtextfileString: string;

  constructor() {
    super(
      CommandName.Cdtextfile,
      [Context.None],
      false,
      [],
      [
        [
          Context.None,
          [CommandName.Catalog],
          [CommandName.Title, CommandName.Performer, CommandName.Songwriter, CommandName.File]
        ]
      ]
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
    this.rawParams['cdtextfileString'] = this.getParam(1, true);
  }

}
