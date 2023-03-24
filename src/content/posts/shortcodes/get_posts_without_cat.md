---

title: 'Get Posts Without Cat'
pubDate: 2022-07-01
description: 'Get Posts Without Cat'
author: 'Astro Learner'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress", "shortcodes"]
---
```php
add_shortcode('PostsOhne', 'get_posts_without_cat');
function get_posts_without_cat($atts)
{
    $atts = shortcode_atts(array(
        'kategorie' => '',
        'anzahl' => 9
    ), $atts, 'get_latest_post_from_cat');

    $args = array(
        'numberposts' => $atts['anzahl'],
        'order' => 'DESC',
        'orderby' => 'date',
    );

    if (!empty($atts['kategorie'])) {
        if (strpos($atts['kategorie'], ',') > 0) {
            $kategorien = explode(',', $atts['kategorien']);
            $args['tax_query'] = array();
            foreach ($kategorien as $kategorie) {
                $push =  array(
                    'taxonomy' => 'category',
                    'field' => 'name',
                    'terms' => $kategorie,
                    'operator' => 'NOT IN'
                );
                array_push($args['tax_query'], $push);
            }


        } else {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'category',
                    'field' => 'name',
                    'terms' => $atts['kategorie'],
                    'operator' => 'NOT IN'
                )
            );
        }

    }

    $posts = get_posts($args);

    ob_start();
    ?>
    <div class="row row-cols-lg-3 g-4">
        <?php
        foreach ($posts as $key=>$post) {
            $terms = get_the_terms($post->ID, 'category');
            $link = get_permalink($post->ID);
            $image = get_the_post_thumbnail_url($post->ID, 'full');
            $date = date('d.m.Y', strtotime($post->post_date));
        ?>
            <div class="post">
                <a class="post-link" href="<?php echo $link;?>">
                    <div class="h-100 p-4" style="background-image: url('<?php echo $image;?>');">
                        <div class="d-flex flex-row justify-content-end">
                            <div><?php echo $date; ?></div>
                            <div class="post-button"></div>
                        </div>
                        <div class="d-flex flex-column justify-content-start align-bottom">
                            <div class="kategorie">
                                <?php
                                foreach ($terms as $term) {
                                    echo $term->name . " ";
                                }
                                ?>
                            </div>
                            <h4 class="post-title">
                                <?php echo $post->post_title;?>
                            </h4>
                            <div class="post-content">
                                <?php echo wp_trim_words($post->post_content, 20, '...'); ?>
                            </div>
                        </div>
                    </div>
                </a><
            </div>
        <?php
        }
        ?>
    </div>


    <?php
    return ob_get_clean();
}

```