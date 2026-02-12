export default function loadHome(){
    const content = document.getElementById('content')
    content.textContent = ''

    const main = document.createElement('main')
    const footer = document.createElement('footer')

    content.appendChild(main)
    content.appendChild(footer)

    const hero = document.createElement('section')
    hero.id = 'hero'
    
    const title = document.createElement('h1')
    title.textContent = 'Ristorante Aurelio'

    const subtitle = document.createElement('p')
    subtitle.textContent = 'Fine Italian cuisine since 1998'

    const cta = document.createElement('a')
    cta.textContent = 'Reserve a table'
    cta.href = '#reservation'

    hero.append(title,subtitle,cta)

    main.appendChild(hero)

    const philosophy = document.createElement('section')
    philosophy.id = 'philosophy'
    
    const philosophyText = document.createElement('p')
    philosophyText.textContent = 'At Ristorante Aurelio, we celebrate the art of Italian dining—seasonal ingredients, timeless recipes, and quiet excellence.'

    philosophy.appendChild(philosophyText)
    main.appendChild(philosophy)

    const details = document.createElement('section')
    details.id = 'details'

    const cuisine = document.createElement('div')
    cuisine.id = 'cuisine'
    const cuisineTitle = document.createElement('h3')
    const cuisineText = document.createElement('p')

    cuisineTitle.textContent = 'Cuisine'
    cuisineText.textContent = 'Italian Fine Dining'

    cuisine.append(cuisineTitle,cuisineText)

    const location = document.createElement('div')
    location.id = 'location'
    const locationTitle = document.createElement('h3')
    const locationText = document.createElement('p')
    
    locationTitle.textContent = 'Location'
    locationText.textContent = 'Casablanca,Morocco'

    location.append(locationTitle,locationText)

    const hours = document.createElement('div')
    hours.id = 'hours'
    const hoursTitle = document.createElement('h3')
    const hoursText = document.createElement('p')

    hoursTitle.textContent = 'Work Hours'
    hoursText.textContent = 'Monday - Saturday : 19:00 - 23:30'
    hours.append(hoursTitle,hoursText)

    details.append(cuisine,location,hours)
    main.appendChild(details)

    const signature = document.createElement('section')
    signature.id = 'signature'
    const signatureText = document.createElement('p')

    signatureText.textContent = 'Where tradition meets discretion'

    signature.appendChild(signatureText)

    main.appendChild(signature)

    const footerText = document.createElement('p')

    footerText.textContent = 'Ristorante Aurelio · Reservations · Instagram'

    footer.appendChild(footerText)

}