import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

import { Command } from './command';

export class RemCommand extends Command {
  comment: string;

  constructor() {
    super(
      CommandName.Rem,
      [Context.None],
      true,
      [],
      []
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
    this.rawParams['comment'] = this.getParam(1, true);
  }

}
