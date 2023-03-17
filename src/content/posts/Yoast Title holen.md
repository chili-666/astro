---
title: 'Yoast Title holen'
pubDate: 2022-07-01
description: 'Yoast Title holen'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress"]
---

```php
    function get_post_title( WP_Post $post ): string {
        $yoast_title = get_post_meta( $post->ID, '_yoast_wpseo_title', true );
        if ( empty( $yoast_title ) ) {
            $wpseo_titles = get_option( 'wpseo_titles', [] );
            $yoast_title  = isset( $wpseo_titles[ 'title-' . $post->post_type ] ) ? $wpseo_titles[ 'title-' . $post->post_type ] : get_the_title();
        }

        return wpseo_replace_vars( $yoast_title, $post );
    }
``` 
