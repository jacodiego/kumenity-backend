import { Account } from '@/features/account/domain/entities/account';
import { AccountRepository } from '@/features/account/domain/repositories/account.repository';
import { injectable } from 'inversify';

const accounts: Array<Account> = [];

@injectable()
export class InMemoryAccountRepository implements AccountRepository {
    create(account: Account): Promise<Account> {
        accounts.push(account);
        return Promise.resolve(account);
    }
    login(username: string, password: string): Promise<Account> {
        const account = accounts.find((account) => account.username === username && account.password === password);
        if (account === undefined) throw Error('Login failed');
        return Promise.resolve(account);
    }
    emailExists(email: string): Promise<boolean> {
        const exist = !!accounts.find((account) => account.email === email);
        return Promise.resolve(exist);
    }
    usernameExists(username: string): Promise<boolean> {
        const exist = !!accounts.find((account) => account.username === username);
        return Promise.resolve(exist);
    }
}
