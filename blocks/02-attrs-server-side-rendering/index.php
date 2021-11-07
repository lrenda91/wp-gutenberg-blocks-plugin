<?php

/*
 * Registers the block reading from block.json file
 */
register_block_type(__DIR__, [
    'render_callback' => function ($attributes) {
        ob_start();
        ?>
        <h2>Hello. My awesome text is: "<?php echo $attributes['text']; ?>"</h2>
        <?php
        $value = ob_get_contents();
        ob_end_clean();
        return $value;
    }
]);