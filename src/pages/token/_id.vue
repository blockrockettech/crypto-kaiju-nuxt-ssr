<template>
  <div class="container">
    <h2>&nbsp;</h2>

    <div class="row mt-5">
      <div class="col text-center">
        <code v-if="loading">Looking for Kaijus...</code>
      </div>
    </div>

    <!--<div class="row text-center">-->
    <!--<div class="card-deck mx-auto">-->
    <!--<card :cdata="kaijus" class="m-2"></card>-->
    <!--</div>-->
    <!--</div>-->

    <h3 v-if="opensea">Details</h3>

    <div class="row" v-if="opensea">


      <div class="col text-center">
        <img :src="opensea.image_url" class="img-fluid" style="max-height: 300px"/>
      </div>

      <div class="col">
        <h4>{{opensea.name}}</h4>
        <h6>{{opensea.description}}</h6>
        <p>
          <img :src="opensea.owner.profile_img_url" class="rounded-circle" style="max-height: 25px"/>
          <strong v-if="opensea.owner.user && opensea.owner.user.username">{{opensea.owner.user.username}}</strong>
          <clickable-address class="text-muted" :eth-address="opensea.owner.address"></clickable-address>
        </p>
        <p>
          View on <a :href="opensea.permalink" target="_blank">OpenSea</a>
        </p>
        <p>
          <social-sharing :url="'https://cryptokaiju.io/token/' + opensea.token_id"
                          title="CryptoKaiju - Ethereum Powered Vinyl Kaiju Toys | Non Fungible Sofubi"
                          :description="opensea.name + ' - ' + opensea.description"
                          quote="CryptoKaiju are Adding Even More Fun to Non Fungible Tokens With our Range of Highly Collectible Soft Vinyl Kaiju Toys. Each is Individual & Backed by an ERC-721 Token. Find out More & Shop Online Today"
                          hashtags="cryptokaiju,bitcoin,ethereum,erc721,sofubi,vinyltoys"
                          twitter-user="cryptokaijuio"
                          v-cloak inline-template>
            <div>
              <network network="facebook">
                <i class="fa fa-fw fa-facebook hand-pointer"></i>
              </network>
              <network network="linkedin">
                <i class="fa fa-fw fa-linkedin hand-pointer"></i>
              </network>
              <network network="pinterest">
                <i class="fa fa-fw fa-pinterest hand-pointer"></i>
              </network>
              <network network="reddit">
                <i class="fa fa-fw fa-reddit hand-pointer"></i>
              </network>
              <network network="twitter">
                <i class="fa fa-fw fa-twitter hand-pointer"></i>
              </network>
              <network network="weibo">
                <i class="fa fa-weibo hand-pointer"></i>
              </network>
            </div>
          </social-sharing>

        </p>
      </div>

    </div>

    <h3 v-if="opensea">Traits</h3>

    <div class="row" v-if="opensea">
      <div class="col-md-3 col-sm-3" v-for="trait in opensea.traits" :key="trait.value">
        <div class="alert alert-info text-center border-dark" role="alert">
          <div class="text-muted">{{trait.trait_type | uppercase}}</div>
          <div class="font-weight-bold">{{trait.value}}</div>
          <!--<div>{{trait.trait_count}}</div>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import Card from '~/components/Card';
  import cryptoKaijusApiService from '~/servcies/CryptoKaijusApiService';
  import ClickableAddress from "~/components/ClickableAddress";

  export default {
    layout: 'default',
    name: 'token',
    components: {ClickableAddress, Card},
    data() {
      return {
        loading: false,
        kaijus: null,
        opensea: null,
      };
    },
    async asyncData({params}) {
      const openSeaData = await cryptoKaijusApiService.getOpenSeaDetials(1, params.id);
      return {openSeaData};
    },
    head() {
      return {
        title: `${this.openSeaData.name} - ${this.openSeaData.description}`,
        meta: [
          {
            hid: `title`,
            name: 'title',
            content: `${this.openSeaData.name} - ${this.openSeaData.description}`
          },
          {
            hid: `description`,
            name: 'description',
            content: `${this.openSeaData.name} - ${this.openSeaData.description}`
          },
          {
            hid: `image`,
            name: 'image',
            content: this.openSeaData.image_url
          },
          {
            hid: `og:title`,
            name: 'og:title',
            content: `${this.openSeaData.name} - ${this.openSeaData.description}`
          },
          {
            hid: `og:description`,
            name: 'og:description',
            content: `${this.openSeaData.name} - ${this.openSeaData.description}`
          },
          {
            hid: `og:image`,
            name: 'og:image',
            content: this.openSeaData.image_url
          },
          {
            hid: `og:url`,
            name: 'og:image',
            content: `http://dapp.cryptokaiju.io/${this.openSeaData.token_id}/`
          },
          {
            property: "twitter:card",
            content: "summary_large_image"
          },
          {
            property: "twitter:description",
            content: `${this.openSeaData.name} - ${this.openSeaData.description}`
          },
          {
            property: "twitter:title",
            content: `${this.openSeaData.name} - ${this.openSeaData.description}`
          }
        ]
      };
    },
    methods: {},
    created() {
      this.loading = true;
      cryptoKaijusApiService.getTokenDetails(this.$store.state.currentNetworkId, this.$route.params.id)
        .then((result) => {
          this.kaijus = result;
        })
        .finally(() => {
          this.loading = false;
        });

      cryptoKaijusApiService.getOpenSeaDetials(this.$store.state.currentNetworkId, this.$route.params.id)
        .then((result) => {
          this.opensea = result;
        });
    }
  };
</script>
<style lang="scss" scoped>

</style>
