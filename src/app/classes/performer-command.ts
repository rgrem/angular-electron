import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class PerformerCommand extends Command {
  performerString: string;

  constructor() {
    super(
      CommandName.Performer,
      [Context.None, Context.Track],
      false,
      [],
      [
        [
          Context.None,
          [CommandName.Catalog, CommandName.Cdtextfile],
          [CommandName.File]
        ],
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
    this.rawParams['performerString'] = this.getParam(1, true);
  }

}
