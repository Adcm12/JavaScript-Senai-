import subprocess
import os

def obtener_todos_los_procesos():
    """Obtiene una lista de todos los procesos en ejecución."""
    try:
        resultado = subprocess.run(
            ['tasklist'],
            capture_output=True,
            text=True,
            check=True
        )
        lineas = resultado.stdout.strip().split('\n')
        procesos = []
        for linea in lineas[3:]:
            columnas = linea.split()
            if len(columnas) >= 2:
                nombre_imagen = columnas[0]
                pid = columnas[1]
                procesos.append({'nombre': nombre_imagen, 'pid': pid})
        return procesos
    except subprocess.CalledProcessError as e:
        print(f"Error al ejecutar 'tasklist':")
        print(f"Código de error: {e.returncode}")
        print(f"Salida de error: {e.stderr}")
        return None
    except FileNotFoundError:
        print("El comando 'tasklist' no se encontró. Asegúrate de estar en un sistema Windows.")
        return None

def matar_proceso_por_pid(pid):
    """Mata un proceso por su ID (PID) usando os.system()."""
    comando = f"taskkill /PID {pid} /F"
    resultado = os.system(comando)
    if resultado == 0:
        print(f"Proceso con PID {pid} terminado exitosamente.")
    else:
        print(f"Error al intentar terminar el proceso con PID {pid}. Código de error: {resultado}")

if __name__ == "__main__":
    lista_de_procesos = obtener_todos_los_procesos()
    if lista_de_procesos:
        print("Lista de procesos en ejecución:")
        for proceso in lista_de_procesos:
            print(f"Nombre: {proceso['nombre']}, PID: {proceso['pid']}")

        pid_a_matar_str = input("\nIngresa el PID del proceso que deseas terminar: ")
        try:
            pid_a_matar = int(pid_a_matar_str)
            matar_proceso_por_pid(pid_a_matar)
        except ValueError:
            print("El PID ingresado no es un número entero válido.")