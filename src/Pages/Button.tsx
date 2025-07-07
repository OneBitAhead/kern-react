

import { KernButton, KernIcon, KernHeading, KernText } from '../components/kern';


function Elements() {




  return (
    <>

      <KernHeading>Button</KernHeading>
      <KernText>...</KernText>


      <KernButton text="Abschicken" variant="primary" icon="arrow-forward"></KernButton>&nbsp;
      <KernButton text="Abbrechen" variant="secondary" iconPosition="right" icon="arrow-forward"></KernButton>&nbsp;
      <KernButton text="Tertiary" variant="tertiary" iconPosition="right" icon="arrow-forward"></KernButton>&nbsp;

    </>
  );

}

export default Elements;