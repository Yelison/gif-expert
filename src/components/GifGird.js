import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGird = ({ category }) => {
  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3> {category} </h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid animate__animated animate__pulse">
        {images.map((img) => (
            <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGird;
