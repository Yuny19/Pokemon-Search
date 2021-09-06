import PokeImage from './PokeImage';

const PokeData = ({ imageSprite, name, onToggleDetail }) => {
  const toggleDetail = () => {
    if (typeof onToggleDetail === 'function') {
      onToggleDetail();
    }
  };

  if (!imageSprite && !name) {
    return (
      <div>
        <p>No data to be shown. Search some!</p>
      </div>
    );
  }

  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__image-container'>
          <PokeImage src={imageSprite.front_default} caption='front default' />
          <PokeImage src={imageSprite.front_shiny} caption='front shiny' />
          <PokeImage src={imageSprite.front_female} caption='front female' />
          <PokeImage
            src={imageSprite.front_shiny_female}
            caption='front shiny female'
          />
        </div>
        <p className='card__text'>{name}</p>
      </div>
      <div className='card__action'>
        <button className='card__button' onClick={toggleDetail}>
          Show Details
        </button>
      </div>
    </div>
  );
};

export default PokeData;
