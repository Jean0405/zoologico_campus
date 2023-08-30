# ZOOLOGICO CAMPUSLANDS

![zoo](./assets/banner.png)

Un zoológico es un lugar donde animales salvajes de forma dividida por recintos. El proposito general de estos es educar a la población, dar el espacio para esparcimiento del público, estudiar y/o preservar las especies.

# ¿Cómo funciona un Zoo?

La mayoria de estos funcionan por medio de **microambientes** que hacen de imitaciones del hábitat natural de los animales.
Poseen cuidadores encargados de la alimentación, mantenimiento y atención del público. Generalmente en estos tambien se realizan eventos solicitados por visitantes usuarios del zoológico.

Diariamente en un zoologico se realiza la alimentación de los animales alojados para mantenerlos llenos de energia y presentarlos al público en buen estado, además la limpieza de dichos hábitats son indispensables para la buena salud del animal y la presentación de estos; Para esto se encuentran encargados los empleados de retirar excrementos y tenerlos en buenas condiciones.
Dentro de un zoologico tambien se busca preservar especies y realizar investicaciones con este fin, generando un mejor conocimiento del comportamiento de cada inidividuo alli encontrado. Un Zoo, debe garantizar la seguridad tanto de los animales como de los visitantes, tratando de prevenir emergencias por fugas y otros tipos de casos.
Finalmente, periodicamente se deben realizar chequeo medicos a los animales, tratamientos y hasta cirugias si estas son necesarias, allí incluso se realizan actividades de reproducción y atención medica especializada.

_Por lo tanto se busca realizar un proyecto el cual permita gestionar a los animales, su alimentacion, habitats, personal empleado, eventos y visitantes._

# DIAGRAMA DE LA BASE DE DATOS

![diagramaDB](./assets//diagramaDB.png)

# REQUERIMIENTOS

1. **Búsqueda y Filtros:**

   - buscar animales por su id, especie o recinto.
   - filtrar actividades por fecha, tipo o ubicación.
   - buscar empleados por su tipo, recinto o empleado.

2. **Información sobre Visitantes:**

   - registrar la información de los visitantes del zoológico.

3. **Comentarios y Calificaciones:**

   - visitantes dejen comentarios y calificaciones sobre los animales.

4. **Estadísticas y Reportes:**

   - obtener estadísticas sobre los animales más populares.

5. **Reservas de Eventos:**

   - Zoológico registrar actividades diarias del zoológico.

6. **Autenticación y Autorización:**
   - Asegurar que ciertos endpoints solo sean accesibles para empleados autorizados.

# INSTALACIÓN

**1**. Clona este repositorio en tu computadora, usa el siguiente comando:

```bash
git clone https://github.com/Jean0405/zoologico_campus.git
```

**2**. Asegurate de tener Node.js instalado en tu computadora. De no ser así, descargalo e instala [Node js](https://nodejs.org/es/download)

**3**. Instala las dependecias necesarias de forma automatica con el siguiente comando, el cual tomara el archivo **package.json** y lo tomara de guía para dichas instalaciones.

```bash
  npm install
```

**4**. Configura tus variables de entorno

#### ⚠️ _Recuerda implementar tus propias variables de entorno_ ⚠️

```env
PORT=3300
HOST=127.25.25.27

USERS=
PASSWORD=
DB=

PRIVATE_KEY=
```

**5**. ejecuta el archivo db/query.mongodb

Al clonar, podrás ejecutar del archivo **db/query.mongodb** para crear, relacionar e insertar los datos para pruebas de ejemplo.

**6**. ejecuta el proyecto en la terminal

```bash
npm run dev
```

# USO DE LA REST API

## LOGIN

## TOKENS

## PERMISOS


# LENGUAJES A UTILIZAR

- **NODE JS** - **EXPRESS** - **MONGO DB**

# AUTORES Y COLABORADORES 🧑‍🚀

- [Keanon Jeanpierre Angarita Olarte](https://github.com/Jean0405)
- [Carlos Alberto Villafrades](https://github.com/CarlosAlbertoVillafradesCAMPUS)

- [CampusLands](https://github.com/CampusLands)
