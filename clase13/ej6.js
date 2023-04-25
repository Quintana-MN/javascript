const list = [
    {
    firstName: 'Emma',
    country: 'Netherlands',
    continent: 'Europe',
    age: 29,
    language: 'Ruby' 
    },

    {
    firstName: 'Piotr',
    country: 'Poland',
    continent: 'Europe',
    age: 28,
    language: 'Javascript' 
    },

    {
    firstName: 'Jayden',
    country: 'Jamaica',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript' 
    }
  ]

  const checkIfAnyDevKnowsTheLanguage = (devs, language) => {
    return devs.some((dev) => dev.language === language )
  }

  const isThereRubyDev = checkIfAnyDevKnowsTheLanguage(list, `Ruby`)
  console.log(`Is there any Ruby dev? ${isThereRubyDev}.`)
  