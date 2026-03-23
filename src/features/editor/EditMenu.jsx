import { Button, createButtonData } from '../../components/Button.jsx';

function EditMenu() {
  const buttons = createButtonData(
    ['action', 'clear', 'clearResume', 'Clear resume'],
    ['download', 'resume.pdf', 'downloadResume', 'Download'],
  );

  const createButton = ({
    key,
    dataAttrName,
    attrValue,
    handler,
    children,
  }) => (
    <Button
      key={key}
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
