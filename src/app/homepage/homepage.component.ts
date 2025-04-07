import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  feeling: string = '';

  submitFeeling(){
    this.feeling === "Very Happy" ? alert("Kirby is very happy to hear! Keep smiling and being a light!") 
    : this.feeling === "Happy" ? alert("Kirby is glad that you're happy!") 
    : this.feeling === "Neutral" ? alert("That's okay!Kirby thinks it's normal to have ups and downs") 
    : alert("I'm sorry to hear that. Is there anything that Kirby can do to help?")
  }
}
