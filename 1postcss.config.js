
// module.exports = {
//     plugins: {
//       'postcss-windicss': { /* ... */ },
//     },
//   }

import windicss from 'windicss'
import autoprefixer from 'autoprefixer'
import windiConfig from './windicss.config.js'

export default {
  plugins: [windicss(windiConfig), autoprefixer],
}