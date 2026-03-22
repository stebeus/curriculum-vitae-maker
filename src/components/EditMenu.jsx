import { getKeyId } from '../utils/generators.js';
import { Button, createButtonData } from './ui/Button.jsx';

function EditMenu() {
  const buttons = createButtonData(
    ['action', 'clear', 'clearResume', 'Clear resume'],
    ['download', 'resume.pdf', 'downloadResume', 'Download'],
  );

  const createButton = ({ dataAttrName, attrValue, handler, children }) => (
    <Button
      key={getKeyId()}
      dataAttrName={dataAttrName}
      attrValue={attrValue}
      handler={handler}
    >
      {children}
    </Button>
  );

  return <div className="edit-menu">{buttons.map(createButton)}</div>;
}

export { EditMenu };
