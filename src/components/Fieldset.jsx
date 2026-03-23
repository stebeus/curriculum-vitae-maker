import { Button } from './ui/Button.jsx';

function Fieldset({ legend, children }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
      <Button label="Save" />
    </fieldset>
  );
}

export { Fieldset };
