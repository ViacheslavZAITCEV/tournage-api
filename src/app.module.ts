import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsController } from './films/films.controller';
import { FilmsService } from './films/films.service';

@Module({
  controllers: [AppController, FilmsController],
  providers: [AppService, FilmsService],
})
export class AppModule { }
