export default function loadContact(){
    const content = document.getElementById('content')
    content.textContent = ''

    const main = document.createElement('main')
    const contactSection = document.createElement('section')

    const title = document.createElement('h1')
    title.textContent = 'Contact'

    const name = document.createElement("h2")
    name.textContent = 'Ristorante Aurelio'

    const addressBlock = document.createElement("div")
    const addressTitle = document.createElement("h3")
    addressTitle.textContent = 'Address'

    const addressText = document.createElement("p")
    addressText.textContent = '12 rue 2 mars , Casablanca , Morocco'
    
    addressBlock.append(addressTitle,addressText)

    const reservationBlock = document.createElement("div")
    const reservationTitle = document.createElement("h3")
    reservationTitle.textContent = 'Reservation'

    const phone = document.createElement("p")
    phone.textContent = '+212 6 12 13 14 15'

    const email = document.createElement("p")
    email.textContent = 'reservations@ristoranteaurelio.com'

    reservationBlock.append(reservationTitle,phone,email)

    const note = document.createElement("p")
    note.textContent = "For private dining and special requests, please contact us by email."

    contactSection.append(
        title,
        name,
        addressBlock,
        reservationBlock,
        note
    )
    main.appendChild(contactSection)
    content.appendChild(main)

}