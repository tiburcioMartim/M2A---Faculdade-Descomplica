<h1>Avançando com Arrays</h1>

<h2>splice()</h2>
<p>Altera o array, seja adicionando ou removendo elementos dele.</p>
<code>array.splice(indice, numero de elementos)</code>
<p>O indice é o ponto de inicio para a remoção dos elementos. Elementos que têm um número de indice menor que o indice fornecido não serão removidos:</p>

<code>array.splice(2)</code>
<p>Todos os elementos a partir do indice 2 serão removidos.

Se não definirmos o segundo parâmetro, todos os elementos começando do indice informado serão removidos do array.
</p>

<h2>Segundo exemplo</h2>
<p>Se for passado o segundo parâmetro como 1, o elemento que está no indice 2 será removido. Exe:</p>
<code></code>

After
<code>let array = [1,2,3,"Hello World, 4.12, true"]</code>

Before
<code>let array = [1,2,"Hello World, 4.12, true"]</code>
