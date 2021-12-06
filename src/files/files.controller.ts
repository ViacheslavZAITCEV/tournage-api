import { Controller, Get } from '@nestjs/common';

@Controller('files')
export class FilesController {

	@Get('all')
	async all() {

	}


	@Get('arondissement:id')
	async arondissement() {

	}
}
