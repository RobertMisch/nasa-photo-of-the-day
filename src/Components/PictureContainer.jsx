import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function PictureContainer(props){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=nLxOtcOcxVebIBZxmnTWPVpg5XnfSuk2Ui1z7KUh&date=${props.date}`)
          .then(response => {
              console.log(response)
            setData(response.data)
            // console.log(response.data.url)
          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, [props.date]);

      if(!data){
          return <h3>Loading . . .</h3>
      }

      return (
        //<img src={data.url}/>
          <NasaCard 
          title={data.title}
          date={data.date}
          image={data.url}
          explanation={data.explanation}
          copyright={data.copyright}
          />
        //<p>{console.log(data.url)}</p>
      )
}