export class typeSocietesModel{
    id:number;
    appellation: string;
}

export class societeModel{
    id : number;
	nomSociete : string;
	siret : string;
	adresse : string;
	email : string;
	contact : string;
	typeSociete : typeSocietesModel;
	//private Collection<AutreUtilsateurEntity> employes;
}