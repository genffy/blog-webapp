import blocksStyles from '@/styles/blocks.module.css';

const Quote = ({ data }: any) => {
  console.log('data', data)
  return <div>
    <blockquote className={blocksStyles.blockquote}>
      <p><em>There’s no denying a WhatsApp CRM Integration provides many benefits for growing and established businesses. But first, there are certain things you need to understand about these integrations and sort out.</em></p>
    </blockquote>
  </div>;
};

export default Quote;