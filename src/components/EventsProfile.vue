<template>
  <div class="topics-profile">
    <h3>Meus Eventos</h3>
    <q-scroll-area
      :bar-style="barStyle"
    >
      <q-list>
        <q-item
          v-for="event in $store.getters['events/getMyEvents']"
          :key="event.id"
          v-ripple
          clickable
          :style="{ 'border-color': $store.getters['categories/getCategoryById'](event.categoryId).color}"
          @click="openEvent(event.id)"
        >
          <q-item-section
            v-if="event.imageIds[0]"
            avatar
          >
            <q-avatar square>
              <img
                :src="`${$store.getters['services/getImagePath']}${event.imageIds[0]}`"
              >
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-white">
              {{ mask(event.title) }}
            </q-item-label>
            <q-item-label caption>
              {{ event.date }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  name: "EventsProfile",
  props: {},
  data() {
    return {
      barStyle: {
       right: "0",
        borderRadius: "4px",
        backgroundColor: "#fff",
        width: "4px",
        opacity: .8,
      },
    };
  },
  computed: {},
  methods: {
    mask(text) {
      const limit = 20;
      if (text.length > limit) return text.substring(0, limit) + "...";
      return text;
    },
    async openEvent(eventId) {
      this.$router.push({
        name: "Agenda",
        hash: `#${eventId}`
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

.topics-profile {
  @include profile-box;
  @include profile-scrolls;

  .q-scrollarea {
    height: 87px;
  }
}

</style>
