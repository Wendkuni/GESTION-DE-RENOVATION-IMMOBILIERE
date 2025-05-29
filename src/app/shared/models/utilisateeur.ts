import { ProfileModel } from './Securite';
import { societeModel } from "./societe.model";

export class Utilisateur{
        id : number;
        email: string;
         imgUrl :string;
         nom :string;
         password :string;
         prenom :string;
         provider :string;
         contact: string;
         profile: ProfileModel
}

export class Client extends Utilisateur{
        societe : string;
	statusFamiliale : string;
        heureAContacter : string;
        adresse: string;
}


export class UpdatePassword{
        password: string;
        confirm:string;
}

export class AutresUser extends Utilisateur{
        societe: societeModel;
        civilite: string;
}

export class PersonnelSociete extends Utilisateur{
        civilite: string;
}
