import { Controller, Get } from '@nestjs/common';
import { AppService } from './service';

@Controller('randoms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/productos')
  mostrarproductos(): any {
    return [
      {
        codigo: 't01',
        nombre: 'cañaso',
        costo: '100',
        imagen: '',
      },
      {
        codigo: 't02',
        nombre: 'vino',
        costo: '30',
        imagen: '',
      },
      {
        codigo: 't03',
        nombre: 'pisco',
        costo: '8',
        imagen: '',
      },
      {
        codigo: 't04',
        nombre: 'wiscky',
        costo: '50',
        imagen: '',
      },
      {
        codigo: 't05',
        nombre: 'ron',
        costo: '27',
        imagen: '',
      },
    ];
  }
}
