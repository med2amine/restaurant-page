export default function loadMenu(){
    const content = document.getElementById('content')
    content.textContent = ''

    const main = document.createElement('main')
    const menuSection = document.createElement('section')
    menuSection.id = 'menuSection'
    const menuTitle = document.createElement('h1')

    menuTitle.textContent = 'Menu'

    menuSection.appendChild(menuTitle)

    function createMenuCategory(title,items){
        const category = document.createElement('div')
        category.classList.add('category')
        const heading = document.createElement('h2')

        heading.textContent = title
        category.appendChild(heading)

        items.forEach(item => {
            const dish = document.createElement('div')
            dish.classList.add('dish')
            const name = document.createElement('h3')
            const description = document.createElement('p')
            const price = document.createElement('span')
            price.classList.add('price')

            name.textContent = item.name
            description.textContent = item.description
            price.textContent = item.price

            dish.append(name,description,price)
            category.appendChild(dish)
        });
        return category
    }

    const antipasti = [
        {
            name : 'Carpaccio di Manzo',
            description : 'Thinly sliced beef, lemon, Parmigiano, olive oil',
            price : '16£'
        },

        {
            name : 'Vitello Tonnato',
            description : 'Veal, tuna cream, capers',
            price : '18£'
        },

        {
            name : 'Insalada di Polpo',
            description : 'Tender octopus, celery, citrus',
            price : '19£'
        },

        {
            name : 'Burrata di Puglia',
            description : 'Fresh burrata, basil, olive oil',
            price : '14£'
        }
    ]

    const Primi = [
        {
            name : 'Tagliolini al Tartufo',
            description : 'Fresh pasta, black truffle, butter',
            price : '28£'
        },

        {
            name : 'Risotto allo Zafferano',
            description : 'Carnaroli rice, saffron, Parmigiano',
            price : '24£'
        },

        {
            name : 'Ravioli di Ricotta e Limone',
            description : 'Ricotta, lemon zest, sage butter',
            price : '22£'
        },

        {
            name : 'Pappardelle al Ragù di Agnello',
            description : 'Slow-cooked lamb ragù',
            price : '26£'
        }
    ]

    const Secondi = [
        {
            name : 'Filetto di Manzo',
            description : 'Beef filet, red wine reduction',
            price : '42£'
        },

        {
            name : 'Branzino al Forno',
            description : 'Oven-roasted sea bass, herbs',
            price : '38£'
        },

        {
            name : 'Petto d’Anatra',
            description : 'Duck breast, seasonal garnish',
            price : '36£'
        },

        {
            name : 'Costolette di Agnello',
            description : 'Lamb chops, rosemary, garlic',
            price : '36£'
        }
    ]

    const Dolci = [
        {
            name : 'Tiramisu Aurelio',
            description : 'Espresso, mascarpone, cocoa',
            price : '12£'
        },

        {
            name : 'Panna Cotta alla Vaniglia',
            description : 'Vanilla, red fruit coulis',
            price : '11£'
        },

        {
            name : 'Affogato al Caffè',
            description : 'Vanilla gelato, espresso',
            price : '10£'
        },

        {
            name : 'Selezione di Formaggi Italiani',
            description : 'Aged Italian cheeses',
            price : '15£'
        }
    ]
    menuSection.append(
        createMenuCategory('Antipasti',antipasti),
        createMenuCategory('Primi',Primi),
        createMenuCategory('Secondi',Secondi),
        createMenuCategory('Dolci',Dolci)
    )
    main.appendChild(menuSection)
    content.appendChild(main)
}