import PropTypes from "prop-types";
import React, { Component } from "react";

const defaultProps = {};

const propTypes = {
  column: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired
};

class TableHeaderCell extends Component {
  render() {
    const { column } = this.props;
    return (
      <th
        className={`table-header-cell ${column.responsiveClasses}`}
        onClick={this.onClick}
      >
        {column.label}
      </th>
    );
  }
}

TableHeaderCell.defaultProps = defaultProps;
TableHeaderCell.propTypes = propTypes;

export default TableHeaderCell;
