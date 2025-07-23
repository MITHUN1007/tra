
import { makeAutoObservable } from 'mobx';

export class UserManager {
    settings = {
        settings: {
            editor: {
                shouldWarnDelete: true
            }
        },
        updateEditor: (updates: any) => {
            if (this.settings.settings?.editor) {
                Object.assign(this.settings.settings.editor, updates);
            }
        }
    };

    constructor() {
        makeAutoObservable(this);
    }
}
