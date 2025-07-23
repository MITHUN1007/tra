
import { makeAutoObservable } from 'mobx';

export class CreateManager {
    pendingCreationData: any = null;

    constructor() {
        makeAutoObservable(this);
    }

    resumeCreate() {
        // Implementation for resuming create operation
        console.log('Resuming create operation');
    }
}
