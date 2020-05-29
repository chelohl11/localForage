<template>
    <b-card
        :title="product.name"
        :img-src="product.picture"
        :img-alt="product.name"
        img-top
        style="max-width: 30rem;"
        class="mb-2"
        img-height="250"
        img-width="250"
    >
        <b-button
            block
            variant="warning"
            @click="$emit('addToCart', product)"
        >
            Add To Cart
        </b-button>
    </b-card>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object,
                required: true,
            }
        }
    }
</script>