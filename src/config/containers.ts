import 'reflect-metadata';
import { myContainer } from './inversify.config';
import { USECASES } from './types';
import { AuthController } from '@/features/account/infrastructure/adapters/http/auth.controller';

export const authController = myContainer.get<AuthController>(USECASES.AuthUsecases);
