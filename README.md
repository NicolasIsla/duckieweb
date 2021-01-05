# DuckieWeb Simulador

## ¿Qué es DuckieWeb?
DuckieWeb es un proyecto que busca monitorear el estado de Duckietown en el simulador representando todos sus datos en una interfaz web que sea simple y agradable visualmente para el usuario.

Este repositorio pretende guiar el proceso para poner en funcionamiento el monitoreo web de la ciudad Duckietown.

# Requisitos para tu PC

### [Anaconda](https://www.anaconda.com/products/individual#windows)
Anaconda es una distribución de Python que cuenta con un gestor de paquetes y un
sistema de gestión de entornos virtuales llamado Conda. Esto permite manejar distintas
versiones de softwares y librerías sin que interfieran con las demás cosas que contenga el PC de trabajo.

### [Instalar Gym-Duckietown](https://www.yumpu.com/en/document/read/65121377/guia-instalacion-duckietown)
Pasos a seguir para instalar conda y crear el enviroment de **gym-duckietown**.

### [Jekyll](https://jekyllrb.com/docs/installation/)
Jekyll sirve para montar sitios web estáticos en nuestro propio servidor local. Lo usamos para montar la web que se encuentra en este repositorio.

# Cómo empezar
```bash
git clone https://github.com/NicolasIsla/duckieweb-simulador.git
```

Hecho esto dirígete a la carpeta mediante la terminal y ejecuta:

```bash
jekyll serve
```

Una vez corriendo el servidor local, abre [http://localhost:4000/](http://localhost:4000/) en tu navegador donde verás la interfaz de DuckieWeb.

# Demo

Dentro de la ruta */demo* se encuentra un archivo llamado **simulador.py** que busca simular un duckiebot local y así poder visualizar su velocidad lineal y angular en tiempo real.

Se debe activar el enviroment de Duckietown.
```bash
conda activate gym-duckietown
``` 
Luego dirigirse a la carpeta de Demo para activar el simulador.
```bash
python simulador.py --env-name Duckietown-udem1-v0
```
Finalmente en la página clickear en **"Simulador"** para conectarte y **"X"** para desconectarte.

# Ideas a Futuro

- Página responsiva
- Versión móvil
- Ver cámara en tiempo real
- Total integración con otros proyectos como:
	* Semáforos
	* Localización GPS
	* Reconocimiento de objetos (Machine Learning)
	* Visualizar mapa de la ciudad

# Agradecimientos

Bootstrap 4 | https://getbootstrap.com/

jQuery | https://jquery.com/

Jekyll | https://jekyllrb.com/

A todo el equipo de Duckietown Chile
http://duckietown.cl


## Autores del Monitoreo Web DuckieGym:

**Christopher Marin**

**Joaquín Uribe**

**Nicolás Isla**






# Screenshots
| https://prnt.sc/wgub9l  | 
| https://prnt.sc/wgubrk  |

