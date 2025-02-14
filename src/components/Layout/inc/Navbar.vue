<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Menu01Icon,
  LocationShare01Icon,
  QuillWrite01Icon,
  UserStatusIcon,
  ShoppingCart01Icon,
  Cancel01Icon,
  ShoppingBasket01Icon,
  FavouriteIcon,
  Notification03Icon,
  MilkBottleIcon,
} from 'hugeicons-vue'

// Typescript types
import type { NavbarItem } from '@/schemas/schemas.ts'
const showSubmenu = ref(false)

const alcoholicsBeverages: NavbarItem[] = [
  {
    id: 1,
    icon: MilkBottleIcon,
    text: 'Tequila',
  },
  {
    id: 2,
    icon: MilkBottleIcon,
    text: 'Ron',
  },
  {
    id: 3,
    icon: MilkBottleIcon,
    text: 'Whisky',
  },
  {
    id: 4,
    icon: MilkBottleIcon,
    text: 'Vodka',
  },
  {
    id: 5,
    icon: MilkBottleIcon,
    text: 'Cerveza',
  },
  {
    id: 6,
    icon: MilkBottleIcon,
    text: 'Vino',
  },
  {
    id: 7,
    icon: MilkBottleIcon,
    text: 'Refrescos',
  },
  {
    id: 8,
    icon: MilkBottleIcon,
    text: 'Snacks',
  },
  {
    id: 9,
    icon: MilkBottleIcon,
    text: 'Aguas',
  },
]

const platformLinks: NavbarItem[] = [
  {
    id: 1,
    icon: ShoppingBasket01Icon,
    text: 'Mis compras',
  },
  {
    id: 2,
    icon: FavouriteIcon,
    text: 'Favoritos',
  },
  {
    id: 3,
    icon: Notification03Icon,
    text: 'Notificaciones',
  },
  {
    id: 4,
    icon: ShoppingCart01Icon,
    text: 'Carrito de compras',
  },
]

const toggleSubmenu = (): void => {
  showSubmenu.value = !showSubmenu.value
}

watch(showSubmenu, (newValue: boolean): void => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <!-- _____________________________________________ -->
  <!-- Mobile view -->
  <!-- _____________________________________________ -->
  <main :class="$style['mobile-container']">
    <nav :class="$style['nav-content']">
      <Menu01Icon
        v-if="!showSubmenu"
        width="23"
        height="23"
        color="white"
        cursor="pointer"
        v-on:click="toggleSubmenu"
      />

      <Cancel01Icon
        v-else
        width="23"
        height="23"
        color="white"
        cursor="pointer"
        v-on:click="toggleSubmenu"
      />

      <label :class="$style['nav-content__input-container']" for="search">
        <QuillWrite01Icon width="22" height="22" color="#1a1a32" />

        <input
          type="text"
          placeholder="Buscar producto"
          id="search"
          name="search"
          style="font-family: 'Inter', sans-serif"
        />
      </label>

      <ShoppingCart01Icon width="23" height="23" color="white" cursor="pointer" />
    </nav>

    <section :class="$style['sub-menu-container']" v-show="showSubmenu">
      <aside :class="$style['sub-menu-container__user-info']">
        <UserStatusIcon width="70" height="70" color="#1a1a32" />
        <p>
          <strong> Bienvenido, </strong> Ingresa con tu cuenta de google para poder ver tus compras,
          carrito de compras y favoritos.
        </p>
      </aside>

      <aside :class="$style['sub-menu-container__login-button']">
        <button type="button">Ingresar</button>
      </aside>

      <aside :class="$style['sub-menu-container__alcoholics-beverages-list']">
        <div
          v-for="item in alcoholicsBeverages"
          :class="$style['sub-menu-container__alcoholics-beverages-list__detail']"
          v-bind:key="item.id"
        >
          <img src="@/assets/images/alcoholic-beverage-icon.png" width="28" />
          <!-- <component v-bind:is="item.icon" width="20" color="#1a1a32" /> -->
          <p>{{ item.text }}</p>
        </div>
      </aside>

      <aside :class="$style['sub-menu-container__platform-links']">
        <div
          v-for="item in platformLinks"
          :class="$style['sub-menu-container__platform-links__link']"
          v-bind:key="item.id"
        >
          <component v-bind:is="item.icon" width="20" color="#1a1a32" />
          <p>{{ item.text }}</p>
        </div>
      </aside>
    </section>
  </main>

  <!-- _____________________________________________ -->
  <!-- Desktop view -->
  <!-- _____________________________________________ -->
  <main :class="$style['desktop-container']">
    <nav :class="$style['navigation-content-in-column1']">
      <router-link to="/">
        <img src="@/assets/images/primary-logo.png" width="150" />
      </router-link>

      <label :class="$style['navigation-content-in-column1__input-container']" for="search">
        <QuillWrite01Icon width="22" />

        <input
          type="text"
          placeholder="Buscar producto"
          id="search"
          name="search"
          style="font-family: 'Inter', sans-serif"
        />
      </label>

      <img src="@/assets/images/notice.png" width="100%" height="38" />
    </nav>

    <nav :class="$style['navigation-content-in-column2']">
      <aside :class="$style['navigation-content-in-column2__location-data']">
        <LocationShare01Icon width="30" height="30" color="#2f2f49" />
        <div>
          <p :class="$style['navigation-content-in-column2__location-data__user-name-location']">
            Send to Cristian
          </p>
          <p :class="$style['navigation-content-in-column2__location-data__address']">
            Kr 8E # 14-103
          </p>
        </div>
      </aside>

      <aside :class="$style['navigation-content-in-column2__alcoholics-beverages-list']">
        <div
          :style="
            item.id === 1
              ? 'border-left: 3.5px dashed #343434'
              : item?.id === 6
                ? 'border-right: 3.5px dashed #343434'
                : ''
          "
          v-for="item in alcoholicsBeverages"
          :class="$style['navigation-content-in-column2__alcoholic-beverage-list__detail']"
          v-bind:key="item.id"
        >
          <p>{{ item.text }}</p>
        </div>
      </aside>

      <aside :class="$style['navigation-content-in-column2__platform-links']">
        <Notification03Icon width="20" height="20" color="white" cursor="pointer" />
        <ShoppingBasket01Icon width="20" height="20" color="white" cursor="pointer" />

        <p>Mis compras</p>
        <p>Favoritos</p>
      </aside>
    </nav>
  </main>
</template>

<style module>
/* _____________________________________________ */
/* Mobile view */
/* _____________________________________________ */

.desktop-container {
  display: none;
}

.mobile-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.4);
}

