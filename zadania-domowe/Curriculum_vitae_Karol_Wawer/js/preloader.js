$(window).on('load', function() { // Czekamy na załadowanie całej zawartości strony
				$("#preloader #image").fadeOut(); // Usuwamy grafikę ładowania
				$("#preloader").delay(700).fadeOut("slow"); // Usuwamy diva przysłaniającego stronę
			});