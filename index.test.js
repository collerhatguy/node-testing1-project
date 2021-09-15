const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { copy: "true     " }
    const expected = { copy: "true" }
    const output = utils.trimProperties(input)
    expect(input).toEqual(input)
    expect(output).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { string: " string " }
    const expected = { string: "string" }
    const output = utils.trimPropertiesMutation(input)
    expect(output).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { string: " string " }
    const output = utils.trimPropertiesMutation(input)
    expect(output).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const array = [{ integer: 2 }, { integer: 8 }]
    const largest = utils.findLargestInteger(array)
    expect(largest).toBe(8)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const initialCount = counter.countDown()
    expect(initialCount).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const secondCount = counter.countDown()
    expect(secondCount).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const zero = counter.countDown()
    const zeroStill = counter.countDown()
    expect(zero).toBe(0)
    expect(zeroStill).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const summer = seasons.next()
    expect(summer).toBe("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const fall = seasons.next()
    expect(fall).toBe("fall")  
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const winter = seasons.next()
    expect(winter).toBe("winter")    
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const spring = seasons.next()
    expect(spring).toBe("spring")      
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const summer = seasons.next()
    expect(summer).toBe("summer")      
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (var i = 1; i < 40; i++) {
      seasons.next()
    }
    const spring = seasons.next()
    expect(spring).toBe(spring)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const odometer = focus.drive(4)
    expect(odometer).toBeDefined()
    expect(odometer).toBe(4)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(30)
    expect(focus.tank).toBe(19) 
    focus.drive(30)
    expect(focus.tank).toBe(18) 
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(30 * 20)
    const odometer = focus.odometer
    const newOdometer = focus.drive(1)
    expect(odometer).toEqual(newOdometer)
    focus.refuel(10)
    const changedOdometer = focus.drive(3)
    expect(changedOdometer).toEqual(odometer + 3)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(20)
    expect(focus.tank).toBe(20) 
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const even = utils.isEvenNumberAsync(2)
    expect(even).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const even = utils.isEvenNumberAsync(1)
    expect(even).toBe(false)
  })
})
