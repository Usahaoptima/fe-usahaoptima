/* eslint-disable react/prop-types */
const ProductItem = (props) => {
  const { id, name, price, quantity } = props.product;
  return (
    <>
      <tr>
        <td className="td">{id}</td>
        <td className="td">{name}</td>
        <td className="td">{price}</td>
        <td className="td">{quantity}</td>
        <td>
          <i className="fa-regular fa-pen-to-square edit"></i>
          <i className="fa-regular fa-trash-can delete"></i>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
