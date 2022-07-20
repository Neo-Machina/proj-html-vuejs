<template>
    <section>
        <div class="container">
            <div class="row">
                <!-- first-col -->
                <div class="col col-5 right-col">
                    <div class="text_before_title">book store online</div>

                    <h2>be alpha with <span>wingsman's book</span></h2>

                    <ul>
                        <li>
                            <span class="check_icon"><font-awesome-icon icon="fa-solid fa-check" /></span>
                            <span class="list_item_text">Help you understand yourself better</span>
                        </li>
                        <li>
                            <span class="check_icon"><font-awesome-icon icon="fa-solid fa-check" /></span>
                            <span class="list_item_text">Reavealing mature tips</span>
                        </li>
                        <li>
                            <span class="check_icon"><font-awesome-icon icon="fa-solid fa-check" /></span>
                            <span class="list_item_text">Give the right advice</span>
                        </li>
                        <li>
                            <span class="check_icon"><font-awesome-icon icon="fa-solid fa-check" /></span>
                            <span class="list_item_text">Fascinating examples of alpha man</span>
                        </li>
                    </ul>

                    <button class="my_green_btn">
                        <span>get free ebook</span>
                    </button>
                </div>

                <!-- second-col -->
                <div class="col left-col">
                    <div class="row small-row">
                        <!-- first-small-col -->
                        <div class="col text-center">                        
                            <div>
                                <img src="../assets/images/product-book-11-400x400.jpg" alt="book">
                            </div>

                            <div class="info_book">
                                <h4>Alpha man by Maxcoach</h4>

                                <div class="book_price">
                                    <span>&dollar;29</span>.00
                                </div>
                            </div>  

                            <!-- icon-book-store -->
                            <div class="icon_selectors">   
                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </div>

                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                                </div>

                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-regular fa-heart" />
                                </div>

                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-solid fa-signal" />
                                </div>
                            </div>
                        </div>

                        <!-- second-small-call -->
                        <div class="col text-center">                        
                            <div>
                                <img src="../assets/images/product-book-10-400x400.jpg" alt="book">
                            </div>

                            <div class="info_book">
                                <h4>Real man 4.0 by MaxCoach</h4>

                                <div class="book_price">
                                    <span>&dollar;39</span>.00
                                </div>
                            </div>  

                            <!-- icon-book-store -->
                            <div class="icon_selectors">   
                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </div>

                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                                </div>

                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-regular fa-heart" />
                                </div>

                                <div class="circle_icon">
                                    <font-awesome-icon icon="fa-solid fa-signal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BookStoreComponent'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

section {
    padding: 85px 0 20px;
    .container {
        // first-big-row
        .row {
            // right-col
            .right-col {
                .text_before_title {
                    text-transform: $text_uppercase;
                    font-size: $main_font_size;
                }

                h2 {
                    text-transform: $text_capitalize;
                    font-family: $new_roman_font;
                    padding: 15px 45px 20px 0;

                    span {
                        color: $green_color_text;
                    }
                }

                // list-book-helps
                ul {
                    padding-bottom: 12px;

                    li {
                        font-size: $main_font_size;
                        color: $green_color_text;
                        line-height: 2;


                        .check_icon {
                            vertical-align: middle;
                        }

                        .list_item_text {
                            color: $grey_color_text;
                            margin-left: 10px
                        };
                    }
                }

                // button
                .my_green_btn {
                    padding: 10px 42px;
                }
            }

            // left-col
            .left-col {
                // second-small-row
                .small-row {
                    --bs-gutter-x: 1.2rem;

                    .col {
                        position: relative;

                        &:hover {
                            .icon_selectors {
                                display: block;
                            }
                        }

                        img {
                            width: 257px;
                            margin: 0 auto;
                        }

                        .info_book {
                            padding-top: 20px;

                            h4 {
                                font-size: 16px;
                            }

                            .book_price {
                                color: $green_color_text;
                                font-weight: bold;
                                font-family: $quicksand_font;
                                
                                span {
                                    font-size: 19px;
                                }
                            }
                        }
                        
                        // icon-book-store
                        .icon_selectors {
                            position: absolute;
                            top: 130px;
                            right: 30px;
                            transform: translate( -50%, -50%);
                            display: none;

                            .circle_icon {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                font-size: 10px;
                                background-color: white;
                                margin-bottom: 7px;
                            }
                        }
                    }
                }
            }
        }
    }
}


</style>