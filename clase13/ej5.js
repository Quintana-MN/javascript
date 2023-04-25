const list1 = [
    { 
    firstName: 'Sofia',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java' 
    },

    {
    firstName: 'Lukas',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python' 
    },

    {
    firstName: 'Madison',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby' 
    } 
  ]
  
  const addGreetingToGuests = (devs) => {
    return devs.map((dev) => {
        const { firstName, language } = dev 
        const greeting = `Hello ${firstName}, what do you like the most about ${language}?`

        return{
            ...dev,
            greeting
        }
    })
  }

  const guestWithGreetings = addGreetingToGuests(list1)
  console.log(guestWithGreetings)