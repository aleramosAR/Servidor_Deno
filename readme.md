# Servidor en Deno
<br />

* #### Crear un servidor que utilice el módulo http servest y genere la vista con React render.

* #### Configurar denon para que, ante un cambio de código, el servidor de reinicie automáticamente.

* #### El servidor presentará en su ruta raíz un formulario de ingreso de un color, que será enviado al mismo por método post. Dicho color (en inglés) será incorporado a un array de colores persistido en memoria.

* #### Por debajo del formulario se deberán representar los colores recibidos en una lista desordenada (ul) utilizando el mismo color para la letra en cada caso. El color de fondo del la vista será negro.

* #### NOTA: El servidor deberá tener extensión tsx para el correcto funcionamiento de la sintaxis de vista de React en Typescript.

<br />
<hr />
<br />

El programa se carga con el script ```denon start```.

En el formulario se deben ingresar nombres de colores en ingles (red, green, blue, etc.).

El formulario hace un post enviando el color que se agrega a un array de colores.

El listado de abajo comprueba si hay o no colores, si el array esta vacio muestra un mensaje y en caso contrario muestra el contenido del listado.

Cada color tiene el fondo del color elegido, si no reconoce el texto muestra un fondo gris por defecto.