import { getVotes, saveVote } from './firebase.js';

function enableForm() {
    const form = document.getElementById('form_voting');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const select = document.getElementById('select_product');
        if (!select) return;

        const productID = select.value;
        if (!productID) return;

        const result = await saveVote(productID);
        alert(result.message);

        form.reset();
        displayVotes(); // Actualiza la tabla después de votar
    });
}

async function displayVotes() {
    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) return;

    // Obtener los votos desde Firebase
    const response = await getVotes();
    if (!response.success) {
        resultsDiv.innerHTML = `<p class="text-red-500">${response.message}</p>`;
        return;
    }

    const votes = response.data;
    // Contar votos por producto
    const voteCount = {};
    Object.values(votes).forEach(vote => {
        if (vote.productID) {
            voteCount[vote.productID] = (voteCount[vote.productID] || 0) + 1;
        }
    });

    // Crear tabla de resultados
    let tableHtml = `
        <table class="min-w-full border border-gray-300">
            <thead>
                <tr>
                    <th class="px-4 py-2 border-b">Producto</th>
                    <th class="px-4 py-2 border-b">Total de votos</th>
                </tr>
            </thead>
            <tbody>
    `;
    Object.entries(voteCount).forEach(([product, total]) => {
        tableHtml += `
            <tr>
                <td class="px-4 py-2 border-b">${product}</td>
                <td class="px-4 py-2 border-b text-center">${total}</td>
            </tr>
        `;
    });
    tableHtml += `
            </tbody>
        </table>
    `;

    resultsDiv.innerHTML = tableHtml;
}

// Llamar a displayVotes y enableForm al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    enableForm();
    displayVotes();
});

// Exportar para poder llamarla después de guardar un voto si es necesario en otros módulos
export { displayVotes };