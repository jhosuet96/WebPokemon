import React from "react";
import { primerMayuscula } from "../helper/helper";

export const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="header-main-pokemon">
            <div className="container-img-pokemon">
              {data.sprites.other.dream_world.front_default != null && (
                <img
                  src={data.sprites.other.dream_world.front_default}
                  alt={`pokemon ${data.name}`}
                />
              )}
              {data.sprites.other.dream_world.front_default == null && (
                <img
                  src={data.sprites.front_default}
                  alt={`pokemon ${data.name}`}
                />
              )}
            </div>

            <div className="container-info-pokemon">
              <h1>
                <span className="number-pokemon">#{data.id}</span>{" "}
                {primerMayuscula(data.name)}
              </h1>
              <div className="card-types info-pokemon-type">
                {data.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="info-pokemon">
                <div className="group-info">
                  <p>Altura</p>
                  <span>{data.height}</span>
                </div>
                <div className="group-info" style={{ marginLeft: "4rem" }}>
                  <p>Peso</p>
                  <span>{data.weight}KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-stats">
            <h1 style={{ marginBottom: "20px" }}>Estadísticas</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <div className="progress">
                  {data.stats[0].base_stat > 100 && (
                    <div className="progress-bar" style={{ width: "100%" }}>
                      <span className="progress-bar-text">
                        {data.stats[0].base_stat}%
                      </span>
                    </div>
                  )}
                  {data.stats[0].base_stat <= 100 && (
                    <div
                      className="progress-bar"
                      style={{ width: `${data.stats[0].base_stat}%` }}
                    >
                      <span className="progress-bar-text">
                        {data.stats[0].base_stat}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress">
                  {data.stats[1].base_stat > 100 && (
                    <div className="progress-bar" style={{ width: "100%" }}>
                      <span className="progress-bar-text">
                        {data.stats[1].base_stat}%
                      </span>
                    </div>
                  )}
                  {data.stats[1].base_stat <= 100 && (
                    <div
                      className="progress-bar"
                      style={{ width: `${data.stats[1].base_stat}%` }}
                    >
                      <span className="progress-bar-text">
                        {data.stats[1].base_stat}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress">
                  {data.stats[2].base_stat > 100 && (
                    <div className="progress-bar" style={{ width: "100%" }}>
                      <span className="progress-bar-text">
                        {data.stats[2].base_stat}%
                      </span>
                    </div>
                  )}
                  {data.stats[2].base_stat <= 100 && (
                    <div
                      className="progress-bar"
                      style={{ width: `${data.stats[2].base_stat}%` }}
                    >
                      <span className="progress-bar-text">
                        {data.stats[2].base_stat}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress">
                  {data.stats[3].base_stat > 100 && (
                    <div className="progress-bar" style={{ width: "100%" }}>
                      <span className="progress-bar-text">
                        {data.stats[3].base_stat}%
                      </span>
                    </div>
                  )}
                  {data.stats[3].base_stat <= 100 && (
                    <div
                      className="progress-bar"
                      style={{ width: `${data.stats[3].base_stat}%` }}
                    >
                      <span className="progress-bar-text">
                        {data.stats[3].base_stat}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress">
                  {data.stats[4].base_stat > 100 && (
                    <div className="progress-bar" style={{ width: "100%" }}>
                      <span className="progress-bar-text">
                        {data.stats[4].base_stat}%
                      </span>
                    </div>
                  )}
                  {data.stats[4].base_stat <= 100 && (
                    <div
                      className="progress-bar"
                      style={{ width: `${data.stats[4].base_stat}%` }}
                    >
                      <span className="progress-bar-text">
                        {data.stats[4].base_stat}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress">
                  {data.stats[5].base_stat > 100 && (
                    <div className="progress-bar" style={{ width: "100%" }}>
                      <span className="progress-bar-text">
                        {data.stats[5].base_stat}%
                      </span>
                    </div>
                  )}
                  {data.stats[5].base_stat <= 100 && (
                    <div
                      className="progress-bar"
                      style={{ width: `${data.stats[5].base_stat}%` }}
                    >
                      <span className="progress-bar-text">
                        {data.stats[5].base_stat}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
