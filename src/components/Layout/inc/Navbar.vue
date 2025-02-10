<script setup lang="ts">
import { ref } from 'vue'
import {
  Home01Icon,
  Menu01Icon,
  LocationShare01Icon,
  // UserIcon,
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

const toggleSubmenu = () => {
  showSubmenu.value = !showSubmenu.value
}
</script>

<template>
  <!-- _____________________________________________ -->
  <!-- Mobile view -->
  <!-- _____________________________________________ -->
  <main :class="$style.mobileContainer">
    <nav :class="$style.navContent">
      <img :class="$style.firstLogo" src="@/assets/images/major-icon.png" width="45" />

      <label :class="$style.inputContainer" for="search">
        <Home01Icon width="22" />

        <input
          type="text"
          placeholder="Search"
          id="search"
          name="search"
          style="font-family: 'Inter', sans-serif"
        />
      </label>

      <Menu01Icon
        v-if="!showSubmenu"
        :class="$style.menuIcon"
        width="23"
        color="#1a1a32"
        cursor="pointer"
        v-on:click="toggleSubmenu"
      />
      <Cancel01Icon
        v-else
        :class="$style.menuIcon"
        width="23"
        color="#1a1a32"
        cursor="pointer"
        v-on:click="toggleSubmenu"
      />

      <ShoppingCart01Icon :class="$style.menuIcon" width="23" color="#1a1a32" cursor="pointer" />
    </nav>

    <aside :class="$style.subMenuContainer" v-show="showSubmenu">
      <div role="user-info">
        <UserStatusIcon width="70" height="70" color="#1a1a32" />
        <p>
          <span style="font-weight: bold">Bienvenido, </span> Ingresa con tu cuenta de google para
          poder ver tus compras, carrito de compras y favoritos.
        </p>
      </div>

      <div role="login-button">
        <button type="button">Ingresar</button>
      </div>

      <div role="alcoholics-beverages-list">
        <div
          v-for="item in alcoholicsBeverages"
          role="alcoholic-beverage-detail"
          v-bind:key="item.id"
        >
          <component v-bind:is="item.icon" width="20" color="#1a1a32" />
          <p>{{ item.text }}</p>
        </div>
      </div>

      <div role="platform-links">
        <div v-for="item in platformLinks" role="platform-link" v-bind:key="item.id">
          <component v-bind:is="item.icon" width="20" color="#1a1a32" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </aside>
  </main>

  <!-- _____________________________________________ -->
  <!-- Desktop view -->
  <!-- _____________________________________________ -->
  <main :class="$style.desktopContainer">
    <nav :class="$style.navigationContentInColumn1">
      <div>
        <img src="@/assets/images/primary-logo.png" width="150" />
      </div>

      <label :class="$style.inputContainer" for="search">
        <Home01Icon width="22" />

        <input
          type="text"
          placeholder="Search"
          id="search"
          name="search"
          style="font-family: 'Inter', sans-serif"
        />
      </label>

      <img src="@/assets/images/notice.png" width="100%" height="38" />
    </nav>

    <nav :class="$style.navigationContentInColumn2">
      <div role="location-data">
        <LocationShare01Icon width="30" height="30" color="#2f2f49" />
        <div>
          <p role="user-name-location">Send to Cristian</p>
          <p role="address">Kr 8E # 14-103</p>
        </div>
      </div>

      <div role="alcoholics-beverages-list">
        <div
          :style="
            item.id === 1
              ? 'border-left: 3.5px dashed #343434'
              : item?.id === 6
                ? 'border-right: 3.5px dashed #343434'
                : ''
          "
          v-for="item in alcoholicsBeverages"
          role="alcoholic-beverage-detail"
          v-bind:key="item.id"
        >
          <p>{{ item.text }}</p>
        </div>
      </div>

      <div role="platform-links">
        <Notification03Icon width="20" color="#1a1a32" cursor="pointer" />
        <ShoppingBasket01Icon width="20" color="#1a1a32" cursor="pointer" />
        <p style="font-size: 12px; cursor: pointer">Mis compras</p>
        <p style="font-size: 12px; cursor: pointer">Favoritos</p>
      </div>
    </nav>
  </main>
</template>

<style module>
/* Mobile view */

.desktopContainer {
  display: none;
}

.mobileContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffe600;
  padding: 15px 0px;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.4);
}

.navContent {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
}

.inputContainer {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 6px 15px;
  background-color: white;
  border-radius: 2px;
}

.inputContainer input {
  color: #1a1a32;
  padding-left: 10px;
  width: 100%;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-left: 1px solid #ccc;
  outline: none;
}

.subMenuContainer {
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-top: 1px solid #ccc;
}

.subMenuContainer div[role='user-info'] {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 1px 20px;
}

.subMenuContainer div[role='user-info'] p {
  font-size: 13px;
  color: #1a1a32;
}

.subMenuContainer div[role='login-button'] {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
}

.subMenuContainer div[role='login-button'] button {
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

.subMenuContainer div[role='alcoholics-beverages-list'] {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 22px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: white;
  border-top: 1px solid #e5dddd;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.2);
}

.subMenuContainer div[role='alcoholic-beverage-detail'] {
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  gap: 10px;
  padding: 0px 20px;
  transition: background-color 0.2s;
}

.subMenuContainer div[role='alcoholic-beverage-detail']:hover {
  background-color: rgba(77, 77, 240, 0.1);
}

.subMenuContainer div[role='platform-links'] {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: white;
  border-top: 1px solid #e5dddd;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.2);
}

.subMenuContainer div[role='platform-link'] {
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  gap: 10px;
  padding: 0px 20px;
  transition: background-color 0.2s;
}

.subMenuContainer div[role='platform-link']:hover {
  background-color: rgba(77, 77, 240, 0.1);
}

@media screen and (min-width: 800px) {
  /* Desktop view */

  .mobileContainer {
    display: none;
  }

  .desktopContainer {
    display: block;
    padding: 21px 7%;
    position: relative;
    background: #ffe600;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.3) !important;
  }

  .navigationContentInColumn1 {
    display: grid;
    grid-template-columns: 0.8fr 2fr 1.3fr;
    gap: 30px;
  }

  .inputContainer {
    height: 27px;
  }

  .navigationContentInColumn2 {
    display: grid;
    grid-template-columns: 0.8fr 2fr 1.3fr;
    gap: 30px;
  }

  .navigationContentInColumn2 div[role='location-data'] {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .navigationContentInColumn2 div[role='location-data'] p[role='user-name-location'] {
    font-size: 12px;
    color: #2f2f49;
    margin: 0px;
  }

  .navigationContentInColumn2 div[role='location-data'] p[role='address'] {
    font-size: 12px;
    color: #1a1a32;
    margin: 0px;
  }

  .navigationContentInColumn2 div[role='alcoholics-beverages-list'] {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .navigationContentInColumn2 div[role='alcoholic-beverage-detail'] {
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    color: #1a1a32;
    border-right: 2px dashed #343434;
    border-left: 2px dashed #343434;
    padding: 0px 20px;
    transition: background-color 0.2s;
  }

  .navigationContentInColumn2 div[role='alcoholic-beverage-detail']:hover {
    color: #58587d;
    transition: background-color 0.2s;
  }

  .navigationContentInColumn2 div[role='platform-links'] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    align-items: center;
  }
}
</style>
