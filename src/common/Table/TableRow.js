import PropTypes from "prop-types";
import classNames from "classnames";
import React, { Component, Fragment } from "react";

const defaultProps = {
  className: ""
};

const propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  row: PropTypes.object.isRequired
};

class TableRow extends Component {
  render() {
    const { className, columns, row, index } = this.props;
    return (
      <Fragment>
        <tr
          className={classNames({
            "table-row": true,
            "table__cell--body": true,
            [className]: className
          })}
        >
          {columns &&
            columns.map(column => (
              <td
                className={classNames({
                  table__cell: true,
                  "table__cell--body": true,
                })}
                key={column.key}
              >
                {column.renderCell ? column.renderCell(row) : column.value(row, index)}
              </td>
            ))}
        </tr>
      </Fragment>
    );
  }
}

TableRow.defaultProps = defaultProps;
TableRow.propTypes = propTypes;

export default TableRow;
