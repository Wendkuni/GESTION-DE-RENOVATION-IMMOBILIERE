import { UserAuthoriserComponent } from './user-authoriser/user-authoriser.component';
import { AddOrUpdateDossierComponent } from './add-or-update-dossier/add-or-update-dossier.component';
import { DemarrageProjetRenovationComponent } from './../demarrage-projet-renovation.component';
import { DocumentSelect, Dossier, Fichier, ProjetRenauvation } from 'src/app/shared/models/demarrage-projet/projet-renovation.model';
import { DossierProjet } from './dossier-fichier.service';
import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';
import { MatDialog } from '@angular/material/dialog';
import { AddOrUpdateFileComponent } from './add-or-update-file/add-or-update-file.component';
import { environment } from 'src/environments/environment';
import { GestionDossier } from './gestion-dossier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { ProjetStorageService } from 'src/app/shared/services/ProjetRenovation.localStorage';

export interface element{
  id:number;
  appellation:string;
  sousElement: element[];
  isFile: boolean;
}


@Component({
  selector: 'app-fichier',
  templateUrl: './fichier.component.html',
  styleUrls: ['./fichier.component.scss']
})
export class FichierComponent implements OnInit {
  droppedData: string = '';
  elementAfficher;
  isLoading = false;
  page: any;
  parendId=0;
  haveGestionUser=0;
  haveGestionDossier = 0;
  parent= {
    id: 0,
  	Appellation: 'Racine',
  	dossierParent:0,
	  projetRenovation: null,
	  fichiers: null,
	  utilisateursAutoriser: null,
  };
  fileParent :Dossier;
  fileDossier: Dossier[]=[];
  projet: ProjetRenauvation;
  listeDocument: DocumentSelect; 
  listDossier:Dossier[];
  listFile: Fichier[];
  parentId : element[]=[];
  URLFile=environment.BACK_END.FILEUPLOAD+'download/';
constructor(private dossierService: DossierProjet,private snackBar: SnackBarService,private confirm: AppConfirmService,
   public dialog: MatDialog,private gestionDossier :  GestionDossier, private tokenElement: ProjetStorageService){
  this.projet= DemarrageProjetRenovationComponent.projetRenovation;
  this.haveGestionDossier = parseInt(tokenElement.getGestionDossier());
  this.haveGestionUser = parseFloat(tokenElement.getGestionUser());
}
  ngOnInit()
  {
    if(this.parendId==0)
    {
      this.fileDossier=[];
      this.parendId=0;
      
      this.dossierService.getAllDocumentRacine(this.projet.id).subscribe((data)=>{
        this.listeDocument = data;
        this.listDossier=data.dossiers;
        this.listFile = data.fichiers;
        this.parent.id = this.listeDocument.id;
        console.log(this.parent);
        
      })
    }
    else{
      this.dossierService.findDossierByI(this.parendId).subscribe((data)=>{
        this.listDossier=data.dossiers;
        this.listFile = data.fichiers;
        console.log(data);
      })
    }
    
  }
 
