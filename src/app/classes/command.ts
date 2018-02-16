import { CommandName } from '../enums/command-name.enum';
import { Context } from '../enums/context.enum';

export abstract class Command {

  rawText: string;
  commandStringParams: Array<string>;
  rawParams: { [key: string]: string } = {};

  commandName: CommandName;

  rules = {
    parents: null as Array<Context>,
    multiple: null as boolean,
    children: null as Array<CommandName>,
    position: null as Array<[Context, CommandName[], CommandName[]]>
  };

  children: Array<Command> = [];
  parent: Command;

  constructor(
    commandName: CommandName,
    parents: Array<Context>,
    multiple: boolean,
    children: Array<CommandName>,
    position: Array<[Context, CommandName[], CommandName[]]>
  ) {
    this.commandName = commandName;
    this.rules.parents = parents;
    this.rules.multiple = multiple;
    this.rules.children = children;
    this.rules.position = position;
  }

  updateFromString(commandString: string): void {
    this.rawText = commandString;
    let commandNameLength = this.commandName == CommandName.Unknown ? 0 : this.commandName.length;
    this.commandStringParams = this.rawText.slice(commandNameLength).split(new RegExp('\\s'));
  }

  getParam(index: number, join: boolean = false): string {
    let result: string = '';
    if (typeof this.commandStringParams[index] !== 'undefined') {
      result = this.commandStringParams[index];
      if (join && this.commandStringParams.length > index + 1) {
        result += " " + this.commandStringParams.slice(index + 1).join(' ');
      }
    }
    return result.trim();
  }

  addChild(child: Command) {
    child.parent = this;
    this.children.push(child);
  }

}
