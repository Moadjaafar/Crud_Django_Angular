import { Component,OnInit,Input } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent {
  @Input() dep:any
  Departement_Id:number=0
  Departement_Name:string=''
  constructor(private service:SharedDataService){}
  ngOnInit(){
    this.Departement_Id=this.dep.Departement_Id
    this.Departement_Name=this.dep.Departement_Name
  }
  ADDEP(){
    var data={
      Departement_Id:this.Departement_Id,
      Departement_Name:this.Departement_Name
    }
    this.service.AddDepartement(data).subscribe(dataa=>{
      console.log(dataa)
      alert(dataa.toString)
    })
  }
  UPDATEDEP(){
    var data={
      Departement_Id:this.Departement_Id,
      Departement_Name:this.Departement_Name
    }
    this.service.UpdateDepartement(data).subscribe(dataa=>{
      console.log(dataa)
      alert(dataa.toString)
    })
  }
}
