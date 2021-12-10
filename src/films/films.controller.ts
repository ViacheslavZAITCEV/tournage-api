import { Controller, Get, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { filmType } from './types';

@Controller('films')
export class FilmsController {
	constructor() { }
	filmsServices = new FilmsService()

	@Get('getfilms20')
	async getfilms20(): Promise<filmType[]> {
		// const { start, end } = params;
		console.log('getfilms20');
		return this.filmsServices.getFilms(0, 20);
	}

	@Get('getfilms')
	async getfilms(@Query('start') start: string, @Query('end') end: string): Promise<{ films: filmType[], length: number }> {
		console.log('getfilms, start=', start, ', end=', end);
		if (typeof start === undefined) start = '0';
		if (typeof end === undefined) end = '0';
		if (parseInt(start) > parseInt(end)) {
			const end2 = end;
			end = start;
			start = end2;
		}
		const filmsResponse = this.filmsServices.getFilms(parseInt(start), parseInt(end));
		return { films: filmsResponse, length: this.filmsServices.getAllFilms().length }
	}

	@Get('getfilmsYear')
	async getfilmsYear(@Query('year') year: string, @Query('start') start: string, @Query('end') end: string): Promise<{ films: filmType[], length: number }> {
		console.log('getfilmsYear, start=', start, ', end=', end);
		if (typeof start === undefined) start = '0';
		if (typeof end === undefined) end = '0';
		if (parseInt(start) > parseInt(end)) {
			const end2 = end;
			end = start;
			start = end2;
		}
		const filter = (film: filmType) => film.properties.annee_tournage == year;
		const filmsYears = this.filmsServices.filtreFilms(filter);
		const filmsResponse = this.filmsServices.getFilmsStartEnd(filmsYears, parseInt(start), parseInt(end));
		return { films: filmsResponse, length: filmsYears.length }
	}

	@Get('getfilmsArrondissement')
	async getfilmsArrondissement(@Query('arrondissement') arrondissement: string, @Query('start') start: string, @Query('end') end: string): Promise<{ films: filmType[], length: number }> {
		console.log('getfilmsArrondissement, start=', start, ', end=', end);
		if (typeof start === undefined) start = '0';
		if (typeof end === undefined) end = '0';
		if (parseInt(start) > parseInt(end)) {
			const end2 = end;
			end = start;
			start = end2;
		}
		const filter = (film: filmType) => film.properties.ardt_lieu == arrondissement;
		const filmsArrondissement = this.filmsServices.filtreFilms(filter);
		const filmsResponse = this.filmsServices.getFilmsStartEnd(filmsArrondissement, parseInt(start), parseInt(end));
		return { films: filmsResponse, length: filmsArrondissement.length }
	}





	@Get('test')
	test() {
		return 'test'
	}

}
