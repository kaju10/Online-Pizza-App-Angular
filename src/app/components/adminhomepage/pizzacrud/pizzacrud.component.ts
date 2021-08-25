import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizzacrud',
  templateUrl: './pizzacrud.component.html',
  styleUrls: ['./pizzacrud.component.css']
})
export class PizzacrudComponent implements OnInit {

 pizza: Pizza = new Pizza(0,"","","","",0,"");
  pizzas : any; 
  closeResult!: string;
  private deleteId!: any;
  id!: number;
  editForm!: FormGroup;

  constructor(
    private service:PizzasService, 
   private modalService: NgbModal,
   private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getPizzas();

    this.editForm = this.fb.group(
      {
        pizzaId : [0],
        pizzaType :[''],
        pizzaName :[''],
        pizzaSize :[''],
        pizzaDescription:[''],
        pizzaCost :[0],
        pizzaImageUrl:['']
      }
    )
  }

  //modal pop-up methods

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //Create -----------------------------------------------------------------
  onSubmit(f: NgForm) {

    this.service.addPizzaService(this.pizza)
       .subscribe((result) => {
         this.ngOnInit(); //reload the table
       });
     this.modalService.dismissAll(); //dismiss the modal
   }

  //Read (All) ---------------------------------------------------------------
  getPizzas(){
    this.service.getAllPizzaService()
    .subscribe(
      response => {
        console.log(response);
        this.pizzas = response;
      }
    );
  }

  //Read (Single)
  public findPizzaById()
 {
  this.service.getPizzaService(this.id)
  .subscribe(
    response => {
      console.log(response);
      this.pizzas = response;
    }
  );
 }

 //Update --------------------------------------------------------------------
 openEdit(targetModal: any, editPizza: Pizza) {
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
  this.editForm.patchValue( {
    pizzaId : editPizza.pizzaId,
    pizzaType : editPizza.pizzaType,
    pizzaName : editPizza.pizzaName,
    pizzaSize : editPizza.pizzaSize,
    pizzaDescription : editPizza.pizzaDescription,
    pizzaCost : editPizza.pizzaCost,
    pizzaImageUrl : editPizza.pizzaImageUrl
  });
 }
 ePizza : any;

 onSave() {
  this.ePizza= this.editForm.value;
 this.service.updatePizzaService(this.editForm.value.pizzaId,this.ePizza)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }

  //Delete ------------------------------------------------------------------------
  openDelete(targetModal: any, delpizza: Pizza) {
    this.deleteId = delpizza.pizzaId;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    this.service.deletePizzaService(this.deleteId)
      .subscribe((results) => {
        this.ngOnInit();
      this.modalService.dismissAll();
        
      });
      
      
  }

}
