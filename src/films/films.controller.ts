import { Controller, Get } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {

	@Get('all')
	async all() {

	}


	@Get('arondissement:id')
	async arondissement() {

	}
}
