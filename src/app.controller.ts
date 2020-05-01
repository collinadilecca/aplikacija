import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get() // http://localhost:3000/
  getHello(): string {
    return 'Hello World!';
  }

  @Get('world') // http://localhost:3000/world/
  getWorld(): string {
    return 'World!!!';
  }
}
