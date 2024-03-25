/** @format */

import { Controller, Module, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "HELLo There!";
  }

  getHello(): string {
    return "Hello World!";
  }
}
