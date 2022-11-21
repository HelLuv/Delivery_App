import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import dish from './dish'
import featured from './featured'
import restaurant from "./restaurant";

// original projectID // "projectId": "bw2midcg",
export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        dish,
        featured,
        category,
        restaurant,
    ]),
})
