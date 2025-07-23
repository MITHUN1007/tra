
import { makeAutoObservable } from 'mobx';

export class ProjectManager {
  project: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  clear() {
    this.project = null;
  }
}
