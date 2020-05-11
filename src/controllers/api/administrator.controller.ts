import { Controller, Get, Param, Put, Body, Post } from "@nestjs/common";
import { AdministratorService } from "../../services/administrator/administrator.service";
import { Administrator } from "../../entities/administrator.entity";
import { AddAdministratorDto } from "../../dtos/administrator/add.administrator.dto";
import { editAdministratorDto } from "../../dtos/administrator/edit.administrator.dto";
import { ApiResponse } from "src/misc/api.response.class";

@Controller('api/administrator')
export class AdministratorController {
    constructor(
        private adminstratorService: AdministratorService
    ) { }

    
  @Get()
  getAll(): Promise<Administrator[]> {
    return this.adminstratorService.getAll();
  }

  @Get(':id')
  getById(@Param('id') administratorId: number): Promise<Administrator | ApiResponse> {
    return this.adminstratorService.getById(administratorId);
  }

  @Put()
  add( @Body() data:AddAdministratorDto ): Promise<Administrator | ApiResponse> {
      return this.adminstratorService.add(data);
  }

  @Post(':id')
    edit( @Param('id') id: number, @Body() data: editAdministratorDto): Promise<Administrator | ApiResponse> {
        return this.adminstratorService.editById(id, data);
    }
}