import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  amount,
  setAmount,
  price,
  setPrice,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const calculateAmount = (amount) => {
    setAmount(price * quantity);
    return amount;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !quantity || !price) {
      alert("Please add all Inputs");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      setDescription("");
      setQuantity("");
      setAmount("");
      setPrice("");
      setList([...list, newItems]);
    }
  };

  //Calculate Total amounts
  let rows = document.querySelectorAll(".amount");
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].className === "amount") {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
      setTotal(sum);
    }
  }
  //Edit Function
  const EditRow = (id) => {
    const editRow = list.find((row) => row.id === id);
    setIsEditing(true);
    setDescription(editRow.description);
    setQuantity(editRow.quantity);
    setPrice(editRow.price);
    deleteRow(id);
  };

  //Delete Function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id != id));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10 md:mt-6">
          <div className="flex flex-col">
            <label htmlFor="quantity">Enter Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Enter Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Enter Amount</label>
            <p>{calculateAmount(amount)}</p>
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 mt-5 bg-blue-500 text-white font-bold py-2 px-5 rounded shadow
        border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500
        transition-all duration-300"
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>
      <table width="100%" className="mb-10">
        <thead className="bg-gray-200 p-1">
          <tr>
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => EditRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
        {list.length > 0 ? (
          <tfoot className="footer border-t-2 border-b-2 border-gray-300 pt-5">
            <tr>
              <td className="font-bold">Total</td>
              <td></td>
              <td></td>
              <td className="font-bold">{total}</td>
            </tr>
          </tfoot>
        ) : (
          ""
        )}
      </table>
    </>
  );
};

export default TableForm;
