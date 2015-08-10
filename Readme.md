ryuScroll
=======

----------
***English***

> This plugin help you to control information that will be displayed in your site. 

> Comming Soon
----------

***Português***

> Este plugin te auxiliará na quantidade que será apresentada de um determinado assunto ou conforme a sua necessidade.

> Utilizando esse plugin a sua página poderá carregar com maior rapidez, pois inicialmente a quantidade de informações será menor e novas informação serão adicionados conforme a necessidade e conforme você programou.

> Podemos utilizar esse plugin para apresentar um menu de lista que on invés de carregar toda a lista de uma vez, podemos fatiar em partes e conforme a necessidade os demais serão carregados. Dessa forma a resposta apresentado ao cliente será mais rápida.

> Esse mecanismo de carregar ao poucos seria semelhantes a paginação. No entanto a diferença neste caso em relação a paginação é que o cliente não
necessitar no botão *próximo* ou *anterior* para ver outros produtos, basta continuar navegando que novos itens serão apresentados.

> Para configurar este plugin você deve realizar da seguinte maneira.

>	$(element).ryuScroll(options);

>	Dentro do parametro options podemos informar os seguintes itens:

>	**gap**	- [*Númerico*]	[Padrão: 100]

>	Quando que o plugin deverá trazer novos itens.

>	**nextAjax**	[*Booleano*]	[Padrão: true]

>	Determina se o plugin deve ou não adicionar novos itens quando o parametro **gap** for acionado

>	**ajax**	[*Objeto*]	[Obrigatório]

>	Deve ser um objeto cujos parametros seguem o **$.ajax()**

>	**events**	[*Objeto*]

>	**beforeajax**	[*Função*]	[Opcional]

>		  Este parametro deverá ser uma função a que será executada sempre antes do ajax. 

>     O que esta função irá realizar fica apto a você.

>	**afterajax**	[*Função*]	[Opcional]

>		  Este parametro deverá ser uma função que será executada sempre depois do ajax.

>     O que esta função irá realizar fica apto a você.

> **reachedbottom**	[*Função*]	[Opcional]

>		  Este parametro deverá ser uma função sendo executada sempre que o scroll alcançar o CHÃO.

>     O que esta função irá realizar fica apto a você.

>	**reachedtop**	[*Função*]	[Opcional]

>     Este parametro deverá ser uma função sendo executada sempre que o scroll alcançar o TOPO.

>     O que esta função irá realizar fica apto a você.

>	**callback**	[*Função*]	[Opcional]

>		  Este parametro deverá ser uma função que será executada entre o BEFOREAJAX e o AFTERAJAX.

>     Sendo chamada quando o ajax for finalizado com sucesso retornado o resultado vindo do ajax

> **failure**	[*Função*]	[Opcional]

>		  Este parametro deverá ser uma função que será executada entre o BEFOREAJAX e o AFTERAJAX.

>     Sendo chamada quando o ajax for finalizado sem sucesso retornado o resultado vindo do ajax

>	**config**	[*Objeto*]

>	**debug**	[*Booleano*]	[Opcional]

>	    Quando for true, algumas etapas no processo do plugin será apresentado no console do browser.

>     Isso ajudará quando houver necessidade de debugar o plugin quando houve um erro inesperado.

>	**addlog**	[*Booleano*]	[Opcional]

>     Quando for true, DEBUG obrigatoriamente será TRUE apenas adiciona um log ao browser.

>	**Exemplo**

>	  $('div').ryuScroll({

>	    ajax:{

>	      url:'getData.php',

>	      data:{

>	        start:10

>	      }

>	    },

>	    events:{

>	      afterajax: function( update, data ) {

>	        // Faça Algo

>	      },

>	      callback: function ( resp ){

>	          $.each(resp.data, function ( index, data ) {

>	              // Faça Algo

>	          })

>	      }

>	    }

>	  });
