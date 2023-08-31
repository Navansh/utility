import { SelectComponent } from './select.component';

export const MultiSelect = (props) => {
  return <SelectComponent multiple={true} {...props} />;
};
