import { Controller, Post, Req, Body, ParseIntPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from 'express'
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authServise: AuthService) { }

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authServise.signup(dto)
    }

    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authServise.singin(dto)
    }


}