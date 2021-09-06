const PokeImage = ({ src, caption }) => {
  if (!src) {
    return null;
  }

  return (
    <figure>
      <img src={src} alt={caption} className='card__image' />
      <figcaption className='card__image-caption'>{caption}</figcaption>
    </figure>
  );
};

export default PokeImage;
