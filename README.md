# @gabortorma/moment-ages

This is a [Moment.js](https://github.com/moment/moment/) plugin that calculate ages and validate a date between two ages.

## Usage

### common js

```javascript
const moment = require('@gabortorma/moment-ages')
```

### module (esm)

```javascript
import moment from '@gabortorma/moment-ages'
```

### setup mode

```javascript
import moment from 'moment'
import setup from '@gabortorma/moment-ages/setup.js'

setup(moment)
```

## API

The objects returned by methods are **Moment.js** objects (except `.isBusinessDay()` and `.businessDiff()`) so you can
handle them with **Moment.js** native methods.

#### `.age(now: Date)` => object

Calculate the age from moment date, based on **now** paramters. Now default is `new Date()`. Return an object with the following structures:

```javascript
{
	years: Number,
	months : Number,
	days: Number,
}
```

#### `.ageFrom(input: Date)` => object

Calculate the age from **input** date, based on moment date. Return an object with the following structures:

```javascript
{
	years: Number,
	months : Number,
	days: Number,
}
```

#### `.isAgeBetween(from: Number, to: Number, now: Date)` => boolean

Check the moment date is between from and to range, based on on **now** paramters. Now default is `new Date()`.

#### When range is between 30 and 40 and now is 2023-01-31'

```javascript
// birth at 1993-02-01 (a day before 30th birth date)
moment('1993-02-01').isAgeBetween(30, 40, '2023-01-31') // false

// 'birth at 1993-01-31 (on 30th birth date)
moment('1993-01-31').isAgeBetween(30, 40, '2023-01-31') // true

// birth at 1982-02-01 (a day before 41th birth date)
moment('1982-02-01').isAgeBetween(30, 40, '2023-01-31') // true

// birth at 1982-01-31 (on 41th birth date)
moment('1982-01-31').isAgeBetween(30, 40, '2023-01-31') // false
```

## Installation

```
// For Node.js
$ npm install @gabortorma/moment-ages

// ...or install and save in package.json
$ npm install --save @gabortorma/moment-ages
```

## Testing

```
npm test
```
