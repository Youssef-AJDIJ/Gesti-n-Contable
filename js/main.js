const form = document.getElementById('form');
const tbody = document.getElementById('tbody');
const concepto = document.getElementById('concepto');
const importe = document.getElementById('importe');
const tipo = document.getElementById('tipo');
const ingresosTotal = document.getElementById('ingresosTotal');
const gastosTotal = document.getElementById('gastosTotal');
const balanceNeto = document.getElementById('balanceNeto');

let ingresos = 0;
let gastos = 0;
let movimientos = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const movimiento = {
        concepto: concepto.value,
        importe: parseFloat(importe.value),
        tipo: tipo.value
    };

    movimientos.push(movimiento);
    console.log(movimientos);

    if (movimiento.tipo === "ingresos") {
        ingresos += movimiento.importe;
        ingresosTotal.textContent = ingresos.toFixed(2);
    }
    if (movimiento.tipo === "gastos") {
        gastos += movimiento.importe;
        gastosTotal.textContent = gastos.toFixed(2);
    }

    const balance = ingresos - gastos;
    balanceNeto.textContent = balance.toFixed(2);

    tbody.innerHTML += `
        <tr>
            <td>${movimiento.concepto}</td>
            <td>€${movimiento.importe.toFixed(2)}</td>
            <td class="${movimiento.tipo}">${movimiento.tipo}</td>
        </tr>
    `;

    // Resetear el formulario
    form.reset();
});