import React, {useState, useEffect} from 'react';
import Rover from './Rover';
import Api from '../utils/Api';
import RoverForm from './RoverForm';
import Card from './Card';
import { optionsCuriosity } from '../utils/constants';

function RoverCuriosity(props) {
  const {} = props;

  const [roverInfo, setRoverInfo] = useState({
    landingDate: '',
    launchDate: '',
    status: '',
    maxSol: '',
    maxDate: '',
    totalPhotos: '',
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getRoverInfo('Curiosity')
    .then((res) => {
      console.log(res)
      setRoverInfo({
        landingDate: res.photo_manifest.landing_date,
        launchDate: res.photo_manifest.launch_date,
        status: res.photo_manifest.status,
        maxSol: res.photo_manifest.max_sol,
        maxDate: res.photo_manifest.max_date,
        totalPhotos: res.photo_manifest.total_photos,
      })
    })
    .catch((err) => console.log(`Ошибка ${err}`));
  }, [])

  function handleGetPhotos(sol, camera) {
    Api.getPhotoFromRover('curiosity', sol, camera)
    .then((res) => {
      setCards(res.photos);
    })
    .catch((err) => console.log(`Ошибка ${err}`));
  }
  return (
    <>
      <Rover
        rover={roverInfo}
      />
      <RoverForm
        options={optionsCuriosity}
        onUpdatePhotos={handleGetPhotos}
      />
      <div className="photo-grid">
        {cards.map((card) => 
          <Card
            card={card}
            key={card.id}
          />
        )}
      </div>
    </>
  )
}

export default RoverCuriosity;