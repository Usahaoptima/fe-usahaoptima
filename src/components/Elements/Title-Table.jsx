import React from "react";

function TitleTable(props) {
  const { name } = props;

  return (
    <div className="container d-flex justify-content-start my-3 p-3 title-container">
      <h1 className="title-table ">{name}</h1>
    </div>
  );
}

export default TitleTable;
