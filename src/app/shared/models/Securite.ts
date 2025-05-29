export  class RolesModel{
     id : number;
	 libelle :string;
	 Type :string;
	 name :string;
}

export class ProfileModel{
    id : number;
    libelle : string;
    roles: RolesModel[];
}