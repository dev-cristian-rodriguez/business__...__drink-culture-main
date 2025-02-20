<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
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

const vueRouter = useRouter()

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
  // {
  //   id: 7,
  //   icon: MilkBottleIcon,
  //   text: 'Refrescos',
  // },
  // {
  //   id: 8,
  //   icon: MilkBottleIcon,
  //   text: 'Snacks',
  // },
  // {
  //   id: 9,
  //   icon: MilkBottleIcon,
  //   text: 'Aguas',
  // },
  // {
  //   id: 10,
  //   icon: MilkBottleIcon,
  //   text: 'Aguas',
  // },
  // {
  //   id: 11,
  //   icon: MilkBottleIcon,
  //   text: 'Aguas',
  // },
  // {
  //   id: 12,
  //   icon: MilkBottleIcon,
  //   text: 'Aguas',
  // },
]

const platformLinks: NavbarItem[] = [
  {
    id: 1,
    icon: ShoppingBasket01Icon,
    path: '/purchases',
    text: 'Mis compras',
  },
  {
    id: 2,
    icon: FavouriteIcon,
    path: '/favorites',
    text: 'Favoritos',
  },
  {
    id: 3,
    icon: Notification03Icon,
    path: undefined,
    text: 'Notificaciones',
  },
  {
    id: 4,
    icon: ShoppingCart01Icon,
    path: '/shopping-cart',
    text: 'Carrito de compras',
  },
]

const toggleSubmenu = (): void => {
  showSubmenu.value = !showSubmenu.value
}

watch(showSubmenu, (newValue: boolean): void => {
  if (newValue) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
})

const goTo = (url: string | null): void => {
  if (!url) return

  vueRouter.push(url)

  setTimeout(() => {
    showSubmenu.value = false
    document.body.style.overflowY = 'auto'
  }, 200)
}
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

        <input type="text" placeholder="Buscar producto" id="search" name="search" />
      </label>

      <ShoppingCart01Icon
        v-on:click="goTo('/shopping-cart')"
        width="23"
        height="23"
        color="white"
        cursor="pointer"
      />
    </nav>

    <section :class="$style['sub-menu-container']" v-show="showSubmenu">
      <aside :class="$style['sub-menu-container__user-info']">
        <UserStatusIcon width="70" height="70" color="#1a1a32" />
        <p>
          <strong> Bienvenido, </strong> Ingresa con tu cuenta de google para poder ver tus compras,
          carrito de compras y favoritos.
        </p>
      </aside>

      <aside v-on:click="goTo('/account')" :class="$style['sub-menu-container__account-button']">
        <button type="button">Ingresar</button>
      </aside>

      <aside :class="$style['sub-menu-container__alcoholics-beverages-list']">
        <div
          v-for="item in alcoholicsBeverages"
          v-on:click="goTo('/category/2')"
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
          v-on:click="goTo(item?.path || null)"
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
    <nav :class="$style['navigation-content']">
      <section :class="$style['navigation-content-column-1']">
        <router-link to="/">
          <img src="@/assets/images/primary-logo.png" width="150" />
        </router-link>

        <aside :class="$style['navigation-content-column-1__location-data']">
          <LocationShare01Icon width="30" height="30" color="white" />
          <div>
            <p :class="$style['navigation-content-column-1__location-data__user-name-location']">
              Send to Cristian
            </p>
            <p :class="$style['navigation-content-column-1__location-data__address']">
              Kr 8E # 14-103
            </p>
          </div>
        </aside>
      </section>

      <section :class="$style['navigation-content-column-2']">
        <label :class="$style['navigation-content-column-2__input-container']" for="search">
          <QuillWrite01Icon width="22" height="22" color="#1a1a32" />

          <input type="text" placeholder="Buscar producto" id="search" name="search" />
        </label>

        <aside :class="$style['navigation-content-column-2__alcoholics-beverages-list']">
          <div
            :style="
              item.id === 1
                ? 'border-left: 3.5px dashed #343434'
                : item?.id === alcoholicsBeverages.length
                  ? 'border-right: 3.5px dashed #343434'
                  : ''
            "
            v-for="item in alcoholicsBeverages"
            v-on:click="goTo('/category/2')"
            :class="$style['navigation-content-column-2__alcoholic-beverage-list__detail']"
            v-bind:key="item.id"
          >
            <p>{{ item.text }}</p>
          </div>
        </aside>
      </section>

      <section :class="$style['navigation-content-column-3']">
        <img src="@/assets/images/notice.png" width="100%" height="38" />

        <aside :class="$style['navigation-content-column-3__platform-links']">
          <div style="position: relative" v-on:click="goTo('/account')">
            <UserStatusIcon :class="$style['navigation-content-column-3__platform-links__icon']" />
            <p>Mi cuenta</p>
          </div>

          <div style="position: relative" v-on:click="goTo('/purchases')">
            <ShoppingBasket01Icon
              :class="$style['navigation-content-column-3__platform-links__icon']"
            />
            <p>Mis compras</p>
          </div>

          <div style="position: relative" v-on:click="goTo('/favorites')">
            <FavouriteIcon :class="$style['navigation-content-column-3__platform-links__icon']" />
            <p>Favoritos</p>
          </div>

          <div style="position: relative" v-on:click="goTo(null)">
            <Notification03Icon
              :class="$style['navigation-content-column-3__platform-links__icon']"
            />
            <p>Notificaciones</p>
          </div>

          <div style="position: relative" v-on:click="goTo('/shopping-cart')">
            <ShoppingCart01Icon
              :class="$style['navigation-content-column-3__platform-links__icon']"
            />
            <p>Carrito</p>
          </div>
        </aside>
      </section>
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
  z-index: 3;
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
  font-family: 'Inter', sans-serif;
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

