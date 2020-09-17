<footer class="blog-footer">
	<div class="container text-muted">
		<?php if ($doc) { ?>
			<div class="row">
				<div class="col-6">
					Demo:<a class="link_orange" target="_blanc" href="http://demo.radiocity.kz/admin"><span class="txt_orange"> http://demo.radiocity.kz/admin (demo/demo)</span></a>
				</div>
				<div class="col-6">
					Partner stores:
					<a class="link_orange" target="_blanc" href="https://opencartforum.com/files/file/3213-attributco-opencart-atributy-eto-legko/"><span class="txt_orange">Opencartforum.com</span></a>,
					<a class="link_orange" target="_blanc" href="https://liveopencart.ru/opencart-moduli-shablony/moduli/filtryi/attribut-co-opencart-atributyi-eto-legko"><span class="txt_orange">Liveopencart.ru</span></a>
				</div>
			</div>
			<div class="mt-3">
				<?php echo $copyright; ?> All rights reserved.
			</div>
		<?php } else { ?>
			<div>
				<?php echo $copyright; ?> All rights reserved.
			</div>
		<?php } ?>
	</div>
</footer>
<!-- <script src="/js/jquery-3.4.1.slim.min.js"></script> -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<!-- <script src="/js/bootstrap.min.js"></script> -->
<script src="/js/lightgallery-all.min.js"></script>
<script src="/js/jquery.justifiedGallery.min.js"></script>
<script src="/js/main.js"></script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
	(function(d, w, c) {
		(w[c] = w[c] || []).push(function() {
			try {
				w.yaCounter40630080 = new Ya.Metrika({
					id: 40630080,
					clickmap: true,
					trackLinks: true,
					accurateTrackBounce: true,
					webvisor: true
				});
			} catch (e) {}
		});

		var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script"),
			f = function() {
				n.parentNode.insertBefore(s, n);
			};
		s.type = "text/javascript";
		s.async = true;
		s.src = "https://mc.yandex.ru/metrika/watch.js";

		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else {
			f();
		}
	})(document, window, "yandex_metrika_callbacks");
</script>
<noscript>
	<div><img src="https://mc.yandex.ru/watch/40630080" style="position:absolute; left:-9999px;" alt="" /></div>
</noscript>
<!-- /Yandex.Metrika counter -->
</body>

</html>