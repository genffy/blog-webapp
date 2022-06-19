import blocksStyles from '@/styles/blocks.module.css';

const Quote = ({ data }: any) => {
  console.log('Quote', data)
  return <div>
    <blockquote className={blocksStyles.blockquote}>
      <p><em>{data.body}</em></p>
    </blockquote>
  </div>;
};

export default Quote;