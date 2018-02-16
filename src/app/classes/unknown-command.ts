import { CommandName } from '../enums/command-name.enum';

import { Command } from './command';

export class UnknownCommand extends Command {
  constructor() {
    super(
      CommandName.Unknown,
      [],
      true,
      [],
      [],
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
  }

}
