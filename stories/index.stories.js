import "../src/index.ts";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => '<studs-radio></studs-radio>';

export const Default = () => `
  <studs-radio name="radio" value="option1">Option 1</studs-radio>
`;

export const Checked = () => `
  <studs-radio name="radio" value="option2" checked>Option 2</studs-radio>
`;

export const Disabled = () => `
  <studs-radio name="radio" value="option3" disabled>Option 3</studs-radio>
`;

export const RadioGroup = () => `
  <studs-radio name="group" value="option1">Group Option 1</studs-radio>
  <studs-radio name="group" value="option2">Group Option 2</studs-radio>
  <studs-radio name="group" value="option3">Group Option 3</studs-radio>
`;