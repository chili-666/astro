---

title: 'list children of taxonomy'
pubDate: 2022-07-01
description: 'list children of taxonomy'
author: 'Astro Learner'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress", "shortcodes"]
---
```php
<?php
add_shortcode('ListeKinderVon', 'list_children_fo_taxonomy');
function list_children_fo_taxonomy($atts)
{
    $atts = shortcode_atts(array(
        'von' => 'beitraege',
        'taxonomy' => 'category'
    ), $atts, 'list_children_fo_taxonomy');

    $term = get_term_by('slug', $atts['von'], $atts['taxonomy']);

    $children = get_terms( $term->taxonomy, array(
        'parent'    => $term->term_id,
        'hide_empty' => false
    ) );

    ?>
    <h2>Kategorien</h2>
    <ul>
        <?php
        foreach ($children as $child) {
            $link = get_term_link($child->term_id, $child->taxonomy);
            ?>
            <li class="category-list"><a href="<?php echo $link; ?>"><?php echo $child->name;?></a></li>
            <?php
        }
        ?>

    </ul>
    <?php
}

``` 
