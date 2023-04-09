import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @Get()
    getUsers() {
        return this.userService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: createUserDto){
        console.log(userData);
        this.userService.createUser(userData);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user =  this.userService.fetchUserById(id);
        if (!user){
            throw new HttpException('No user found', HttpStatus.BAD_REQUEST);
        }
        return user;
    }

}
 