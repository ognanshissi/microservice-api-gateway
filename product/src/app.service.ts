import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getApiInfo(): {[key: string]: any} {
    return {
      serviceName: "ProductServce",
      version: 1.0,
      author: {
        name: 'Ambroise BAZIE',
        email: 'bazieambroise@gmail.com'
      },
      description: "Simple description of the current api"
    }
  }


  getHello(): string {
    return 'Hello World!';
  }
}
