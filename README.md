```
- dist
-- bundled components js (for import)
-- bundled (compiled and minified) css
-- copy of SCSS directory
-- copy of assets directory
- src
-- index.js (entry point)
-- assets
--- fonts
--- images
--- icons
-- components
--- button
---- button.js
---- button.test.js
---- button.story.js
--- ...
-- styles
--- index.scss (entry point)
--- components
---- all-elements.scss (imports all elements)
---- button.scss
---- ...
--- base
---- all-base.scss (imports all base)
---- reset.scss
---- variables.scss
---- helpers.scss (mixins and class based helpers)
---- functions.scss
---- generic.scss (generic tags)
- docs
-- compiled storybook static website
storybook (development canvas)
.gitignore
.npmignore
package.json
webpack.config.js
.babelrc
```

**Requirements**

- Distributued component JS should exclude dependency code 
- Distributued component JS should be able to be imported by consumer as umd ("import { Button } from 'react-ui-library-boilerplate'")
- Distributed css / scss should be able to reference any required assests (images, fonts etc) and pull them over during the build (webpack)
- Distributed css and scss should have vendor prefixes automatically applied as part of the build process
- Distributed css should be minified and have comments removed (for optimization)
- Consumer should be able to either selectively load scss (base and any required component scss) and compile from their application
- Consumer should be able to choose to load minified css if they so choose. This minified css should be able to have dead code elimination via build tool
- Storybook should be able to act as a development canvas and reference application

**To investigate**

- Removing dependeny code from dist JS
- Test importing component from dist JS
- Referencing assests (src links) from imported css / scss (will need `$asset-src` variable in scss). Alternatively, inline icons.
- Vendor prefix css and SCSS
- Compile, minifiy and strip comments from scss
- Copy SCSS directory and assets directory to dist in entirity 
- Tree shaking / dead code elimination of imported css / scss (if consumer imports entire scss file)
- Install, setup and use of storybook.js

**To do**

Write build tool to:

- [x] Copy contents of SCSS directory to dist
- [] Copy contents of assets directory to dist (add test file)
- [] Compile SCSS to css, autoprefix (with config file), minifiy and move to dist
- [] Compile JS components and move to dist

Write task runner to:

- [] Publish to npm
- [] Test and lint components / scss
- [] Build storybook docs
- [] Start development enviroment (storybook with --watch)

Install depencies and setup:

- [] Install Jest and Enzyme for unit testing


