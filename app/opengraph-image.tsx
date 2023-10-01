import OpengraphImage from 'components/opengraph-image';

export const runtime = process.env.NODE_ENV === 'development' ? 'nodejs' : 'edge'

export default async function Image() {
  return await OpengraphImage();
}
