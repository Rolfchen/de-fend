import { useMemo } from 'react';
import { Column, useTable } from 'react-table';

interface TransactionDataType {
  date: string;
  description: string;
  amount: number;
}

interface ReactTableProps<
  TData extends Record<string, any> = Record<string, any>
> {
  data: TData[];
  columns: Column<TData>[];
}

/**
 * Table using React-table. The type of the "data" will
 * determine the required keys in the columns. This
 * component uses generics.
 * @param props
 * @param props.columns - Array of column header information
 * @param props.data - The array of data to display.
 */
const ReactTable = <TData extends Record<string, any> = Record<string, any>>({
  data,
  columns,
}: ReactTableProps<TData>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReactTable;
