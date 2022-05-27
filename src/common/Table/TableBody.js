import PropTypes from "prop-types";
import React from "react";
import TableRow from "./TableRow";

const defaultProps = {};

const propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const TableBody = ({ columns, rows }) => (
  <tbody className="">
    {rows && typeof(rows.map) === "function" ?
      rows.map((row, i) =>(
          <TableRow
            columns={columns}
            key={`table_row_${i + 1}`}
            row={row}
            index={i + 1}
          />
        )
      ) : ''}
  </tbody>
);

TableBody.defaultProps = defaultProps;
TableBody.propTypes = propTypes;

export default TableBody;
