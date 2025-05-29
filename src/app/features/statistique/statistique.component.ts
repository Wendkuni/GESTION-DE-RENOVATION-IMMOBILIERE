import { Component, OnInit } from '@angular/core';
import { CloturerRenovation } from 'src/app/shared/models/cloturerRenovation.class';
import { ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { CloturerRenovationService } from '../fin-projet-renovation/cloturerProjet.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
  donneeMois: any=[];
  donneeAnnee: any=[];
  dateYear=[];
  listYear= [];
  listMois = [];
  listBudgetGeneral = [];
  listBudgetAnnee = [];
  listBudgetMois= [];
  budgetAnnee = 0;
  public colorRapprot = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  budgetMois =0;
  projet :CloturerRenovation[];
  listPro :CloturerRenovation[] = [];
  isLoadingResults=true;
  optionAnnee = false;
  anneeDebut; anneeFin;
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabelAnnee = 'Années';
  public xAxisLabelMois = 'Mois';
  public showYAxisLabel = true;
  public yAxisLabel = 'nombre de projet';
  public yAxisLabelBudget = 'Budget Total';
  public colorScheme = {
    domain: ['#2F3E9E']
  }; 
  public autoScale = true;


  optionMois= false;
  moisDebut; moisFin;


  optionUtilisateur = false;
  nomUtilisateur;


  optionClient = false;
  nomClient;


  optionBudget = false;
  budget;budgetCritere="egale";

  constructor(public projetService: CloturerRenovationService) { 
    this.getAllyear();
  }

  getElement(){
    this.isLoadingResults=true;
    this.projetService.getProjet().subscribe((data) =>{
      this.projet = data;
      console.log(this.projet);
      this.statistique(this.projet);
      this.donneeMois = [{
        name:"Nombre de projet cloturé au mois de  ",
        series:this.listMois
      }]
  
      this.donneeAnnee = [{
        name:"Nombre de projet cloturé à l'année ",
        series:this.listYear
      }]
      this.isLoadingResults=false;
    })
  }
  ngOnInit(): void {
    this.getElement();
  }
  getAllyear(){
    for(let i=1996;i<=new Date().getFullYear();i++)
    {
      this.dateYear.push(i+1);
    }
  }

  rechercheNomRenovation(arr : CloturerRenovation[], requete) {
    return arr.filter(function (el) {
      return  el.projetRenovation.renovation.nomRenovation.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    })
  }


  rechercheOptionAnnee(arr : CloturerRenovation[], requete, requete2) :CloturerRenovation[]  {
    return arr.filter(function (el) {
      if(requete2==undefined){
        return  (new Date(el.projetRenovation.dateDemarrage).getFullYear() >=requete);
      }
      else if(requete==undefined){
        return  (new Date(el.projetRenovation.dateFinission).getFullYear() <=requete2);
      }
      else{
       return  (new Date(el.projetRenovation.dateDemarrage).getFullYear() >=requete && new Date(el.projetRenovation.dateFinission).getFullYear() <=requete2);
      }
    
      //el.projetRenovation.dateFinission.toString().toLowerCase().indexOf(requete2.toString()) !== 1;
    })
  }

  rechercheOptionMois(arr : CloturerRenovation[], requete, requete2) :CloturerRenovation[]  {
    return arr.filter(function (el) {
     if(requete2==undefined){
       return  (new Date(el.projetRenovation.dateDemarrage).getMonth() >=requete);
     }
     else if(requete==undefined){
      return  (new Date(el.projetRenovation.dateFinission).getMonth() <requete2);
     }
     else{
      return  (new Date(el.projetRenovation.dateDemarrage).getMonth() ==requete && new Date(el.projetRenovation.dateFinission).getMonth() ==requete2);
     }
      //el.projetRenovation.dateFinission.toString().toLowerCase().indexOf(requete2.toString()) !== 1;
    })
  }
  rechercheOptionBudget(arr : CloturerRenovation[], requete, requete2) :CloturerRenovation[]  {
    return arr.filter(function (el) {
      switch(requete2){
        case "egale":
          return el.projetRenovation.budget==requete;
          break;
        case "superieure":
          return el.projetRenovation.budget>requete;
          break;
        default:
          return el.projetRenovation.budget<requete;
      }
      return el.projetRenovation.budget==requete;
      //el.projetRenovation.dateFinission.toString().toLowerCase().indexOf(requete2.toString()) !== 1;
    })
  }
  rechercheOptionClient(arr : CloturerRenovation[], requete) :CloturerRenovation[]  {
    return arr.filter(function (el) {
      return  el.projetRenovation.renovation.client.email.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    })
  }

  recherche(){
    this.isLoadingResults=true;
    if(this.optionAnnee)
    {
      this.listPro = this.rechercheOptionAnnee(this.projet, this.anneeDebut, this.anneeFin)
    }
    if(this.optionMois){
      if(this.optionAnnee)
      {
        this.listPro = this.rechercheOptionMois(this.listPro, this.moisDebut, this.moisFin)
      }
      else{
        this.listPro = this.rechercheOptionMois(this.projet, this.moisDebut, this.moisFin)
      }
    }
    if(this.optionClient)
    {
      if(this.optionAnnee || this.optionMois)
      {
        this.listPro = this.rechercheOptionClient(this.listPro, this.nomClient)
      }
      else{
        this.listPro = this.rechercheOptionClient(this.projet, this.nomClient)
      }
    }
    if(this.optionBudget)
    {
      if(this.optionAnnee || this.optionClient || this.optionMois)
      {
        this.listPro = this.rechercheOptionBudget(this.listPro, this.budget, this.budgetCritere)
      }
      else{
        this.listPro = this.rechercheOptionBudget(this.projet, this.budget, this.budgetCritere)
      }
    }
    console.log()
    this.statistique(this.listPro);
    this.donneeMois = [{
      name:"Nombre de projet cloturé au mois de  ",
      series:this.listMois
    }]

    this.donneeAnnee = [{
      name:"Nombre de projet cloturé à l'année ",
      series:this.listYear
    }]
    this.isLoadingResults=false;
  }

  listAnneeStatistique(arr, requete) : CloturerRenovation[]{
    return arr.filter(function (el) {
      //this.budgetAnnee +=el.projetRenovation.budget;
        return  (new Date(el.projetRenovation.dateFinission).getFullYear() ==requete);
     })
  }
  listMoisStatistique(arr, requete, annee, BudgetMois) : CloturerRenovation[]{
    return arr.filter(function (el) {
        BudgetMois +=el.projetRenovation.budget;
        return (new Date(el.projetRenovation.dateFinission).getFullYear() ==annee) && (new Date(el.projetRenovation.dateFinission).getMonth() ==requete);
     })
  }

  statistique(list: CloturerRenovation[]){
    this.listYear=[];
    this.listBudgetAnnee=[];
    this.listMois=[];
    this.listBudgetMois=[];
      for(let i=1996;i<=new Date().getFullYear();i++){
        this.budgetAnnee=0;
        let nbA = this.listAnneeStatistique(list,i);
        if(nbA.length>0 || this.listYear.length>0){
          //console.log(this.budgetAnnee)
          let anneeValue= {
            name : i.toString(),
            value : nbA.length
          }
          this.listYear.push(anneeValue);
          nbA.forEach(value=>{
            this.budgetAnnee+=value.projetRenovation.budget;
          })
          let budgetAnneeValue = {
            name : i.toString(),
            value : this.budgetAnnee
          }
          this.listBudgetAnnee.push(budgetAnneeValue);
        }
          this.MOIS.forEach((value)=>{
            this.budgetMois=0;
            let nbM = this.listMoisStatistique(list,value.id,i,this.budgetMois);
            if(nbM.length>0 || this.listMois.length>0)
            {
              let moisValue= {
                name : value.name+" "+i.toString(),
                value : nbM.length
              }
              this.listMois.push(moisValue);
              nbM.forEach(value=>{
                this.budgetMois+=value.projetRenovation.budget;
              })
              let budgetMoisValue = {
                name : value.name+" "+i.toString(),
                value : this.budgetMois
              }
              this.listBudgetMois.push(budgetMoisValue);
            }
          })
       }
       console.log(this.listYear);
       console.log(this.listMois);
       console.log(this.listBudgetAnnee);
       console.log(this.listBudgetMois);
  }

  MOIS = [{
    id: 0,
    name: 'Janvier'
  },
  {
    id: 1,
    name: 'Fevrier'
  },
  {
    id: 2,
    name: 'Mars'
  },
  {
    id: 3,
    name: 'Avril'
  },
  {
    id: 4,
    name: 'Mai'
  },
  {
    id: 5,
    name: 'Juin'
  },
  {
    id: 6,
    name: 'Juillet'
  },
  {
    id: 7,
    name: 'Aout'
  },
  {
    id: 8,
    name: 'Septembre'
  },
  {
    id: 9,
    name: 'Octobre'
  },
  {
    id: 10,
    name: 'Novembre'
  },
  {
    id: 11,
    name: 'Decembre'
  },
]
}
