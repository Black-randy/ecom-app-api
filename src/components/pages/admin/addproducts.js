import React, { useState } from "react";
import { Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [showToast, setShowToast] = useState({ type: "", message: "" });

  const handleAddProduct = () => {
    const product = {
      id: Date.now().toString(),
      name: productName,
      price: productPrice,
      description: productDescription,
      url: productUrl,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    };

    fetch('/api/post_product', requestOptions)
      .then(response => {
        if (response.ok) {
          setShowToast({ type: "success", message: "Product added successfully!" });
          resetForm();
        } else {
          setShowToast({ type: "error", message: "Failed to add product." });
        }
      })
      .catch(error => {
        setShowToast({ type: "error", message: "An error occurred. Please try again." });
        console.error('Error posting product:', error);
      });
  };

  const resetForm = () => {
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductUrl("");
  };

  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[10px]">
      <div className="relative mx-auto max-w-lg rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-8">Add New Product</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-7">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-2 dark:bg-dark-3 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-dark-7">
              Price
            </label>
            <input
              id="price"
              type="text"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter product price"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-2 dark:bg-dark-3 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-dark-7">
              Description
            </label>
            <textarea
              id="description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter product description"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-2 dark:bg-dark-3 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-dark-7">
              Image URL
            </label>
            <input
              id="url"
              type="text"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder="Enter image URL"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-2 dark:bg-dark-3 dark:text-white"
            />
          </div>
          <div className="mt-8">
            <button
              type="button"
              onClick={handleAddProduct}
              className="w-full px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-lg"
            >
              Add Product #
            </button>
          </div>
        </form>

        
      </div>
      {showToast.type && (
          <div className="absolute top-4 right-4">
            <Toast>
              <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${showToast.type === "success" ? "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" : "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200"}`}>
                {showToast.type === "success" ? <HiCheck className="h-5 w-5" /> : <HiX className="h-5 w-5" />}
              </div>
              <div className="ml-3 text-sm font-normal">
                {showToast.message}
              </div>
              <Toast.Toggle onClick={() => setShowToast({ type: "", message: "" })} />
            </Toast>
          </div>
        )}
    </section>
    
  );
}

export default AddProduct;
