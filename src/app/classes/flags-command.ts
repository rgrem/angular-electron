import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';
import { SubCode } from '../enums/sub-code.enum';

import { Command } from './command';

export class FlagsCommand extends Command {
  subCodes: Array<SubCode>;

  constructor() {
    super(
      CommandName.Flags,
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
    this.rawParams['subCodes'] = this.getParam(1, true);
    // let result = commandString.match(new RegExp('^' + this.commandName + '\\s+((?:(?:DCP|4CH|PRE|SCMS)\\s?){1,4})$', 'i'));
    // this.subCodes = result[1].split(' ').map(function(e) {
    //   return <SubCode>e.trim();
    // });
  }

}
