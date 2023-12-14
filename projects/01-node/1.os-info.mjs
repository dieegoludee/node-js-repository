import { platform, release, arch, cpus, freemem, totalmem } from 'node:os'

console.log('Informacion del SO:')
console.log('-------------------')

console.log('Nombre del SO: ' + platform())
console.log('Versión del SO: ' + release())
console.log('Arquitectura: ' + arch())
// console.log('CPUs: ' ); cpus().map(cpu => console.log(cpu))
console.log('CPUs: ' + cpus()) // <--- vamos a poder escalar procesos en Node
console.log('Memoria libre: ' + freemem() / 1024 / 1024)
console.log('Memoria total: ' + totalmem() / 1024 / 1024)
