import { AuthUsecases } from '@/features/account/application/usecases/auth.usecase';
import { Account } from '@/features/account/domain/entities/account';
import { SignUpDto } from '@/features/account/application/dto/sign-up.dto';
import { AccountService } from '../../domain/services/account.service';
import { inject, injectable } from 'inversify';
import { DOMAIN_SERVICES } from '@/config/types';

@injectable()
export class AuthService implements AuthUsecases {
    constructor(@inject(DOMAIN_SERVICES.AccountService) private readonly accountService: AccountService) {}
    async signUp(data: SignUpDto): Promise<Account> {
        this.accountService.validateUsername(data.username);
        this.accountService.validateEmail(data.email);
        const account = this.accountService.create(data.username, data.email, data.password);
        return Promise.resolve(account);
    }
}
