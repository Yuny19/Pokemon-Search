import DetailItem from './DetailItem';
import MessageText from './MessageText';

const PokeDetail = ({ data }) => {
  if (!data) {
    return <MessageText>No detail to be shown</MessageText>;
  }

  return (
    <div className='detail__container'>
      <DetailItem label='ID' text={data?.id} />
      <DetailItem label='Type' text={data?.types[0].type.name} />
      <DetailItem label='Weight' text={data?.weight} />
      <DetailItem label='Height' text={data.height} />
      <DetailItem label='Hp' text={data?.stats[0].base_stat} />
      <DetailItem label='Attack' text={data?.stats[1].base_stat} />
      <DetailItem label='Defense' text={data?.stats[2].base_stat} />
      <DetailItem label='Speed' text={data?.stats[5].base_stat} />
    </div>
  );
};

export default PokeDetail;
