import { Injectable } from '@nestjs/common';
import { lieux } from './lieux-de-tournage';
import { filmType } from './types';

@Injectable()
export class FilmsService {

	getAllFilms(): Array<filmType> {
		return lieux.features;
	}
	getAllFilmslength(): number {
		return lieux.features.length;
	}

	getFilms(start: number, end: number): Array<filmType> | undefined {
		return lieux.features.slice(start, end);
	}

	getFilmsStartEnd(list: filmType[], start: number, end: number): Array<filmType> | undefined {
		return list.slice(start, end);
	}

	filtreFilms(filter: (filmType) => boolean): filmType[] {
		return lieux.features.filter(filter);
	}


}

