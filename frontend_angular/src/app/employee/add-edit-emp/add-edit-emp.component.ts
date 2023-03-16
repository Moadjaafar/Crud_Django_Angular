import { Component,Input } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent {
  @Input() dep:any
  Employee_Id:number=0
  Employee_Name:string=''
  Dataofjoin:string=''
  Departement:string=''
  PhotoFileName:string='anonymos.jpg'
  PhotoFilePath:string=''

  constructor(private service:SharedDataService){}

  ngOnInit(){
    this.Employee_Id=this.dep.Employee_Id
    this.Employee_Name=this.dep.Employee_Name
    this.Dataofjoin=this.dep.Dataofjoin
    this.Departement=this.dep.Departement
    this.PhotoFileName=this.dep.PhotoFileName
    this.PhotoFilePath=this.service.PhotoUrl+this.dep.PhotoFileName
  }
  ADDEP(){
    var data={
      Employee_Id:this.Employee_Id,
      Employee_Name:this.Employee_Name,
      Dataofjoin:this.Dataofjoin,
      Departement:this.Departement,
      PhotoFileName:this.PhotoFileName
    }
    console.log(data)
    this.service.AddEmployee(data).subscribe(dataa=>{
      console.log(dataa)
    })
  }
  UPDATEDEP(){
    var data={
      Employee_Id:this.Employee_Id,
      Employee_Name:this.Employee_Name,
      Dataofjoin:this.Dataofjoin,
      Departement:this.Departement,
      PhotoFileName:this.PhotoFileName
    }
    this.service.UpdateEmployee(data).subscribe(dataa=>{
      console.log(dataa)
      alert(dataa.toString())
    })
  }
  Uploadphoto(event:any){
    var file=event.target.files[0]
    const formdata:FormData=new FormData
    formdata.append('uploadedFile',file,file.name)
    this.service.UploadPhoto(formdata).subscribe(data =>{
    this.PhotoFileName=data.toString()
    console.log('moad')
    this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName
    })
  }
}