.sub-menu-container__account-button {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
}

.sub-menu-container__account-button button {
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
  max-height: 240px;
  overflow-y: auto;
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
    padding: 21px 6%;
    position: relative;
    background: #1a1a32;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.3) !important;
  }

  .navigation-content {
    display: grid;
    justify-content: center;
    grid-template-columns: 15% 55% 25%;
    gap: 30px;
  }

  /* Column 1 */
  /* -------------------------------------------- */
  .navigation-content-column-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .navigation-content-column-1__location-data {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .navigation-content-column-1__location-data__user-name-location {
    font-size: 12px;
    color: white;
    margin: 0px;
  }

  .navigation-content-column-1__location-data__address {
    font-size: 12px;
    color: white;
    margin: 0px;
  }
  /* -------------------------------------------- */

  /* Column 2 */
  /* -------------------------------------------- */
  .navigation-content-column-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .navigation-content-column-2__input-container {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 0px 15px;
    background-color: white;
    border-radius: 17px;
    height: 36px;
  }

  .navigation-content-column-2__input-container input {
    color: #1a1a32;
    padding-left: 10px;
    width: 100%;
    border-right: none;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid #ccc;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  .navigation-content-column-2__alcoholics-beverages-list {
    display: flex;
    justify-content: center;
    /* background: red; */
    overflow-x: auto;
  }

  .navigation-content-column-2__alcoholic-beverage-list__detail {
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    border-right: 2px dashed #343434;
    border-left: 2px dashed #343434;
    padding: 0px 20px;
    transition: background-color 0.2s;
  }

  .navigation-content-column-2__alcoholic-beverage-list__detail:hover {
    text-decoration: underline;
    transition: background-color 0.2s;
  }
  /* -------------------------------------------- */

  /* Column 3 */
  /* -------------------------------------------- */

  .navigation-content-column-3 {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .navigation-content-column-3__platform-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    align-items: center;
  }

  .navigation-content-column-3__platform-links p {
    font-size: 12px;
    color: #1a1a32;
    position: absolute;
    white-space: nowrap;
    background: white;
    padding: 3px 7px;
    border-radius: 5px;
  }

  .navigation-content-column-3__platform-links__icon {
    cursor: pointer;
    width: 23;
    height: 23;
    color: white;
  }

  .navigation-content-column-3__platform-links__icon:hover ~ p {
    animation: showText 0.3s forwards;
  }

  .navigation-content-column-3__platform-links__icon:not(:hover) ~ p {
    animation: hideText 0.3s forwards;
  }
  /* -------------------------------------------- */

  @keyframes showText {
    0% {
      display: none;
      opacity: 0;
      transform: translateY(-5px);
    }

    100% {
      display: block;
      opacity: 1;
      transform: translateY(-15px);
    }
  }

  @keyframes hideText {
    0% {
      opacity: 1;
      transform: translateY(-15px);
    }

    100% {
      opacity: 0;
      transform: translateY(-5px);
    }
  }
}
</style>
