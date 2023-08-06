import {Component} from '@angular/core';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-inputmat',
  templateUrl: './inputmat.component.html',
  styleUrls: ['./inputmat.component.css'],
  // standalone: true,
  // imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class InputmatComponent {
  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  // }

  submitfun(){
    alert('Form Submitted')
  }
}
