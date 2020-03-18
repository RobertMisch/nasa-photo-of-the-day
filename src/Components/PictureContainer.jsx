import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function PictureContainer(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=nLxOtcOcxVebIBZxmnTWPVpg5XnfSuk2Ui1z7KUh")
          .then(response => {
            setData(response.data)
            // console.log(response.data.url)
          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, []);

      if(!data){
          return <h3>Loading</h3>
      }

      return (
        //<img src={data.url}/>
          <NasaCard 
          title={data.title}
          date={data.date}
          image={data.url}
          explanation={data.explanation}
          />
        //<p>{console.log(data.url)}</p>
      )
}