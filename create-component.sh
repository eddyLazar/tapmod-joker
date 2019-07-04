#!/bin/bash

echo $1

type=''
name=$2

if [ $1 = "a" ]; then
    type="atoms"
fi

if [ $1 = "m" ]; then
    type='molecules'
fi

if [ $1 = "o" ]; then
    type='organisms'
fi

if [ $1 = "p" ]; then
    type='pages'
fi

if [ $1 = "t" ]; then
    type='templates'
fi

location="src/components/$type/$name"
storiesLocation="$location/$name.stories.js"
componentLocation="$location/$name.js"


mkdir "$location"
touch "$componentLocation"
touch "$storiesLocation"
touch "$location/index.js"
# index
echo "export { default } from './$name';" > "$location/index.js"
# stories
echo "import React from 'react';" >> "$storiesLocation"
echo "import { storiesOf } from '@storybook/react';" >> "$storiesLocation"
echo "import $name from './$name';"$'\n' >> "$storiesLocation"
echo "storiesOf('$type|$name', module).add('basic', () => <$name />);" >> "$storiesLocation"
# component
echo "import React from 'react';"$'\n' >> "$componentLocation"
echo "export default () => {};" >> "$componentLocation"
