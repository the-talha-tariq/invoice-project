import React from "react";

const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-3">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetails;
