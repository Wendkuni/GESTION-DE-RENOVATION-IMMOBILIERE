import { Renovation } from 'src/app/shared/models/Renovation';
import { Utilisateur } from '../utilisateeur';
export class ProjetRenauvation{
    id: number;
    budget: number;
    renovation: Renovation;
    dateDemarrage: Date;
    dateFinission: Date;
    photo: string;
}

export class UserAffecterProjet{
    id: number;
    utilisateurs: Utilisateur;
    projetRenovation: ProjetRenauvation;
}

export class Agenda{
    id : number;
	motif : string;
	color: string;
	description : string;
	dateDemarrage : Date;
	dateFinition : Date;
	projetRenovation : ProjetRenauvation;
	utilisateurs : Utilisateur[];
}

export class Tache {
    id: number;
	appellation: string;
	description: string;
	dateDemarrage: Date;
    sommeTache: number;
	dateFinition: Date;
	utilisateur: UserAffecterProjet;
	projetRenovation: ProjetRenauvation;
	decaller: boolean;
	niveauAvancer: string;
	tauxProgression: number;
}

export class Dossier{
	id: number;
	Appellation: string;
	dossierParent; string;
	projetRenovation: ProjetRenauvation;
	fichiers: Fichier[];
	utilisateursAutoriser: UserAffecterProjet[];
}

export class DocumentSelect{
	id: number;
	Appellation: string;
	dossierParent; string;
	projetRenovation: ProjetRenauvation;
	utilisateursAutoriser: UserAffecterProjet[];
	dossiers: Dossier[];
	fichiers: Fichier[];
}

export class Fichier{
	id:number;
	nomFile: string;
	appellation: string;
	link: string;
	description: string;
	dossier: Dossier;
	utilisateur: Utilisateur;
}

export class CanalChat{
	id:number;
	appellation: string;
	dateCreation: Date;
	messages: ChatUser[];
	projetRenovation: ProjetRenauvation;
}

export class ChatUser{
	id:number;
	typeContenu: string;
	contenu: string;
	utilisateur: Utilisateur;
	dateEnvoyer: Date;
	canal: CanalChat;
	ReferenceChat;
}


export enum AvancerTache{
    AFAIRE,
	ENCOURS,
	VALIDER,
	AREFAIRE
}