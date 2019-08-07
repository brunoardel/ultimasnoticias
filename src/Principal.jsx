import React from 'react';
import Topo from './Componentes/Topo/Topo';
import Menu from './Componentes/Menu/Menu';
import Noticias from './Componentes/Noticias/Noticias';

export default function Principal(props) {
	const categorias = [
		{'url': 'general', 'nome': 'Geral'}, 
		{'url': 'technology', 'nome': 'Tecnologia'},
		{'url': 'health', 'nome': 'Saúde'},
		{'url': 'business', 'nome': 'Negócios'},
		{'url': 'entertainment', 'nome': 'Entretenimento'},
		{'url': 'sports', 'nome': 'Esportes'}
	];

	let categoriaAtiva = 'general';
	if(typeof props.match.params.categoria !== 'undefined'){
		categoriaAtiva = props.match.params.categoria;
	}

	return (
		<div className="container">
			<Topo titulo={'Últimas Notícias'} logo={'/logo.png'} />
			<Menu categorias={categorias} categoriaAtiva={categoriaAtiva} />
			<Noticias categoriaAtiva={categoriaAtiva} />
		</div>
	);
}



