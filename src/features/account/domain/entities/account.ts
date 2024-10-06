export class Account {
    id?: string;
    username: string = '';
    email: string = '';
    password: string = '';
    activated: boolean = false;
    token?: string;

    constructor(init: Partial<Account>) {
        Object.assign(this, init);
    }
}
