import { AuthUsecases } from '@/features/account/application/usecases/auth.usecase';
import { Account } from '@/features/account/domain/entities/account';
import { inject } from 'inversify';

export class AuthController {
    constructor(@inject('AuthUsecases') private authService: AuthUsecases) {}
    async signUp(body: { username: string; email: string; password: string }): Promise<Account> {
        try {
            const account = await this.authService.signUp(body);
            return Promise.resolve(account);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
