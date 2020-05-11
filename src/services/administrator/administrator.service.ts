import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from '../../entities/administrator.entity';
import { Repository } from 'typeorm';
import { AddAdministratorDto } from '../../dtos/administrator/add.administrator.dto';
import { editAdministratorDto } from '../../dtos/administrator/edit.administrator.dto';
import { ApiResponse } from 'src/misc/api.response.class';
import * as crypto from 'crypto';



@Injectable()
export class AdministratorService {
    constructor(
        @InjectRepository(Administrator) private readonly administrator: Repository<Administrator>
    ) { }

    getAll(): Promise<Administrator[]> {
        return this.administrator.find();
    }

    getById(id: number): Promise<Administrator | ApiResponse> {
        return new Promise(async (resolve) => {
            let admin = await this.administrator.findOne(id);

            if (admin === undefined) {
                resolve(new ApiResponse("error", -1002));
            } 

            resolve(admin);
        }); 
    }

    add(data: AddAdministratorDto): Promise<Administrator | ApiResponse> {

        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        let newAdmin: Administrator = new Administrator();
        newAdmin.username = data.username;
        newAdmin.passwordHash = passwordHashString;

        return new Promise((resolve) =>{
            this.administrator.save(newAdmin)
            .then(data => resolve(data))
            .catch(error => {
                const response: ApiResponse = new ApiResponse("error", -1001);
                resolve(response);
            })
        }) 
    }

    async editById(id: number, data: editAdministratorDto): Promise<Administrator | ApiResponse> {
        let admin:Administrator = await this.administrator.findOne(id);

        if (admin === undefined) {
            return new Promise((resolve) => {
                return new ApiResponse("error", -1002);
            });
        }
        
        const crypto = require('crypto');
        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();
        
        admin.passwordHash = passwordHashString;
        return this.administrator.save(admin);
    }
    
}
