import { EmailAlreadyRegisteredError } from '../exceptions/email-already-registered.error';
import { Account } from '../entities/account';
import { UsernameAlreadyRegisteredError } from '../exceptions/username-already-registered.error';
import { AccountRepository } from '../repositories/account.repository';
import { inject, injectable } from 'inversify';
import { REPOSITORIES } from '@/config/types';

@injectable()
export class AccountService {
    constructor(@inject(REPOSITORIES.AccountRepository) private readonly repository: AccountRepository) {}

    async create(username: string, email: string, password: string): Promise<Account> {
        const account = new Account({ username, email, password });
        const saved = this.repository.create(account);
        return saved;
    }

    async validateUsername(username: string): Promise<void> {
        if (await this.repository.usernameExists(username)) {
            throw new UsernameAlreadyRegisteredError('This username is already registered');
        }
    }

    async validateEmail(email: string): Promise<void> {
        if (await this.repository.emailExists(email)) {
            throw new EmailAlreadyRegisteredError('This email is already registered');
        }
    }
}