  addDossier(dossier): void {
    console.log(dossier)
    const dialogRef = this.dialog.open(AddOrUpdateDossierComponent, {
      width: '600px',
      data: {dossier: dossier, parentId: this.parendId},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        this.ngOnInit();
      }
    });
  }

  authorisationUser(dossier): void {
    const dialogRef = this.dialog.open(UserAuthoriserComponent, {
      width: '600px',
      data: {dossier: dossier},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
    });
  }


  addFichier(file): void {
    this.isLoading = true;
    console.log(file)
    const dialogRef = this.dialog.open(AddOrUpdateFileComponent, {
      width: '600px',
      data: {file: file, dossier: this.fileParent},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==null)
      {
        this.ngOnInit();
        this.isLoading = false;
      }
    });
  }

  retourRoot()
  {
    this.isLoading = true;
    this.fileDossier=[];
    this.fileParent = null;
      this.parendId=0;
      this.dossierService.getAllDocumentRacine(this.projet.id).subscribe((data)=>{
        this.listDossier=data.dossiers;
        this.listFile = data.fichiers;
        this.isLoading = false;
        console.log(data);
      })
  }
  selecteDossier(dossier: Dossier){
    this.isLoading = true;
    this.fileDossier.push(dossier);
    this.parendId= dossier.id;
    this.fileParent = dossier;
    this.dossierService.findDossierByI(dossier.id).subscribe((data)=>{
      this.listDossier=data.dossiers;
      this.listFile = data.fichiers;
      this.isLoading = false;
      console.log(data);
    })
  }

  selecteRetour(dossier: Dossier){
    this.isLoading = true;
   let list: Dossier[]=[];
   let i=0;
    for(i=0; i< this.fileDossier.length; i++)
    {
      list.push(this.fileDossier[i]);
        if(this.fileDossier[i].id==dossier.id)
        {
            this.dossierService.findDossierByI(dossier.id).subscribe((data)=>{
              this.listDossier=data.dossiers;
              this.listFile = data.fichiers;
              console.log(data);
              this.fileParent = dossier;
              this.parendId= dossier.id;
              this.fileDossier=list;
              this.isLoading = false;
            });
            break;
        }
    }
  }

  onDropRoot(event: DropEvent, element): void {
    let document = event.dropData;
    let indice = document.split(" ")[0];
    let id = document.split(" ")[1];
    let file;
    if(element.dossierParent)
    {
      if(indice == 'fichier')
      {

      }
      else if(indice == 'dossier'){
            
      }
    }
  }

  onDrop(event: DropEvent, element): void {
   if(this.haveGestionDossier==1)
   {
    this.isLoading = true;
    console.log(element);
    console.log(event);
    let document = event.dropData;
    let indice = document.split(" ")[0];
    let id = document.split(" ")[1];
    let file;
    console.log(indice);
    console.log(id);
      if(indice == 'fichier')
      {
        for(let i=0; i<this.listFile.length; i++)
        {
          if(this.listFile[i].id==id)
          {
              file = this.listFile[i];
              break;
          }
        }
        file.dossier = element;
        file.projetRenovation = this.projet;
        console.log(file);
        this.dossierService.updateFile(file.id,file).subscribe((data)=>{

        },(error: HttpErrorResponse) => {
          if(error.status<300)
          {
            this.ngOnInit();
            this.isLoading = false;
            this.snackBar.openSnackBar("fichier Deplacer  avec succès", "OK",3000);
          }
          else{
            this.ngOnInit();
            this.isLoading = false;
            this.snackBar.openSnackBar("fichier non Deplacer", "OK",5000);
          }
      });
      }
      else if(indice == 'dossier'){
        if(element.id != id)
        {
          console.log(element);
          element.dossierParent = element.id;
          element.id= parseInt(id);
          console.log(element);
          this.gestionDossier.modifierParent(element).subscribe((data)=>{

          },(error: HttpErrorResponse) => {
            if(error.status<300)
            {
              this.ngOnInit();
              this.isLoading = false;
              this.snackBar.openSnackBar("Dossier Deplacer  avec succès", "OK",3000);
            }
            else{
              this.ngOnInit();
              this.isLoading = false;
              this.snackBar.openSnackBar("Dossier non Deplacer car fichier existe deja", "OK",5000);
            }
        });
        }
      }
   }
  }

  supprimerDossier(index){
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous supprimer cette taches ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoading = true;
        this.gestionDossier.deleteDossier(index).subscribe(()=>{
          
        },
        (error: HttpErrorResponse) => {
              if(error.status<300)
              {
                this.isLoading = false;
                this.snackBar.openSnackBar("Dossier supprimé avec succès", "OK",3000);
                this.ngOnInit();
                this.isLoading = false;
              }
              else{
                this.isLoading = false;
                this.snackBar.openSnackBar("Dossier non supprimer car contient des element", "OK",3000);
              }
              
          });
      }

    });
  }



  supprimerFile(index){
    console.log(index);
    this.confirm.confirm({
      title:"Confirmation",
      message:`Voulez-vous supprimer cette taches ? `
    }).subscribe(($choix)=> {

      if($choix) {
        this.isLoading = true;
        this.dossierService.deleteFile(index).subscribe(()=>{
          
        },
        (error: HttpErrorResponse) => {
              if(error.status<300)
              {
                this.isLoading = false;
                this.snackBar.openSnackBar("fichier supprimé avec succès", "OK",3000);
                this.ngOnInit();
              }
              else{
                this.isLoading = false;
                this.snackBar.openSnackBar("fichier non supprimer car vous n'avez pas le droit", "OK",3000);
              }
              
          });
      }

    });
  }

  sousElement(element: element)
  {
    this.parentId.push(element);
    this.elementAfficher = element.sousElement;
  }
  revenirEnArriere(element: element){
    let level =0;
    this.parentId.forEach((e, index)=>{
      if(e.id==element.id)
      {
        level=this.parentId.length - (index+1)
      }
    });
  }

}
