import { Helmet } from 'react-helmet-async';

import { MotherView } from 'src/sections/mother/view';

// ----------------------------------------------------------------------

export default function MotherPage() {
  return (
    <>
      <Helmet>
        <title> Mother Index Register | Ecap+ PMP </title>
      </Helmet>

      <MotherView />
    </>
  );
}
