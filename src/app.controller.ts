import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRootRoute() {
        return 'HELLo There!';
    }

    getHello(): string {
        return 'Hello World!';
    }
}
