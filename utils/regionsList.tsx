import { IntlShape } from 'react-intl';

export function getRegions(intl: IntlShape) {
    return [
        {
            label: intl.formatMessage({id: "moscow"}),
            slug: "moscow",
            id: "1",
        },
        {
            label: intl.formatMessage({id: "saint.petersburg"}),
            slug: "saint-petersburg",
            id: "2",
        },
        {
            label: intl.formatMessage({id: "vladimir"}),
            slug: "vladimir",
            id: "3",
        },
        {
            label: intl.formatMessage({id: "volgograd"}),
            slug: "volgograd",
            id: "4",
        },
        {
            label: intl.formatMessage({id: "voronezh"}),
            slug: "voronezh",
            id: "5",
        },
        {
            label: intl.formatMessage({id: "ekaterinburg"}),
            slug: "ekaterinburg",
            id: "6",
        },
        {
            label: intl.formatMessage({id: "ivanovo"}),
            slug: "ivanovo",
            id: "7",
        },
        {
            label: intl.formatMessage({id: "kazan"}),
            slug: "kazan",
            id: "8",
        },
        {
            label: intl.formatMessage({id: "kaluga"}),
            slug: "kaluga",
            id: "9",
        },
        {
            label: intl.formatMessage({id: "kostroma"}),
            slug: "kostroma",
            id: "10",
        },
        {
            label: intl.formatMessage({id: "krasnodar"}),
            slug: "krasnodar",
            id: "11",
        },
        {
            label: intl.formatMessage({id: "krasnoyarsk"}),
            slug: "krasnoyarsk",
            id: "12",
        },
        {
            label: intl.formatMessage({id: "nizhny.novgorod"}),
            slug: "nizhny-novgorod",
            id: "13",
        },
        {
            label: intl.formatMessage({id: "novosibirsk"}),
            slug: "novosibirsk",
            id: "14",
        },
        {
            label: intl.formatMessage({id: "omsk"}),
            slug: "omsk",
            id: "15",
        },
        {
            label: intl.formatMessage({id: "permian"}),
            slug: "permian",
            id: "16",
        },
        {
            label: intl.formatMessage({id: "rostov.on.don"}),
            slug: "rostov-on-don",
            id: "17",
        },
        {
            label: intl.formatMessage({id: "samara"}),
            slug: "samara",
            id: "18",
        },
        {
            label: intl.formatMessage({id: "saratov"}),
            slug: "saratov",
            id: "19",
        },
        {
            label: intl.formatMessage({id: "tver"}),
            slug: "tver",
            id: "20",
        },
        {
            label: intl.formatMessage({id: "tula"}),
            slug: "tula",
            id: "21",
        },
        {
            label: intl.formatMessage({id: "ufa"}),
            slug: "ufa",
            id: "22",
        },
        {
            label: intl.formatMessage({id: "chelyabinsk"}),
            slug: "chelyabinsk",
            id: "23",
        },
        {
            label: intl.formatMessage({id: "yaroslavl"}),
            slug: "yaroslavl",
            id: "24",
        },
    ]
}