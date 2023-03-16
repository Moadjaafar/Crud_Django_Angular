import { Component,OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent {

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
    this.service.getDepList().subscribe(data=>{
      this.DepartementList=data;
    })
  }
  addclick(){
    this.dep={
      Departement_Id:0,
      Departement_Name:''
    }
    this.moadaltitle='Add Departement'
    this.activate=true
  }
  Editclick(item:any){
    this.dep=item
    this.moadaltitle='Edite Departement'
    this.activate=true
  }
  DeleteDep(id:any){
    if(confirm('Are you sure you want to delete this')){
      this.service.DeleteDepartement(id).subscribe(data=>{
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
