const list = [
    {
    firstName: 'Noah',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19, language: 'JavaScript' 
    },
    { 
    firstName: 'Carla',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28, language: 'JavaScript' 
    },
    { 
    firstName: 'Maria',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML'
    },
    { 
    firstName: 'Ramiro',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS' 
    }
  ]

  const countDevsFromContinent = (devs, continent) => {
    return devs.filter(dev => dev.continent === continent).lenght
  }

  const devsFromAsia = countDevsFromContinent (list, 'Asia')
  console.log(`There was ${devsFromAsia} devs from Asia.`)
  