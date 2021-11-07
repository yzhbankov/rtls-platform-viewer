type LoginParams = {
  login: string;
  password: string;
}

type LoginResponse = {
  token: string;
  email: string;
  id: string;
  userName: string
}

export interface IAuthApi {
  login(params: LoginParams): Promise<LoginResponse | null>
}

export class AuthApi implements IAuthApi {
  async login(params: LoginParams) {
    throw new Error('NotYetImplemented');
    return null;
  }
}
