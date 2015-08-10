ryuScroll
=======

----------
***English***

> This plugin help you to control information that will be displayed in your site. 

----------

***Português***

> Este plugin te auxiliará na quantidade que será apresentada de um determinado assunto ou conforme a sua necessidade.

> Utilizando esse plugin a sua página poderá carregar com maior rapidez, pois inicialmente a quantidade de informações será menor e novas informação serão adicionados conforme a necessidade e conforme você programou.

> Podemos utilizar esse plugin para apresentar um menu de lista que on inves de carregar a toda a lista de uma vez, podemos fatiar em partes e conforme a necessidade novos itens serão carregados. Dessa forma a respeita apresentado ao cliente será mais rápida e menos estressante.

> Esse mecanismo de carregar ao poucos seria semelhantes a paginação. No entanto a diferença neste caso em relação a paginação é que o cliente não
necessitar no botão *próximo* ou *anterior* para ver outros produtos, basta continuar navegando que novos itens serão apresentados.

> Para configurar este plugin você deve realizar da seguinte maneira.

>	$(element).ryuScroll(options);

>	Dentro do parametro options podemos informar os seguintes itens:

>	**gap**	- [Númerico]

>	Quando que o plugin deverá trazer novos itens.

>	**nextAjax**	[Booleano]

>	Determina se o plugin deve ou não adicionar novos itens quando o parametro **gap** for acionado

>	**ajax**	[Objeto]

>	Deve ser um objeto cujos parametros seguem o **$.ajax()**

>	**events**	[Objeto]

>		**beforeajax**	[Função]

>		Este parametro deverá ser uma função a que será executada sempre antes do ajax ser executado. O que esta função irá realizar fica apto a você.

>		**afterajax**	[Função]

>		Este parametro deverá ser uma função a que será executada sempre depois do ajax ser executado. O que esta função irá realizar fica apto a você.

>		**reachedbottom**	[Função]

>		Este parametro deverá ser uma função a que será executada sempre o scroll alcançar o **chão** do elemento. O que esta função irá realizar fica apto a você.

>		**reachedtop**	[Função]

>		Este parametro deverá ser uma função a que será executada sempre o scroll alcançar o **topo** do elemento. O que esta função irá realizar fica apto a você.

>		**callback**	[Função]

>		Este parametro deverá ser uma função a que será executada entre o **beforeajax** e o **afterajax**. Esta função será chamada quando o ajax for finalizado com sucesso retornado o resultado vindo do ajax

>		**failure**	[Função]

>		Este parametro deverá ser uma função a que será executada entre o **beforeajax** e o **afterajax**. Esta função será chamada quando o ajax for finalizado sem sucesso retornado o resultado vindo do ajax

>	**config**

>		**debug**	[Booleano]

>		Quando for true, algumas etapas no processo do plugin será apresentado no console do browser. Isso ajudará quando houver necessidade de debugar o plugin quando houve um erro inesperado.

>		**addlog**	[Booleano]

>		Quando for true, **debug** obrigatoriamente será **true** apenas adiciona um log ao browser.

>	})