<template>
    <Page ref="login_page" id="login_page" :class="page_classes" actionBarHidden="true" backgroundUnderStatusBar="true">
        <StackLayout>
            <Image src="~/images/orange_picto_logo.png" stretch="none" class="logo"/>
            <Label class="main-label" text="Archibald Terrain" color="black"></Label>
            <GridLayout ref="login_form" class="form-controls" rows="auto, auto">
                <!--<TextField-->
                <!--hint="Email Address"-->
                <!--keyboardType="email"-->
                <!--returnKeyType="next"-->
                <!--@returnPress="focusPassword()"-->
                <!--v-model="user.email"-->
                <!--:iEnabled="!isAuthenticating"-->
                <!--autocorrect="false"-->
                <!--autocapitalizationType="none"-->
                <!--:class="{ light: !isLoggingIn}"-->
                <!--row="0"></TextField>-->
                <!--<ActivityIndicator :busy="isAuthenticating" rowSpan="2"></ActivityIndicator>-->
            </GridLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as platform_module from 'tns-core-modules/platform'

    export default {
        data() {
            return {}
        },
        computed: {
            page_classes: () => {
                return {
                    // add top class so we can apply styles to specific platforms
                    'platform-ios': platform_module.isIOS,
                    'platform-android': platform_module.isAndroid
                }
            }
        },
        methods: {
            focusPassword() {
                this.$refs.password.nativeView.focus();
            },
        }

    }
</script>

<style lang="scss">
    #login_page {
        .logo,
        .main-label,
        Button,
        TextField {
            horizontal-align: center;
        }
    }
</style>