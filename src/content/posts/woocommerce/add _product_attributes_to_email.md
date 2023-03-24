---

title: 'Add  product attributes to email'
pubDate: 2022-07-01
description: 'Add  product attributes to email'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress", "woocommerce"]
---
```php  
add_action('woocommerce_order_item_meta_end', 'add_product_attributes_to_email', 10, 2);  
  
function add_product_attributes_to_email($item_id, $item)  
{  
  
	$produktDaten = array('pa_hersteller', 'pa_material', 'pa_legierung', 'pa_ringgroesse', 'pa_steinbesatz');  
	$productId = $item->get_product_id();  
	//$productId = $item->get_product_id();  
	$product = wc_get_product($productId);  
	if ($product->is_type('simple')) {  
		echo "<ul class='wc-item-meta'>";  
		foreach ($produktDaten as $taxonomy) {  
			$value = $product->get_attribute($taxonomy);  
			if ($value) {  
			$label = wc_attribute_label($taxonomy);  
			echo "<li><strong> $label :</strong>$value</li><br/>";  
			}  
		}  
	echo "</ul>";  
	}  
//Für Vorschau der Emails in den Bestellungen auskommentieren  
//exit;  
}  
```
