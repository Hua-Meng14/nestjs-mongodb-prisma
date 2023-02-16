import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }
  async createUser(userData): Promise<User> {
    const result = await this.prisma.user.create({ data: userData })
    return result;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
