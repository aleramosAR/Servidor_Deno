import { contentTypeFilter, createApp, serveStatic } from 'https://deno.land/x/servest@v1.3.1/mod.ts';
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react/index.js';
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server.js';

const app = createApp();
app.use(serveStatic("./public"));
const colores:string[] = [];

const getcolores = () => {
	if (colores.length > 0) {
		return (
			<ul>
				{colores.map((color, index) => {
					return (
						<li>
							<span style={{background: color}} key={`${color}_${index}`}>{color}</span>
						</li>
					)
				})}
			</ul>
		)
	} else {
		return <p className="nocolores">No hay colores cargados aún.</p>
	}
}

app.handle('/', async (req) => {
	await req.respond({
		status: 200,
		headers: new Headers({ 'content-type': 'text/html; charset=UTF-8' }),
		body: ReactDOMServer.renderToString(
			<html>
				<head>
					<meta charSet='utf-8' />
					<link rel='stylesheet' type='text/css' href='bootstrap.min.css' />
					<link rel='stylesheet' type='text/css' href='style.css' />
					<title>Servidor en Deno</title>
				</head>
				<body>
					<header className="navbar navbar-expand-lg navbar-light text-light bg-dark mb-5">
					<div className="container justify-content-between">
						<h1 className="navbar-brand h1 mb-0 text-light">Servidor en Deno</h1>
					</div>
					</header>
					<main className='container'>
						<div className='row justify-content-md-center'>
							<div className='col col-md-6'>
								<div className='card'>
									<div className='card-body'>
										<h5 className='card-title'>Ingresa un color</h5>
										<form action='/color' method='POST'>
											<div className='input-group mb-3'>
												<input className='form-control' type='text' name='color' id='color' />
												<div className='input-group-append'>
													<button className='btn btn-primary' type='submit'>Agregar</button>
												</div>
											</div>
											<div className='form-group'>
											<small className="text-muted">Ingresar nombres de colores en ingles (red, green, blue, etc.)</small>
											</div>
										</form>
									</div>
								</div>
								<div className='card colores'>
									<div className='card-body'>
										<h5 className='card-title'>Colores</h5>
										{getcolores()}
									</div>
								</div>
							</div>
						</div>
					</main>
				</body>
			</html>
		),
	});
});

app.post('/color', contentTypeFilter('application/x-www-form-urlencoded'),
	async (req) => {
		const bodyForm = await req.formData();
		const color = bodyForm.value('color');
		if (color) {
			colores.push(color);
		}
		await req.redirect('/');
	}
);

app.listen({ port: 8080 });
