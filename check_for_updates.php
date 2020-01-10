<?php

$responce = array(
	'lastversion' => 'v3.0.7',
	'news' => '<h4>Есть обновления!</h4> 
				<p class="lead">Версия 3.0.7.</p>
				<ul>
					<li>Контекстное меню и управление настройками теперь есть в каждом дереве, включая "Инстументы";</li>
					<li>Появилаь первая функция в стандартизации атрибутов. Теперь можно клонировать атрибуты одного языка в другой;</li>				
				</ul>',
	'well' => '<p class="lead">Вы используете последнюю версию модуля <span> Attribut<b style="color: #2199C7;">&</b>co</span> !</p>',
	'links' => '<div class="form-group">
					<h4>Обновления будут доступны по следующим ссылкам:</h4> 
					<ul class="list-group">											
						<li class="list-group-item"><a class="link" target="_blanc" href="https://opencartforum.com/files/file/3213-attributco-opencart-atributy-eto-legko/"><span class="txt_orange">Opencartforum.com</span></a></li>								   
						<li class="list-group-item"><a class="link" target="_blanc" href="https://liveopencart.ru/opencart-moduli-shablony/moduli/adminka/attribut-co-opencart-atributyi-eto-legko"><span class="txt_orange">Liveopencart.ru</span></a></li>								  
						<li class="list-group-item"><a class="link" target="_blanc" href="http://servenus.com/ru/attributico_download.html"><span class="txt_orange">Servenus.com</span></a> (Архив версий)</li>
					</ul>								
				</div>',
	'copyright' => '<strong>Документация:</strong> <a href="http://servenus.com/ru/doc_attributico_ru.html">servenus.com/ru/doc_attributico_ru.html</a><br/>
					<p>Copyright &copy; 2016-2018&nbsp; Servenus</p>',
);

echo json_encode($responce);