import { generateId } from '../utils/generators.js';
import { createManyFieldsets, Fieldset } from './Fieldset.jsx';

function Form() {
  const personalDetails = [
    'Personal details',
    ['Full name, full-name', 'text'],
    ['Email, email', 'email'],
    ['Phone number, phone-number', 'tel'],
  ];

  const education = [
    'Education',
    ['School', 'school', 'text'],
    ['Degree', 'degree', 'text'],
    ['Start date', 'study-start-date', 'date'],
    ['End date', 'study-end-date', 'date'],
  ];

  const experience = [
    'Experience',
    ['Company name', 'company-name', 'text'],
    ['Position title', 'position-title', 'text'],
    ['Main responsibilities', 'main-responsibilities', 'text'],
    ['Start date', 'job-start-date', 'date'],
    ['End date', 'job-end-date', 'date'],
  ];

  const fieldsets = createManyFieldsets(personalDetails, education, experience);

  const createFieldset = ({ legend, fields }) => {
    const id = generateId();
    return <Fieldset key={id.next().value} legend={legend} fields={fields} />;
  };

  return <form>{fieldsets.map(createFieldset)}</form>;
}

export { Form };
