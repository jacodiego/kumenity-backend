import { Container } from 'inversify';
import 'reflect-metadata';
import { DOMAIN_SERVICES, REPOSITORIES, USECASES } from './types';
import { AccountRepository } from '@/features/account/domain/repositories/account.repository';
import { InMemoryAccountRepository } from '@/features/account/infrastructure/adapters/persistence/in-memory/in-memory-account.repository';
import { AuthUsecases } from '@/features/account/application/usecases/auth.usecase';
import { AuthService } from '@/features/account/application/services/auth.service';
import { AccountService } from '@/features/account/domain/services/account.service';

const myContainer = new Container({ defaultScope: 'Singleton' });

myContainer.bind<AccountRepository>(REPOSITORIES.AccountRepository).to(InMemoryAccountRepository);

myContainer.bind<AuthUsecases>(USECASES.AuthUsecases).to(AuthService);

myContainer.bind<AccountService>(DOMAIN_SERVICES.AccountService).to(AccountService);

export { myContainer };
