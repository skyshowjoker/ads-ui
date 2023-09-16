import { HttpClient, HttpEvent } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, tap } from 'rxjs';
import { ConfigService } from '../service/config.service';
import { RequestService } from '../service/http-request.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  file: any
  fileList: NzUploadFile[] = []
  @Input() patientId!: number;

  constructor(private req: RequestService,  private http: HttpClient, private msg: NzMessageService, private config: ConfigService) {}
  size: NzDescriptionsSize = 'default';






  beforeUpload = ((file: NzUploadFile): boolean => {
    this.file = file as unknown as File;
    return false;
  })
  handleChange(file: any): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file);
    }
    // this.file = file;
    if (status === 'done') {
      // this.msg.success(`${file.name} file uploaded successfully.`);
      
    
    } else if (status === 'error') {
      // this.msg.error(`${file.name} file upload failed.`);
    }
    // this.submitForm();
  }

  submitForm(): void {
    this.uploadFile(this.file).pipe(
      tap( // Log the result or error
      {
        next: (data) => this.msg.success('上传成功', {nzDuration: 10000}),
        error: (error) => {
          this.msg.error('上传失败', {nzDuration: 10000})
          this.config.handleError(error)
        }
      }
      )
    );
    // .subscribe(
    //   response => {
    //     console.log('Java API response:', response)
    //     this.msg.success('上传成功', {nzDuration: 10000})
    //   },
    //   error => {
    //     console.error('Java API error:', error);
    //     this.msg.error('上传失败', {nzDuration: 10000})
    //   }
    // )
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file)
    formData.append('patientId', this.patientId.toString())
    return this.req.post('/file/upload', formData);
  }
}
