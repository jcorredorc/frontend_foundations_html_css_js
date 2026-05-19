# frontend_foundations_html_css_js

# CURSO EN DESARROLLO WEB FRONT-END CON HTML, CSS Y JAVASCRIPT

# Contenido

# Sesion 01 - Html

## Extensiones para vscode

- Live Server
- Prettier - Code formatter
- ESLint
- HTML CSS Support
- JavaScript (ES6) code snippets

## ejemplos en clase html

Ejemplo1 - [index.html](index.html)

Tarea01 - [cafeteria.html](index_cafeteria.html)

- Usar validador: https://validator.w3.org/nu/#textarea

# Sesion 02 - Html

- Tablas
- Formularios
- Validadores
  - [regex101.com](https://regex101.com/)

# Sesión 03

## Herramientas de validación - Html:

- caniuse.com revisar compatibiliad de tags html
- Lighthouse

## Fundamentos de CSS3 (modular)

* Como incluirlo en html

* Tipos de selectores básicos
  - Selector de etiqueta
  - Selector de clase
  - Selector de ID

* Selectores compuestos
  - descendientes
  - agrupados
  - hijo directo
  - atributo

* cascada y especificidad

    - !important
    - inline (style)
    - ID ( #)
    - clase (.)
    - etiqueta (p, div)

* Propiedades básicas: Texto


* Modelo de caja (box model)

    - Content:El contenido del elemento
    - Padding: Espacio interno entre el contenido y el borde
    - Border: Línea que rodea el padding y el contenido
    - Margin: Espacio externo que separa el resto

* resets


```
*{
    margin: 0;
    padding:0;
box-sizing: border-box; 
}
```


* Propiedades de margen y relleno

* Propiedades de bordes

```
*{
    box-sizing: border-box; /*ancho total: exactamente 200px*/
}
```

* Unidades de medida

- Absolutas : elementos que deben escalarse

| 
px - pixeles

pt - puntos 1/72 de pulgada

cm, mm, in

- Relativas: Diseño responsive, accesibilidad

 % - Porcentaj relativo al elemento padre

 em - relativo al tamño de fuente del elemento

 rem - relativo al tamaño de la fuente del elemento raiz (html)

 vw, vh - 1% del ancho de la ventana

 vmin, vmax - 1% del valor minimo o máximo entre vw y vh

 rem es ideal para textos, mientras que % y vh/vm son mejores para layouts

 # Sesion 04

## Posicionamiento


## Estrcutura Jerárquica del CSS

1. Reset/nomralización

  * Eliminar estilos por defecto

2. Estilos base

  * tipografias y colores base

3. Componentes y modulos

*  botones

## Metodos de organización

1. Atomic CSS Clases pequeñas y de proposito unico

2. SMACSS 5 categorias: Base, Layout, Modulo, Estado y Tema

3. 00CSS Orientado a objetos que separa estructura

4. Metodologia BEM getbem.com

## Preprocesadores

SCSS --> CSS 

### Herramientas:

Saass/SCSS, __Less__, __Stylus__, PostCSS

* Varaibles
* Anidamiento
* Mixins: Reutilizar bloques de código
* Funciones
* Imports

## Maquetación web

### Flexbox

> Sistema de maquetacion unidireccional

[flexboxfroggy - Flex game](https://flexboxfroggy.com/)

[game css](https://cssbattle.dev/play/49)


# Sesión 05

## Visualización y posicionamiento

__Propiedad display__

* block : Ocupa todo el ancho
* inline:  Solo ocupa el espacio necesario
* inline-block: Híbrido
* flex: unidimensional
* grid: bidimensional
* none: 

__Propiedad position__

* static: normal (por defecto)
* relative: Relativo a su posición normal, flujo normal
* absolute: Relativo al ancestro posicionado mas cercano
* fixed: Relativo a la ventana del navegador
* sticky: Híbrido entre relative  fixed

## Métodos de organización

* Atomic CSS: Clases pequeñas de propósito único, que hace una sola cosa.
* SMACSS: base de clase, Layout, Módulo, estado y tema
* OOCSS: orientado a Objetos
* [BEM](https://www.arsys.es/blog/bem-guia-completa-para-css-modular-con-ejemplos): Block element modifier

## Preprocesadores

* SASS
* LESS


## Fundamentos de maquetación web

### Flexbox



## Recursos

[BEM](https://getbem.com/)
[Flexbox Froggy](https://flexboxfroggy.com/#es)
[CSSBattle](https://cssbattle.dev/play/49)


# Sesión 06

## Colores

rgb(0, 255, 255) <!--(red,green,blue) -->

rgba(0,0,255,0.3) <!--(red,green,blue,alpha) -->

hsl(120,100%,20%) <!--(hue,saturation,lightness, alpha)  -->

## Tipografia
Las propiedades tipográficas más importantes son:

font-family: define la fuente del texto. Se recomienda incluir varias opciones como respaldo.
font-size: controla el tamaño del texto.
font-weight: ajusta el grosor de la letra (normal, bold, 100–900).
font-style: permite usar estilos como italic.
line-height: controla el espacio vertical entre líneas.
text-align: alinea el texto (left, center, right, justify).
letter-spacing: modifica el espacio entre caracteres.
word-spacing: modifica el espacio entre palabras.
text-transform: cambia el formato del texto (uppercase, lowercase, capitalize).
text-decoration: agrega o elimina decoraciones como subrayado.
color: define el color del texto.

Además, CSS permite usar fuentes externas mediante servicios como Google Fonts, lo que amplía enormemente las posibilidades de diseño.

Una práctica común es definir estilos globales para mantener coherencia visual en toda la página. Por ejemplo, establecer una fuente base y luego modificar tamaños específicos para títulos y párrafos.

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo Tipografía CSS</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 18px;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 20px;
        }

        h1 {
            font-size: 36px;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        p {
            text-align: justify;
            margin-bottom: 15px;
        }

        .destacado {
            font-style: italic;
            color: darkblue;
            text-decoration: underline;
        }
    </style>
</head>

<body>

    <h1>Tipografía en CSS</h1>

    <p>
        CSS permite controlar completamente la apariencia del texto.
    </p>

    <p class="destacado">
        Este párrafo utiliza estilos especiales.
    </p>

</body>
</html>
```


## Flexbox

justify - Eje principal
align - eje secundario

## CS Grid




## Recursos

https://www.sawgrassink.com/es/blog/the-spectrum-of-success-color-psychology/

https://www.materialpalette.com/cyan/indigo


```
<!DOCTYPE html>

<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CSS Grid</title>

    </head>

<body>

    <div class="grid-container">

        <header class="header">Cabecera</header>

        <aside class="sidebar">Barra Lateral</aside>

        <main class="main">Contenido Principal</main>

        <footer class="footer">Pie de Página</footer>

    </div>

</body>

</html>
```

# Sesión 07

## Diseño resposivo con Flexbox

### Media queries

* Flexbox
* Grid css

## Buenas prácticas de maquetación

* Movile first
* USa unidades relativas
* No abuses de media queries
* Mantén la semántica

## Errores comunes a evitar

* Sobre complicar layouts
* Olvidar navegadores antiguos [caniuse](www.caniuse.com)
* Ignorar el orden DOM
* No probar en dispositivos reales

## Recursos

### Documentación

* [css-tricks](https://css-tricks.com/)

* [A guide to Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

* [Undersanding flex](https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/)

* [ MDN Web docs: Guias completas CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

* [web.dev Tutoriales modernos](https://web.dev/)

### Frameworks y recursos

* Bootstrap 5 (flexbox)

* Tailwind CSS

* CSS Grid Layout Module 

### GEneradores y visualizadores

* [Css grid generator](https://cssgridgenerator.io/)

* Flexbox playground

* Grid inspector en Firefox DevTools


## Animaciones



### recursos

* https://animate.style/

* https://html-css-js.com/css/generator/box-shadow/

* Devtools

* cubic-bezier.com

* Animate CSS

* Animista 



# Sesion 08



# Sesion 09




# sesion 10

* atributos HTML

* Propiedades del DOM (documen object model)

const boton = document.getElementById('miBoton')
boton.onclick= function(){
  alert('Hola desde JavaScript')
}


* addEventListener (recomendado)
boton.addEventListener('click', function)


## Recursos



https://github.com/EDCO-CET/easycars

# Sesión 11

## Consumo de APIs con Fetch en JavaScript

* APIs REST

* Otras

- SOAP

- GraphQL *

- Websockets

## Formato Json

parse
strigyfy

# Fetch API

Nativo del navegador. el metodo nativo de JS para hacer peticiones HTTP.

- Cors proteccion de los servidores, a las solicitudes.

operación asincrona, 

- metodos then, catch

# metodos HTTP comunes

* GET - obtener datos

* POST - crear datos

* PUT/PATCH - ACtualziar, agregar 

* DELETE - elimina

# Configurando peticiones Fetch



# Recursos


https://jsonplaceholder.typicode.com/posts/1

[mockar](https://www.mockaroo.com/) generar info random

[gist](https://gist.github.com/)
￼
￼
￼￼
￼￼
￼￼
￼￼
￼￼
￼￼
￼
￼
￼
