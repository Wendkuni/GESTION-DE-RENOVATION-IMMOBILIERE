import { TokenStorageService } from './../../../login/_helper/localStorage';
import { DemarrageProjetRenovationComponent } from './../../demarrage-projet-renovation.component';
import { DossierProjet } from './../dossier-fichier.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { DropzoneComponent, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Utilisateur } from 'src/app/shared/models/utilisateeur';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-or-update-file',
  templateUrl: './add-or-update-file.component.html',
  styleUrls: ['./add-or-update-file.component.scss']
})
export class AddOrUpdateFileComponent implements OnInit {

  fileForm : FormGroup;
  user: Utilisateur;
  isLoadingResults = false;
  get link(){return this.fileForm.get("link");}
  get nomFile(){return this.fileForm.get("nomFile");}
  dropzoneComponentRef?: DropzoneComponent;
  constructor(public dialogRef: MatDialogRef<AddOrUpdateFileComponent>,private snackBar: SnackBarService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private tokenService: TokenStorageService,
    private fb: FormBuilder, private dossierService : DossierProjet) { 
    
  }
  ngOnInit(): void {
    this.init();
  }

  init()
  {
    if(this.data.file)
    {
      console.log(this.data.file);
      this.fileForm = this.fb.group({
        id: this.data.file.id,
        nomFile:this.data.file.nomFile,
        link: this.data.file.link,
        description:this.data.file.description,
        appellation: [this.data.file.appellation],
        dossier: [this.data.dossier],
        projetRenovation : DemarrageProjetRenovationComponent.projetRenovation,
        utilisateur: this.user,
      })
    }
    else{
      this.fileForm = this.fb.group({
        nomFile:[null, Validators.required],
        link: [null, Validators.required],
        description:null,
        appellation: [null],
        dossier: [this.data.dossier],
        projetRenovation : DemarrageProjetRenovationComponent.projetRenovation,
        utilisateur: this.user,
      })
    }
  }

  public onUploadError(args: any): void {
    this.dropzoneComponentRef.directiveRef.reset();
  }
  public resetDropZone(): void {
    this.dropzoneComponentRef.directiveRef.reset();
    this.link.setValue(null);
    this.nomFile.setValue(null);
  }
  public onUploadSuccess(remoteResponse): void {
    console.log(remoteResponse)
    this.link.setValue("data:"+remoteResponse[1].contentType+";base64,"+remoteResponse[1].url);
    this.nomFile.setValue(remoteResponse[1].fileName);
  }
  public onUploadInit(args: any): void {

  }

  onSubmit(){
    console.log(this.fileForm.value)
    this.isLoadingResults = true;
    if(this.data.file){
      console.log(this.fileForm.value)
        this.dossierService.updateFile(this.data.file.id, this.fileForm.value).subscribe( (data)=>{
          this.isLoadingResults=false;
          this.dialogRef.close();
          this.snackBar.openSnackBar("fichier modifier  avec succès", "OK",3000);
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.dialogRef.close();
                this.snackBar.openSnackBar("fichier modifier  avec succès", "OK",3000);
              }
              else{
                this.isLoadingResults = false;
                this.snackBar.openSnackBar("fichier non modifier car fichier existe deja", "OK",5000);
              }
              
              
          });
      }
      else{
        console.log("***********hello************")
        this.dossierService.addFile(this.fileForm.value).subscribe( (data)=>{
          //console.log(data);
          this.isLoadingResults=false;
        },
        (error: HttpErrorResponse) => {
              this.isLoadingResults=false;
              if(error.status<300)
              {
                this.dialogRef.close();
                this.snackBar.openSnackBar("fichier Ajouter  avec succès", "OK",3000);
              }
              else{
                this.isLoadingResults = false;
                this.snackBar.openSnackBar("fichier non ajouter car fichier existe deja", "OK",5000);
              }
          });
      }
  }


  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    resizeWidth :300,
    resizeHeight :300,
    thumbnailHeight: 300,
    thumbnailWidth: 300,
    acceptedFiles: 'image/*,application/pdf',
    errorReset: null,
    cancelReset: null
  };
}
