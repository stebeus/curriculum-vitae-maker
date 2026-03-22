import { keyId } from '../utils/generators.js';
import { createManyFieldsets, Fieldset } from './Fieldset.jsx';

function Form() {
  const personalDetails = [
    'Personal details',
    ['Full name', 'full-name', 'text'],
    ['Email', 'email', 'email'],
    ['Phone number', 'phone', 'tel'],
  ];

  const education = [
    'Education',
    ['School', 'school', 'text'],
    ['Degree', 'degree', 'text'],
    ['Start date', 'study-start', 'date'],
    ['End date', 'study-end', 'date'],
  ];

  const experience = [
    'Experience',
    ['Company name', 'company', 'text'],
    ['Position title', 'position', 'text'],
    ['Main responsibilities', 'responsibilities', 'text'],
    ['Start date', 'job-start', 'date'],
    ['End date', 'job-end', 'date'],
  ];

  const fieldsets = createManyFieldsets(personalDetails, education, experience);

  const createFieldset = ({ legend, fields }) => (
    <Fieldset key={keyId.next().value} legend={legend} fields={fields} />
  );

  return <form>{fieldsets.map(createFieldset)}</form>;
}

export { Form };
