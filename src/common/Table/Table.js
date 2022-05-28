import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import TableBody from "./TableBody";
import TableHeaderCell from "./TableHeaderCell";

const defaultProps = {
  className: "",
  id: "",
};

const propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  id: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
const Table = ({ className, columns, id, rows }) => (
  <table
    className={classNames({
      table: true,
      [className]: className
    })}
    id={id}
  >
    <thead>
      <tr className="table-head">
        {columns.map((column, index) => (
          <TableHeaderCell column={column} key={column.key} index={index} />
        ))}
      </tr>
    </thead>
    <TableBody columns={columns} rows={rows} />
  </table>
);

Table.defaultProps = defaultProps;
Table.propTypes = propTypes;

export default Table;
