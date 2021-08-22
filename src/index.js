import HQL from 'hashql'

import x from './api/test.js'

// x.amazing('James').then(console.log, console.error)

x('James').then(console.log, console.error)
