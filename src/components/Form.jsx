import { generateId } from '../utils/generators.js';
import { createManyFieldsets, Fieldset } from './Fieldset.jsx';

function Form() {
  const personalDetails = [
    'Personal details',
    ['Full name', 'text'],
    ['Email', 'email'],
    ['Phone number', 'tel'],
  ];

  const education = [
    'Education',
    ['School', 'text'],
    ['Degree', 'text'],
    ['Start date', 'date'],
    ['End date', 'date'],
  ];

  const experience = [
    'Experience',
    ['Company name', 'text'],
    ['Position title', 'text'],
    ['Main responsibilities', 'text'],
    ['Start date', 'date'],
    ['End date', 'date'],
  ];

  const fieldsets = createManyFieldsets(personalDetails, education, experience);

  const createFieldset = ({ legend, fields }) => {
    const id = generateId();
    return <Fieldset key={id.next().value} legend={legend} fields={fields} />;
  };

  return <form>{fieldsets.map(createFieldset)}</form>;
}

export { Form };
