import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RowClassParams } from 'ag-grid-community';
import { useContext } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { ListContext } from '../providers/ListProvider';
import { getDateFromTimeStamp } from '../utils/helpers';
import { Event } from '../types';
import { ROW_COLOR, PRIMARY_COLOR, WHITE_COLOR } from '../constants/Colors';

export default function Table() {
  const { data } = useContext(ListContext);
  const rowData = data?.['events'].map((elm: Event) => {
    return {
      date: getDateFromTimeStamp(parseInt(elm.date, 10)),
      int: elm.int,
      id: elm.id,
    };
  });

  const getRowStyle = (params: RowClassParams) => {
    const { rowIndex } = params.node;
    if (rowIndex % 2 === 0) {
      return { background: ROW_COLOR, color: 'white' };
    }
    return { background: WHITE_COLOR, color: PRIMARY_COLOR };
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        className="ag-theme-alpine"
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: PRIMARY_COLOR,
          color: PRIMARY_COLOR,
        }}
      >
        <AgGridReact
          rowData={rowData}
          rowStyle={rowStyle}
          getRowStyle={getRowStyle}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            filter: false,
            resizable: false,
            cellStyle: { backGroundColor: 'yellow' },
          }}
        >
          <AgGridColumn field="date"></AgGridColumn>
          <AgGridColumn field="int"></AgGridColumn>
          <AgGridColumn field="id"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}

const rowStyle = { width: '100%' };
