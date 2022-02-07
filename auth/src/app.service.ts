import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userid: '123',
      stripeUserId: '123123',
    },
    {
      userid: '324',
      stripeUserId: '324234',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
  getUser(GetUserRequest: GetUserRequest) {
    return this.users.find((user) => [user.userid === GetUserRequest.userId]);
  }
}
