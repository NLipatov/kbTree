const textProps = {x: -15, y: 20}

const data = {
    name: "Насекомоядные",
    textProps: textProps,
    children: [
        {
            name: "Парапитеки",
            textProps: textProps,
            children: [{
                name: "Орангутаны",
                textProps: textProps,
            },
            {
                name: "Гиббоны",
                textProps: textProps,
            },
            {
                name: "Дриопитеки",
                textProps: textProps,
                children: [{
                    name: "Шимпанзе",
                    textProps: textProps,
                },
                {
                    name: "Горилла",
                    textProps: textProps,
                },
                {
                    name: "Австралопитеки",
                    textProps: textProps,
                    children: [{
                        name: "Гоминиды",
                        textProps: textProps,
                    },
                    {
                        name: "Древнейшие люди",
                        textProps: textProps,
                        children: [{
                            name: "Неандертальцы",
                            textProps: textProps,
                        },
                        {
                            name: "Кроманьонцы",
                            textProps: textProps,
                        }]
                    }]
                }]
            }]
        }
    ]
}

export {data, textProps};