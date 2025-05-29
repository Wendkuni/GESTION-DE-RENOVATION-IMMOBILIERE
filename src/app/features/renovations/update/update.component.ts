import { TokenStorageService } from 'src/app/features/login/_helper/localStorage';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientRenovation } from '../client-renovation';
import { ProfileService } from '../../profile/profile.service';
import { Justificatif, Renovation } from 'src/app/shared/models/Renovation';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponentRenovation implements OnInit {


  formulaire: FormGroup;
  formBudget: FormGroup;
  formRenovation: FormGroup;
  listFile = [0];
  index=0;
  idR= null;
  isLoadingResults= false;
  get justificatif() { return this.formulaire.get("justificatif") ;}
  get getFormPieceComplementaire() { return this.formulaire.controls.pieceComplementaires as FormArray; }

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private profiUser:TokenStorageService,
              private renovation: ClientRenovation,private confirm: AppConfirmService,
              private snackBar:SnackBarService,
              private router: Router) {
                this.idR = this.route.snapshot.params.id;
               }

  ngOnInit(): void {
    
   if(this.idR>0)
    {
      this.isLoadingResults=true;
      this.renovation.findRenovationById(this.route.snapshot.params.id).subscribe((data: Renovation)=>{
        this.formBudget = this.fb.group({
          aeffectuerPlanFinance: [data.aeffectuerPlanFinance, Validators.required],
          budgetTravaux: [data.budgetTravaux, Validators.required],
          nomRenovation: [data.nomRenovation, Validators.required],
          avoirFinancement: [data.avoirFinancement, Validators.required],
          faisAppelFianacePublic: [data.faisAppelFianacePublic, Validators.required]
        });
        this.formRenovation = this.fb.group({
          adressChantier: [data.adressChantier, Validators.required],
          gammeAppareillages: [data.gammeAppareillages, Validators.required],
          modificationPrevu: [data.modificationPrevu, Validators.required],
          niveauFinition: [data.niveauFinition, Validators.required],
          nombrePiece: [data.nombrePiece, Validators.required],
          surfaceSol: [data.surfaceSol, Validators.required],
          typeBien: [data.typeBien, Validators.required],
          typeRenovation: [data.typeRenovation, Validators.required],
          dateDemarrage: [data.dateDemarrage, Validators.required]
        });

        data.justificatif.forEach(j => {
          this.updateFile(j);
        });
        this.isLoadingResults=false;
      },(error: HttpErrorResponse)=>{
        this.isLoadingResults=false;
        this.idR=null;
        this.formBudget = this.fb.group({
          aeffectuerPlanFinance: ['', Validators.required],
          budgetTravaux: ['', Validators.required],
          nomRenovation: ['', Validators.required],
          avoirFinancement: ['', Validators.required],
          faisAppelFianacePublic: ['', Validators.required]
        });
        this.formRenovation = this.fb.group({
          adressChantier: ['', Validators.required],
          gammeAppareillages: ['', Validators.required],
          modificationPrevu: ['', Validators.required],
          niveauFinition: ['', Validators.required],
          nombrePiece: ['', Validators.required],
          surfaceSol: ['', Validators.required],
          typeBien: ['', Validators.required],
          typeRenovation: ['', Validators.required],
          dateDemarrage: ['', Validators.required]
        });
        this.formulaire = this.fb.group({
          pieceComplementaires: new FormArray([]),
          justificatif:this.fb.group({
            id:[null],
            appellation: [null, [Validators.required,Validators.maxLength(150),Validators.minLength(2)]],
            urlFile: [null, Validators.compose([Validators.required])],
            remarque: [null],
            dateCreaction: [null],
            dateUpdate:[null],
            valide: [null],
          }),
        });
      })
    }
    this.formBudget = this.fb.group({
      aeffectuerPlanFinance: ['', Validators.required],
      budgetTravaux: ['', Validators.required],
      nomRenovation: ['', Validators.required],
      avoirFinancement: ['', Validators.required],
      faisAppelFianacePublic: ['', Validators.required]
    });
    this.formRenovation = this.fb.group({
      adressChantier: ['', Validators.required],
      gammeAppareillages: ['', Validators.required],
      modificationPrevu: ['', Validators.required],
      niveauFinition: ['', Validators.required],
      nombrePiece: ['', Validators.required],
      surfaceSol: ['', Validators.required],
      typeBien: ['', Validators.required],
      typeRenovation: ['', Validators.required],
      dateDemarrage: ['', Validators.required]
    });


   this.formulaire = this.fb.group({
      pieceComplementaires: new FormArray([]),
      justificatif:this.fb.group({
        id:[null],
        appellation: [null, [Validators.required,Validators.maxLength(150),Validators.minLength(2)]],
        urlFile: [null, Validators.compose([Validators.required])],
        remarque: [null],
        dateCreaction: [null],
        dateUpdate:[null],
        valide: [null],
      }),
    });
  }

  createPieceOfficielle(j: Justificatif) {
    if(j!= null){
        return this.fb.group({
          id:[j.id],
          appellation: [j.appellation, [Validators.required,Validators.maxLength(150),Validators.minLength(2)]],
          urlFile: [j.urlFile, Validators.compose([Validators.required])],
          remarque: [j.remarque],
          dateCreaction: [null],
          dateUpdate:[null],
          valide: [j.valide],
        });
    }
    else{
      return this.fb.group({
        id:[null],
        appellation: [null, [Validators.required,Validators.maxLength(150),Validators.minLength(2)]],
        urlFile: [null, Validators.compose([Validators.required])],
        remarque: [null],
        dateCreaction: [null],
        dateUpdate:[null],
        valide: [null],
      });
    }
  }

  addNewPieceIdentiteInfo() {
    this.getFormPieceComplementaire.insert(0, this.createPieceOfficielle(null));

   }
  updateFile(j: Justificatif){
    this.getFormPieceComplementaire.insert(0, this.createPieceOfficielle(j));
  }

   onSubmit(){
    this.isLoadingResults=true;
    if(this.idR >0){
      const renovation = {
        "idProjetRenovation": this.idR,
        "aeffectuerPlanFinance":this.formBudget.get("aeffectuerPlanFinance").value,
        "budgetTravaux": this.formBudget.get("budgetTravaux").value,
        "nomRenovation": this.formBudget.get("nomRenovation").value,
        "avoirFinancement":this.formBudget.get("avoirFinancement").value,
        "faisAppelFianacePublic":this.formBudget.get("faisAppelFianacePublic").value,
        "adressChantier": this.formRenovation.get("adressChantier").value,
        "gammeAppareillages": this.formRenovation.get("gammeAppareillages").value,
        "modificationPrevu": this.formRenovation.get("modificationPrevu").value,
        "niveauFinition": this.formRenovation.get("niveauFinition").value,
        "nombrePiece": this.formRenovation.get("nombrePiece").value,
        "surfaceSol": this.formRenovation.get("surfaceSol").value,
        "typeBien": this.formRenovation.get("typeBien").value,
        "typeRenovation": this.formRenovation.get("typeRenovation").value,
        "dateDemarrage": this.formRenovation.get("dateDemarrage").value,
        "justificatif": this.getFormPieceComplementaire.value,
        "clientId": this.profiUser.getMenu(),
       }
  
       this.renovation.updateRenovation(this.idR,renovation).subscribe(data=>{
        this.snackBar.openSnackBar("Renovation Modifier avec success", "OK", 3000);
        this.router.navigate(['/renovation']);
       },
       (error: HttpErrorResponse)=>{
            this.snackBar.openSnackBar("il manque des données commes les fichier par exemple", "OK",3000);
       });
    }
    else{
      const renovation = {
        "aeffectuerPlanFinance":this.formBudget.get("aeffectuerPlanFinance").value,
        "budgetTravaux": this.formBudget.get("budgetTravaux").value,
        "nomRenovation": this.formBudget.get("nomRenovation").value,
        "avoirFinancement":this.formBudget.get("avoirFinancement").value,
        "faisAppelFianacePublic":this.formBudget.get("faisAppelFianacePublic").value,
        "adressChantier": this.formRenovation.get("adressChantier").value,
        "gammeAppareillages": this.formRenovation.get("gammeAppareillages").value,
        "modificationPrevu": this.formRenovation.get("modificationPrevu").value,
        "niveauFinition": this.formRenovation.get("niveauFinition").value,
        "nombrePiece": this.formRenovation.get("nombrePiece").value,
        "surfaceSol": this.formRenovation.get("surfaceSol").value,
        "typeBien": this.formRenovation.get("typeBien").value,
        "typeRenovation": this.formRenovation.get("typeRenovation").value,
        "dateDemarrage": this.formRenovation.get("dateDemarrage").value,
        "justificatif": this.getFormPieceComplementaire.value,
        "clientId": this.profiUser.getMenu(),
       }
  
       this.renovation.addRenovation(renovation).subscribe(data=>{
        this.snackBar.openSnackBar("Renovation enregistrer avec success", "OK",3000);
        this.router.navigate(['/renovation']);
       },
       (error: HttpErrorResponse)=>{
            this.snackBar.openSnackBar("il manque des données commes les fichier par exemple", "OK",3000);
       });
    }
   }

   supprimerFile(index){
    
    let pieceOfficielle = this.getFormPieceComplementaire.at(index);
    if (pieceOfficielle.value.id) {
      this.confirm.confirm({
        title:"Confirmation",
        message:`Voulez-vous supprimer cette pièce complémentaire ? `
      }).subscribe(($choix)=> {

        if($choix) {
          //this.isLoadingResults=true;
          this.renovation.deleteFile(this.getFormPieceComplementaire.value[index].id).subscribe(()=>{
            this.getFormPieceComplementaire.removeAt(index);
            //this.isLoadingResults=false;
            this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
          },
          (errorResponseMembre) => {
               // this.isLoadingResults=false;
                this.snackBar.openSnackBar("Element non supprimer ", "OK",3000);
            });
        }

      });
    } else {
      this.getFormPieceComplementaire.removeAt(index);
      this.snackBar.openSnackBar("Element supprimé avec succès", "OK",3000);
    }
   }

}
