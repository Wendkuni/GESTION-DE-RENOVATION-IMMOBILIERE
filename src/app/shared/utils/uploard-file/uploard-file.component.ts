import { Component, forwardRef, Input, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropzoneComponent, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { of, Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Justificatif } from '../../models/Renovation';



export interface PieceOfficielleFormValue {
  id: number;
  appellation:string;
	typeFichier:string;
	extension:string;
	justificatifUrl:string;
  token: string;
  dateCreaction : Date;
  isValide: boolean;
}

@Component({
  selector: 'app-uploard-file',
  templateUrl: './uploard-file.component.html',
  styleUrls: ['./uploard-file.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UploardFileComponent), multi: true }],
  encapsulation: ViewEncapsulation.None,
})
export class UploardFileComponent implements OnInit {

  URL=environment.BACK_END.FILEUPLOAD+'download/';
  
  @Input() 
  touched: boolean;
 
  @Input("formGroup") 
  pieceOfficielle: FormGroup;

  @Input() 
  contribuableType: string;

  @ViewChild(DropzoneComponent, { static: false }) 
  dropzoneComponentRef?: DropzoneComponent;
  
  private _onDestroy = new Subject<void>();
  
  onChange: any = (_: PieceOfficielleFormValue) => {};

  onTouch: any = () => {};
 
  private subscription = new Subscription();

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

  get appellation() {return this.pieceOfficielle.get("appellation");}
  get urlFile() {return this.pieceOfficielle.get("urlFile");}
  get remarque() { return this.pieceOfficielle.get("remarque");}
  get dateCreaction() {return this.pieceOfficielle.get("dateCreaction");}
  get dateUpdate() { return this.pieceOfficielle.get('dateUpdate'); }
  get valide() {return this.pieceOfficielle.get("valide")};


  constructor(
    private fb: FormBuilder,
    private mediaObserver: MediaObserver,
    ) {}
    urlfile;
  public documentPiece = '';
  public activeMediaQuery = '';
  ngAfterContentInit() {
    this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `${change.mqAlias}` : 'xl';
    });
  }
  ngOnInit(): void {
    this.subscription.add(
      this.pieceOfficielle.valueChanges.subscribe((value: PieceOfficielleFormValue) => {
        this.onChange(value);
      })
    );
      this.urlfile = this.urlFile.value;
  }

  
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
    this.subscription.unsubscribe();
  }

  public onUploadError(args: any): void {
    this.dropzoneComponentRef.directiveRef.reset();
  }
  public resetDropZone(): void {
    this.dropzoneComponentRef.directiveRef.reset();
    this.urlFile.setValue(null);
  }
  public onUploadSuccess(remoteResponse): void {
    
    this.remarque.setValue(null);
    this.dateCreaction.setValue(new Date());
    this.urlFile.setValue("data:"+remoteResponse[1].contentType+";base64,"+remoteResponse[1].url);
  }
  public onUploadInit(args: any): void {

  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
      this.pieceOfficielle.markAllAsTouched();
    }
  }
  
  writeValue(value: null | PieceOfficielleFormValue): void {
    if (value) {
      this.pieceOfficielle.reset(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: PieceOfficielleFormValue) => {}): void {
    this.onTouch = fn;
  }

}
