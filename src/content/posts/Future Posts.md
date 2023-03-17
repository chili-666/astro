---
title: 'Future Posts'
pubDate: 2022-07-01
description: 'Future Posts'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress"]
---

```php
function onetarek_prevent_future_type( $post_data ) {
    if ( $post_data['post_status'] == 'future' && $post_data['post_type'] == 'post' )
    {
        $post_data['post_status'] = 'publish';
    }
    return $post_data;
}

add_filter('wp_insert_post_data', 'onetarek_prevent_future_type');
remove_action('future_post', '_future_post_hook');
``` 
### Tags
#php
#wordpress
[[wordpress]]