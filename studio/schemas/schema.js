// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import page from './documents/page'

import blockContent from './objects/blockContent'
import hero from './objects/hero'
import callToAction from './objects/callToAction'
import form from './objects/form'
import gallery from './objects/gallery'
import textWithIllustration from './objects/textWithIllustration'
import video from './objects/video'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    hero,
    callToAction,
    form,
    gallery,
    textWithIllustration,
    video,
    blockContent,
  ]),
})
