import { Client, Utilisateur } from './utilisateeur';

export class Renovation {
    idProjetRenovation;
	nomRenovation;
	typeBien;
	
    surfaceSol;
    
    nombrePiece;
    
    dateDemarrage : Date;;
    
    niveauFinition;
    
    typeRenovation;

    adressChantier;
    
    gammeAppareillages;
    
    modificationPrevu;
    faisAppelFianacePublic
    avoirFinancement;
    budgetTravaux;
    aeffectuerPlanFinance;
    
    justificatif: Justificatif[];
    client: Client;
    dateCreaction : Date;
}


export class Justificatif{
     id: number;
	 appellation: string;
	 urlFile: string;
	 dateCreaction: string;
	 dateUpdate: string;
	 remarque: string;
	valide: boolean;
}

export class GetJustificatifForReno{
  idJustificatif: number;
  idRenovation: number;
  token: string;
}