import petsdata from "../petsData";
import PetItem from "./PetItem";
import React, { useState } from "react";

function PetsList() {
  const [pets, setPets] = useState(petsdata);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const handleAdopt = (petId) =>
    setPets(pets.filter((pet) => pet.id !== petId));

  const petList = pets
    .filter(
      (pet) =>
        pet.type.includes(type) &&
        pet.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select
                onChange={(event) => setType(event.target.value)}
                className="form-select"
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
