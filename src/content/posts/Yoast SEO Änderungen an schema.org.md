---
title: 'Yoast SEO Änderungen an schema.org'
pubDate: 2022-07-01
description: 'Yoast SEO Änderungen an schema.org'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress"]
---

https://developer.yoast.com/features/schema/api/

```php
add_filter('wpseo_schema_breadcrumblist', 'change_yoast_breadcrumb');

function  change_yoast_breadcrumb($data) {
    foreach ($data['itemListElement'] as $key=>$element) {

        $found = strpos($element['name'], "Privat: ");

        if ($found == 0) {

            $data['itemListElement'][$key]['name'] = str_replace("Privat: ", '', $element['name']);
        }
    }
    return $data;
}
``` 
