// Criar Array de produtos;
// Conter: id, categoria e descrição;
// Filtrar por categoria

let products = [
    { id: 0, category: 'eletrodomestico', description: 'ferro de passar' },
    { id: 1, category: 'eletrodomestico', description: 'air fryer' },
    { id: 2, category: 'eletrodomestico', description: 'aspirador de pó' },
    { id: 3, category: 'mesa e banho', description: 'toalha' },
    { id: 4, category: 'mesa e banho', description: 'edredom' },
    { id: 5, category: 'eletrica', description: 'split bolt 25mm' },
    { id: 6, category: 'eletrica', description: 'multimetro' },
    { id: 7, category: 'eletrica', description: 'amperimetro' },
    { id: 8, category: 'eletrica', description: 'cabinho flexivel 2,5mm' },
    { id: 9, category: 'eletrica', description: 'cabo coaxial rg59' },
    { id: 10, category: 'eletrica', description: 'cdp 50-95mm' },
];

let categoryProd = products.filter(item => item.category == 'eletrodomestico');

categoryProd.forEach(product => {
    console.log(`ID: ${product.id}, Nome: ${product.description}, Categoria: ${product.category}`);
});