import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';
import { FileType } from '../enums/file-type.enum';

import { Command } from './command';

export class FileCommand extends Command {
  fileName: string;
  fileType: FileType;

  constructor() {
    super(
      CommandName.File,
      [Context.None],
      true,
      [CommandName.Track],
      [
        [
          Context.None,
          [CommandName.Catalog, CommandName.Cdtextfile],
          []
        ]
      ]
    )
  }

  updateFromString(commandString: string): void {
    super.updateFromString(commandString);
    this.rawParams['fileName'] = this.getParam(1);
    this.rawParams['fileType'] = this.getParam(2, true);
  }

}
