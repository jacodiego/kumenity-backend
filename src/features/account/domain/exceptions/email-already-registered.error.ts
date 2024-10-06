import { ApplicationException } from './application.error';

export class EmailAlreadyRegisteredError extends ApplicationException {
    constructor(message: string) {
        super(message);
    }
}
