import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

let id = 0;
@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements  ControlValueAccessor {
  id = id++;
  @Input() labelPosition: "top" | "left" | "right" = "top";
  @Input() label:string = "";
  @Input() placeholder:string = "";
  onChange: (value: any) => void = noop;
  onTouch: () => void = noop;
  disabled = false;
  value = '';

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}
