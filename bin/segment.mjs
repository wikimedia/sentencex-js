#!/usr/bin/env node

'use strict'

import segment from '../src/index.js'
import fs from 'fs'

const text = fs.readFileSync('/dev/stdin', 'utf8')
if (text.trim() === '' || process.argv.length !== 3) {
  const script = process.argv[1]
  process.stderr.write(
    'Usage: node ' + script + ' language < file\n'
  )
  process.exit(1)
}
const language = process.argv[2]
console.log(segment(language, text))
