---
title: 'Elementor Fonts nicht nachladen'
pubDate: 2022-07-01
description: 'Elementor Fonts nicht nachladen'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress", "astra", "elementor"]
---

```php
add_filter('astra_google_fonts_selected', '__return_empty_array');
add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );
``` 
