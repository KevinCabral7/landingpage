const dataAniversario = new Date("Jun 25, 2023 18:00:00");
console.log("dataAniversario:", dataAniversario);

const timeStampAniversario = dataAniversario.getTime();
console.log("timeStampAniversario:", timeStampAniversario);

const contaHora = setInterval(function(){
    const agora = new Date();
    console.log("agora:", agora);

    const timeStampAtual = agora.getTime();
    console.log("timeStampAtual:", timeStampAtual);

    const tempoAteOAniversario = timeStampAniversario - timeStampAtual;
    console.log("tempoAteOAniversario:", tempoAteOAniversario);

    const diasAteOAniversario = Math.floor(tempoAteOAniversario / (1000 * 60 * 60 * 24));
    const horasAteOAniversario = Math.floor((tempoAteOAniversario / (1000 * 60 * 60)) % 24);
    const minutosAteOAniversario = Math.floor((tempoAteOAniversario / (1000 * 60)) % 60);
    const segundosAteOEvento = Math.floor((tempoAteOAniversario / 1000) % 60);

    console.log("diasAteOAniversario:", diasAteOAniversario);
    console.log("horasAteOAniversario:", horasAteOAniversario);
    console.log("minutosAteOAniversario:", minutosAteOAniversario);
    console.log("segundosAteOEvento:", segundosAteOEvento);

    document.getElementById('contador').textContent = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOEvento}s`;
}, 1000);
