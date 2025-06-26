const { exec } = require('child_process');

function obtenerTodosLosProcesos() {
  return new Promise((resolve, reject) => {
    exec('tasklist', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar tasklist: ${error}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Stderr de tasklist: ${stderr}`);
        reject(new Error(stderr));
        return;
      }

      const lineas = stdout.trim().split('\n');
      const procesos = [];
      for (let i = 3; i < lineas.length; i++) {
        const columnas = lineas[i].split(/\s+/).filter(Boolean); // Dividir por espacios y filtrar vacíos
        if (columnas.length >= 2) {
          procesos.push({ nombre: columnas[0], pid: columnas[1] });
        }
      }
      resolve(procesos);
    });
  });
}

function matarProcesoPorPid(pid) {
  return new Promise((resolve, reject) => {
    exec(`taskkill /PID ${pid} /F`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar taskkill: ${error}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Stderr de taskkill: ${stderr}`);
        reject(new Error(stderr));
        return;
      }
      resolve(`Proceso con PID ${pid} terminado exitosamente.`);
    });
  });
}

async function main() {
  try {
    const listaDeProcesos = await obtenerTodosLosProcesos();
    console.log('Lista de procesos en ejecución:');
    listaDeProcesos.forEach(proceso => {
      console.log(`Nombre: ${proceso.nombre}, PID: ${proceso.pid}`);
    });

    const pidAMatarStr = await new Promise((resolve) => {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question('\nIngresa el PID del proceso que deseas terminar: ', (pid) => {
        readline.close();
        resolve(pid);
      });
    });

    const pidAMatar = parseInt(pidAMatarStr, 10);
    if (isNaN(pidAMatar)) {
      console.error('PID inválido.');
      return;
    }

    const resultadoKill = await matarProcesoPorPid(pidAMatar);
    console.log(resultadoKill);

  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
}

main();