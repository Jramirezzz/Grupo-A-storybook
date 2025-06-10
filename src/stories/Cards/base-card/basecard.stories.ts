import { Meta, StoryObj } from '@storybook/angular';
import {CreateMeasurementCardComponent } from '../../../app/components/cards/base-card/basecard.component';

// 👇 Importar manualmente todos los componentes standalone usados dentro
import { HeaderMomentosComponent } from '../../../app/components/header/header-momentos/header-momentos.component';
import { InputComponent } from '../../../app/components/input/input.component';
import { CheckboxTextComponent } from '../../../app/components/Checkbox/CheckboxText/CheckboxText.component';
import { ButtonComponent } from '../../../app/components/button/button.component';

const meta: Meta<CreateMeasurementCardComponent> = {
  title: 'Cards/CreateMeasurementCard',
  component: CreateMeasurementCardComponent,
  tags: ['autodocs'],
  decorators: [
    (story: any) => ({
      props: story,
      template: `<app-create-measurement-card></app-create-measurement-card>`,
      moduleMetadata: {
        imports: [
          CreateMeasurementCardComponent,
          HeaderMomentosComponent,
          InputComponent,
          CheckboxTextComponent,
          ButtonComponent
        ]
      }
    })
  ]
};

export default meta;
type Story = StoryObj<CreateMeasurementCardComponent>;

export const Default: Story = {
  args: {}
};
