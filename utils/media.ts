import { getStrapiURL } from "./api";
const defaultImg = 'https://blog-genffy.oss-cn-hangzhou.aliyuncs.com/default_image_e725881ebc.png'
export function getStrapiMedia(media: any) {
  if(!media.data){
    return defaultImg
  }
  const { url } = media.data.attributes;
  if(!url){
    return defaultImg
  }
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}