import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class TitleCommand extends Command {
  titleString: string;

  constructor() {
    super(
      CommandName.Title,
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
    this.rawParams['titleString'] = this.getParam(1, true);
  }

}
