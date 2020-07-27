<script>
			var l = function(position) {
			var	lat = position.coords.latitude,
				long = position.coords.logitude,
				coords = lat + ',' + long;

				document.getElementById('geo_google_map').setAttribute('src', 'https://maps.google.co.uk/q=' + coords + '& 'z=50&output=embed
					);
			}

			document.getElementById('find_location').onclick = function() {
				navigator.geolocation.getCurrentPosition(l);
				return false;
			}

</script>