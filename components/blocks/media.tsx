import NextImage from '@/components/image'
import ReactPlayer from 'react-player'

const types = new Map([[".jpg", "img"], [".gif", "img"], [".mp4", "video"], [".3gp", "video"]])
const Media = ({ data }: any) => {
  // console.log('data', data)
  if(!data.file) return null

  const {ext, url, ...others} = data.file.data.attributes
  const content = () => {
    const type = types.get(ext)
    let ctn = null
    switch (type) {
      case 'img':
        ctn = <NextImage src={url} {...others} />
        break;
      case 'video':
        ctn = <ReactPlayer url={url} />
        break;
    }
    return ctn
  }
  return <div>
    {/* {content()} */}
    {url}
  </div>;
};

export default Media;