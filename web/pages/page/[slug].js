// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'

import 'tailwindcss/tailwind.css'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Page = props => {
 
  const {title, slug, content} = props;

  const hero = content.filter(c => c._type === "hero");
  const cta = content.filter(c => c._type === "callToAction");

  return (
    <div>
      <h1>{hero[0].heading}</h1>
      <h2>{hero[0].tagline}</h2>
      <button>{cta[0].linkText}</button>

    </div>
  )
}

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title, slug, content}`

Page.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Page