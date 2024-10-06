import { Mock, mock } from 'ts-jest-mocker';
import { Account } from '../../../../features/account/domain/entities/account';
import { SignUpDto } from '../../../../features/account/application/dto/sign-up.dto';
import { AccountRepository } from '../../../../features/account/domain/repositories/account.repository';
import { AccountService } from '../../../../features/account/domain/services/account.service';

describe('Account domain service', () => {
    let accountService: AccountService;
    let accountRepository: Mock<AccountRepository>;
    const data: SignUpDto = {
        username: 'kumelemuel',
        email: 'kumelemuel@gmail.com',
        password: '123456',
    };

    beforeEach(async () => {
        accountRepository = mock<AccountRepository>();
        accountService = new AccountService(accountRepository);
    });

    it('should be register an account', async () => {
        const account = new Account(data);

        accountRepository.create.mockReturnValue(Promise.resolve(account));

        expect(accountService.create(data.username, data.email, data.password)).resolves.toBe(account);
    });

    it('should not register an account with an username already in use', async () => {
        accountRepository.usernameExists.mockReturnValue(Promise.resolve(true));

        expect(accountService.validateUsername(data.username)).rejects.toThrow(/^This username is already registered$/);
    });
    it('should not register an account with an e-mail already in use', async () => {
        accountRepository.emailExists.mockReturnValue(Promise.resolve(true));

        expect(accountService.validateEmail(data.email)).rejects.toThrow(/^This email is already registered$/);
    });

    it('should be return a token when register an account', async () => {
        const account = new Account(data);

        accountRepository.create.mockReturnValue(Promise.resolve(account));

        expect(accountService.create(data.username, data.email, data.password)).resolves.toBe(account);
    });
});
