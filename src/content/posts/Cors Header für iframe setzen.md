---
title: 'Cors Header für iframe setzen'
pubDate: 2022-07-01
description: 'Cors Header für iframe setzen'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress"]
---
```php
//############################ CORS-Header setzen ######################################
add_action( 'send_headers', 'add_header_xua' );
function add_header_xua() {
    header( 'Content-Security-Policy: frame-ancestors https://ec.dr-rausch-ulm.de/ https://www.dr-rausch-ulm.de/' );

}

add_action('wp_head', 'iframe_load_setup');
function iframe_load_setup() {

    remove_action( 'login_init', 'send_frame_options_header', 10, 0 );

}
``` 
