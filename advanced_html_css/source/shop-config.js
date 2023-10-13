const menuLinks = [
    {
        name: 'Man',
        link: '#',
        sub: [
            { name: 'Accessories', link: '#' },
            { name: 'Bags', link: '#' },
            { name: 'Denim', link: '#' },
            { name: 'T-Shirts', link: '#' },
        ],
    },
    {
        name: 'Woman',
        link: '#',
        sub: [
            { name: 'Accessories', link: '#' },
            { name: 'Jackets & Coats', link: '#' },
            { name: 'Polos', link: '#' },
            { name: 'T-Shirts', link: '#' },
            { name: 'Shirts', link: '#' },
        ],
    },
    {
        name: 'Kids',
        link: '#',
        sub: [
            { name: 'Accessories', link: '#' },
            { name: 'Jackets & Coats', link: '#' },
            { name: 'Polos', link: '#' },
            { name: 'T-Shirts', link: '#' },
            { name: 'Shirts', link: '#' },
            { name: 'Bags', link: '#' },
        ],
    },
];
const socialLinks = {
    facebook: '#',
    instagram: '#',
    pinterest: '#',
    twitter: '#',
};
const copyright = `© 2021-${new Date().getFullYear()}  Brand  All Rights Reserved.`;

document.getElementById('menu').innerHTML = menuHtml();
document.getElementById('copyright').innerHTML = copyright;
document.getElementById('social').innerHTML = socialHtml();

function menuHtml() {
    return "<div>" + menuLinks.reduce((data, el) => {
        const links = [`<a class="name" href="${el.link}">${el.name}</a>`];
        if (el.sub.length > 0) el.sub.forEach(sub => links.push(`<a href="${sub.link}">${sub.name}</a>`));
        data.push(`<div class="category">${links.join('')}</div>`);
        return data;
    }, []).join('') + "</div>";
}
function socialHtml() {
    const data = [];
    Object.keys(socialLinks).forEach(el => {
        data.push(`<a class="${el}" href="${socialLinks[el]}" target="_blank"></a>`);
    });
    return data.join('');
}