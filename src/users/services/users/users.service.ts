import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {username: "fake", email: "fake@fake.com"},
        {username: "Jojo", email: "jojo@fake.com"},
        {username: "Nikoumouk", email: "nikoumouk@fake.com"}
    ];
    fetchUsers(){
        return this.fakeUsers
    }

    createUser(userDetails: CreateUserType){
        return this.fakeUsers.push(userDetails);
        
    }

    fetchUserById(id: number){
        return { id, username: 'Anson', email: 'anson@mail.com'}
    }

    // service to update user
    updateUser(id: number, userDetails: CreateUserType){
        return this.fakeUsers[id] = userDetails;
    }
}
