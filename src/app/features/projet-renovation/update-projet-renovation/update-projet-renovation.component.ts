import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DropzoneComponent, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Renovation } from 'src/app/shared/models/Renovation';
import { ProjetRenauvationService } from '../projet-renovation.service';
import { ClientRenovation } from '../../renovations/client-renovation';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfirmService } from 'src/app/shared/utils/app-confirm/app-confirm.service';
import { SnackBarService } from 'src/app/shared/services/SnackBar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-projet-renovation',
  templateUrl: './update-projet-renovation.component.html',
  styleUrls: ['./update-projet-renovation.component.scss']
})
export class UpdateProjetRenovationComponent implements OnInit {
  isLoadingResults = true;
  projetRenovation : FormGroup;
  listeRenovation: Renovation[];
  img : string ='';
  id = null

  dropzoneComponentRef?: DropzoneComponent;

  get photo(){return this.projetRenovation.get('photo')}
  
  URLpage=environment.BACK_END.FILEUPLOAD+'download/';

  constructor(private fb : FormBuilder, private projetService: ProjetRenauvationService,
    private route: ActivatedRoute,
    private confirm: AppConfirmService,
    private snackBar:SnackBarService,
    private router: Router) { 
      this.id = this.route.snapshot.params.id;
    }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.id = parseInt(this.id);
    if(this.id >0)
    {
      this.projetService.getProjetById(this.id).subscribe((projet)=>{
        this.projetService.getAllRenovation().subscribe((data)=>{
          this.listeRenovation = data;
          this.isLoadingResults = false
        })
        this.img = projet.photo;
        this.projetRenovation = this.fb.group({
          id:projet.id,
          budget: [projet.budget, Validators.required] ,
          dateDemarrage: [projet.dateDemarrage, Validators.required],
          dateFinission: [projet.dateFinission, Validators.required],
          renovation :[projet.renovation, Validators.required],
          photo:[projet.photo, Validators.required]
        })
      },
      (error: HttpErrorResponse) =>{
        this.id = null;
        this.projetService.getAllRenovation().subscribe((data)=>{
          this.listeRenovation = data;
          this.isLoadingResults = false
        })
        this.projetRenovation = this.fb.group({
          id:null,
          budget: [null, Validators.required] ,
          dateDemarrage: [null, Validators.required],
          dateFinission: [null, Validators.required],
          renovation :[null, Validators.required],
          photo:[null, Validators.required]
        })
      })
    }
    else{
      this.projetService.getAllRenovation().subscribe((data)=>{
        this.listeRenovation = data;
        this.isLoadingResults = false
      })
      this.projetRenovation = this.fb.group({
        id:null,
        budget: [null, Validators.required] ,
        dateDemarrage: [null, Validators.required],
        dateFinission: [null, Validators.required],
        renovation :[null, Validators.required],
        photo:[null, Validators.required]
      })
    }
  }

  public onUploadError(args: any): void {
    this.dropzoneComponentRef.directiveRef.reset();
  }
  public resetDropZone(): void {
    this.dropzoneComponentRef.directiveRef.reset();
    this.photo.setValue(null);
  }
  public onUploadSuccess(remoteResponse): void {
    this.photo.setValue("data:"+remoteResponse[1].contentType+";base64,"+remoteResponse[1].url);
  }

  public onUploadInit(args: any): void {

  }
  onSubmit()
  {
    if(this.projetRenovation.valid){
      this.isLoadingResults = true;
        if(this.id > 0){
          this.projetService.updateprojet(this.projetRenovation.value, this.id).subscribe((data)=>{

          },(error: HttpErrorResponse)=>{
            if(error.status<300){
              this.snackBar.openSnackBar("Projet modifier avec success","OK",5000);
              this.router.navigate(["/projet-renovation"]);
            }else{
              this.isLoadingResults = false;
              this.snackBar.openSnackBar("Projet non Modifier car la renovation choisis existe deja","OK",5000);
            }
          })
        }
        else{
          this.projetService.addprojet(this.projetRenovation.value).subscribe((data)=>{

          },(error: HttpErrorResponse)=>{
            if(error.status<300){
              this.snackBar.openSnackBar("Projet enregistrer avec success","OK",5000);
              this.router.navigate(["/projet-renovation"]);
            }else{
              this.isLoadingResults = false;
              this.snackBar.openSnackBar("Projet non enregistrer car la renovation choisis existe deja","OK",5000);
            }
          })
        }
    }
    else{
      this.snackBar.openSnackBar("Remplire tous les champs svp","OK",5000);
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
    acceptedFiles: 'image/*',
    errorReset: null,
    cancelReset: null
  };
}