.nav-content {
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  align-items: center;
  gap: 15px;
  background: #1a1a32;
  padding: 15.5px 15px;
}

.nav-content__input-container {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 6px 15px;
  background-color: white;
  border-radius: 17px;
}

.nav-content__input-container input {
  color: #1a1a32;
  padding-left: 10px;
  width: 100%;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-left: 1px solid #ccc;
  outline: none;
}

.sub-menu-container {
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-top: 1px solid #ccc;
}

.sub-menu-container__user-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 1px 20px;
}

.sub-menu-container__user-info p {
  font-size: 13px;
  color: #1a1a32;
}

.sub-menu-container__login-button {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
}

.sub-menu-container__login-button button {
  padding: 12px 0px;
  width: 100%;
  background: #1a1a32;
  font-size: 13px;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sub-menu-container__alcoholics-beverages-list {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 22px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 100%;
  max-height: 240px;
  overflow-y: auto;
  /* background: white; */
  border-top: 1px solid #e5dddd;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.2);
}

.sub-menu-container__alcoholics-beverages-list__detail {
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  gap: 10px;
  padding: 0px 20px;
  transition: background-color 0.2s;
}

.sub-menu-container__alcoholics-beverages-list__detail:hover {
  background-color: rgba(77, 77, 240, 0.1);
}

.sub-menu-container__platform-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  /* background: white; */
  border-top: 1px solid #e5dddd;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.2);
}

.sub-menu-container__platform-links__link {
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  gap: 10px;
  padding: 0px 20px;
  transition: background-color 0.2s;
}

.sub-menu-container__platform-links__link:hover {
  background-color: rgba(77, 77, 240, 0.1);
}

@media screen and (min-width: 1000px) {
  /* _____________________________________________ */
  /* Desktop view */
  /* _____________________________________________ */

  .mobile-container {
    display: none;
  }

  .desktop-container {
    display: block;
    padding: 21px 7%;
    position: relative;
    background: #1a1a32;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.3) !important;
  }

  .navigation-content-in-column1 {
    display: grid;
    grid-template-columns: 0.8fr 2fr 1.3fr;
    gap: 30px;
  }

  .navigation-content-in-column1__input-container {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 0px 15px;
    background-color: white;
    border-radius: 17px;
    height: 36px;
  }

  .navigation-content-in-column1__input-container input {
    color: #1a1a32;
    padding-left: 10px;
    width: 100%;
    border-right: none;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid #ccc;
    outline: none;
  }

  .navigation-content-in-column2 {
    display: grid;
    grid-template-columns: 0.8fr 2fr 1.3fr;
    gap: 30px;
  }

  .navigation-content-in-column2__location-data {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .navigation-content-in-column2__location-data__user-name-location {
    font-size: 12px;
    color: white;
    margin: 0px;
  }

  .navigation-content-in-column2__location-data__address {
    font-size: 12px;
    color: white;
    margin: 0px;
  }

  .navigation-content-in-column2__alcoholics-beverages-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .navigation-content-in-column2__alcoholic-beverage-list__detail {
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    border-right: 2px dashed #343434;
    border-left: 2px dashed #343434;
    padding: 0px 20px;
    transition: background-color 0.2s;
  }

  .navigation-content-in-column2__alcoholic-beverage-list__detail:hover {
    text-decoration: underline;
    transition: background-color 0.2s;
  }

  .navigation-content-in-column2__platform-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    align-items: center;
  }

  .navigation-content-in-column2__platform-links p {
    font-size: 12px;
    cursor: pointer;
    color: white;
  }

  .navigation-content-in-column2__platform-links p:hover {
    text-decoration: underline;
  }
}
</style>
