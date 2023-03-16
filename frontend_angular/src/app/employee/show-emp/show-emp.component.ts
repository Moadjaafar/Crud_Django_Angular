import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent {
  constructor(private service: SharedDataService) {
  }
  moadaltitle:string=''
  activate:boolean=false
  DepartementList:any=[]
  dep:any
  ngOnInit() {
    this.getDepartementList()
  }
  getDepartementList(){
    this.service.getEmpList().subscribe(data=>{
      this.DepartementList=data;
    })
  }
  addclick(){
    this.dep={
      Employee_Id:0,
      Employee_Name:'',
      Dataofjoin:'',
      Departement:'',
      PhotoFileName:'anonymos.jpg'
    }
    this.moadaltitle='Add Empolyee'
    this.activate=true
  }
  Editclick(item:any){
    this.dep=item
    this.moadaltitle='Edite Employee'
    this.activate=true
  }
  DeleteDep(id:any){
    if(confirm('Are you sure you want to delete this')){
      this.service.DeleteEmployee(id).subscribe(data=>{
        console.log(data)
      })
      
      
    }
    this.getDepartementList()
  }
  closeclick(){
    this.activate=true
    this.getDepartementList()

  }
}
