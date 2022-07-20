<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src="../assets/images/client-logo-05-primary.png" alt="logo_client">
                </div>
                <div class="col">
                    <img src="../assets/images/client-logo-06-primary.png" alt="logo_client">
                </div>
                <div class="col">
                    <img src="../assets/images/client-logo-07-primary.png" alt="logo_client">
                </div>
                <div class="col">
                    <img src="../assets/images/client-logo-04-primary.png" alt="logo_client">
                </div>
                <div class="col">
                    <img src="../assets/images/client-logo-03-primary.png" alt="logo_client">
                </div>
                <div class="col">
                    <img src="../assets/images/client-logo-02-primary.png" alt="logo_client">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LogosComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

section {
    padding: 110px 0;

    .container {
        width: 59%;
        .row {
            --bs-gutter-x: 0;

            .col {
                img {
                    width: 100px;
                    height: 67px;
                    object-fit: scale-down;
                    filter: grayscale(0.8) invert(0) opacity(0.3);
                }
            }
        }
    }
}
</style>