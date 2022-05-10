import React, { useState } from "react";
function PetItem({ pet, handleAdopt }) {
  const [change, setChange] = useState(pet.image);
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={change} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button
            onClick={() => setChange(pet.image2)}
            type="button"
            className="btn btn-info"
          >
            Pet
          </button>
          <button
            onClick={() => handleAdopt(pet.id)}
            type="button"
            class="btn btn-info  m-2"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
