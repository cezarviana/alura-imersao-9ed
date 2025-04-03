function conversor(){
    //1- Registrar o valor:
    let valorWons = prompt("digite um valor em wons")
    //1.1- Mostrar o valor registrado:
    // alert(valorWons)
    // 2- Definir o valor de conversão:
    const wonUnit = 0.0040;
    // 3- Executar a conversão e mostrar:
    alert("R$ " + wonUnit * valorWons)
};
