import { Helmet } from 'react-helmet-async';

import { VcaView } from 'src/sections/vca/view';

// ----------------------------------------------------------------------

export default function VcaPage() {
  return (
    <>
      <Helmet>
        <title> VCA Register | Ecap+ PMP </title>
      </Helmet>

      <VcaView />
    </>
  );
}
