import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class SongwriterCommand extends Command {
  songwriterString: string;

  constructor() {
    super(
      CommandName.Songwriter,
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
    this.rawParams['songwriterString'] = this.getParam(1, true);
  }

}
