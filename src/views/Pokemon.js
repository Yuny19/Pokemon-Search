import { useEffect, useState } from 'react';
import Axios from 'axios';
import './Pokemon.css';

import MessageText from '../components/MessageText';
import PokeData from '../components/PokeData';
import PokeSearch from '../components/PokeSearch';
import PokeDetail from '../components/PokeDetail';

function Pokemon() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pokeData, setPokeData] = useState();
  const [showDetail, setShowDetail] = useState(false);

  const showDetailHandler = () => {
    setShowDetail((prevState) => !prevState);
  };

  useEffect(() => {
    setShowDetail(false);
    setError(null);

    if (searchKeyword.trim() !== "") {
      setLoading(true);

      Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchKeyword.toLowerCase()}`
      )
        .then((res) => {
          setLoading(false);
          setPokeData(res?.data);
        })
        .catch((err) => {
          setLoading(false);
          setPokeData(null);
          if (err.response && err.response.data) {
            setError(err.response.data);
          } else {
            setError(err.message);
          }
        });
    } else {
      setPokeData(null);
    }
  }, [searchKeyword]);

  const content = loading ? (
    <MessageText>Loading....</MessageText>
  ) : error ? (
    <MessageText>{error}</MessageText>
  ) : (
    <PokeData
      name={pokeData?.name}
      imageSprite={pokeData?.sprites}
      onToggleDetail={showDetailHandler}
    />
  );

  return (
    <div className="App">
        Please Search Pokemon in Below
      <PokeSearch onSubmitKeyword={setSearchKeyword} />
      {content}
      {showDetail && <PokeDetail data={pokeData} />}
    </div>
  );
}

export default Pokemon;
