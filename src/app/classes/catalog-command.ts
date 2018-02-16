import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class CatalogCommand extends Command {
  mcnString: string;

  constructor() {
    super(
      CommandName.Catalog,
      [Context.None],
      false,
      [],
      [
        [
          Context.None,
          [],
          [CommandName.Cdtextfile, CommandName.Title, CommandName.Performer, CommandName.Songwriter, CommandName.File]
        ]
      ],
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
    this.rawParams['mcnString'] = this.getParam(1, true);
  }

}
