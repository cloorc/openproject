import { Component } from '@angular/core';

@Component({
  selector: 'spot-docs',
  templateUrl: './spot-docs.component.html',
})
export class SpotDocsComponent {
  indeterminateState = null;
  checkboxValue = null;
  listCheckboxValue = null;
  textFieldValue = 'ngModel value';
  dropModalOpen = false;
  alignment = 'bottom-left';

  toggleValue = null;
  toggleOptions = [
    {value: 1, title: '1'},
    {value: 2, title: '2'}
  ];

  onRemoveChip() {
    alert('Remove chip');
  }

  checkboxValueString() {
    if (this.checkboxValue === null) {
      return 'null (indeterminate)';
    }

    if (this.checkboxValue) {
      return 'true (checked)';
    }

    return 'false (unchecked)';
  }
}
