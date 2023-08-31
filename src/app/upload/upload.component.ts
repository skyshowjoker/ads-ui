import { HttpClient, HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { RequestService } from '../service/http-request.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  file: any
  fileList: NzUploadFile[] = []


  constructor(private req: RequestService,  private http: HttpClient) {}
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
    this.submitForm();
  }

  submitForm(): void {
    this.uploadFile(this.file).subscribe(
      response => {
        console.log('Java API response:', response);
      },
      error => {
        console.error('Java API error:', error);
      }
    )
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file)
    return this.req.post('/file/upload', formData);
  }
}
