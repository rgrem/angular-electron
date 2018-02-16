import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';
import { DataType } from '../enums/data-type.enum';

import { Command } from './command';

export class TrackCommand extends Command {
  number: number;
  dataType: DataType;

  constructor() {
    super(
      CommandName.Track,
      [Context.File],
      true,
      [
        CommandName.Flags,
        CommandName.Isrc,
        CommandName.Title,
        CommandName.Performer,
        CommandName.Songwriter,
        CommandName.Pregap,
        CommandName.Index,
        CommandName.Postgap
      ],
      []
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
    this.rawParams['number'] = this.getParam(1);
    this.rawParams['dataType'] = this.getParam(2, true);
  }
}
