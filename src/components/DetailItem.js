const DetailItem = ({ label, text }) => {
  return (
    <div className='detail__item'>
      <p className='detail__label'>
        {label} <span>:</span>
      </p>
      <p className='detail__text'>{text}</p>
    </div>
  );
};

export default DetailItem;
