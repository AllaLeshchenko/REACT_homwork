import { useState } from "react";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',
    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
    'https://www.clipartmax.com/png/small/67-677411_5-star-rating-5-golden-stars-png.png'
  ]

  return (
    <div style={{background: 'lightblue', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' , borderRadius: '20px', padding: '15px'}}>
     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px', }}>
        <img src={ratingList[ratingValue]} alt='Rating' style={{height: '150px', width: '700px',borderRadius: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)' }} /></div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <button onClick={() => setRatingValue(0)} style={{borderRadius: '5px', border: '1px solid blue', background: 'yellow'}}>Плохо</button>
            <button onClick={() => setRatingValue(1)} style={{borderRadius: '5px', border: '1px solid blue', background: 'orange'}}>Приемлемо</button>
            <button onClick={() => setRatingValue(2)} style={{borderRadius: '5px', border: '1px solid blue', background: 'lightgreen'}}>Хорошо</button>
            <button onClick={() => setRatingValue(3)} style={{borderRadius: '5px', border: '1px solid blue', background: 'lightpink'}}>Отлично</button>
        </div>
    </div>
  );
}

export default Rating;