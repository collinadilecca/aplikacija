import { Controller, Get } from '@nestjs/common';
import { Administrator } from '../entities/administrator.entity';
import { AdministratorService } from '../services/administrator/administrator.service';

@Controller()
export class AppController {
  constructor(
    private adminstratorService: AdministratorService
  ) { }

  @Get() // http://localhost:3000/
  getIndex(): string {
    return 'Homepage!';
  }
}
