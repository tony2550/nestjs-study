import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get('/fake')
    getRootRoute() {
        return 'HELLo There!';
    }
    @Get('/bye')
    getBye(): string {
        return 'Bye There~!';
    }
}
