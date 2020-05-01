import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get() // http://localhost:3000/
  getIndex(): string {
    return 'Homepage!';
  }
}
