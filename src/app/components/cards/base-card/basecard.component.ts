import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMomentosComponent } from '../../header/header-momentos/header-momentos.component';
import { InputComponent} from '../../input/input.component';
import {CheckboxTextComponent} from '../../Checkbox/CheckboxText/CheckboxText.component';
import {ButtonComponent} from '../../button/button.component' 

@Component({
  selector: 'app-create-measurement-card',
  standalone: true,
  imports: [CommonModule, HeaderMomentosComponent, InputComponent, CheckboxTextComponent,ButtonComponent],
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.scss']
})
export class CreateMeasurementCardComponent {
    name = '';
    description = '';
    isMandatory = true;

    handleCreate() {
    console.log('Crear medición', {
      name: this.name,
      description: this.description,
      isMandatory: this.isMandatory
    });
  }
  // lógica interna
}
