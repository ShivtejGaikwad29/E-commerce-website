import React, { useState } from "react";

const ProductList = () => {
  // Initial items
  const [items, setItems] = useState([
    { id: 1, name: "Pen", price: 10 },
    { id: 2, name: "Pencil", price: 5 },
    { id: 3, name: "Rice", price: 50 },
  ]);

  // State for new item input
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  // Handle input change
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Add new item
  const addItem = () => {
    if (!newItem.name || !newItem.price) return alert("Enter item details");

    const newItemData = {
      id: items.length + 1, // Unique ID
      name: newItem.name,
      price: Number(newItem.price),
    };

    setItems([...items, newItemData]);
    setNewItem({ name: "", price: "" }); // Clear input fields
  };

  // Remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>Shop Items</h2>

      {/* Form to add item */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Item Name"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleChange}
          placeholder="Price"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={addItem} style={{ padding: "5px 10px" }}>
          Add Item
        </button>
      </div>

      {/* Item List */}
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {item.name} - ₹{item.price}
          </span>
          <button
            onClick={() => removeItem(item.id)}
            style={{ background: "red", color: "white", padding: "5px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
