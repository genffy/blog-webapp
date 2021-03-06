import Media from "./media";
import Quote from "./quote";
import Slider from "./slider";
import RichText from "./rich-text";

const Blocks = ({ blocks }: any) => {
  return blocks.map((item: any, i: number)=>{
      let cmp = null;
      switch(item.__component) {
        case 'shared.rich-text':
          cmp = <RichText key={item.id} data={item?.body}/>
          break;
        case 'shared.quote':
          cmp = <Quote key={item.id} data={item}/>
          break;
        case 'shared.media':
          cmp = <Media key={item.id} data={item}/>
          break;
        case 'shared.slider':
          cmp = <Slider key={item.id} data={item}/>
          break;
      }
      return cmp;
    });
};

export default Blocks;