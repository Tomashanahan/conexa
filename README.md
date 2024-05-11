<div align="center">
  <img src="https://media.licdn.com/dms/image/D4D0BAQGZ39V73PdTdg/company-logo_200_200/0/1688043464274/longtermtechpartners_logo?e=1723680000&v=beta&t=ND5aPgkzx8B1sqO9sGJZXv6DtBaUZjseI1nXZEG6Csk" alt="Logo" width="200" height="200">
</div>

# SSR Frontend Developer Challenge (NextJS)

---

¡Bienvenido al reto técnico SSR Frontend Developer con NextJS! Este proyecto busca evaluar las mejores prácticas en desarrollo frontend utilizando tecnologías modernas. El principal objetivo es desarrollar una aplicación para explorar personajes y episodios de "Rick and Morty" de forma creativa y eficiente.

## 🚀 Descripción del Proyecto

En este desafío, se espera que desarrolles una aplicación utilizando NextJS, que consuma la API de "Rick and Morty" y presente la información de personajes y episodios en una interfaz de usuario interactiva y componentizada.

### 🎯 Objetivos del Desafío

- **Funcionalidad**: Implementar todas las funcionalidades requeridas usando REST API o GraphQL.
- **Code Quality**: Código limpio, bien estructurado y escalable.
- **UI/UX**: Interfaz intuitiva con una buena experiencia de usuario.
- **Creatividad**: Añadir componentes o funcionalidades que superen las expectativas básicas.
- **Testing**: Desarrollar tests unitarios que validen las funcionalidades de la aplicación.

### ✅ Funcionalidades Implementadas

- **Listado Paginado de Personajes**: Implementación de listados paginados para los personajes en dos secciones: `Character #1` y `Character #2`.
- **Formulario para la busqueda de personajes**: Creación de un formulario el cual te permite buscar un personaje de forma mas rapida.
- **Visualización de Episodios**: Mostrar episodios exclusivos y compartidos basados en la selección de los personajes.
- **Diseño de Interfaz**: Creación de tarjetas (`Cards`) para cada personaje mostrando información relevante como el estado y la especie.

## 🔧 Instalación y ejecución del proyecto

```bash
  npm install
```

```bash
  npm run dev
```

## 🧪 Ejecución de los tests y coverage

```bash
  npm run test
```

```bash
  npm run coverage 
```

## Observaciones

- En el apartado de los episodios: me encontré que con el endpoint te permite concatenar los ids para hacer en una sola petición la consulta de muchos episodios, el problema que me encontré es que no vienen paginados, lo bueno es que nos evitamos el tener que hacer **N** peticiones para obtener los episodios, lo malo es que cargamos al front con **N** elementos lo cual puede ser un problema si **N** es un número grande, una de las soluciones que se podría implementar es una paginación con los ids de los episodios de el personaje seleccionado, me explico:
si el personaje-1 seleccionado tiene los episodios  ```[1,2,3,4,5,6,7,8,9,10, …, 60]```, podríamos hacer una matriz de ids tal que así ```[[1,2,3,4,5,6,7,8,9,10],  [11,12,13,14,15,16,17,18,19,20], ...]```, donde consultamos los capítulos por partes y no todos juntos a la misma vez, aligerando la carga del Front

- Respecto a este punto `Aplicá validaciones, por ejemplo que no muestre en las tres secciones de episodios hasta no seleccionar el personaje de la sección #1 y de la sección #2.` Me pareció buena idea el ir mostrando la lista de episodios ni bien se selecciona un personaje para dar la sensación de fluidez de la app, de todas formas creo que puede ser buena idea sumar un svg, texto, toast, que indique que falta seleccionar el personaje-2 _(en el caso de haber seleccionado el personaje-1 primero)_ para darle información al usuario de que es lo que está pasando.

- Creo que no viene al caso, pero suponiendo que en algún futuro se quiera hacer una persistencia de los personajes seleccionados, paginación, filtros de búsqueda, etc, se podría almacenar la información del estado en el localstorage

- No estoy conforme con la informacion mostrada en la card de los personajes, creo que se podria ser un poco mas detallada o completa.

## Apartados a implementar independientemente del resultado de este proceso.

- Paginación para las listas de los episodios

- En el apartado de los personajes estaria bueno porder sumar mas filtros y no solo poder buscar por nombre.

- También me hubiese gustado implementar `husky` para la creación de `pre-commit-hooks` y `pre-commit-linter`.
