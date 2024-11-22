import React, { useEffect, useState } from "react";
import "./result.css";


const result = ({savedTerm, savedPackage}) => {

  const [displayExample, setDisplayExample] = useState(true)
  // const [emptyAntonym, setEmptyAntonym] = useState(false)
  // const [emptySynonym, setEmptySynonym] = useState(false)
  const [exampleArr, setExampleArr] = useState([])

  let emptyAntonym = false
  let emptySynonym = false
  
  return (
    <div className="resultContainer">
      <main className="resultInnerContainer">
          <h2 className="resultHeader">{savedTerm}</h2>

        {savedPackage.map((resultPackage, i) => {
          if(resultPackage.antonyms.length >= 1){
              emptyAntonym = false
          }else{
              emptyAntonym = true
          }
          
          if(resultPackage.synonyms.length >= 1){
              emptySynonym = false
          }else{
              emptySynonym = true
          }

          return(
            <section key={i} className="resultDetailsContainer">
          <div className="resultDeatils">
            <h5 className="resultDetailsSpeech">Part of speech:</h5>
            <p className="resultDetailsParagraph">{resultPackage.partOfSpeech}</p>
          </div>

          <div className="resultDeatils">
            <h5 className="resultDetailsHeader">Definition:</h5>
            <div>
              {resultPackage.definitions.map((resultDefinition, i) => {
                return(
                  <ul className="resultDetailsListContainer" key={i}>
                    <li>
                      {resultDefinition.definition}
                      <p className={resultDefinition.example == undefined ? "resultDetailsListAbsent" : "resultDetailsListPresent"}>e.g {resultDefinition.example}</p>
                    </li>

                  </ul>
                )
              })}
            </div>
          </div>
          
          {!emptyAntonym && (<div className="resultDeatils">
            <h5 className="resultDetailsHeader">Antonyms:</h5>
            <div>
              {resultPackage.antonyms.map((resultAntonym, i) => {
                return(
                  <ul className="resultDetailsAntonymListContainer" key={i}>
                    <li className="resultDetailsAntonymList">{resultAntonym}</li>
                  </ul>
                )
              })}
            </div>
          </div>)}
          
          {!emptySynonym && (<div className="resultDeatils">
            <h5 className="resultDetailsHeader">Synonyms:</h5>
            <div>
              {resultPackage.synonyms.map((resultSynonym, i) => {
                return(
                  <ul className="resultDetailsSynonymListContainer" key={i}>
                    <li className="resultDetailsSynonymList">{resultSynonym}</li>
                  </ul>
                )
              })}
            </div>
          </div>)}
        </section>
          )
        })}
        
      </main>
    </div>
  );
};

export default result;
