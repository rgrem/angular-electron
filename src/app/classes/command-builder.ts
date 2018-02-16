import { Command } from './../classes/command';
import { CommandName } from './../enums/command-name.enum';
import { CatalogCommand } from './../classes/catalog-command';
import { CdtextfileCommand } from './../classes/cdtextfile-command';
import { TitleCommand } from './../classes/title-command';
import { PerformerCommand } from './../classes/performer-command';
import { SongwriterCommand } from './../classes/songwriter-command';
import { FileCommand } from './../classes/file-command';
import { TrackCommand } from './../classes/track-command';
import { FlagsCommand } from './../classes/flags-command';
import { IsrcCommand } from './../classes/isrc-command';
import { PregapCommand } from './../classes/pregap-command';
import { IndexCommand } from './../classes/index-command';
import { PostgapCommand } from './../classes/postgap-command';
import { RemCommand } from './../classes/rem-command';
import { UnknownCommand } from './../classes/unknown-command';

export class CommandBuilder {

  constructor() {
  }

  buildCommandFromString(commandString: string): Command {
    let regexpMatch = commandString.match(new RegExp('^' + Object.keys(CommandName).map(key => CommandName[key]).join('|'), 'i'));
    let command;
    if (regexpMatch !== null) {
      switch (regexpMatch[0].toLowerCase()) {
        case 'catalog': {
          command = new CatalogCommand();
          break;
        }
        case 'cdtextfile': {
          command = new CdtextfileCommand();
          break;
        }
        case 'title': {
          command = new TitleCommand();
          break;
        }
        case 'performer': {
          command = new PerformerCommand();
          break;
        }
        case 'songwriter': {
          command = new SongwriterCommand();
          break;
        }
        case 'file': {
          command = new FileCommand();
          break;
        }
        case 'track': {
          command = new TrackCommand();
          break;
        }
        case 'flags': {
          command = new FlagsCommand();
          break;
        }
        case 'isrc': {
          command = new IsrcCommand();
          break;
        }
        case 'pregap': {
          command = new PregapCommand();
          break;
        }
        case 'index': {
          command = new IndexCommand();
          break;
        }
        case 'postgap': {
          command = new PostgapCommand();
          break;
        }
        case 'rem': {
          command = new RemCommand();
          break;
        }
        default: {
          command = new UnknownCommand();
          break;
        }
      }
    } else {
      command = new UnknownCommand();
    }
    command.updateFromString(commandString);
    //console.log(command);
    return command;
  }

}
