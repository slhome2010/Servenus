<footer class="footer">
			<div class="container">
                <?php if ($doc) { ?>
				<ul class="footer-links">
					<li>
						<?php echo $version;?>
					</li>
					<li class="muted">&middot;</li>
					<li>
						<?php echo $copyright;?>
					</li>
					<li class="muted">&middot;</li>
					<li>Демо:<a class="link_orange" target="_blanc" href="http://demo.radiocity.kz/admin"><span class="txt_orange"> http://demo.radiocity.kz/admin (demo/demo)</span></a></li>
					<li class="muted">&middot;</li>
					<li>Для покупки:</li>
					<li><a class="link_orange" target="_blanc" href="https://opencartforum.com/"><span class="txt_orange">Opencartforum.com</span></a></li>
					<li class="muted">&middot;</li>
					<li><a class="link_orange" target="_blanc" href="https://liveopencart.ru"><span class="txt_orange">Liveopencart.ru</span></a></li>
					<li class="muted">&middot;</li>
					<li><a class="link_orange" href="payment.html"><span class="txt_orange">
								<?php echo $right_here;?></span></a></li>
                </ul>
                <?php } else { ?>
                    <ul class="footer-links">					
					    <li><?php echo $copyright;?> All rights reserved.</li>
				    </ul>
                <?php } ?>    
			</div>
		</footer>
		</footer>
		<script src="/js/jquery/jquery-2.1.1.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/lightgallery-all.min.js"></script>
		<script src="/js/main.js"></script>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
			(function (d, w, c) {
				(w[c] = w[c] || []).push(function () {
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
					f = function () {
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