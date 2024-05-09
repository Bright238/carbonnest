import { Helmet } from 'react-helmet-async';

import { HtsView } from 'src/sections/hts/view';

// ----------------------------------------------------------------------

export default function HtsPage() {
  return (
    <>
      <Helmet>
        <title> HTS Register | Ecap+ PMP </title>
      </Helmet>

      <HtsView />
    </>
  );
}
