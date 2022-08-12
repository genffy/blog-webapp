import blocksStyles from '@/styles/blocks.module.css';

const Quote = ({ data }: any) => {
  if(typeof window == 'undefined'){
    return null
  }
  
  return <blockquote className={blocksStyles.blockquote}>
      <span className={blocksStyles.blockquote_first} data-uk-icon="icon: quote-right;ratio: 2;"></span>
      <p><em>{data.body}</em></p>
      <span className={blocksStyles.blockquote_last} data-uk-icon="icon: quote-right;ratio: 2;"></span>
    </blockquote>;
};

export default Quote;