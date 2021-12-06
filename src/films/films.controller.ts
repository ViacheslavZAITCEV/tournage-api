import { Controller, Get } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
	constructor() { }
	filmsServices = new FilmsService()

	@Get('all')
	async all() {
		return this.filmsServices.getAllFilms()
	}


	@Get('arondissement:id')
	async arondissement(id) {
		return this.filmsServices.getAllFilms()

	}
}
