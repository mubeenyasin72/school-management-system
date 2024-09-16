interface Column {
  header: string;
  accessor: string;
  className?: string;
}
// Define the props interface
interface TableProps {
  columns: Column[];
  renderRow: (row: any) => React.ReactNode;
  data: any[];
}

const Table = ({ columns, renderRow, data }: TableProps) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
