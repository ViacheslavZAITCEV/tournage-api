import { Injectable } from '@nestjs/common';
import { lieux } from './lieux-de-tournage';

@Injectable()
export class FilmsService {

	async getAllFilms() {
		return lieux
	}

}
