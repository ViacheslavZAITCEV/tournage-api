export class FilmModel {
	"type": string;
	"geometry": {
		"type": string;
		"coordinates": [
			number,
			number,
		]
	};
	"properties": {
		"annee_tournage": string;
		"coord_y": number,
		"coord_x": number,
		"type_tournage": string;
		"nom_producteur": string;
		"geo_point_2d": [
			number,
			number,
		];
		"nom_tournage": string;
		"nom_realisateur": string;
		"date_fin": string;
		"adresse_lieu": string;
		"id_lieu": string;
		"date_debut": string;
		"ardt_lieu": string;
	}
}
