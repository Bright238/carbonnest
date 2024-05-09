import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

import Scrollbar from "src/components/scrollbar";

import { emptyRows } from 'src/sections/user/utils';
import UserTableHead from 'src/sections/user/user-table-head';
import TableEmptyRows from "src/sections/user/table-empty-rows";

export default function MotherPage() {

    return(
<Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Limulunga District Mother Index Register</Typography>
      </Stack>

      <Card sx={{ width: '100%', minHeight: '500px', marginBottom: '20px' }}>
        {/* <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        /> */}

        <Scrollbar>
          
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 1000 }}>
              <UserTableHead
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'username', label: 'Username' },
                  { id: 'street', label: 'Street' },
                  { id: 'city', label: 'City' },
                  { id: 'phone', label: 'Phone' },
                  { id: 'caseworker', label: 'Case Worker' },
                 
                  // { id: 'isVerified', label: 'Verified', align: 'center' },
                  // { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              />
              
              <TableBody>

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(5)}
                />
                

              </TableBody>
            </Table>
          </TableContainer>
          <Stack sx={{ height: '100%' }} alignItems="center" justifyContent="center">
            <Typography variant="h4" align="center" sx={{ paddingTop: '80px' }}>No Data Available to Display</Typography>
          </Stack>
        </Scrollbar>
      </Card>
    </Container>
    );
    
    
}