<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    /* CSS Document */
    body {
        height: 100%;
    }

    html {
        font-size: 62.5%;
        height: 100%;
        color: #000;
        background: #FFF;
    }

    body {
        font-family: "Microsoft YaHei" !important;
        margin: 0;
        padding: 0;
    }

    div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
        margin: 0;
        padding: 0;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    fieldset, img {
        border: 0;
    }

    address, caption, cite, code, dfn, em, strong, th, var {
        font-style: normal;
        font-weight: normal;
    }

    ol, ul {
        list-style: none;
    }

    caption, th {
        text-align: left;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: normal;
    }

    q {
        &:before, &:after {
            content: '';
        }
    }

    abbr, acronym {
        border: 0;
    }

    a {
        cursor: pointer;
        &:hover {
            text-decoration: none !important;
        }
    }

    .clear {
        clear: both;
    }

    #app {
        font-family: '微软雅黑';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100%;
    }

    .mint-search {
        height: auto!important;
    }

    .mint-cell {
        background: none!important;
        border: none;
    }
    .mint-radiolist{
        margin-top: 0.4rem;
    }
    .mint-cell:last-child{
        background-image: none!important;
    }
    .mint-cell-wrapper {
        padding: 0;
        border: none;
        background-image: none!important;
    }

    .PollutionTypes {
        .mint-radiolist-label {
            padding: 0 20px;
        }
        .mint-cell-wrapper {
            text-align: left;
            font-size: 18px;
        }
    }
    .FormOne, .FormTowo {
        .mint-cell-title {
            text-align: left;
            .mint-cell-text {
                margin-left: 18px;
            }
        }
        .wurantypes {
            strong {
                display: inline-block;
                float: left;
                text-align: left;
                margin-left: 18px;
            }
        }
    }
</style>
