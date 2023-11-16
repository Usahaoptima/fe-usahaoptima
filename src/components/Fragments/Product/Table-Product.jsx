/* eslint-disable react/prop-types */
const TableProduct = (props) => {
  const { tableName } = props;
  return (
    <>
      <th scope="col" className="th">
        {tableName}
      </th>
    </>
  );
};

export default TableProduct;
