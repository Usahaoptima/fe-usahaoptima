/* eslint-disable react/prop-types */
const LabelForm = (props) => {
  const { name } = props;
  return (
    <label htmlFor="name" className="py-2 label-title">
      {name}
    </label>
  );
};

export default LabelForm;
