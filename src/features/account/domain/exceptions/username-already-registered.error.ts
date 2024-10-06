import { ApplicationException } from './application.error';

export class UsernameAlreadyRegisteredError extends ApplicationException {
    constructor(message: string) {
        super(message);
    }
}
