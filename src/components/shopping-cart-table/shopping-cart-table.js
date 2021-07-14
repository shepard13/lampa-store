import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className='btn btn-outline-success  btn-sm float-right'
          >
            <i className='bi bi-cart-plus' />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className='btn btn-outline-warning btn-sm float-right'
          >
            <i className='bi bi-cart-dash' />
          </button>
          <button
            onClick={() => onDelete(id)}
            className='btn btn-outline-danger  btn-sm float-right'
          >
            <i className='bi bi-trash' />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className='shopping-cart-table'>
      <table className='table'>
        <caption>Your order</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>ITEM</th>
            <th>COUNT</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>TOTAL:</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`Increase el: ${id}`);
    },
    onDecrease: (id) => {
      console.log(`Decrease el: ${id}`);
    },
    onDelete: (id) => {
      console.log(`Delete el: ${id}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
