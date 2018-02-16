import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ipcRenderer } from 'electron';
import { remote } from 'electron';
import * as childProcess from 'child_process';

import { CueService } from './cue.service';

const { app, Menu, MenuItem, dialog } = remote;


@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;
  //remote: typeof remote;

  constructor(private cueService: CueService) {
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.childProcess = window.require('child_process');
      //this.remote = window.require('electron').remote;
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

  openFile() {
    dialog.showOpenDialog({ properties: ['openFile'] }, function(filePaths) {
      this.cueService.loadCue(filePaths);
    }.bind(this));
  }

  buildMenu() {
    const menuTemplate = [
      {
        label: 'File',
        submenu: [
          {
            label: 'Open File...',
            accelerator: 'CmdOrCtrl+O',
            click: () => {
              this.openFile();
            }
          },
          {
            label: 'New File',
            accelerator: 'CmdOrCtrl+N',
            click: () => {

            }
          }
        ]
      },
      {
        label: 'Edit',
        role: 'editMenu'
      }
    ]
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
  }

}
