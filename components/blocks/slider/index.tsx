import React from 'react'
import sliderStyles from './slider.module.css';
import WithThumb from './width-thumb'

const Slider = ({ data, type }: any) => {
  // alternativeText: "mbox_avatar.png"
  // caption: "mbox_avatar.png"
  // createdAt: "2022-05-30T10:07:40.389Z"
  // ext: ".png"
  // formats: {small: {…}, medium: {…}, thumbnail: {…}}
  // hash: "mbox_avatar_aa873d4317"
  // height: 1000
  // mime: "image/png"
  // name: "mbox_avatar.png"
  // previewUrl: null
  // provider: "aliyun"
  // provider_metadata: null
  // size: 139.84
  // updatedAt: "2022-05-30T10:07:40.389Z"
  // url: "https://blog-genffy.oss-cn-hangzhou.aliyuncs.com/mbox_avatar_aa873d4317.png"
  // width: 1000
  const slides = data.files.data.map((item: any, index: number) => {
    const media = item.attributes
    return {
      url: media.url,
      alt: media.alternativeText,
      thumbnail: media.formats.thumbnail,
      medium: media.formats.medium,
      small: media.formats.small,
      width: media.width,
      height: media.height,
    }
  })
  return (
    <div className={sliderStyles.container}>
      <WithThumb slides={slides}></WithThumb>  
    </div>
  )
};

export default Slider;