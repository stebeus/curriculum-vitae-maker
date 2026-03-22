import { keyId } from '../utils/generators.js';
import { Button, createManyButtons } from './ui/Button.jsx';

function UserActions() {
  const buttons = createManyButtons(
    ['action', 'clear', 'clearForm', 'Clear resume'],
    ['download', 'curriculum.html', 'downloadFile', 'Download'],
  );

  const createButton = ({ dataAttrName, dataAttrValue, handler, children }) => (
    <Button
      key={keyId.next().value}
      dataAttrName={dataAttrName}
      dataAttrValue={dataAttrValue}
      onClick={handler}
    >
      {children}
    </Button>
  );

  return <div className="actions">{buttons.map(createButton)}</div>;
}

export { UserActions };
