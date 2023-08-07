# **Libey - Enazul - Test**

**Prueba tecnica**
- El tiempo estimado de la prueba para el puesto de FullStack Junior sera de 3horas, podra tomar mas tiempo del estimado, pero se comparara el tiempo invertido adicional con el resultado de la prueba.
- El motivo de la prueba sera realizar un CRUD de la tabla LibeyUser, asi como una pantalla que sirva de lista y busqueda, ademas debera cargar informacion para cada choice requerido.
- Tanto el usuario como la cadena de conexion se encuentran en el API.
- Al finalizar la prueba se crear una rama con el nombre del postulante para su revision.

**BackEnd (LibeyTechnicalTestAPI)**
- Api
	Capa que sive como metodo de ingreso al dominio mediante controladores web.
- Dominio 
	La capa de dominio va a implementar la logica de negocio y dominio de la aplicacion agrupandos por agregados, la estructura de carptetas por agregado es la siguiente:
	- Aplicacion, tendra la logica de negocio por caso de uso.
	- Dominio, tendra la logica de dominio por entidad (Operaciones que muten a la entidad).
	- Infrastructura, tendra todo el codigo que sea externo al negocio, como frameworks de acceso a datos, o conexiones con la infrastructura
- Test (Opcional)
	El desarrollo de algun metodo de prueba es opcional, pero sumara puntos en la evaluacion
	
**FrontEnd (LibeyTechnicalTestWeb)**
- Angular
	El proyecto se encuentra en la version 13x, toda el codigo se realizara en la carpeta app del proyecto, implementando ruteo para cada componente.
- Node
	La version de node se encuentra en la 18.4.0

**DataBase (DataBase)**
- SQLServer	
	La base de datos se encuentra dockerizada, por lo que solo se necesitara crear la imagen e inicializar el contenedor en el computador local.